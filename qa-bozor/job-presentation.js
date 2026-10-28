// Presentation rules preserve original source data and evidence.
export function directionsFor(job) {
  const explicit = [...new Set((job.directions || []).filter(d => d === 'Manual' || d === 'Automation'))];
  return explicit.length ? explicit : ['Manual'];
}

export const languages = [
  {skill:'English',code:'EN',name:'Ingliz tili'},
  {skill:'Russian',code:'RU',name:'Rus tili'},
  {skill:'Uzbek',code:'UZ',name:'O‘zbek tili'},
];
export function languageEvidence(job, skill) {
  return (job.requirements || []).filter(r => languages.some(l=>l.skill===r.skill) && (!skill||r.skill===skill) && ['required','preferred'].includes(r.kind));
}
export function jobLanguages(job) {
  return languages.filter(l=>languageEvidence(job,l.skill).length);
}
export function technicalRequirement(requirement) {
  return !languages.some(l=>l.skill===requirement.skill);
}
