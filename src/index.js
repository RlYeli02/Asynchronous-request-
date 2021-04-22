var getImagen = document.getElementById("imagen-table")

function GetImagesAsync (){
    //ASINCRONA
    var req  = new XMLHttpRequest();
    var req2 = new XMLHttpRequest();
    var req3 = new XMLHttpRequest();
    var req4 = new XMLHttpRequest();
    var req5 = new XMLHttpRequest();
    var req6 = new XMLHttpRequest();
    var req7 = new XMLHttpRequest();
    var req8 = new XMLHttpRequest();
    var req9 = new XMLHttpRequest();
    req.open('GET', 'http://localhost:10000/image/image-1.jpg');
    req2.open('GET', 'http://localhost:10000/image/image-2.jpg');
    req3.open('GET', 'http://localhost:10000/image/image-3.jpg');
    req4.open('GET', 'http://localhost:10000/image/image-4.jpg');
    req5.open('GET', 'http://localhost:10000/image/image-5.jpg');
    req6.open('GET', 'http://localhost:10000/image/image-6.jpg');
    req7.open('GET', 'http://localhost:10000/image/image-7.jpg');
    req8.open('GET', 'http://localhost:10000/image/image-8.jpg');
    req9.open('GET', 'http://localhost:10000/image/image-9.jpg');
 
    req.onreadystatechange = function () {
      console.log(req, "req")
      if (req.readyState==4){
        if (req.status===200) 
        {
          var res = req.response
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
      console.log(req2, "req2")
      if (req2.readyState==4){
        if (req2.status===200) 
        {
          var res2 = req2.response
         
          var imagen = document.createElement("img")
          imagen.src = res2
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
      console.log(req3, "req3")
      if (req3.readyState==4){
        if (req3.status===200) 
        {
          var res3 = req3.response
          // console.log(res)
          var imagen = document.createElement("img")
          imagen.src = res3
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
      console.log(req4, "req4")
      if (req4.readyState==4){
        if (req4.status===200) 
        {
          var res4 = req4.response
          // console.log(res)
          var imagen = document.createElement("img")
          imagen.src = res4
          imagen.className ="CuteDoggo";
          getImagen.appendChild(imagen)
        }
        else{
          console.log("not found")
        }
      }
    };
    // Req 5 
    req5.onreadystatechange = function () {
      console.log(req5, "req5")
      if (req5.readyState==4){
        if (req5.status===200) 
        {
          var res5 = req5.response
          var imagen = document.createElement("img")
          imagen.src = res5
          imagen.className ="CuteDoggo";
          getImagen.appendChild(imagen)
        }
        else{
          console.log("not found")
        }
      }
    };

    // Req 6
    req6.onreadystatechange = function () {
      console.log(req6, "req6")
      if (req6.readyState==4){
        if (req6.status===200) 
        {
          var res6 = req6.response
          var imagen = document.createElement("img")
          imagen.src = res6
          imagen.className ="CuteDoggo";
          getImagen.appendChild(imagen)
        }
        else{
          console.log("not found")
        }
      }
    };

    // Req 7
    req7.onreadystatechange = function () {
      console.log(req7, "req7")
      if (req7.readyState==4){
        if (req7.status===200) 
        {
          var res7 = req7.response
          var imagen = document.createElement("img")
          imagen.src = res7
          imagen.className ="CuteDoggo";
          getImagen.appendChild(imagen)
        }
        else{
          console.log("not found")
        }
      }
    };

    // Req 8
    req8.onreadystatechange = function () {
      console.log(req8, "req8")
      if (req8.readyState==4){
        if (req8.status===200) 
        {
          var res8 = req8.response
          var imagen = document.createElement("img")
          imagen.src = res8
          imagen.className ="CuteDoggo";
          getImagen.appendChild(imagen)
        }
        else{
          console.log("not found")
        }
      }
    };

    // Req 9
    req9.onreadystatechange = function () {
      console.log(req9, "req9")
      if (req9.readyState==4){
        if (req9.status===200) 
        {
          var res9 = req9.response
          var imagen = document.createElement("img")
          imagen.src = res9
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
    req5.send(null); 
    req6.send(null); 
    req7.send(null); 
    req8.send(null); 
    req9.send(null); 
}

function GetImagesSync (){
  //SINCRONA
  var req  = new XMLHttpRequest();
  var req2 = new XMLHttpRequest();
  var req3 = new XMLHttpRequest();
  var req4 = new XMLHttpRequest();
  req.open('GET', 'http://localhost:10000/image/image-1.jpg', false);
  req2.open('GET', 'http://localhost:10000/image/image-2.jpg', false);
  req3.open('GET', 'http://localhost:10000/image/image-3.jpg', false);
  req4.open('GET', 'http://localhost:10000/image/image-4.jpg', false);
  req5.open('GET', 'http://localhost:10000/image/image-5.jpg', false);
  req6.open('GET', 'http://localhost:10000/image/image-6.jpg', false);
  req7.open('GET', 'http://localhost:10000/image/image-7.jpg', false);
  req8.open('GET', 'http://localhost:10000/image/image-8.jpg', false);
  req9.open('GET', 'http://localhost:10000/image/image-9.jpg', false);

    req.send(null); 
    req2.send(null); 
    req3.send(null); 
    req4.send(null); 
    req5.send(null); 
    req6.send(null); 
    req7.send(null); 
    req8.send(null); 
    req9.send(null); 
    
      if (req.status===200) 
      {
        var res = req.response
        var imagen = document.createElement("img")
        imagen.src = res
        imagen.className ="CuteDoggo";
        getImagen.appendChild(imagen)
      }
      else{
        console.log("not found")
      }
    
  

  //Req 2
  
      if (req2.status===200) 
      {
        var res = req2.response
       
        var imagen = document.createElement("img")
        imagen.src = res
        imagen.className ="CuteDoggo";
        getImagen.appendChild(imagen)
      }
      else{
        console.log("not found")
      }
    
  

  // Req 3
  
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
    
  

  // Req 4
 
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
var h=document.getElementById("klk");
h.onclick = GetImagesAsync

var a=document.getElementById("klkSync");
a.onclick = GetImagesSync