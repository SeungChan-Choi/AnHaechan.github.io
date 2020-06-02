var s1 = {name: "blue hawaii", pic:"empty", abs:"15%", taste: "Watch and see the hawaii", ingredients : ["lum","karso","coconut"] };

var s2 = {name: "screw driver", pic:"empty", abs:"25%", taste: "Dangerous sweetness", ingredients : ["lum","sweet and sour"]};

var s3 = {name: "blue hawaii", pic:"empty", abs:"15%", taste: "Watch and see the hawaii", ingredients : ["lum","karso","coconut"] };

var s4 = {name: "screw driver", pic:"empty", abs:"25%", taste: "Dangerous sweetness", ingredients : ["lum","sweet and sour"]};

var s5 = {name: "blue hawaii", pic:"empty", abs:"15%", taste: "Watch and see the hawaii", ingredients : ["lum","karso","coconut"] };

var s6 = {name: "screw driver", pic:"empty", abs:"25%", taste: "Dangerous sweetness", ingredients : ["lum","sweet and sour"]};

var s7 = {name: "blue hawaii", pic:"empty", abs:"15%", taste: "Watch and see the hawaii", ingredients : ["lum","karso","coconut"] };

var s8 = {name: "screw driver", pic:"empty", abs:"25%", taste: "Dangerous sweetness", ingredients : ["lum","sweet and sour"]};

var interest_cocktails = [s1,s2,s3,s4,s5,s6,s7,s8];

var interestContainer = document.getElementById("interested_items");




$(document).ready(function() { 
    bindEvents();

});


function addInterestElem(item){
   var itemDiv = document.createElement("div");
   itemDiv.setAttribute("class","item col-xs-4");
  itemDiv.innerHTML = "<a>" + item.name;
 
  //itemDiv.addEventListener( "click", function(){
   // this.innerHTML = item.pic;
    // 
 // }
 // );
  interestContainer.appendChild(itemDiv);
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




