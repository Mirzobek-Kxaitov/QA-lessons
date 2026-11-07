(() => {
 const ru=document.documentElement.lang==='ru';
 const themeButtons=[...document.querySelectorAll('[data-theme-toggle]')];
 const setTheme=theme=>{
  document.documentElement.dataset.theme=theme;
  themeButtons.forEach(button=>{button.textContent=theme==='dark'?'☀':'◐';button.setAttribute('aria-pressed',String(theme==='dark'));});
 };
 let saved='light';try{saved=localStorage.getItem('qa_theme')||'light';}catch{}
 setTheme(saved==='dark'?'dark':'light');
 themeButtons.forEach(button=>button.addEventListener('click',()=>{
  const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';setTheme(theme);try{localStorage.setItem('qa_theme',theme);}catch{}
 }));
 const menu=document.querySelector('.nav-links'),toggle=document.querySelector('.hamburger');
 const closeMenu=()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');};
 toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
 menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.classList.contains('open')){closeMenu();toggle.focus();}});
 document.querySelectorAll('.lesson-group-header').forEach((header,index)=>{
  const group=header.parentElement,panel=group.querySelector('.lesson-items');
  panel.id='lesson-panel-'+index;header.setAttribute('role','button');header.tabIndex=0;header.setAttribute('aria-controls',panel.id);header.setAttribute('aria-expanded',String(group.classList.contains('open')));
  const activate=()=>{
   const wasOpen=group.classList.contains('open');
   document.querySelectorAll('.lesson-group').forEach(g=>{g.classList.remove('open');g.querySelector('.lesson-group-header').setAttribute('aria-expanded','false');});
   if(!wasOpen){group.classList.add('open');header.setAttribute('aria-expanded','true');}
  };
  header.addEventListener('click',activate);header.addEventListener('keydown',event=>{if(['Enter',' '].includes(event.key)){event.preventDefault();activate();}});
 });
 const options=[...document.querySelectorAll('.quiz-option')],feedback=document.querySelector('.quiz-feedback');
 options.forEach(option=>option.addEventListener('click',()=>{
  options.forEach(item=>{item.classList.remove('correct','incorrect');item.setAttribute('aria-pressed','false');});
  const correct=option.dataset.correct==='true';option.classList.add(correct?'correct':'incorrect');option.setAttribute('aria-pressed','true');
  feedback.textContent=correct?(ru?'Верно! Тестирование помогает оценивать качество и находить проблемы.':'To‘g‘ri! Testlash sifatni baholash va muammolarni aniqlashga yordam beradi.'):(ru?'Попробуйте ещё раз. Тестирование не гарантирует отсутствие всех ошибок.':'Yana urinib ko‘ring. Testlash barcha xatolar yo‘qligini kafolatlamaydi.');
 }));
})();
