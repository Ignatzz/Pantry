
var queryURL = "http://api.yummly.com/v1/api/recipes?_app_id=30ea9a46&_app_key=3d03668731b2112fff8aac21cb03c4ca&q=onion+soup"

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          
          console.log(response);

        for(var i = 0; i < response.matches.length; i++ ) {
          
        
          var recipeKey = response.matches[i].id




          console.log(recipeKey);
        

          var idURL = "http://api.yummly.com/v1/api/recipe/" + recipeKey + "?_app_id=30ea9a46&_app_key=3d03668731b2112fff8aac21cb03c4ca"

          $.ajax({
            url: idURL,
            method: "GET"
          }).then(function(result){
            console.log(result);

            var resultImgs = result.images[0].hostedMediumUrl
            var recipeURL = result.attribution.url
           
            var ingredImg = $("<img>");

            $("#ingredHere").append(ingredImg);
            
            $(ingredImg).attr("src", resultImgs);
            // $(ingredImg).attr("src", recipeURL);
            
            // console.log(instructions);

          });
        }

        //  var recipeResponse = JSON.parse(response);
        //  console.log(recipeResponse.recipe.f2f_url);

        //  $("#ingredhere").html(recipeResponse.recipe.f2f_url);
        //   console.log(response);

        //  var recipeResponse = JSON.parse(response);
        //  console.log(recipeResponse.recipe.f2f_url);

        //  $("#ingredhere").html(recipeResponse.recipe.f2f_url);

     

  // Initialize Firebase
    // var config = {
    //     apiKey: "AIzaSyDMQKoXzxho2wVMf6eGMQRctvUAuo5I31A",
    //     authDomain: "socialpantry-29e0d.firebaseapp.com",
    //     databaseURL: "https://socialpantry-29e0d.firebaseio.com",
    //     projectId: "socialpantry-29e0d",
    //     storageBucket: "socialpantry-29e0d.appspot.com",
    //     messagingSenderId: "329527149006"
    // };
    // firebase.initializeApp(config);

    // var database = firebase.database();

    // var rUrl = recipeResponse.recipe.f2f_url;

    // database.ref().push({
    //     rUrl: rUrl,
    //     dateAdded: firebase.database.ServerValue.TIMESTAMP
    //   });
    
     });
