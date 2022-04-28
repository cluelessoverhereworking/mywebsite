let path = document.querySelector("#name");

let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + ' ' + pathLength;
 
path.style.strokeDashoffset = pathLength;

window.addEventListener("scroll", function(e) {
 
  // What % down is it? 
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    
  // Length to offset the dashes
  var drawLength = pathLength * scrollPercentage;
  
  // Draw in reverse
  path.style.strokeDashoffset = pathLength - drawLength;
  
});



let about= document.getElementById(`resume`)

about.addEventListener(`click`,function(){
  console.log(`hello`)
})