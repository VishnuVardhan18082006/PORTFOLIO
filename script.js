const nHome=document.getElementById('nHome')
const nAch=document.getElementById('nAch')
const nContact=document.getElementById('nContact')
const nProjects=document.getElementById('nProjects')

const nHelp=document.getElementById('nHelp')
const home=document.getElementById('home')
const ach=document.getElementById('ach')
const contact=document.getElementById('contact')
const projects=document.getElementById('projects')


nAch.addEventListener('click', () => {
  ach.style.display = 'block'
  home.style.display = 'none'
  contact.style.display = 'none'
  projects.style.display = 'none'
  
})

nHome.addEventListener('click', () => {
  home.style.display = 'block'
  ach.style.display = 'none'
  contact.style.display = 'none'
  projects.style.display = 'none'
  
})


nContact.addEventListener('click', function() {
    home.style.display = 'none';
    ach.style.display = 'none';
    contact.style.display = 'block';
    projects.style.display = 'none';
    
});

nProjects.addEventListener('click', function() {
    home.style.display = 'none';
    ach.style.display = 'none';
    contact.style.display = 'none';
    projects.style.display = 'block';
    
});


const navClick=(id)=>{
  for(let i=1;i<=4;i++){
    if(i!=id){
      document.querySelector('.nav p:nth-child('+i+')').style.backgroundColor='black'
    }
  }
  const nav=document.querySelector('.nav p:nth-child('+id+')')
  nav.style.backgroundColor='red'
}
