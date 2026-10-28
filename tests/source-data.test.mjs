import test from 'node:test';
import assert from 'node:assert/strict';
import {mergeSources} from '../qa-bozor/source-data.js';
test('Telegram links to an already collected hh vacancy do not inflate demand counts',()=>{
 const jobs=mergeSources([{id:'123',title:'QA'}],[{id:'tg:unilance/1',linked_hh_id:'123',url:'https://t.me/unilance/1',channel:'unilance'},{id:'tg:unilance/2',url:'https://t.me/unilance/2'},{id:'tg:unilance/2'}]);
 assert.equal(jobs.length,2);assert.equal(jobs[0].other_sources[0].channel,'unilance');assert.equal(jobs[1].source,'telegram');
});
