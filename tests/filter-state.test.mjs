import test from 'node:test';
import assert from 'node:assert/strict';
import {defaults,readFilters,filterSearch,leaveVacancies} from '../qa-bozor/filter-state.js';
test('shared URL restores combined filters and Unicode search',()=>{
 const state={...defaults,view:'vacancies',direction:'Automation',grade:'Middle',city:'Ташкент',week:'2026-W44',format:'REMOTE',context:'required',query:'BM Electronics'};
 assert.deepEqual(readFilters('?'+filterSearch(state)),Object.fromEntries(Object.keys(defaults).map(k=>[k,state[k]])));
});
test('invalid enum values cannot create invisible filters',()=>{
 const state=readFilters('?direction=oops&grade=CEO&format=OFFICE&week=2026-W99&context=bad');
 assert.deepEqual(state,defaults);
});
test('leaving vacancy search clears hidden query, preserving visible filters',()=>{
 const state={...defaults,view:'vacancies',week:'2026-W43',query:'BM Electronics'};
 leaveVacancies(state,'weekly');
 assert.equal(state.query,'');assert.equal(state.week,'2026-W43');assert.ok(!filterSearch(state).includes('query='));
});
