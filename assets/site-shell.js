(() => {
 const nav=document.querySelector('.academy-global-nav');
 if(!nav)return;
 const toggle=nav.querySelector('.shell-menu-toggle'),links=nav.querySelector('.shell-links');
 const close=()=>{links.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');};
 toggle.addEventListener('click',()=>toggle.setAttribute('aria-expanded',String(links.classList.toggle('is-open'))));
 links.querySelectorAll('a').forEach(link=>{
  if(location.pathname.startsWith(link.getAttribute('href').replace('/#lessons','/lessons/')))link.setAttribute('aria-current','page');
  link.addEventListener('click',close);
 });
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&links.classList.contains('is-open')){close();toggle.focus();}});
 nav.querySelector('[data-shell-theme]')?.addEventListener('click',()=>{
  const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;
  try{localStorage.setItem('qa_theme',theme);}catch{}
 });
 if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  document.body.classList.add('shell-motion-ready');
  const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-revealed');reveal.unobserve(entry.target);}}),{threshold:.08});
  document.querySelectorAll('.post-card,.case-card,.article-head,.blog-hero').forEach(el=>{el.classList.add('shell-reveal');reveal.observe(el);});
 }
 const progress=document.querySelector('#progressFill');
 if(progress){
  document.body.classList.add('academy-lesson');
  const header=progress.closest('header');header?.classList.add('lesson-toolbar');
  const inner=header?.querySelector('.header-inner');
  if(inner){const label=document.createElement('span');label.className='progress-label';label.textContent=document.documentElement.lang==='ru'?'Прогресс урока':'O‘qish progressi';inner.prepend(label);}
  const container=[...document.body.children].find(el=>el.classList.contains('container'));
  if(container){
   const headings=[...container.querySelectorAll('.section>h2')].filter(h=>h.closest('section')?.id).slice(0,14);
   if(headings.length){
    const layout=document.createElement('div');layout.className='lesson-layout';container.before(layout);
    const outline=document.createElement('aside');outline.className='lesson-outline';outline.setAttribute('aria-label',document.documentElement.lang==='ru'?'Содержание урока':'Dars mazmuni');
    const label=document.createElement('p');label.textContent=document.documentElement.lang==='ru'?'В ЭТОМ УРОКЕ':'SHU DARSDA';outline.append(label);
    const list=document.createElement('nav');outline.append(list);
    headings.forEach((heading,index)=>{
     const link=document.createElement('a');link.href='#'+heading.closest('section').id;link.textContent=String(index+1).padStart(2,'0')+'  '+heading.textContent;list.append(link);
    });
    layout.append(outline,container);
    if('IntersectionObserver' in window){
     const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)list.querySelectorAll('a').forEach(link=>{if(link.hash==='#'+entry.target.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});});},{rootMargin:'-25% 0px -60% 0px'});
     headings.forEach(h=>observer.observe(h.closest('section')));
    }
   }
  }
 }
})();
