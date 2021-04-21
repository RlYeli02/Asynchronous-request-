var getImagen = document.getElementById("imagen-table")

function GetImages (){
    //ASINCRONA
    var req = new XMLHttpRequest();
    
    req.open('GET', 'https://dog.ceo/api/breeds/image/random');
    req.onreadystatechange = function () {
      if (req.status===200) 
      {

        var k = JSON.parse(req.response)
        console.log(k.message)
        var imagen = document.createElement("img")
        imagen.src = k.message
        imagen.className ="CuteDoggo";
        getImagen.appendChild(imagen)
      }
      else{
          console.log("not found")
      }
    };
    req.send(null); 

    //SINCRONA

    // var req = new XMLHttpRequest();
    // console.log("hola")
    
    // console.log("klk")
    // req.open('GET', 'https://dog.ceo/api/breeds/image/random', true)
    // req.send(null);
    // if(req.status==200){
    //     console.log(req.response)
    // }
}
document.querySelector(".klk").addEventListener("click", GetImages)