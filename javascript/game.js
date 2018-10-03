// $( document ).ready() block. Code waiting for document to load (doucment ready jquery)

$( document ).ready(function() {
    console.log( "ready!" );
});

    // if(true){
        
    // } else if( true) {

    // } else {

    // }




    // if(1){
    //     console.log("true 1")
    // }

    // if(2){
    //     console.log("true 2")
    // }

    // if(3){
    //     console.log("true 3")
    // }






// y = "cats"

// switch (y) {

//     case "cats":
//     console.log("hello")
//     break;

//     case 2:
//     console.log("y is 2")
//     break;

//     default:
//     consoel.log("neither of them")
//     break;
// }





    // Wrap some code to be executed at a future time
    // function whateverWordYouWant(){
    // console.log("hello")

    // }

    // function iHateNamingStuff(a,b){
    //     return a+ b
    // }


    // var sum = iHateNamingStuff(2,3)
    // console.log(sum)


    // var newvariable = function() {
    //     return a+ b
    // }


    // var hereisthevalue = newvariable(1,2)





// objects 

// var myObject = {
//     key: "value",
//     value: "Jimmy",
//     favoriteFood: "Ceviche",
//     "where i live": "bayonne"

//     myFunction: function() {
//         console.log("hello world" + this.name)
//     }
// }

// // console.log(myObject.name)

// myObject.myFunction()

// myObject["name"]





    // var newObj = {

    //     stars: function() {
    //         console.log("here", this)

    //         var thirdobj = {
    //             onemore: function(){
    //                 console.log("inside", this)
    //             }
    //         }

    //         thirdobj.onemore()
    //     }
    // }

    // newObj.stars();



            
// var btn = document.getElementById("fancy-button")  

var btn= $("fancy-button")

    function generateRandos(tellmeNumber){
        return Math.floor(Math.random()*tellmeNumber)
    }


    btn.on("click", function(){
        console.log(generateRandos(302))
    })
            
            
            
//             function generateRandos(){

//             return Math.floor(Math.random()*20)
//             }
 
           

            // btn.onclick = function(){
            //     console.log(generateRandos(100))
            // }


            


//             // btn.addEventListener( 'click' , function () {
//             // console.log("with event listner")



            