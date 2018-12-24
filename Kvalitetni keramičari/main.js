var displayedImage=document.querySelector('.displayed-img');
var thumbBar=document.querySelector('#thumb-bar');

var btn=document.querySelector('button');
var overlay=document.querySelector('.overlay');

/*looping through images*/

 for (var i=1; i<=40; i++) {
  var newImage=document.createElement('img');
  newImage.setAttribute('src', 'img/pic' +i + '.jpg.');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e) {
   var imgSrc=e.target.getAttribute('src');
   displayImage(imgSrc);
 }
 }

 function displayImage(imgSrc) {
  displayedImage.setAttribute('src', imgSrc);
 }

 /*darken/lighten button*/

 btn.onclick=function() {
  var btnClass=btn.getAttribute('class');
  if (btnClass==='dark') {
   btn.setAttribute('class','light');
   btn.textContent='Lighten';
   overlay.style.backgroundColor='rgba(0,0,0,0.5)';
 } else {
    btn.setAttribute('class','dark');
    btn.textContent='darken';
    overlay.style.backgroundColor='rgba(0,0,0,0)';
 }
 }