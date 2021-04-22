var getImagen = document.getElementById("imagen-table")

function GetImages (){
    //ASINCRONA
    var req = new XMLHttpRequest();
    req.open('GET', 'http://localhost:10000/image/image-1.jpg');
    // req.open('GET', 'http://localhost:10000/image/image-2.jpg');
    // req.open('GET', 'http://localhost:10000/image/image-3.jpg');
    // req.open('GET', 'http://localhost:10000/image/image-4.jpg');
    // req.open('GET', 'http://localhost:10000/image/image-5.jpg');
    // req.open('GET', 'http://localhost:10000/image/image-6.jpg');
    // req.open('GET', 'http://localhost:10000/image/image-7.jpg');
    // req.open('GET', 'http://localhost:10000/image/image-8.jpg');
    // req.open('GET', 'http://localhost:10000/image/image-9.jpg');
    req.onreadystatechange = function () {
      if (req.readyState==4){
        if (req.status===200) 
        {
          var res = req.response
          console.log(res)
          var imagen = document.createElement("img")
          imagen.src = res
          imagen.className ="CuteDoggo";
          getImagen.appendChild(imagen)
        }
        else{
          console.log("not found")
        }
      }
    };
    req.send(null); 
}
