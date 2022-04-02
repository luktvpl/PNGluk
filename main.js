
var screen = document.getElementById("c");
var c = screen.getContext("2d");
var TapLocation = {x:0,y:0}
var debug = true;
var micDebug = false;
var phisicDebuge = false;
var mc = new FontFace("minecraft",'url("./font/minecraft_pl_font.woff")')
var HtmlIN = document.getElementById("other")
//dotyk
screen.addEventListener("mousedown",function(e) {
    TapLocation = getMousePos(e)
    tap(TapLocation.x,TapLocation.y);
},false)
//zdobywanie pozycji myszki
function getMousePos(mouseEvent) {
    return {
      x: mouseEvent.clientX,
      y: mouseEvent.clientY
    };
}

function clog(loge){
    if(debug) console.log(loge)
}
//wczytywanie czcionki
mc.load().then(mc => {
    document.fonts.add(mc)
    LoadUI();
})
var loudness;
var MocM=25;
var x=0;
var y=0;
var LoadingState = {
    main:"",
    details:""
}
var screen = "loading"
var tło ={
    AS:0,
    colors:['#ff00ff','#0033cc','#00ff00'],
}
var mruga = "n";
var mówi = "z"
var skacze = true;
var loadedAssets = 0;
//wczytywanie obrazków obrazki (ui)
var assety = {
    screen_blue:"",
    screen_green:"",
    screen_pink:"",
    state_image_om:"",
    state_image_on:"",
    state_image_zm:"",
    state_image_zn:"",
    state_select:"",
    ui_button_m1:"",
    ui_button_m10:"",
    ui_button_p1:"",
    ui_button_p10:"",
    ui_button_back:"",
    ui_button_experimental:"",
    ui_button_hide:"",
    ui_button_horizontal:"",
    ui_button_options:"",
    ui_button_vertical:"",
    ui_check_false:"",
    ui_check_true:"",
    ui_icon_bin:"",
    ui_icon_discord:"",
    ui_icon_github:"",
    ui_icon_tiktok:"",
    ui_icon_website:"",
    ui_icon_youtube:"",
    ui_move_0:"",
    ui_move_1:"",
    ui_text_author:"",
    ui_text_BackGroundColor:"",
    ui_text_blink:"",
    ui_text_help:"",
    ui_text_luk:"",
    ui_text_mic:"",
    ui_text_move:"",
    ui_title_advance:"",
    ui_title_author:"",
    invisible:""
}
//lista asstetów (ui)
var AssetsList = [
    "screen_blue",
    "screen_green",
    "screen_pink",
    "state_image_om",
    "state_image_on",
    "state_image_zm",
    "state_image_zn",
    "state_select",
    "ui_button_m1",
    "ui_button_m10",
    "ui_button_p1",
    "ui_button_p10",
    "ui_button_back",
    "ui_button_experimental",
    "ui_button_hide",
    "ui_button_horizontal",
    "ui_button_options",
    "ui_button_vertical",
    "ui_check_false",
    "ui_check_true",
    "ui_icon_bin",
    "ui_icon_discord",
    "ui_icon_github",
    "ui_icon_tiktok",
    "ui_icon_website",
    "ui_icon_youtube",
    "ui_move_0",
    "ui_move_1",
    "ui_text_author",
    "ui_text_BackGroundColor",
    "ui_text_blink",
    "ui_text_help",
    "ui_text_luk",
    "ui_text_mic",
    "ui_text_move",
    "ui_title_advance",
    "ui_title_author",
    "invisible"

]

//wczytuje ui

function LoadUI() {
    start();
    c.fillStyle = tło.colors[tło.AS];
    c.fillRect(0, 0, window.innerWidth, window.innerHeight);
    c.font = '48px serif';
    c.fillText('wczytywanie assetów', 10, 50);

    AssetsList.forEach(asset => {
        c.fillStyle = tło.colors[tło.AS];
        c.fillRect(0, 0, window.innerWidth, window.innerHeight);
        c.font = '48px minecraft';
        c.fillText('wczytywanie assetów', 10, 50);
        LoadingState.main = "wczytywanie assetów"
        try {
            var ass = new Image;
            ass.src = "./ui/"+asset+".png"
            ass.onload = function () {
            clog("wcztano : "+asset)
            LoadingState.details = "wcztano : "+asset;
            assety[asset] = ass;
        }
        }catch{
            clog("nie wcztano : "+asset)
        }
        setTimeout(() => {
           if (asset == AssetsList[AssetsList.length*1-1]){
                screen = "main_and_ui";
                recalcdata()
            } 
        }, 100);
           
        
        
        
    })
    loadedAssets += 1;
    recalcdata();
}
//reszta skryptów
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
//ui data zbyt skomplikowane dla prostych ludzi nie tykać

