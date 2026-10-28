export const defaults = {source:'all',direction:'all',grade:'all',city:'all',format:'all',week:'all',context:'requirements',query:''};
export function readFilters(search) {
 const p=new URLSearchParams(search), result={...defaults};
 const allowed={source:['all','hh.uz','telegram'],direction:['all','Manual','Automation'],grade:['all','Unspecified','Intern','Junior','Middle','Senior','Lead'],format:['all','REMOTE','ON_SITE','HYBRID'],context:['requirements','required','preferred','mentioned']};
 for(const [key,values] of Object.entries(allowed))if(values.includes(p.get(key)))result[key]=p.get(key);
 for(const key of ['city','query'])if(p.has(key))result[key]=p.get(key).slice(0,300);
 if(/^\d{4}-W(?:0[1-9]|[1-4]\d|5[0-3])$/.test(p.get('week')||''))result.week=p.get('week');
 return result;
}
export function filterSearch(state) {
 const p=new URLSearchParams();
 for(const [key,value] of Object.entries(defaults))if(state[key]!==value&&(key!=='query'||state.view==='vacancies')&&state[key])p.set(key,state[key]);
 return p.toString();
}
export function leaveVacancies(state,nextView) {
 if(nextView!=='vacancies')state.query='';
 state.view=nextView;
}
