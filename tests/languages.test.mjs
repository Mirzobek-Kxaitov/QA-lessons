import test from 'node:test';
import assert from 'node:assert/strict';
import {technicalRequirement,jobLanguages,languageEvidence} from '../qa-bozor/job-presentation.js';
test('languages are excluded from all technical skill contexts',()=>{
 for(const skill of ['English','Russian','Uzbek'])assert.equal(technicalRequirement({skill}),false);
 assert.equal(technicalRequirement({skill:'SQL'}),true);
});
test('badges use required/preferred evidence, not incidental mentions',()=>{
 const job={requirements:[{skill:'English',kind:'preferred',evidence:'English or Russian'},{skill:'Russian',kind:'preferred',evidence:'English or Russian'},{skill:'Uzbek',kind:'responsibility',evidence:'Uzbek product'},{skill:'Russian',kind:'required',evidence:'Russian'}]};
 assert.deepEqual(jobLanguages(job).map(l=>l.code),['EN','RU']);
 assert.equal(languageEvidence(job,'Russian').length,2);
 assert.deepEqual(jobLanguages({}),[]);
});
