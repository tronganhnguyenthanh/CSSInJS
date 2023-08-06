document.querySelector(".btn-readMore").addEventListener("click", function(){
 document.querySelector("#left").remove()
})

document.querySelector(".choose-image").addEventListener("change", function(e){
  if(e.target.value === "1"){
   document.querySelector(".kitten").style.width = "90%";
  }
  if(e.target.value === "2"){
   document.querySelector(".kitten").style.width = "70%"
  }
  if(e.target.value === "3"){
   document.querySelector(".kitten").style.width = "40%"
  }
  if(e.target.value === "4"){
   document.querySelector(".kitten").style.width = "35%"
  }
})

document.querySelector(".choose-background").addEventListener("change", function(e){
  if(e.target.value === "0"){
   document.querySelector(".center-sidebar").style.backgroundColor = "red";
  }
  if(e.target.value === "1"){
   document.querySelector(".center-sidebar").style.backgroundColor = "orangered";
  }
  if(e.target.value === "2"){
   document.querySelector(".center-sidebar").style.backgroundColor = "purple";
  }
  if(e.target.value === "3"){
   document.querySelector(".center-sidebar").style.backgroundColor = "violet"
  }
})

