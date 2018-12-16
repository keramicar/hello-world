

let allpages = document.querySelectorAll('main');
let allbutton = document.querySelectorAll('button');
 current();
 
 
 

 function current() {
    removePage();
    allpages[0].style.display = 'block';
    buttons();
    allbutton[0].classList.add('current');
 
 }

 function buttons() {
  for ( var i = 0; i < allbutton.length; i++) {
  
  allbutton[i].classList.remove('current');
  
 }
 }

 function removePage() {
   for (let i = 0; i < allpages.length; i++) {
    allpages[i].style.display = 'none';
 }
 }

 function changePage() {
  if ((allpages[0].style.display = 'block') || (allpages[2].style.display ='block')) {
    removePage();
    allpages[1].style.display = 'block';
    buttons();
    allbutton[1].classList.add('current');

   
   
    
    
 }
 }

 function changePage2() {
  if ((allpages[0].style.display = 'block') || (allpages[1].style.display = 'block')) {
    removePage();
    allpages[2].style.display = 'block';
     buttons();
     allbutton[2].classList.add('current');
    
 }
 }

