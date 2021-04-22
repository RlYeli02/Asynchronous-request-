var getImagen = document.getElementById("imagen-table")

function GetImages (){
    //ASINCRONA
    var req  = new XMLHttpRequest();
    var req2 = new XMLHttpRequest();
    var req3 = new XMLHttpRequest();
    var req4 = new XMLHttpRequest();
    req.open('GET', 'http://localhost:10000/image/image-1.jpg');
    req2.open('GET', 'http://localhost:10000/image/image-2.jpg');
    req3.open('GET', 'http://localhost:10000/image/image-3.jpg');
    req4.open('GET', 'http://localhost:10000/image/image-4.jpg');
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
          // console.log(res)
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

    //Req 2
    req2.onreadystatechange = function () {
      if (req2.readyState==4){
        if (req2.status===200) 
        {
          var res = req2.response
          // console.log(res)
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

    // Req 3
    req3.onreadystatechange = function () {
      if (req3.readyState==4){
        if (req3.status===200) 
        {
          var res = req3.response
          // console.log(res)
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

    // Req 4
    req4.onreadystatechange = function () {
      if (req4.readyState==4){
        if (req4.status===200) 
        {
          var res = req4.response
          // console.log(res)
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
    req2.send(null); 
    req3.send(null); 
    req4.send(null); 
}
var h=document.getElementById("klk");
h.onclick = GetImages