var TouchData = {
    main : [],
    main_and_ui : [],
    credits :[],
    options : [],
    InfoMessage : [],
    ErrorMesseger : [],

}
//renderowanie
function render(){
    try {
        //c.drawImage(tło.sksjl,0,0,0,0)
    switch (screen) {
        
        case "main":
            
            c.fillStyle = tło.colors[tło.AS];
            c.fillRect(0, 0, window.innerWidth, window.innerHeight);
            c.drawImage(window["AS"+mówi+mruga],RenderData.doll.x+x,RenderData.doll.y+y,RenderData.doll.dx+x,RenderData.doll.dy+y);//

            break;
        case "main_and_ui":
            c.fillStyle = tło.colors[tło.AS];
            c.fillRect(0, 0, window.innerWidth, window.innerHeight);
            c.drawImage(window["AS"+mówi+mruga],RenderData.doll.x+x,RenderData.doll.y+y,RenderData.doll.dx+x,RenderData.doll.dy+y);
            //reszta ui
            c.drawImage(assety.state_select,RenderData.state_select.x,RenderData.state_select.y,RenderData.state_select.dx,RenderData.state_select.dy)
            c.drawImage(assety.ui_button_experimental,RenderData.ui_button_experimental.x,RenderData.ui_button_experimental.y,RenderData.ui_button_experimental.dx,RenderData.ui_button_experimental.dy)
            c.drawImage(assety.ui_button_hide,RenderData.ui_button_hide.x,RenderData.ui_button_hide.y,RenderData.ui_button_hide.dx,RenderData.ui_button_hide.dy)
            c.drawImage(assety.ui_button_options,RenderData.ui_button_options.x,RenderData.ui_button_options.y,RenderData.ui_button_options.dx,RenderData.ui_button_options.dy)
            /*c.font = RenderData.text+'px minecraft';
            c.fillText("hej",0,50)*/
            break;
        case "options":
            c.fillStyle = tło.colors[tło.AS];
            c.fillRect(0, 0, window.innerWidth, window.innerHeight);
            c.drawImage(assety.ui_button_back,RenderData.ui_button_back.x,RenderData.ui_button_back.y,RenderData.ui_button_back.dx,RenderData.ui_button_back.dy)
            c.drawImage(assety.state_select,RenderData.state_select.x,RenderData.state_select.y,RenderData.state_select.dx,RenderData.state_select.dy)
            break;
        case "loading":
            c.fillStyle = tło.colors[tło.AS];
            c.fillRect(0, 0, window.innerWidth, window.innerHeight)
            c.fillStyle = 'black';
            c.font = '40px minecraft';
            c.fillText(LoadingState.main,0,25)
            c.fillText(LoadingState.details,0,50)
            break
        case "experimental" :
            c.fillStyle = tło.colors[tło.AS];
            c.fillRect(0, 0, window.innerWidth, window.innerHeight);
            c.drawImage(assety.ui_button_back,RenderData.ui_button_back.x,RenderData.ui_button_back.y,RenderData.ui_button_back.dx,RenderData.ui_button_back.dy)
        break
        default:
            clog("Render Error")
            c.fillStyle = 'blue';
            c.fillRect(0, 0, window.innerWidth, window.innerHeight);
            c.fillStyle = 'black';
            c.font = '40px minecraft';
            c.fillText("Render Error",4,25)
            break;
    }    
    } catch {
      c.fillStyle = 'blue';
      c.fillRect(0, 0, window.innerWidth, window.innerHeight);
      c.fillStyle = 'black';
      c.font = '40px minecraft';
      c.fillText("Render Error",4,25)
    } 
        /*c.font = '48px serif';
        c.fillText('wczytywanie assetów', 10, 300);*/
    
    
}
//przelicza rozmiar ui
function recalcdata(){
    try {
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
    //inne assety
    //(state select)
    var monożnik= window.innerWidth/assety.state_select.width
    RenderData.state_select = {
        x:0,
        y:window.innerHeight-monożnik*assety.state_select.height,
        dx:window.innerWidth,
        dy:monożnik*assety.state_select.height,
    }
    //experimantal+hide+options button
    monożnik = window.innerWidth/assety.ui_button_experimental.width/3;
    RenderData.ui_button_experimental ={
        x:assety.ui_button_experimental.width*monożnik*2,
        y:0,
        dx:assety.ui_button_experimental.width*monożnik,
        dy:assety.ui_button_experimental.height*monożnik,
        fixx:assety.ui_button_experimental.width*monożnik*2+assety.ui_button_experimental.width*monożnik,
        fixy:assety.ui_button_experimental.height*monożnik,
        funct : "experimental"
    }
    RenderData.ui_button_hide ={
        x:assety.ui_button_experimental.width*monożnik*1,
        y:0,
        dx:assety.ui_button_experimental.width*monożnik,
        dy:assety.ui_button_experimental.height*monożnik,
        fixx:assety.ui_button_experimental.width*monożnik*1+assety.ui_button_experimental.width*monożnik,
        fixy:assety.ui_button_experimental.height*monożnik,
        funct : "hide"
    }
    RenderData.ui_button_options ={
        x:assety.ui_button_experimental.width*monożnik*0,
        y:0,
        dx:assety.ui_button_experimental.width*monożnik,
        dy:assety.ui_button_experimental.height*monożnik,
        fixx:assety.ui_button_experimental.width*monożnik*0+assety.ui_button_experimental.width*monożnik,
        fixy:assety.ui_button_experimental.height*monożnik,
        funct : "options"
    }
    //back button
    RenderData.ui_button_back ={
        x:assety.ui_button_experimental.width*monożnik*0,
        y:0,
        dx:assety.ui_button_experimental.width*monożnik,
        dy:assety.ui_button_experimental.height*monożnik,
        fixx:assety.ui_button_experimental.width*monożnik*0+assety.ui_button_experimental.width*monożnik,
        fixy:assety.ui_button_experimental.height*monożnik,
        funct : "back"
    }
    //text resize
    RenderData["text"] = Math.round(window.innerHeight/100*10)
    console.log(RenderData.text)
    console.log(monożnik)
    
    //inne
    RenderData.screen.w=window.innerWidth;
    RenderData.screen.h=window.innerHeight   
    }catch{

    }
    
}
//tap (funkcja)
function tap(x,y){
    
    clog(x+"+"+y);
    switch (screen) {
        case "main":
            checktouch(RenderData.ui_button_hide,x,y);
        break;
        case "main_and_ui" :
            checktouch(RenderData.ui_button_hide,x,y);
            checktouch(RenderData.ui_button_experimental,x,y);
            checktouch(RenderData.ui_button_options,x,y);
        break;
        case "options" :
            checktouch(RenderData.ui_button_back,x,y);

        break;
        case "experimental":
            checktouch(RenderData.ui_button_back,x,y);
        break
        default:

        break
    }
    
   }
