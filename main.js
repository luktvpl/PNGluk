var c = document.getElementById("c").getContext("2d");
var loudness;
var x=0;
var y=0;
var mruga = "n";
var mówi = "z"
var skacze = true;
var RenderData={
    doll:{
        x:0,
        y:0,
        dx:300,
        dy:300,
    },
    screen:{
        w:window.innerWidth,
        h:window.innerHeight
    }
};
var SceenData={
    main:[
        "doll"
    ]
}
var ASscene={

}

  var data = {
    s1 : {
        loaded:true,
        //1-tylko mówienie 2-mówianie i mruganie
        type:1,
        on: "./demo/on.png",
        om: "./demo/om.png",
        zn: "./demo/zn.png",
        zm: "./demo/zm.png"
    }}

    //AS-aktualny stan
    var ASon = new Image();
    var ASom = new Image();
    var ASzn = new Image();
    var ASzm = new Image();
function setstate(statedate){
 
    ASon.src = statedate["on"];
    ASom.src = statedate["om"];
    ASzn.src = statedate["zn"];
    ASzm.src = statedate["zm"];

}
setstate(data.s1);


function start(){
    document.getElementById("c").width = window.innerWidth;
    document.getElementById("c").height = window.innerHeight;
}
function render(){
    document.getElementById("c").width = window.innerWidth;
    document.getElementById("c").height = window.innerHeight;
    c.fillStyle = '#ff00ff';
    c.fillRect(0, 0, window.innerWidth, window.innerHeight);
    c.drawImage(window["AS"+mówi+mruga],RenderData.doll.x+x,RenderData.doll.y+y,RenderData.doll.dx+x,RenderData.doll.dy+y);
    
}
//podstawowe funkcje włączane
render();
recalcdata();
setInterval(render,16)
setInterval(skoki,16)
setInterval(chceck,100)
//podkoni (fizyka)
var sila=0;
function skoki(){
    if(skacze==true){
        if(mówi=="o"){
            sila +=0.3
        }else{
            if(y>=0){
            sila=0
            y=0
            }else{
                sila+=-1
            }
           
        }
        
        if(y<-30&&sila>0){
            
        }else {
            y-=sila;
        }
        console.log("y:"+y+" sile:"+sila)
        
    }
}
//wykrywa zmiane rozmiary ekranu
function chceck(){
 if(window.innerHeight!=RenderData.screen.h||window.innerWidth!=RenderData.screen.w){
     recalcdata();
 }
}
//przelicza rozmiar ui
function recalcdata(){
    var w=window.innerWidth;
    var h=window.innerHeight;
    var Iw=ASzn.width;
    var Ih=ASzn.height;
    if(w>h){
        var hh = h-100;
        var size = h/Ih;
      RenderData.doll={
        x:w/2-Iw*size/2,
        y:50,
        dx:Iw*size-50,
        dy:Ih*size-50,
    }
    } else {
        var hw = w-100;
        var size = w/Iw;
      RenderData.doll={
        x:50,
        y:h/2-Ih*size/2,
        dx:Iw*size-50,
        dy:Ih*size-50,
    }
    }

    RenderData.screen.w=window.innerWidth;
    RenderData.screen.h=window.innerHeight
}
//mruganie
setInterval(() => {
    mruga="n"
    var som =getRandomInt(0,3)
    if(som==1)mruga = "m"
    console.log(som);
}, 1000);
// mic sprawdzanie (mówienie)
navigator.mediaDevices.getUserMedia({ audio: true }).then(function(stream) {
    audioContext = new AudioContext();
    analyser = audioContext.createAnalyser();
    microphone = audioContext.createMediaStreamSource(stream);
    javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);
    analyser.smoothingTimeConstant = 0.8;
    analyser.fftSize = 1024;
    microphone.connect(analyser);
    analyser.connect(javascriptNode);
    javascriptNode.connect(audioContext.destination);
    javascriptNode.onaudioprocess = function() {
        var array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        var values = 0;
  
        var length = array.length;
        for (var i = 0; i < length; i++) {
          values += (array[i]);
        }
  
        var average = values / length;
        loudness = Math.round(average)
        console.log(loudness);
        if (loudness>15){
            mówi="o"
        }else{
            mówi="z"
        }
    }
    })
    .catch(function(err) {
      /* handle the error */
  });
  //funkcjie pomocnicze
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }