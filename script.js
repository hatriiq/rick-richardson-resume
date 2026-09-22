const body=document.body;
const depth=document.querySelector('#depth');
const status=document.querySelector('#depth-status');
const descriptions={1:'Quick view · identity, roles, and strongest outcomes',2:'Standard view · role scope, outcomes, and core tools',3:'Technical view · constraints, methods, architecture, and implementation'};
function setDepth(value){body.classList.remove('depth-1','depth-2','depth-3');body.classList.add(`depth-${value}`);status.textContent=descriptions[value];localStorage.setItem('resume-depth',value)}
depth.value=localStorage.getItem('resume-depth')||'2';setDepth(depth.value);depth.addEventListener('input',e=>setDepth(e.target.value));
document.querySelectorAll('.role-toggle').forEach(button=>button.addEventListener('click',()=>{const role=button.closest('.role');const open=role.classList.toggle('open');button.setAttribute('aria-expanded',String(open));button.querySelector('.toggle-icon').textContent=open?'−':'+'}));
