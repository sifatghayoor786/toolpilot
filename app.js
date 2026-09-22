const $=(s)=>document.querySelector(s);const $$=(s)=>[...document.querySelectorAll(s)];
function money(n,c='USD'){try{return new Intl.NumberFormat('en-US',{style:'currency',currency:c,maximumFractionDigits:2}).format(Number(n)||0)}catch(e){return '$'+(Number(n)||0).toFixed(2)}}
function num(n,d=2){return (Number(n)||0).toLocaleString('en-US',{maximumFractionDigits:d})}
function pct(n,d=2){return num(n,d)+'%'}
function bindCalc(fn){const form=$('#toolForm');if(!form)return;form.addEventListener('submit',e=>{e.preventDefault();fn()});}
function copyText(t){navigator.clipboard?.writeText(t)}
function siteSearch(){const q=($('#siteSearch')?.value||'').trim().toLowerCase();$$('[data-search]').forEach(c=>c.style.display=(!q||c.dataset.search.includes(q))?'block':'none')}
