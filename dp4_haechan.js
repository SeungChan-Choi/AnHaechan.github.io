var s1 = {name: "blue hawaii", pic:"blue_hawaii.jpg", abs:"15%", taste: "Watch and see the hawaii", ingredients : ["lum","karso","coconut"] };

var s2 = {name: "blue monday", pic:"blue_monday.jpg", abs:"25%", taste: "Dangerous sweetness", ingredients : ["lum","sweet and sour"]};

var s3 = {name: "blue sapphire", pic:"blue_sapphire.jpg", abs:"15%", taste: "Watch and see the hawaii", ingredients : ["lum","karso","coconut"] };

var s4 = {name: "screw driver", pic:"screw_driver.jpg", abs:"25%", taste: "Dangerous sweetness", ingredients : ["lum","sweet and sour"]};

var s5 = {name: "orange blossom", pic:"orange_blossom.jpg", abs:"15%", taste: "Watch and see the hawaii", ingredients : ["lum","karso","coconut"] };

var s6 = {name: "mimosa", pic:"mimosa.jpg", abs:"25%", taste: "Dangerous sweetness", ingredients : ["lum","sweet and sour"]};


var interest_cocktails = [s1,s2,s3,s4,s5,s6];

var interestContainer = document.getElementById("interested_items");




$(document).ready(function() { 
  

});


function addInterestElem(item){
   var itemDiv = document.createElement("div");
  itemDiv.setAttribute("class","item col-xs-3");
  
  
  var img = document.createElement("img")
  img.setAttribute("class", "img-responsive interested_img");
  img.setAttribute("src", "./Images/"+item.pic);
  itemDiv.appendChild(img)

  itemDiv.innerHTML += ("<br>" + item.name+"<br>");
  itemDiv.addEventListener( "click", function(){
    location.href='./index2.html';
  });

  interestContainer.appendChild(itemDiv);

  
  var marginDiv = document.createElement("div");
  marginDiv.setAttribute("class", "item col-xs-1");

  interestContainer.appendChild(marginDiv);
}

function addInterestElems(){
  for (var i=0; i<interest_cocktails.length; i++ ){
    addInterestElem(interest_cocktails[i]);
  }
}


  


function bindEvents(){
  // Back button ; 어자피 html이니까 browser에서 뒤로가기하면됨!!
  addInterestElems();
}
bindEvents();




