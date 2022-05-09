pole = [0, 0, 0,0,0,0,0,0, 0, 0, 0,0,0,0,0,0,0, 0, 0,0,0,0,0,0 ]; // одномерный массив
var apple=0;
for(i=1;i<=5;i++){
    idImg=document.getElementById("apple"+i);
    idImg.src="img/apple_empty.png";
}
pole11.src="img/dracon.png"
document.addEventListener("keydown", move);
var step=1;
var row=1;
function move(event){
    if(event.key=="ArrowRight"){
        idImg=document.getElementById("pole"+row+step);
        idImg.src="img/spacer.gif";
        step++;
        if (step>=8){step=8}
        idImg=document.getElementById("pole"+row+step);
        idImg.src="img/dracon.png";
        proverka();
    }
    if(event.key=="ArrowLeft"){
        idImg=document.getElementById("pole"+row+step);
        idImg.src="img/spacer.gif";
        step--;
        if (step<=1){step=1}
        idImg=document.getElementById("pole"+row+step);
        idImg.src="img/dracon.png";
        proverka();
    }
    if(event.key=="ArrowUp"){
        idImg=document.getElementById("pole"+row+step);
        idImg.src="img/spacer.gif";
        row--;
        if (row<=1){row=1}
        idImg=document.getElementById("pole"+row+step);
        idImg.src="img/dracon.png";
        proverka();
    }
    if(event.key=="ArrowDown"){
        idImg=document.getElementById("pole"+row+step);
        idImg.src="img/spacer.gif";
        row++;
        if (row>=3){row=3;}
        idImg=document.getElementById("pole"+row+step);
        idImg.src="img/dracon.png";
        proverka();
    }
}

var aplrow=3; 
var aplstep=8;
interval = setInterval(setapple, 3000);

function setapple(){
idApl=document.getElementById("pole"+aplrow+aplstep);
idApl.src="img/spacer.gif";
pole[(aplrow-1)*8+aplstep-1]=0;
aplstep= Math.floor(Math.random() * 8 + 1);
aplrow= Math.floor(Math.random() * 3 + 1);
idApl=document.getElementById("pole"+aplrow+aplstep);
idApl.src="img/apple.png";
pole[(aplrow-1)*8+aplstep-1]=1;
}
function proverka(){
    
    if(pole[(row-1)*8+step-1]==1){
        idImg=document.getElementById("pole"+row+step);
        idImg.src="img/dracon.png";
        apple++;
        idImg=document.getElementById("apple"+apple);
        idImg.src="img/apple.png";
        if (apple==5){
           clearInterval(interval); 
           win.src="img/winner.gif";
            
        }
        
    }

}
