import {mergeSources} from './source-data.js?v=1';
import {readFilters,filterSearch,leaveVacancies} from './filter-state.js?v=2';
import {directionsFor, languageEvidence, jobLanguages, technicalRequirement} from './job-presentation.js?v=8';
const $ = (s) => document.querySelector(s);
const escapeHTML = (v) => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const e = escapeHTML;
const iconPaths = {
 brand:'<path d="m8 5-5 7 5 7m8-14 5 7-5 7m-2-16-4 20"/>',
 overview:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="4" rx="1.5"/><rect x="14" y="11" width="7" height="10" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/>',
 briefcase:'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3M3 12a24 24 0 0 0 18 0m-9 0v3"/>',
 layers:'<path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5"/>',
 chart:'<path d="M4 3v17h17M8 15v-4m5 4V7m5 8V4"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10h.01"/>',
 sparkles:'<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Zm7 0v4m-2-2h4"/>',
 arrow:'<path d="M6 18 18 6M7 6h11v11"/>',
 chevrons:'<path d="m9 8 3-3 3 3m-6 8 3 3 3-3"/>',
 globe:'<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
 search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
 moon:'<path d="M20.5 13a8.5 8.5 0 0 1-9.5-9.5A8.5 8.5 0 1 0 20.5 13Z"/>',
 download:'<path d="M12 3v12m-4-4 4 4 4-4M4 16v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4"/>',
 filter:'<path d="M4 7h16M7 12h10m-7 5h4"/><circle cx="8" cy="7" r="2" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="2" fill="currentColor" stroke="none"/>',
 scan:'<path d="M8 3H4a1 1 0 0 0-1 1v4m13-5h4a1 1 0 0 1 1 1v4M3 16v4a1 1 0 0 0 1 1h4m8 0h4a1 1 0 0 0 1-1v-4M7 12h10m-5-5v10"/>',
 building:'<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/>'
};
const icon = name => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name]||iconPaths.arrow}</svg>`;
const label = v => ({Unspecified:'Darajasi belgilanmagan',REMOTE:'Masofaviy',ON_SITE:'Ofisda',HYBRID:'Gibrid',FIELD_WORK:'Sayyor',required:'Talablar bo‘limi',preferred:'Afzallik',responsibility:'Vazifa',unspecified:'Kontekst aniqlanmagan',other:'Boshqa bo‘lim'}[v] || v);
const skillLabels = {'Test documentation':'Test hujjatlari','Test design':'Test dizayni','API testing':'API testing','Mobile testing':'Mobile testing','English':'Ingliz tili','Russian':'Rus tili','Uzbek':'O‘zbek tili'};
const skillName = s => skillLabels[s] || s;
let data;
let state = {view:location.hash.slice(1)||'overview',...readFilters(location.search),more:false};
let detailJob = null;
let previousFocus = null;
const pageInfo = {
 overview:['QA bozoridagi talablar','Vakansiyalar va ish beruvchilar so‘rayotgan ko‘nikmalar.'],
 vacancies:['QA vakansiyalari','Ish beruvchi talablarini ko‘ring va vakansiyalarni solishtiring.'],
 weekly:['Haftalik jamlanma','E’lonlar va talablar hafta kesimida.'],
 method:['Har bir raqamning manbasi bor.','Qamrov, hisoblash usuli va natijalarni to‘g‘ri talqin qilish.']
};
function dateFormat(value, long=false) {
 if(!value) return 'Sana ko‘rsatilmagan';
 const parts=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'numeric',year:'numeric',timeZone:'Asia/Tashkent'}).formatToParts(new Date(value)).map(p=>[p.type,p.value]));
 const months=long?['yanvar','fevral','mart','aprel','may','iyun','iyul','avgust','sentabr','oktabr','noyabr','dekabr']:['yan','fev','mar','apr','may','iyn','iyl','avg','sen','okt','noy','dek'];
 return `${parts.day}-${months[+parts.month-1]}${long?' '+parts.year:''}`;
}
function weekOf(value) {
 if(!value) return 'unknown';
 const parts = new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tashkent',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date(value));
 const p = Object.fromEntries(parts.map(x=>[x.type,x.value]));
 const d = new Date(Date.UTC(+p.year,+p.month-1,+p.day));
 d.setUTCDate(d.getUTCDate()+4-(d.getUTCDay()||7));
 const start = new Date(Date.UTC(d.getUTCFullYear(),0,1));
 return `${d.getUTCFullYear()}-W${String(Math.ceil((((d-start)/86400000)+1)/7)).padStart(2,'0')}`;
}
function weekLabel(key) {
 if(key==='unknown') return 'Sana yo‘q';
 const [year, n] = key.split('-W').map(Number);
 const jan4 = new Date(Date.UTC(year,0,4));
 const monday = new Date(jan4);
 monday.setUTCDate(jan4.getUTCDate()-(jan4.getUTCDay()||7)+1+(n-1)*7);
 const sunday = new Date(monday); sunday.setUTCDate(monday.getUTCDate()+6);
 return `${dateFormat(monday.toISOString())} – ${dateFormat(sunday.toISOString())}`;
}
function baseJobs() {
 return data.jobs.filter(j => j.archived!==true&&j.availability!=='unavailable'&&(state.source==='all'||j.source===state.source||(j.other_sources||[]).some(x=>x.source===state.source))&&(state.direction==='all'||directionsFor(j).includes(state.direction)) &&
   (state.grade==='all'||j.grades.includes(state.grade)) && (state.city==='all'||j.city===state.city) &&
   (state.format==='all'||(j.work_format_codes||[]).includes(state.format)) &&
   (state.week==='all'||weekOf(j.published_at)===state.week));
}
function searchedJobs() {
 const query = state.query.trim().toLocaleLowerCase();
 return baseJobs().filter(j=>!query||[j.title,j.company,j.description,...j.key_skills].join(' ').toLocaleLowerCase().includes(query));
}
function relevant(r) {
 return technicalRequirement(r) && (state.context==='mentioned'||(state.context==='requirements'?['required','preferred'].includes(r.kind):r.kind===state.context));
}
function ranking(jobs) {
 const map = new Map();
 for(const job of jobs) for(const skill of new Set(job.requirements.filter(relevant).map(r=>r.skill))) {
  if(!map.has(skill)) map.set(skill,[]);
  map.get(skill).push(job);
 }
 return [...map].map(([skill,jobs])=>({skill,jobs,count:jobs.length})).sort((a,b)=>b.count-a.count||a.skill.localeCompare(b.skill));
}
function pct(n,total) {return total?Math.round(n*100/total):0;}
function empty(title='Bu filtrlar bo‘yicha e’lon topilmadi.',text='Boshqa daraja yoki yo‘nalishni tanlang, yoki filtrlarni tozalang.') {
 return `<div class="empty"><strong>${e(title)}</strong>${e(text)}</div>`;
}
function directionNote(j){return !(j.directions||[]).some(x=>['Manual','Automation'].includes(x))?'Yo‘nalish yozilmagan; Manual guruhiga qo‘shilgan.':'';}
function sourceLabel(j){return j.source==='telegram'?'Telegram':'hh.uz';}
function sourceSummary(jobs){return [...new Set(jobs.map(sourceLabel))].join(' + ')||'hh.uz + Telegram';}
function statusNote(j){return j.archived===true?'Arxivlangan':j.availability==='unavailable'?'Hozir ochilmadi':j.status_checked_at?sourceLabel(j)+' sahifasi tekshirilgan: '+dateFormat(j.status_checked_at,true):'Joriy holat tekshirilmagan';}
function tags(j) {
 return [...directionsFor(j),...j.grades].filter(x=>x!=='Unspecified').map(t=>`<span title="${e(t==='Manual'?directionNote(j):'')}" class="tag ${t==='Manual'||t==='Intern'||t==='Junior'?'green':''}">${e(t)}</span>`).join('');
}
function languageBadges(j) {
 return jobLanguages(j).map(l=>`<abbr class="english-badge" title="${e(l.name)} talab yoki afzallik sifatida so‘ralgan" aria-label="${e(l.name)}">${l.code}</abbr>`).join('');
}
function languageNote(j) {
 const langs=jobLanguages(j);
 return langs.length?`<section class="language-note"><strong>Til talablari</strong>${langs.map(l=>`<p><b>${e(l.name)}:</b> ${[...new Set(languageEvidence(j,l.skill).map(r=>r.evidence))].map(e).join('<br>')}</p>`).join('')}</section>`:'';
}
function initials(company) { return company.replace(/^(ООО|АО|ИП|Гос\. корп\.)\s*/,'').replace(/[«»"()]/g,'').split(/\s+/).slice(0,2).map(s=>s[0]||'').join('').toUpperCase(); }
function row(job) {
 return `<article class="job-row"><div class="company-avatar" aria-hidden="true">${e(initials(job.company))}</div><div class="job-main"><button class="job-title" data-job="${e(job.id)}">${e(job.title)}</button>${languageBadges(job)}<div class="job-meta"><span>${e(job.company)}</span><span>·</span><span>${e(job.city)}</span></div></div><div class="job-tags">${tags(job)}</div><span class="job-date">${e(dateFormat(job.published_at))}</span></article>`;
}
function metric(title,value,unit,note,iconName) {
 return `<article class="metric"><div class="metric-top"><span>${e(title)}</span><span class="metric-icon" aria-hidden="true">${icon(iconName)}</span></div><div class="metric-value">${e(value)}<small>${e(unit)}</small></div><p>${e(note)}</p></article>`;
}
function renderOverview(jobs) {
 const ranked = ranking(jobs);
 const skills = new Set(jobs.flatMap(j=>j.requirements.filter(relevant).map(r=>r.skill)));
 const currentWeek = weekOf(new Date().toISOString());
 const newThisWeek = jobs.filter(j=>weekOf(j.published_at)===currentWeek).length;
 $('#sample-label').textContent=`${jobs.length} TA E’LON · ${sourceSummary(jobs)}`;
 $('#metrics').innerHTML = metric('QA vakansiyalari',jobs.length,'ta','Tanlangan filtrlar bo‘yicha','briefcase')+
   metric('Shu haftada chiqqan',newThisWeek,'ta',`${weekLabel(currentWeek)} · oxirgi yig‘imgacha`,'chart')+
   metric('Noyob ko‘nikmalar',skills.size,'ta','Tanlangan hisoblash doirasida','sparkles')+
   metric('Til talabi',pct(jobs.filter(j=>languageEvidence(j).length).length,jobs.length),'%',`${jobs.filter(j=>languageEvidence(j).length).length} ta e’londa talab yoki afzallik`,'globe');
 $('#chart-note').textContent = `${jobs.length} ta e’lon orasida · har bir ko‘nikma bitta e’londa bir marta sanaladi`;
 $('#skills').innerHTML = ranked.length ? ranked.slice(0,state.more?100:10).map((r,i)=>
 `<button class="skill-row" data-skill="${e(r.skill)}" aria-label="${e(skillName(r.skill))}: ${r.count} ta vakansiya, ${pct(r.count,jobs.length)} foiz. Asl jumlalarni ko‘rish"><span class="skill-name"><i>${String(i+1).padStart(2,'0')}</i>${e(skillName(r.skill))}</span><span class="skill-track"><span class="skill-fill" style="width:${pct(r.count,jobs.length)}%"></span></span><span class="skill-number">${pct(r.count,jobs.length)}%<small>${r.count} ta e’lon</small></span></button>`).join('') : empty('Bu doirada ko‘nikmalar aniqlanmadi.','“Barcha eslatmalar”ni tanlang yoki filtrlarni o‘zgartiring.');
 $('#more-skills').hidden = ranked.length<=10;
 $('#more-skills').textContent = state.more?'Qisqartirish ↑':`Barcha ${ranked.length} ta ko‘nikmani ko‘rish ↓`;
 $('#recent-jobs').innerHTML = jobs.length?jobs.slice(0,4).map(row).join(''):empty();
}
function renderJobs() {
 const jobs=searchedJobs();
 if(state.view==='vacancies')$('#classification-note').textContent=`${jobs.filter(j=>j.grades.includes('Unspecified')).length}/${jobs.length} ta e’londa daraja yozilmagan. Yo‘nalishi yozilmagan e’lonlar Manual guruhida.`;
 $('#jobs-total').textContent=`${jobs.length} ta`;
 $('#jobs-list').innerHTML = jobs.length ? jobs.map(job=>{
  const skills=[...new Set(job.requirements.filter(relevant).map(r=>r.skill))].slice(0,6);
  return `<article class="job-card"><div class="job-card-header"><div class="company-avatar" aria-hidden="true">${e(initials(job.company))}</div><div class="job-main"><button class="job-title" data-job="${e(job.id)}">${e(job.title)}</button>${languageBadges(job)}<div class="job-meta">${e(job.company)}${job.source==='telegram'?' · @'+e(job.channel):''}</div></div></div><p class="salary">${e(job.salary_text||'Maosh ko‘rsatilmagan')}</p><div class="job-meta">${e(job.city)} · ${e(job.experience||'Tajriba ko‘rsatilmagan')} · ${e((job.work_format_codes||[]).map(label).join(' / ')||job.work_format||'Format ko‘rsatilmagan')}</div><div class="job-tags">${tags(job)}</div><div class="skill-chips">${skills.map(s=>`<span class="skill-chip">${e(skillName(s))}</span>`).join('')}</div><div class="job-card-bottom"><span>${e(dateFormat(job.published_at,true))}</span><a href="${e(job.url)}" target="_blank" rel="noopener noreferrer">${e(sourceLabel(job))} ↗</a></div></article>`;
 }).join(''):empty('Qidiruv bo‘yicha e’lon topilmadi.','Qidiruv matnini yoki yuqoridagi filtrlarni o‘zgartiring.');
}
function renderWeekly(jobs) {
 const weeks = [...new Set(jobs.map(j=>weekOf(j.published_at)))].sort().reverse();
 const max=Math.max(1,...weeks.map(w=>jobs.filter(j=>weekOf(j.published_at)===w).length));
 $('#weekly-bars').innerHTML=weeks.length?weeks.map(w=>{const n=jobs.filter(j=>weekOf(j.published_at)===w).length;return `<div class="week-row"><span>${e(weekLabel(w))}</span><span class="skill-track"><span class="skill-fill" style="width:${n/max*100}%"></span></span><strong>${n} ta</strong></div>`;}).join(''):empty();
 $('#history-note').textContent = `Hozir ${data.runs.length} marta ma’lumot yig‘ilgan. Bu e’lon sanalari bo‘yicha taqsimot; haftalar orasidagi o‘sish yoki pasayish trendi deb talqin qilmang.`;
 $('#week-cards').innerHTML = weeks.map(w=>{
  const subset=jobs.filter(j=>weekOf(j.published_at)===w), top=ranking(subset).slice(0,5);
  return `<section class="card"><p class="eyebrow">${e(w)}</p><h3>${e(weekLabel(w))}</h3><p class="muted">${subset.length} ta kuzatilgan vakansiya · ${e($('#context').selectedOptions[0].textContent)}</p>${top.length?top.map(r=>`<div class="weekly-skill"><span>${e(skillName(r.skill))}</span><span>${r.count}/${subset.length} · ${pct(r.count,subset.length)}%</span></div>`).join(''):'<p class="muted">Bu doirada ko‘nikma aniqlanmadi.</p>'}<button class="wide-link" data-week="${e(w)}">Haftaning vakansiyalari →</button></section>`;
 }).join('');
}
function renderMethod() {
 const c=data.coverage;
 $('#coverage').innerHTML = `<span>hh.uz: ${c.collected} ta yig‘ilgan</span>${data.telegram?'<span>Telegram: '+data.telegram.jobs.length+' ta QA posti · oxirgi '+data.telegram.window_days+' kun · '+data.telegram.coverage.review+' ta tekshiruvga qolgan</span>':''}<span>${c.included||0} ta QA</span><span>${(c.excluded||0)+(c.excluded_region||0)} ta chiqarilgan</span><span>${c.review||0} ta tekshirishda</span>`;
 $('#runs').innerHTML=data.runs.map(r=>`<div class="run-row"><span>${e(dateFormat(r.finished_at||r.started_at,true))} · ${e(new Intl.DateTimeFormat('uz-UZ',{hour:'2-digit',minute:'2-digit',timeZone:'Asia/Tashkent'}).format(new Date(r.finished_at||r.started_at)))} (Toshkent)</span><span>hh.uz · ${r.collected} ta e’lon · ${r.errors} ta xato · ${e(r.status==='complete'?'Qidiruvlar to‘liq olindi':'Qisman olingan')}</span></div>`).join('');
}
function syncURL(){const query=filterSearch(state);const url=location.pathname+(query?'?'+query:'')+'#'+state.view;if(url!==location.pathname+location.search+location.hash)history.replaceState(null,'',url);}
function navigateView(view){leaveVacancies(state,view);const query=filterSearch(state);history.pushState(null,'',location.pathname+(query?'?'+query:'')+'#'+view);render();}
function applyControls(){for(const key of ['source','grade','city','format','week','context'])$('#'+key).value=state[key];$('#search').value=state.query;}
function render() {
 if(!data) return;
 syncURL();
 const jobs=baseJobs();
 for(const name of Object.keys(pageInfo)) $(`#${name}-view`).hidden=name!==state.view;
 document.querySelectorAll('nav [data-view]').forEach(a=>{a.classList.toggle('active',a.dataset.view===state.view);if(a.dataset.view===state.view)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 $('#page-title').textContent=pageInfo[state.view][0];
 $('#page-subtitle').textContent=pageInfo[state.view][1];
 $('.page-heading').classList.toggle('compact',state.view!=='overview');
 $('.filter-panel').hidden=state.view==='method';$('#export').hidden=state.view!=='vacancies';$('.hero-actions').hidden=state.view!=='vacancies';
 $('#reset').hidden=state.direction==='all'&&['source','grade','city','format','week'].every(k=>state[k]==='all')&&!state.query;
 document.querySelectorAll('[data-direction]').forEach(b=>{const active=b.dataset.direction===state.direction;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
 $('#classification-note').textContent=`${jobs.filter(j=>j.grades.includes('Unspecified')).length}/${jobs.length} ta e’londa daraja yozilmagan. Yo‘nalishi yozilmagan e’lonlar Manual guruhida.`;
 renderOverview(jobs);renderJobs();renderWeekly(jobs);renderMethod();
}
function showDetail(title) {previousFocus=document.activeElement;$('#detail-eyebrow').textContent=title;$('#detail').showModal();$('#detail').scrollTop=0;}
function closeDetail() {$('#detail').close();previousFocus?.focus();}
function showSkill(skill,week=null) {
 const jobs=baseJobs().filter(j=>(!week||weekOf(j.published_at)===week)&&j.requirements.some(r=>r.skill===skill&&relevant(r)));
 const denominator=baseJobs().filter(j=>!week||weekOf(j.published_at)===week).length;
 $('#detail-body').innerHTML=`<h2 id="detail-heading">${e(skillName(skill))}</h2><p class="dialog-intro">${denominator} ta filtrlangan e’lonning ${jobs.length} tasida (${pct(jobs.length,denominator)}%) uchraydi. Quyida asl tildagi jumlalar berilgan.</p>${jobs.length?jobs.map(job=>`<article class="evidence-card"><div class="evidence-company"><span>${e(job.company)}</span><span>${e(dateFormat(job.published_at))}</span></div><h3><button class="job-title" data-job="${e(job.id)}">${e(job.title)}</button>${languageBadges(job)}</h3>${job.requirements.filter(r=>r.skill===skill&&relevant(r)).map(r=>`<blockquote>${e(r.evidence)}<br><span class="evidence-context">${e(label(r.kind))}</span></blockquote>`).join('')}<a class="inline-link" href="${e(job.url)}" target="_blank" rel="noopener noreferrer">Asl e’lonni ochish ↗</a></article>`).join(''):empty('Bu filtrda dalil topilmadi.','Filtrlarni yoki hisoblash doirasini o‘zgartiring.')}`;
 if(!$('#detail').open)showDetail('KO‘NIKMA · ASL JUMLALAR');else{$('#detail-eyebrow').textContent='KO‘NIKMA · ASL JUMLALAR';$('#detail').scrollTop=0;}
}
function showJob(id) {
 detailJob=data.jobs.find(j=>j.id===id);if(!detailJob)return;
 const j=detailJob;
 $('#detail-body').innerHTML=`<h2 id="detail-heading">${e(j.title)}</h2><p class="dialog-intro">${e(j.company)} · ${e(j.city)}</p><div class="detail-facts"><div><strong>Maosh</strong>${e(j.salary_text||'Ko‘rsatilmagan')}</div><div><strong>Tajriba</strong>${e(j.experience||'Ko‘rsatilmagan')}</div><div><strong>Daraja / yo‘nalish</strong>${e([...j.grades,...directionsFor(j)].map(label).join(' / '))}</div><div><strong>Ish formati</strong>${e((j.work_format_codes||[]).map(label).join(' / ')||j.work_format||'Ko‘rsatilmagan')}</div><div><strong>E’lon sanasi</strong>${e(dateFormat(j.published_at,true))}</div><div><strong>Kuzatilgan sana</strong>${e(dateFormat(j.collected_at,true))}</div></div><p class="source-disclaimer">${e(statusNote(j))}${directionNote(j)?' · '+e(directionNote(j)):''}</p>${j.source==='telegram'?'<p class="source-disclaimer">@'+e(j.channel)+' ochiq posti. O‘zbekiston uchun mosligi matndan ajratilgan; e’lon hali ochiqligini manbada tekshiring.</p>':''}${j.other_sources?.length?'<p class="source-disclaimer">Shu e’lon Telegramda ham bor: '+j.other_sources.map(x=>'<a href="'+e(x.url)+'" target="_blank" rel="noopener noreferrer">@'+e(x.channel)+'</a>').join(', ')+'</p>':''}${j.location_note?`<p class="source-disclaimer">${e(j.location_note)}</p>`:''}<div class="detail-actions"><a class="button primary" href="${e(j.url)}" target="_blank" rel="noopener noreferrer">${e(sourceLabel(j))}’da ochish ↗</a></div><p class="source-disclaimer">E’lon holati o‘zgargan bo‘lishi mumkin. Talablar avtomatik ajratilgan; asl tavsif bilan tekshiring.</p>${languageNote(j)}<h3 class="detail-subheading">Ajratilgan ko‘nikmalar</h3><div class="detail-skills">${[...new Set(j.requirements.filter(technicalRequirement).map(r=>r.skill))].map(s=>`<span class="skill-chip">${e(skillName(s))}</span>`).join('')||'<span class="muted">Lug‘atdagi ko‘nikma aniqlanmadi.</span>'}</div><div class="detail-tabs" role="group" aria-label="E’lon mazmuni"><button class="active" data-detail-tab="required">Talablar</button><button data-detail-tab="preferred">Afzalliklar</button><button data-detail-tab="all">Asl tavsif</button></div><div id="job-requirements"></div>`;
 renderJobRequirements('required');
 if(!$('#detail').open)showDetail('VAKANSIYA · TALABLAR');else{$('#detail-eyebrow').textContent='VAKANSIYA · TALABLAR';$('#detail').scrollTop=0;}
}
function renderJobRequirements(tab) {
 document.querySelectorAll('[data-detail-tab]').forEach(b=>b.classList.toggle('active',b.dataset.detailTab===tab));
 if(tab==='all'){$('#job-requirements').innerHTML=`<div class="description">${e(detailJob.description)}</div>`;return;}
 const blocks=detailJob.requirement_blocks.filter(b=>b.kind===tab);
 $('#job-requirements').innerHTML=blocks.length?blocks.map(b=>`<div class="requirement-item"><small>${e(label(b.kind))}</small>${e(b.evidence)}</div>`).join(''):`<p class="muted">Bu bo‘lim alohida aniqlanmadi. “Asl tavsif”ni ochib tekshiring.</p>`;
}
function toast(message) {$('#toast').textContent=message;$('#toast').hidden=false;setTimeout(()=>$('#toast').hidden=true,3000);}
function downloadCSV() {
 const jobs=state.view==='vacancies'?searchedJobs():baseJobs();
 if(!jobs.length){toast('Yuklash uchun e’lon topilmadi.');return;}
 const columns=['Manba','ID','Lavozim','Kompaniya','Shahar','Daraja','Yo‘nalish','Tajriba','Maosh','Tillar','E’lon sanasi','Havola'];
 const quote=v=>'"'+String(v??'').replace(/"/g,'""')+'"';
 const safe=v=>/^[=+\-@\t\r]/.test(String(v??''))?"'"+v:v;
 const rows=jobs.map(j=>[sourceLabel(j),j.id,j.title,j.company,j.city,j.grades.map(label).join('; '),directionsFor(j).join('; '),j.experience,j.salary_text,jobLanguages(j).map(l=>l.code).join('; ')||'Aniqlanmadi',j.published_at,j.url]);
 const blob=new Blob(['\ufeff'+[columns,...rows].map(r=>r.map(v=>quote(safe(v))).join(',')).join('\r\n')],{type:'text/csv;charset=utf-8'});
 const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='qa-bozor-vakansiyalar.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast(`${jobs.length} ta vakansiya yuklandi`);
}
async function load() {
 $('#error').hidden=true;$('#loading').hidden=false;$('#refresh').disabled=true;
 try {
  const response=await fetch(new URL('./data.json',import.meta.url),{cache:'no-store'});if(!response.ok)throw new Error('Ma’lumot faylini ochib bo‘lmadi.');
  const incoming=await response.json();if(!Array.isArray(incoming.jobs)||!incoming.runs?.length)throw new Error('Ma’lumot shakli noto‘g‘ri.');
  data=incoming;
  try{
   const tgResponse=await fetch(new URL('./telegram-data.json',import.meta.url),{cache:'no-store'});
   if(!tgResponse.ok)throw new Error('Telegram snapshot missing');
   const tg=await tgResponse.json();if(!Array.isArray(tg.jobs))throw new Error('Invalid Telegram snapshot');
   data.telegram=tg;data.jobs=mergeSources(data.jobs,tg.jobs);
   if(Date.now()-new Date(tg.collected_at)>2*86400000){$('#source-warning').textContent='Telegram jamlanmasi 2 kundan beri yangilanmagan. Yig‘ilgan sanaga e’tibor bering.';$('#source-warning').hidden=false;}
  }catch(error){data.jobs=mergeSources(data.jobs,[]);$('#source-warning').hidden=false;}
  data.jobs.sort((a,b)=>new Date(b.published_at)-new Date(a.published_at));
  const cities=[...new Set(data.jobs.map(j=>j.city).filter(Boolean))].sort();
  $('#city').innerHTML='<option value="all">Butun O‘zbekiston</option>'+cities.map(c=>`<option value="${e(c)}">${e(c)}</option>`).join('');$('#city').value=state.city;
  const weeks=[...new Set(data.jobs.map(j=>weekOf(j.published_at)))].sort().reverse();
  $('#week').innerHTML='<option value="all">Barcha haftalar</option>'+weeks.map(w=>`<option value="${e(w)}">${e(weekLabel(w))}</option>`).join('');$('#week').value=state.week;
  $('#nav-count').textContent=data.jobs.filter(j=>j.archived!==true&&j.availability!=='unavailable').length;
  const last=data.runs.at(-1);const age=(Date.now()-new Date(last.finished_at||last.started_at))/86400000;$('#freshness').hidden=age<2;$('#freshness').textContent='Ma’lumotlar '+Math.floor(age)+' kun oldin yig‘ilgan. Yangi e’lonlar va o‘zgarishlar hali ko‘rinmasligi mumkin.';$('#updated').textContent=`Yig‘ilgan: ${dateFormat(last.finished_at||last.started_at,true)} · hh.uz · ${data.coverage.collected} ta e’lon tekshirildi${data.telegram?' · @unilance: '+dateFormat(data.telegram.collected_at,true)+' · '+data.telegram.jobs.length+' ta QA posti':''}`;
  for(const key of ['city','week'])if(![...$('#'+key).options].some(o=>o.value===state[key]))state[key]='all';
  applyControls();$('#content').hidden=false;render();
 }catch(error){$('#error-message').textContent='Ma’lumotlarni yuklab bo‘lmadi. Internet aloqasini tekshiring va qayta yuklang.';$('#error').hidden=false;console.error(error);}
 finally{$('#loading').hidden=true;$('#refresh').disabled=false;}
}
function route() {const name=location.hash.slice(1)||'overview';const next=Object.hasOwn(pageInfo,name)?name:'overview';const changed=state.view!==next;leaveVacancies(state,next);$('#search').value=state.query;render();if(changed)window.scrollTo({top:0,behavior:'instant'});}
window.addEventListener('hashchange',route);
window.addEventListener('popstate',()=>{Object.assign(state,readFilters(location.search));applyControls();route();});
document.addEventListener('click',event=>{
 const target=event.target.closest('button,[data-job]');if(!target)return;
 if(target.dataset.direction){state.direction=target.dataset.direction;state.more=false;render();}
 if(target.dataset.job)showJob(target.dataset.job);
 if(target.dataset.skill)showSkill(target.dataset.skill,target.dataset.skillWeek||null);
 if(target.dataset.week){state.query='';$('#search').value='';state.week=target.dataset.week;$('#week').value=state.week;navigateView('vacancies');window.scrollTo({top:0,behavior:'smooth'});}
 if(target.dataset.detailTab)renderJobRequirements(target.dataset.detailTab);
});
['source','grade','city','format','week','context'].forEach(key=>$('#'+key).addEventListener('change',event=>{state[key]=event.target.value;state.more=false;render();}));
$('#search').addEventListener('input',event=>{state.query=event.target.value;syncURL();renderJobs();$('#reset').hidden=state.direction==='all'&&['source','grade','city','format','week'].every(k=>state[k]==='all')&&!state.query;});
$('#more-skills').addEventListener('click',()=>{state.more=!state.more;renderOverview(baseJobs());});
$('#reset').addEventListener('click',()=>{for(const k of ['source','grade','city','format','week']){state[k]='all';$('#'+k).value='all';}state.direction='all';state.query='';state.more=false;$('#search').value='';render();});
$('#close-detail').addEventListener('click',closeDetail);
$('#detail').addEventListener('click',event=>{if(event.target===$('#detail')){const r=$('#detail').getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeDetail();}});
$('#export').addEventListener('click',downloadCSV);
$('#refresh').addEventListener('click',load);
document.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));
function updateThemeButton(){const light=document.documentElement.dataset.theme==='light';$('#theme-toggle').innerHTML=icon(light?'moon':'sun');$('#theme-toggle').setAttribute('aria-label',light?'To‘q mavzuga o‘tish':'Ochiq mavzuga o‘tish');document.querySelector('meta[name="theme-color"]').content=light?'#ffffff':'#0e1620';}
$('#theme-toggle').addEventListener('click',()=>{document.documentElement.dataset.theme=document.documentElement.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('qa-theme',document.documentElement.dataset.theme);}catch{}updateThemeButton();});
function focusSearch(){navigateView('vacancies');$('#search').focus();$('#search').scrollIntoView({block:'center',behavior:'smooth'});}
document.addEventListener('keydown',event=>{if(event.key==='k'&&(event.metaKey||event.ctrlKey)){event.preventDefault();if(!$('#detail').open)focusSearch();}});
updateThemeButton();
applyControls();route();load();
