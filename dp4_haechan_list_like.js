



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////firebase




//var interest_cocktails = [s1,s2,s3,s4,s5,s6]; // global varaible인 'interestCocktails'로 대체됨

//////////////////////////////////////////////////////////////////////////////////////////////////////

var likeContainer = document.getElementById("liked_items");





function addLikeElem(item){
   var itemDiv = document.createElement("div");
  itemDiv.setAttribute("class","item col-xs-3");
  
  
  var img = document.createElement("img")
  img.setAttribute("class", "img-responsive interested_img");
  img.setAttribute("src", "./Images/"+item.pic);
  itemDiv.appendChild(img)

  itemDiv.innerHTML += ("<br>" + item.name+"<br>");
  itemDiv.addEventListener( "click", function(){
    location.href='./index_detail_'+ item.name.replace(/ /g, '')  +'_example.html';
  });

  likeContainer.appendChild(itemDiv);

  
  var marginDiv = document.createElement("div");
  marginDiv.setAttribute("class", "item col-xs-1");

  likeContainer.appendChild(marginDiv);
}


function addLikeElems(){
  likeContainer.innerHTML='';

  for (var i=0; i<likeCocktails.length; i++ ){
  
    addLikeElem(likeCocktails[i]);
  }
}


  