//funkcje guzikó
function checktouch(guziki,x,y) {
    if(guziki.x<=x&&guziki.fixx>=x&&guziki.y<=y&&guziki.fixy>=y) funkcjiie(guziki.funct)
}
function funkcjiie(funct) {
    switch (funct) {
        case "hide":
            if(screen=="main") screen="main_and_ui";else screen = "main"
        break
        case "options" :
            screen="options"
        break
        case "experimental" :
            screen="experimental"
        break
        case "back":
            screen="main_and_ui"
            document.getElementById("other").innerHTML = "";
        break
    }
}
//podstawowe funkcje włączane
render();
setTimeout(() => {
    recalcdata();
}, 1000);
function tick(){
    render();
    skoki();
}
setInterval(tick,16)
setInterval(chceck,100)
//podkoni (fizyka)
var sila=0;
function skoki(){
    if(skacze==true){
        if(mówi=="o"&&sila<3){
            sila +=0.3
        }else{
            if(y>=0){
            sila=0
            y=0
            }else{
                sila+=-1
            }
           
        }
        
        if(y<-10&&sila>0){
            
        }else {
            y-=sila;
        }
        if(phisicDebuge)clog("y:"+y+" sile:"+sila)
        
    }
}
//wykrywa zmiane rozmiary ekranu
function chceck(){
 if(window.innerHeight!=RenderData.screen.h||window.innerWidth!=RenderData.screen.w){
     recalcdata();
     
    document.getElementById("c").width = window.innerWidth;
    document.getElementById("c").height = window.innerHeight;
 }
}
//tets()
function tets(){
    HtmlIN.innerHTML = ImageInputGenerate("./ui/state_image_zn.png",500,500,"recalcdata")
    
}

//mruganie
setInterval(() => {
    mruga="n"
    var som =getRandomInt(0,3)
    if(som==1)mruga = "m"
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
        if(micDebug)clog(loudness);
        if (loudness>MocM){
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
  //image input generator
  function ImageInputGenerate(imageLocation,x,y,dx,dy,FunctionName){
      var output = '<label for="file-input"><img src="'+imageLocation+'" style="position: fixed; width: '+dx+'px;height: '+dy+'px; z-index: 2; top: '+y+'px; left: '+x+'px"/></label><input id="file-input" onchange="'+FunctionName+'()" type="file" style="visibility: hidden"/>'
      return output
  }
//przykłady użycia funkcji
//btoa() string to base64
//atob() base64 to string