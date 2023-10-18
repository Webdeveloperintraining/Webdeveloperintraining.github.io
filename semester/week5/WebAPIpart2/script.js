function happyFace() {
    const canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    ctx.stroke();
    
}


function frownyFace() {

    const canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(92, 100);
    ctx.arc(75, 110, 20, 0, Math.PI/ 1, true); // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    ctx.stroke();
}

function deleteCanva (){
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    //document.getElementById("happy").addEventListener("click",happyFace());
    //document.getElementById("frowny").addEventListener("click",frownyFace());

/*function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      ctx.beginPath();
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
      ctx.moveTo(110, 75);
      ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
      ctx.moveTo(65, 65);
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
      ctx.moveTo(95, 65);
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
      ctx.stroke();
    }
  }
  
  draw();
  */