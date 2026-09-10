const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.site-header nav');

toggle.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded',String(open));
});

nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded','false');
}));

document.getElementById('eventForm').addEventListener('submit',function(e){
  e.preventDefault();
  const f=new FormData(this);
  const brands=f.getAll('brand').join(', ') || 'Not selected yet';
  const subject=encodeURIComponent("Z's Glizzys event inquiry");
  const body=encodeURIComponent(
`Name: ${f.get('name')}
Email: ${f.get('email')}
Event date: ${f.get('date') || 'TBD'}
Estimated guests: ${f.get('guests') || 'TBD'}
Location: ${f.get('location') || 'TBD'}
Interested in: ${brands}

Theme / vision:
${f.get('vision') || 'Not provided'}`
  );
  window.location.href=`mailto:sarah@zglizzy.com?subject=${subject}&body=${body}`;
});