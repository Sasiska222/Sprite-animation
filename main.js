//alert("НАЖМИТЕ СТАРТ ЧТОБЫ НАЧАТЬ");


function stat() {
  var can=document.getElementById("canvas"),
  con=can.getContext("2d"),
  x=10,y=175,
  xp=0,
  yp=0,
  
  bx=Math.floor(Math.random()*300+4),
  by=Math.floor(Math.random()*160+9),
  
  bx2=Math.floor(Math.random()*10+5),
  by2=Math.floor(Math.random()*50+5),
  
  ox2=Math.floor(Math.random()*400+5),
  oy2=Math.floor(Math.random()*100+5),
  
  ox=Math.floor(Math.random()*340+0),
  oy=Math.floor(Math.random()*100+0),
  grav=9,tuc=0,
  clear=function(){
    con.clearRect(0,0,can.width,can.height);
  },
  cat=new Image(),
  ptitsa=new Image(),
  obl=new Image(),
  grass=new Image(),
  
  ogon=new Image();
  
  cat.src="img/link.png";
  ptitsa.src="img/Ptica.png";
  obl.src="img/OblokoDya.png";
  grass.src="img/lava.png";
  ogon.src="img/ogon.png";
  
  if (y>50) {
    document.addEventListener("touchstart",
    function tsart() {
      y -= grav;
      
      requestAnimationFrame(tstart);
    });
  
  } else {
    y-=1;
  }
  
  function tic() {
    if(tuc >5.5){
      draw();
      tuc=0;
    }
    
    tuc+=1;
    if(xp>445){
      xp=0;
    }
      
    requestAnimationFrame(tic);
  }
  
  
  function draw() {
    xp=(xp===70 ? 0:xp +44.5);
    yp=340;
    clear();
    
   /* if(y<=100){
      y+=grav;
    }
    */
    if(y>=175){
      y-=grav;
      
    }
    else{
      y+=grav;
    }
   
  }
  
  cat.onload=tic;
  
  
  obl.onload=dra;
  grass.onload=dra;





function dra() {
    clear();
    
    con.drawImage(grass, 0, 200, 380,200);
    
    con.drawImage(obl,ox,oy,80,60);
    con.drawImage(obl,bx,by,60,20);
    con.drawImage(obl, ox2, oy2, 20, 10);
    con.drawImage(obl, bx2, by2, 50, 10);
    
    con.drawImage(cat,xp,yp,44,43,x,y,44,46);
   
    if(ox<=0){
     ox=400;
    }
    else if(bx<=0) {
      bx=370;
    }
    else if (bx2 <= 0) {
      bx2 = 390;
    }
    else if (ox2 <= 0) {
      ox2= 370;
    }
    else if(x>=350){
      x=-20;
    }
    ox -= 1;
    bx -= 1;
    bx2 -= 1;
    ox2 -= 1;
    x+=0.4;
    requestAnimationFrame(dra);
  
  }
}
  










//game jald выложить игру