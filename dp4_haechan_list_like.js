



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////firebase




//var interest_cocktails = [s1,s2,s3,s4,s5,s6]; // global varaible인 'interestCocktails'로 대체됨

//////////////////////////////////////////////////////////////////////////////////////////////////////

var likeContainer = document.getElementById("liked_items");







function addLikeElem(item){


  
  var totalDiv = document.createElement("div");
 totalDiv.setAttribute("class","col-xs-4 ml-auto");


   var itemDiv = document.createElement("div");
   itemDiv.setAttribute("class", "item col-xs-12");

     var img = document.createElement("img")
     img.setAttribute("class", "img-responsive interested_img");
     img.setAttribute("src", "./Images/"+item.pic);
     itemDiv.appendChild(img)

     itemDiv.innerHTML += ("<br> <div class='central'>" + item.name+"</div> <br>");
     itemDiv.addEventListener( "click", function(){
       location.href='./index_detail_'+ item.name.replace(/ /g, '')  +'_example.html'; // item name 따라 specify할것
     });


 totalDiv.appendChild(itemDiv);

 likeContainer.appendChild(totalDiv);
 
}






function addLikeElems(){
  likeContainer.innerHTML='';

  for (var i=0; i<likeCocktails.length; i++ ){
  
    addLikeElem(likeCocktails[i]);
  }
}


  









