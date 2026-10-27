// Presentation rules preserve original source data and evidence.
export function directionsFor(job) {
  const explicit = [...new Set((job.directions || []).filter(d => d === 'Manual' || d === 'Automation'))];
  return explicit.length ? explicit : ['Manual'];
}

export function englishEvidence(job) {
  return (job.requirements || []).filter(r => r.skill === 'English' && ['required', 'preferred'].includes(r.kind));
}

export function technicalRequirement(requirement) {
  return requirement.skill !== 'English';
}
