import { questions } from './questions.js';
import { answers } from './answers.js';
import { faq } from './faq.js';
import { additional } from './additional.js';

const questionsById = new Map(questions.map(q => [q.id,q]));

const additionalIds = new Set(additional.map(entry => entry.questionId));
const expandedQuestions = new Set();

const copy = {
  uz: {expandedQuestion:'Savolning batafsil shakli',explanation:'Batafsil tushuntirish',context:'Bog‘liq tushunchalar',walkthrough:'Amaliy tahlil bosqichlari',followUp:'Intervyuda qo‘shimcha savollar',additionalSection:'Qo‘shimcha savollar',additionalIntro:'Mantiqiy topshiriqlar, HR, umumiy kodlash va tor soha mavzulari. Asosiy QA savollaridan keyin tayyorlanish uchun.',additionalTopics:{logic:'Mantiqiy topshiriqlar',career:'HR va karyera',coding:'Umumiy kodlash topshiriqlari',specialized:'Telekom va tizim mavzulari'},pdfSources:'PDF materiallari:',section:'Bo‘lim',interviewSection:'Intervyu savollari',faqSection:'Savol-Javoblar',faqIntro:'QA asoslarini qisqa javoblar, batafsil tushuntirishlar va amaliy misollar bilan takrorlang.',answer:'Qisqa javob',example:'Amaliy misol',hint:'Javob va misolni ko‘rish uchun savolni bosing.',back:'← Blogga qaytish',eyebrow:'QA intervyu',title:'QA intervyuga tayyorgarlik',intro:'Bo‘limni tanlang. Intervyu savollari Junior, Middle va Senior darajalariga ajratilgan.',uiLanguage:'Savollar tili',level:'Daraja',source:'Mavzular uchun yo‘nalish:',original:'Savollar va javoblar QA Academy uchun tuzilgan va moslashtirilgan. Darajalar tayyorgarlik uchun yo‘nalish beradi.',empty:'Savol topilmadi. Filtrlarni o‘zgartiring.',theme:'Temani almashtirish',menu:'Menyuni ochish',nav:['Darslar','Automation','Real keyslar','Blog','Muallif'],topics:{practice:'Amaliy topshiriqlar',performance:'Performance va yuklama',security:'Xavfsizlik',programming:'Dasturlash asoslari',git:'Git va kod review',cicd:'CI/CD',infrastructure:'Test infratuzilmasi',theory:'Nazariya',design:'Test dizayn',documentation:'Hujjatlar',web:'Web',api:'API',sql:'SQL',mobile:'Mobile',strategy:'Strategiya',automation:'Automation'}},
  ru: {expandedQuestion:'Развёрнутая формулировка',explanation:'Подробное объяснение',context:'Связанные понятия',walkthrough:'Шаги практического разбора',followUp:'Дополнительные вопросы на интервью',additionalSection:'Дополнительные вопросы',additionalIntro:'Логические задачи, HR, общее программирование и узкие отраслевые темы для подготовки после основных вопросов QA.',additionalTopics:{logic:'Логические задачи',career:'HR и карьера',coding:'Общие задачи по программированию',specialized:'Телеком и системные темы'},pdfSources:'Материалы PDF:',section:'Раздел',interviewSection:'Вопросы для интервью',faqSection:'Вопросы и ответы',faqIntro:'Повторите основы QA с краткими ответами, подробными объяснениями и практическими примерами.',answer:'Краткий ответ',example:'Практический пример',hint:'Нажмите на вопрос, чтобы увидеть ответ и пример.',back:'← Вернуться в блог',eyebrow:'QA интервью',title:'Подготовка к QA-интервью',intro:'Выберите раздел. Вопросы для интервью распределены по уровням Junior, Middle и Senior.',uiLanguage:'Язык вопросов',level:'Уровень',source:'Ориентир для тем:',original:'Вопросы и ответы составлены и адаптированы для QA Academy. Уровни служат ориентиром для подготовки.',empty:'Вопросы не найдены. Измените фильтры.',theme:'Переключить тему',menu:'Открыть меню',nav:['Уроки','Automation','Практические кейсы','Блог','Автор'],topics:{practice:'Практические задания',performance:'Производительность и нагрузка',security:'Безопасность',programming:'Основы программирования',git:'Git и review кода',cicd:'CI/CD',infrastructure:'Тестовая инфраструктура',theory:'Теория',design:'Тест-дизайн',documentation:'Документация',web:'Web',api:'API',sql:'SQL',mobile:'Mobile',strategy:'Стратегия',automation:'Automation'}},
  en: {expandedQuestion:'Expanded question',explanation:'Detailed explanation',context:'Related concepts',walkthrough:'Practical analysis steps',followUp:'Interview follow-up questions',additionalSection:'Additional questions',additionalIntro:'Logic exercises, HR, general coding and specialized topics to review after the core QA questions.',additionalTopics:{logic:'Logic exercises',career:'HR and career',coding:'General coding exercises',specialized:'Telecom and systems topics'},pdfSources:'PDF materials:',section:'Section',interviewSection:'Interview questions',faqSection:'Questions & Answers',faqIntro:'Review QA fundamentals with short answers, detailed explanations and practical examples.',answer:'Short answer',example:'Practical example',hint:'Click a question to see its answer and example.',back:'← Back to blog',eyebrow:'QA interview',title:'Prepare for your QA interview',intro:'Choose a section. Interview questions are organized by Junior, Middle and Senior levels.',uiLanguage:'Question language',level:'Level',source:'Topic inspiration:',original:'Questions and answers written and adapted for QA Academy. Levels provide guidance for preparation.',empty:'No questions found. Change your filters.',theme:'Switch theme',menu:'Open menu',nav:['Lessons','Automation','Practical cases','Blog','Author'],topics:{practice:'Practical exercises',performance:'Performance and load',security:'Security',programming:'Programming fundamentals',git:'Git and code review',cicd:'CI/CD',infrastructure:'Test infrastructure',theory:'Theory',design:'Test design',documentation:'Documentation',web:'Web',api:'API',sql:'SQL',mobile:'Mobile',strategy:'Strategy',automation:'Automation'}}
};
const state = {locale:'uz',level:'junior',section:'interview'};
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
function questionItem(q,key,t) {
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
  summary.append(title,icon);
  const content = make('div','question-answer');
  const response = answers[q.id][state.locale];
  content.append(
    make('h4','answer-label',t.expandedQuestion),
    make('p','expanded-question',q.expandedText[state.locale]),
    make('h4','answer-label',t.answer),
    make('p','',response.answer),
    make('h4','answer-label',t.explanation),
    make('p','',response.explanation)
  );
  if (response.context.length) {
    content.append(make('h4','answer-label',t.context));
    const concepts = make('ul','answer-concepts');
    response.context.forEach(concept => {
      const item = make('li','');
      item.append(make('strong','',concept.question),make('p','',concept.answer));
      concepts.append(item);
    });
    content.append(concepts);
  }
  content.append(make('h4','answer-label',t.example),make('p','answer-example',response.example));
  content.append(make('h4','answer-label',t.walkthrough));
  const steps = make('ol','answer-steps');
  response.walkthrough.forEach(step => steps.append(make('li','',step)));
  content.append(steps,make('h4','answer-label',t.followUp));
  const followUp = make('ul','answer-follow-up');
  response.followUp.forEach(question => followUp.append(make('li','',question)));
  content.append(followUp);
  details.append(summary,content);
  item.append(details);
  return item;
}
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
  const visible = questions.filter(q => !additionalIds.has(q.id) && q.level === state.level);
  const container = byId('question-groups');
  container.querySelectorAll('details').forEach(details => {
    if (details.open) expandedQuestions.add(details.dataset.questionId);
    else expandedQuestions.delete(details.dataset.questionId);
  });
  container.replaceChildren();
  if (state.section === 'faq') {
    const section = make('section','question-section');
    section.append(make('h2','',t.faqSection),make('p','',t.faqIntro));
    const list = make('ol','questions');
    faq.forEach(entry => {list.append(questionItem(questionsById.get(entry.questionId),entry.id,t));});
    section.append(list); container.append(section);
    return;
  }
  if (state.section === 'additional') {
    const section = make('section','question-section');
    section.append(make('h2','',t.additionalSection),make('p','',t.additionalIntro));
    let number = 0;
    for (const category of ['logic','career','coding','specialized']) {
      const entries = additional.filter(entry => entry.category === category);
      if (!entries.length) continue;
      section.append(make('h3','topic-heading',t.additionalTopics[category]));
      const list = make('ol','questions'); list.start = number+1;
      entries.forEach(entry => {
        list.append(questionItem(questionsById.get(entry.questionId),entry.questionId,t)); number++;
      });
      section.append(list);
    }
    container.append(section);
    return;
  }
  if (!visible.length) container.append(make('p','empty-state',t.empty));
  let number = 0;
  for (const level of ['junior','middle','senior']) {
    const subset = visible.filter(q => q.level === level);
    if (!subset.length) continue;
    const section = make('section','question-section');
    const heading = make('h2','',level[0].toUpperCase()+level.slice(1));
    section.append(heading);
    const topicOrder = ['theory','documentation','design','web','api','sql','mobile','performance','security','strategy','automation','programming','git','cicd','infrastructure','playwright','selenium','python','java','javascript','practice'];
    const topicOf = q => q.framework || q.language || q.topic;
    const names = {playwright:'Playwright',selenium:'Selenium',python:'Python',java:'Java',javascript:'JavaScript'};
    for (const topic of topicOrder) {
      const topicQuestions = subset.filter(q => topicOf(q) === topic);
      if (!topicQuestions.length) continue;
      section.append(make('h3','topic-heading',names[topic] || t.topics[topic]));
      const list = make('ol','questions'); list.start = number+1;
      topicQuestions.forEach(q => {
        list.append(questionItem(q,q.id,t)); number++;
      });
      section.append(list);
    }
    container.append(section);
  }
}
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
