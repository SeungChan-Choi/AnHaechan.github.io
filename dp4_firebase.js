// 다른 코드에서 쓰는 변수, 함수들:
// 다른 코드에서는 'likeCocktails', 'dislikeCocktails', 'interestCocktails'를 안심하고 써도 됨
// 추가하는 operation : 'writeToDatabase_like|dislike|interest (cocktail_data)'
// 없애는 opreation : 'deleteFromDatabase_like|dislike|interest (cocktail_data)'






var firebaseConfig = {
    apiKey: "AIzaSyAd5SlRlQygznY3NzYtxdi52kdRCKbcN2o",
    authDomain: "hci-dp4-teamsumi.firebaseapp.com",
    databaseURL: "https://hci-dp4-teamsumi.firebaseio.com",
    projectId: "hci-dp4-teamsumi",
    storageBucket: "hci-dp4-teamsumi.appspot.com",
    messagingSenderId: "457957426218",
    appId: "1:457957426218:web:2be9d5bac4d8394b386f53"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
 
//////////////////////////////
var s1 = {name: "blue hawaii", pic:"blue_hawaii.jpg", abs:"15%", taste: "Watch and see the hawaii", ingredients : ["lum","karso","coconut"] };

var s2 = {name: "blue monday", pic:"blue_monday.jpg", abs:"25%", taste: "Dangerous sweetness", ingredients : ["lum","sweet and sour"]};

var s3 = {name: "blue sapphire", pic:"blue_sapphire.jpg", abs:"15%", taste: "Watch and see the hawaii", ingredients : ["lum","karso","coconut"] };

var s4 = {name: "screw driver", pic:"screw_driver.jpg", abs:"25%", taste: "Dangerous sweetness", ingredients : ["lum","sweet and sour"]};

var s5 = {name: "orange blossom", pic:"orange_blossom.jpg", abs:"15%", taste: "Watch and see the hawaii", ingredients : ["lum","karso","coconut"] };

var s6 = {name: "mimosa", pic:"mimosa.jpg", abs:"25%", taste: "Dangerous sweetness", ingredients : ["lum","sweet and sour"]};



  ///////////////////////////////////
 
  
var interest_listener = document.createElement("div");
interest_listener.addEventListener("click", function(){
    addInterestElems();
  });

var like_listener = document.createElement("div");
like_listener.addEventListener("click", function(){
    addLikeElems();
  });



var dislike_listener = document.createElement("div");
dislike_listener.addEventListener("click", function(){
    addDislikeElems();
  });


var likeCocktails=[];
var dislikeCocktails=[];
var interestCocktails=[];



 //interest

  function writeToDatabase_interest(cocktail) {
      if ( interestCocktails.includes(cocktail)) return;
    interestCocktails.push(cocktail);
    firebase.database().ref('/interestBox/').set(interestCocktails);
  }
  
  function readFromDatabase_interest(isListPage) {
    return firebase.database().ref('/interestBox/').on('value', function(snapshot) {
      
      var myValue = snapshot.val();
     if (myValue==null) interestCocktails=[];
     else interestCocktails= myValue;

     if (isListPage==true) {
        console.log('here'); 
        interest_listener.click();
    }

  });
  }

  function deleteFromDatabase_interest(cocktail){
       var tmp_interestCocktails=[]
       for (var i=0; i<interestCocktails.length; i++){
           if (interestCocktails[i]['name'] != cocktail['name']){
               tmp_interestCocktails.push(interestCocktails[i]);
           }
       }
       interestCocktails=tmp_interestCocktails;

       firebase.database().ref('/interestBox/').set(interestCocktails);
    
  }


  //like

  function writeToDatabase_like(cocktail) {
    if ( likeCocktails.includes(cocktail)) return;
    likeCocktails.push(cocktail);
    firebase.database().ref('/likeBox/').set(likeCocktails);
  }

  
  function readFromDatabase_like(isListPage) {
    return firebase.database().ref('/likeBox/').on('value', function(snapshot) {
      
      var myValue = snapshot.val();
     if (myValue==null) likeCocktails=[];
     else likeCocktails= myValue;

     if (isListPage==true){
      console.log('like'); 
       like_listener.click();
     }

  });
  }

  function deleteFromDatabase_like(cocktail){
       var tmp_likeCocktails=[]
       for (var i=0; i<likeCocktails.length; i++){

           if (likeCocktails[i]['name'] != cocktail['name']){
               tmp_likeCocktails.push(likeCocktails[i]);
           }
       }
       likeCocktails=tmp_likeCocktails;

       firebase.database().ref('/likeBox/').set(likeCocktails);
    
  }

 
//dislike

function writeToDatabase_dislike(cocktail) {
    if ( dislikeCocktails.includes(cocktail)) return;
    dislikeCocktails.push(cocktail);
    firebase.database().ref('/dislikeBox/').set(dislkeCocktails);
  }

  function readFromDatabase_like(isListPage) {
    return firebase.database().ref('/likeBox/').on('value', function(snapshot) {
      
      var myValue = snapshot.val();
     if (myValue==null) likeCocktails=[];
     else likeCocktails= myValue;

     if (isListPage==true){
       like_listener.click();
     }

  });
  }
  
  function readFromDatabase_dislike(isListPage) {
    return firebase.database().ref('/dislikeBox/').on('value', function(snapshot) {
      
      var myValue = snapshot.val();
     if (myValue==null) dislikeCocktails=[];
     else dislikeCocktails= myValue;

     if (isListPage==true){
       dislike_listener.click();
     }
  });
  }

  function deleteFromDatabase_dislike(cocktail){
       var tmp_dislikeCocktails=[]
       for (var i=0; i<dislikeCocktails.length; i++){
           if (dislikeCocktails[i]['name'] != cocktail['name']){
               tmp_dislikeCocktails.push(dislikeCocktails[i]);
           }
       }
       dislikeCocktails=tmp_dislikeCocktails;

       firebase.database().ref('/dislikeBox/').set(dislikeCocktails);
    
  }

