var getImagen = document.getElementById("imagen-table")
var req = new XMLHttpRequest();
var url = 'http://localhost:10000/image/image-3.jpg';

function GetImages (){

  //ASINCRONA
  var req = new XMLHttpRequest();
  var url = 'http://localhost:10000/image/image-3.jpg';

  req.open('GET', url, true);
  req.onreadystatechange = function () {
     
    if (req.readyState==4){
      if (req.status===200) 
      {
        console.log(req)
        var imagen = document.createElement("img")
        imagen.src = req.response
        imagen.className ="CuteDoggo";
        getImagen.appendChild(imagen)
      }
      else {
        console.log("not found")
      }

    }
  };
  req.send(null); 
}
