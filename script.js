const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.site-header nav');
toggle.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.getElementById('eventForm').addEventListener('submit', function(e){
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
  window.location.href=`mailto:YOUR_EMAIL_HERE?subject=${subject}&body=${body}`;
});