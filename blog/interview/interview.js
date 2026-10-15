import { questions } from './questions.js';
import { answers } from './answers.js';
import { faq } from './faq.js';
import { additional } from './additional.js';

const questionsById = new Map(questions.map(q => [q.id,q]));

const additionalIds = new Set(additional.map(entry => entry.questionId));
const expandedQuestions = new Set();

const copy = {
  uz: {topicsLabel:"Mavzular",nextTopic:"Keyingi mavzu",closeAnswer:"Javobni yopish",coreLabel:"INTERVYUGA TAYYORGARLIK",additionalLabel:"BILIMNI KENGAYTIRISH",faqLabel:"QA ASOSLARINI TAKRORLASH",expandedQuestion:'Savolning batafsil shakli',explanation:'Batafsil tushuntirish',context:'Bog‘liq tushunchalar',walkthrough:'Amaliy tahlil bosqichlari',followUp:'Intervyuda qo‘shimcha savollar',additionalSection:'Qo‘shimcha savollar',additionalIntro:'Mantiqiy topshiriqlar, HR, umumiy kodlash va tor soha mavzulari. Asosiy QA savollaridan keyin tayyorlanish uchun.',additionalTopics:{logic:'Mantiqiy topshiriqlar',career:'HR va karyera',coding:'Umumiy kodlash topshiriqlari',specialized:'Telekom va tizim mavzulari'},pdfSources:'PDF materiallari:',section:'Bo‘lim',interviewSection:'Intervyu savollari',faqSection:'Savol-Javoblar',faqIntro:'QA asoslarini qisqa javoblar, batafsil tushuntirishlar va amaliy misollar bilan takrorlang.',answer:'Qisqa javob',example:'Amaliy misol',hint:"Javobni ko‘rish uchun savolni bosing.",back:'← Blogga qaytish',eyebrow:'QA intervyu',title:'QA intervyuga tayyorgarlik',intro:"Daraja va mavzuni tanlang. Savolni bosib javobni o‘qing.",uiLanguage:'Savollar tili',level:'Daraja',source:'Mavzular uchun yo‘nalish:',original:'Savollar va javoblar QA Academy uchun tuzilgan va moslashtirilgan. Darajalar tayyorgarlik uchun yo‘nalish beradi.',empty:'Savol topilmadi. Filtrlarni o‘zgartiring.',theme:'Temani almashtirish',menu:'Menyuni ochish',nav:['Darslar','Automation','Real keyslar','Blog','Muallif'],topics:{practice:'Amaliy topshiriqlar',performance:'Performance va yuklama',security:'Xavfsizlik',programming:'Dasturlash asoslari',git:'Git va kod review',cicd:'CI/CD',infrastructure:'Test infratuzilmasi',theory:'Nazariya',design:'Test dizayn',documentation:'Hujjatlar',web:'Web',api:'API',sql:'SQL',mobile:'Mobile',strategy:'Strategiya',automation:'Automation'}},
  ru: {topicsLabel:"Темы",nextTopic:"Следующая тема",closeAnswer:"Скрыть ответ",coreLabel:"ПОДГОТОВКА К ИНТЕРВЬЮ",additionalLabel:"РАСШИРЯЕМ ЗНАНИЯ",faqLabel:"ПОВТОРЯЕМ ОСНОВЫ QA",expandedQuestion:'Развёрнутая формулировка',explanation:'Подробное объяснение',context:'Связанные понятия',walkthrough:'Шаги практического разбора',followUp:'Дополнительные вопросы на интервью',additionalSection:'Дополнительные вопросы',additionalIntro:'Логические задачи, HR, общее программирование и узкие отраслевые темы для подготовки после основных вопросов QA.',additionalTopics:{logic:'Логические задачи',career:'HR и карьера',coding:'Общие задачи по программированию',specialized:'Телеком и системные темы'},pdfSources:'Материалы PDF:',section:'Раздел',interviewSection:'Вопросы для интервью',faqSection:'Вопросы и ответы',faqIntro:'Повторите основы QA с краткими ответами, подробными объяснениями и практическими примерами.',answer:'Краткий ответ',example:'Практический пример',hint:"Нажмите на вопрос, чтобы открыть ответ.",back:'← Вернуться в блог',eyebrow:'QA интервью',title:'Подготовка к QA-интервью',intro:"Выберите уровень и тему. Нажмите на вопрос, чтобы прочитать ответ.",uiLanguage:'Язык вопросов',level:'Уровень',source:'Ориентир для тем:',original:'Вопросы и ответы составлены и адаптированы для QA Academy. Уровни служат ориентиром для подготовки.',empty:'Вопросы не найдены. Измените фильтры.',theme:'Переключить тему',menu:'Открыть меню',nav:['Уроки','Automation','Практические кейсы','Блог','Автор'],topics:{practice:'Практические задания',performance:'Производительность и нагрузка',security:'Безопасность',programming:'Основы программирования',git:'Git и review кода',cicd:'CI/CD',infrastructure:'Тестовая инфраструктура',theory:'Теория',design:'Тест-дизайн',documentation:'Документация',web:'Web',api:'API',sql:'SQL',mobile:'Mobile',strategy:'Стратегия',automation:'Automation'}},
  en: {topicsLabel:"Topics",nextTopic:"Next topic",closeAnswer:"Close answer",coreLabel:"INTERVIEW PREPARATION",additionalLabel:"EXPAND YOUR KNOWLEDGE",faqLabel:"REVIEW QA FUNDAMENTALS",expandedQuestion:'Expanded question',explanation:'Detailed explanation',context:'Related concepts',walkthrough:'Practical analysis steps',followUp:'Interview follow-up questions',additionalSection:'Additional questions',additionalIntro:'Logic exercises, HR, general coding and specialized topics to review after the core QA questions.',additionalTopics:{logic:'Logic exercises',career:'HR and career',coding:'General coding exercises',specialized:'Telecom and systems topics'},pdfSources:'PDF materials:',section:'Section',interviewSection:'Interview questions',faqSection:'Questions & Answers',faqIntro:'Review QA fundamentals with short answers, detailed explanations and practical examples.',answer:'Short answer',example:'Practical example',hint:"Open a question to read the answer.",back:'← Back to blog',eyebrow:'QA interview',title:'Prepare for your QA interview',intro:"Choose a level and topic. Open a question to read the answer.",uiLanguage:'Question language',level:'Level',source:'Topic inspiration:',original:'Questions and answers written and adapted for QA Academy. Levels provide guidance for preparation.',empty:'No questions found. Change your filters.',theme:'Switch theme',menu:'Open menu',nav:['Lessons','Automation','Practical cases','Blog','Author'],topics:{practice:'Practical exercises',performance:'Performance and load',security:'Security',programming:'Programming fundamentals',git:'Git and code review',cicd:'CI/CD',infrastructure:'Test infrastructure',theory:'Theory',design:'Test design',documentation:'Documentation',web:'Web',api:'API',sql:'SQL',mobile:'Mobile',strategy:'Strategy',automation:'Automation'}}
};
const state = {locale:'uz',level:'junior',section:'interview',topics:{interview:'theory',additional:'logic',faq:'theory'}};
const byId = id => document.getElementById(id);
const readStored = key => {try {return localStorage.getItem(key);} catch {return null;}};
const saveStored = (key,value) => {try {localStorage.setItem(key,value);} catch { /* Storage is optional. */ }};
const savedLanguage = readStored('qa_interview_language');
if (copy[savedLanguage]) state.locale = savedLanguage;
const languageNames = {uz:'O‘zbekcha',ru:'Русский',en:'English'};
const languagePicker = byId('language-picker');
const languageTrigger = byId('ui-language');
const languageMenu = byId('language-menu');
const languageOptions = [...languageMenu.querySelectorAll('[data-locale]')];
function updateLanguagePicker() {
  byId('language-current').textContent = languageNames[state.locale];
  languageOptions.forEach(option => option.setAttribute('aria-checked',String(option.dataset.locale === state.locale)));
}
function closeLanguageMenu(restoreFocus = false) {
  languageMenu.hidden = true;
  languageTrigger.setAttribute('aria-expanded','false');
  if (restoreFocus) languageTrigger.focus();
}
function openLanguageMenu(index = languageOptions.findIndex(option => option.dataset.locale === state.locale)) {
  languageMenu.hidden = false;
  languageTrigger.setAttribute('aria-expanded','true');
  languageOptions[index].focus();
}
const themeButton = byId('themeToggle');
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton.textContent = theme === 'dark' ? '☀️' : '🌙';
}
window.toggleTheme = () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(theme); saveStored('qa_theme',theme);
};
applyTheme(readStored('qa_theme') === 'dark' ? 'dark' : 'light');
function make(tag,className,text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function questionItem(q,key,t,number) {
  const item = make('li','question'); item.id = key;
  const details = make('details','question-details');
  details.dataset.questionId = key;
  details.open = expandedQuestions.has(key);
  const summary = make('summary','question-summary');
  const icon = make('span','question-icon');
  icon.setAttribute('aria-hidden','true');
  const title = make('span','question-title');
  if (q.track === 'automation') title.append(make('span','automation-badge','Automation '));
  title.append(make('span','question-text',q.text[state.locale]));
  summary.append(make('span','question-number',String(number).padStart(2,'0')),title,icon);
  const content = make('div','question-answer');
  const response = answers[q.id][state.locale];
  const short = make('div','short-answer');
  short.append(make('h4','answer-label',t.answer),make('p','',response.answer));
  content.append(short,make('h4','answer-label',t.expandedQuestion),make('p','expanded-question',q.expandedText[state.locale]));
  content.append(make('h4','answer-label',t.explanation),make('p','',response.explanation));
  if (response.context.length) {
    const related = make('details','related-concepts');
    related.append(make('summary','',t.context));
    const concepts = make('ul','answer-concepts');
    response.context.forEach(concept => {
      const item = make('li','');
      item.append(make('strong','',concept.question),make('p','',concept.answer));
      concepts.append(item);
    });
    related.append(concepts); content.append(related);
  }
  const example = make('div','example-card');
  example.append(make('h4','answer-label',t.example),make('p','answer-example',response.example),make('h4','answer-label',t.walkthrough));
  const steps = make('ol','answer-steps');
  response.walkthrough.forEach(step => steps.append(make('li','',step)));
  example.append(steps); content.append(example);
  content.append(make('h4','answer-label',t.followUp));
  const followUp = make('ul','answer-follow-up');
  response.followUp.forEach(question => followUp.append(make('li','',question)));
  content.append(followUp);
  const close = make('button','close-answer',t.closeAnswer); close.type = 'button';
  close.addEventListener('click',() => {details.open = false; details.querySelector('summary').focus();});
  content.append(close);
  details.append(summary,content);
  item.append(details);
  return item;
}
const topicOrder = ['theory','documentation','design','web','api','sql','mobile','performance','security','strategy','automation','programming','git','cicd','infrastructure','playwright','selenium','python','java','javascript','practice'];
const topicOf = q => q.framework || q.language || q.topic;
const topicNames = {playwright:'Playwright',selenium:'Selenium',python:'Python',java:'Java',javascript:'JavaScript'};
const iconPaths = {
  theory:['M4 4h6a3 3 0 0 1 3 3v14a4 4 0 0 0-4-3H4z','M13 7a3 3 0 0 1 3-3h5v14h-4a4 4 0 0 0-4 3'],
  documentation:['M14 3H5v18h14V8z','M14 3v5h5M8 12h8M8 16h5'],
  design:['m12 3 9 5-9 5-9-5z','m3 12 9 5 9-5M3 16l9 5 9-5'],
  web:['M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z','M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18'],
  api:['M3 7h16m-4-4 4 4-4 4M21 17H5m4-4-4 4 4 4'],
  sql:['M20 6c0 2-16 2-16 0s16-2 16 0Z','M4 6v12c0 4 16 4 16 0V6M4 12c0 4 16 4 16 0'],
  mobile:['M7 2h10v20H7z','M10 5h4M11 19h2'],
  performance:['M4 19a10 10 0 1 1 16 0','m12 13 5-6M11 15h2'],
  security:['m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6z','m8 12 3 3 5-6'],
  strategy:['m12 3 9 9-9 9-9-9z','m14 10-1 3-3 1 1-3z'],
  automation:['M9 3v4M15 3v4M5 9h14v11H5z','M2 13h3M19 13h3M8 13h1M15 13h1M9 17h6'],
  programming:['m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18'],
  git:['M6 3v12a5 5 0 0 0 10 0V9','M6 3h0M16 4v2','M3 6a3 3 0 1 0 6 0 3 3 0 1 0-6 0M13 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0'],
  cicd:['m9 5 10 7-10 7z','M4 4v16'],
  infrastructure:['m12 2 9 5v10l-9 5-9-5V7z','m3 7 9 5 9-5M12 12v10'],
  practice:['M8 3h8v4H8z','M8 5H5v16h14V5h-3M8 12l2 2 5-5M8 18h7']
};
function topicIcon(topic) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
  for (const [key,value] of Object.entries({viewBox:'0 0 24 24',fill:'none',stroke:'currentColor','stroke-width':'1.6','stroke-linecap':'round','stroke-linejoin':'round','aria-hidden':'true'})) svg.setAttribute(key,value);
  const mapped = ({logic:'design',career:'theory',coding:'programming',specialized:'infrastructure',playwright:'web',selenium:'web',python:'programming',java:'programming',javascript:'programming'})[topic] || topic;
  for (const d of iconPaths[mapped] || iconPaths.theory) {
    const path = document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',d);svg.append(path);
  }
  return svg;
}
function records() {
  if (state.section === 'faq') return faq.map(entry => {const q = questionsById.get(entry.questionId);return {q,key:entry.id,topic:topicOf(q)};});
  if (state.section === 'additional') return additional.map(entry => ({q:questionsById.get(entry.questionId),key:entry.questionId,topic:entry.category}));
  return questions.filter(q => !additionalIds.has(q.id) && q.level === state.level).map(q => ({q,key:q.id,topic:topicOf(q)}));
}
function availableTopics(pool = records()) {
  const order = state.section === 'additional' ? ['logic','career','coding','specialized'] : topicOrder;
  return order.filter(topic => pool.some(record => record.topic === topic));
}
function topicLabel(topic,t) {return topicNames[topic] || t.topics[topic] || t.additionalTopics[topic];}
function render() {
  const t = copy[state.locale];
  updateLanguagePicker();
  document.documentElement.lang = state.locale;
  document.title = `${t.title} — QA Academy`;
  document.querySelector('meta[name="description"]').content = t.intro;
  document.querySelectorAll('[data-i18n]').forEach(node => {node.textContent = t[node.dataset.i18n];});
  document.querySelectorAll('.nav-links a').forEach((node,i) => {node.textContent = t.nav[i];});
  themeButton.title = t.theme; themeButton.setAttribute('aria-label',t.theme);
  document.querySelector('.hamburger').setAttribute('aria-label',t.menu);
  document.querySelector('.controls').setAttribute('aria-label',t.section);
  byId('level-control').hidden = state.section !== 'interview';
  byId('additional-sources').hidden = state.section === 'faq';
  byId('sections').querySelectorAll('button').forEach(button => {
    button.setAttribute('aria-pressed',String(button.dataset.section === state.section));
  });
  byId('source-link').href = state.section === 'faq'
    ? 'https://medium.com/@nuhansi22uni/25-interview-questions-answers-for-software-qa-engineer-intern-046c8a77d623'
    : 'https://itvdn.com/ru/blog/article/250-questions-qa';
  byId('source-link').textContent = state.section === 'faq' ? 'Medium — QA intern Q&A' : 'ITVDN — QA interview';
  byId('levels').querySelectorAll('button').forEach(button => {
    button.setAttribute('aria-pressed',String(button.dataset.value === state.level));
  });
  const container = byId('question-groups');
  container.querySelectorAll('details.question-details').forEach(details => {
    if (details.open) expandedQuestions.add(details.dataset.questionId);
    else expandedQuestions.delete(details.dataset.questionId);
  });
  const pool = records();
  const topics = availableTopics(pool);
  if (!topics.includes(state.topics[state.section])) state.topics[state.section] = topics[0];
  const selected = state.topics[state.section];
  const nav = byId('topic-nav'); nav.replaceChildren(); nav.setAttribute('aria-label',t.topicsLabel);
  for (const topic of topics) {
    const button = make('button','topic-button'); button.type = 'button'; button.dataset.topic = topic;
    button.setAttribute('aria-pressed',String(topic === selected));
    button.append(topicIcon(topic),make('span','',topicLabel(topic,t)),make('span','topic-arrow','›'));
    nav.append(button);
  }
  byId('topic-eyebrow').textContent = state.section === 'interview' ? state.level[0].toUpperCase()+state.level.slice(1) : state.section === 'faq' ? t.faqLabel : t.additionalLabel;
  byId('topic-title').textContent = topicLabel(selected,t);
  byId('topic-mark').replaceChildren(topicIcon(selected));
  const description = state.section === 'additional' ? t.additionalIntro : state.section === 'faq' ? t.faqIntro : '';
  byId('topic-description').textContent = description;
  byId('topic-description').hidden = !description;
  container.replaceChildren();
  const list = make('ol','questions');
  pool.filter(record => record.topic === selected).forEach((record,index) => list.append(questionItem(record.q,record.key,t,index+1)));
  container.append(list);
  byId('next-topic').hidden = topics.indexOf(selected) === topics.length-1;
}
byId('topic-nav').addEventListener('click',event => {
  const button = event.target.closest('button[data-topic]');
  if (!button) return;
  const topic = button.dataset.topic;
  state.topics[state.section] = topic; render();
  byId('topic-nav').querySelector(`[data-topic="${topic}"]`).focus();
});
byId('next-topic').addEventListener('click',() => {
  const topics = availableTopics();const index = topics.indexOf(state.topics[state.section]);
  if (index < topics.length-1) {state.topics[state.section] = topics[index+1];render();byId('topic-title').focus();byId('topic-title').scrollIntoView({block:'start'});}
});
byId('sections').addEventListener('click',event => {
  const button = event.target.closest('button[data-section]');
  if (button) {state.section = button.dataset.section;render();}
});
byId('levels').addEventListener('click',event => {
  const button = event.target.closest('button[data-value]');
  if (button) {state.level = button.dataset.value;render();}
});
languageTrigger.addEventListener('click',() => {
  if (languageMenu.hidden) openLanguageMenu();
  else closeLanguageMenu();
});
languageTrigger.addEventListener('keydown',event => {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault(); openLanguageMenu();
  }
});
languageMenu.addEventListener('click',event => {
  const option = event.target.closest('button[data-locale]');
  if (!option) return;
  state.locale = option.dataset.locale;
  saveStored('qa_interview_language',state.locale);
  closeLanguageMenu(true); render();
});
languageMenu.addEventListener('keydown',event => {
  const index = languageOptions.indexOf(document.activeElement);
  let next;
  if (event.key === 'ArrowDown') next = (index+1)%languageOptions.length;
  else if (event.key === 'ArrowUp') next = (index-1+languageOptions.length)%languageOptions.length;
  else if (event.key === 'Home') next = 0;
  else if (event.key === 'End') next = languageOptions.length-1;
  else if (event.key === 'Escape') {event.preventDefault(); closeLanguageMenu(true); return;}
  else if (event.key === 'Tab') {closeLanguageMenu(true); return;}
  else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
    next = languageOptions.findIndex(option => languageNames[option.dataset.locale].toLocaleLowerCase().startsWith(event.key.toLocaleLowerCase()));
    if (next < 0) return;
  }
  if (next !== undefined) {event.preventDefault(); languageOptions[next].focus();}
});
document.addEventListener('pointerdown',event => {
  if (!languagePicker.contains(event.target)) closeLanguageMenu();
});
languagePicker.addEventListener('focusout',event => {
  if (!languagePicker.contains(event.relatedTarget)) closeLanguageMenu();
});

render();
