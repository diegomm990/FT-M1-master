// function saludar(saludo){
//     return function(nombre){
//         console.log(saludo + " " +nombre)
//     }
// }
// var saludo = saludar("Hola");
// saludo("Diego");

var creaFuncion = function(){
    var arreglo=[];
    
     for(var i=0; i<8; i++){
              arreglo.push(
                       function(){
                                console.log(i);
                            }
              )
    }
     return arreglo;
}     
var arr=creaFuncion();
arr[0]()//3sale un3,qué esperaban ustedes ??
arr[1]()//3
arr[2]()//3

var creaFuncion = function(){
    var arreglo=[];
    
     for(var i=0; i<8; i++){
              arreglo.push(
                       function(j){
                                return function(){console.log(j)};
                            }(i)
              )
    }
     return arreglo;
}     
var arr=creaFuncion();
arr[0]()//3sale un3,qué esperaban ustedes ??
arr[1]()//3
arr[2]()//3


function hacerSaludo(lenguaje) {
    if(lenguaje == "en"){
        console.log("Hi!")
    }
    if(lenguaje == "es"){
        console.log("Hola!")
    }
    if(lenguaje !== "es" && lenguaje !== "en"){console.log("Language not registered")}
}
hacerSaludo("en")
hacerSaludo("es")
hacerSaludo("fr")
