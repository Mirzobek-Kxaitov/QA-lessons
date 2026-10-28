export function mergeSources(hhJobs, telegramJobs) {
 const jobs=hhJobs.map(j=>({...j,source:'hh.uz'}));
 const byId=new Map(jobs.map(j=>[j.id,j]));
 const seen=new Set();
 for(const post of telegramJobs){
  const match=post.linked_hh_id&&byId.get(post.linked_hh_id);
  if(match){match.other_sources=[...(match.other_sources||[]),{source:'telegram',url:post.url,channel:post.channel}];continue;}
  if(seen.has(post.id))continue;
  seen.add(post.id);jobs.push({...post,source:'telegram'});
 }
 return jobs;
}
