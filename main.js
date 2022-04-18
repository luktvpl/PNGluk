
var screen = document.getElementById("c");
var save;
var diveł = document.getElementById("diveł");
var c = screen.getContext("2d");
var stopss = false;
function stop(){
    stopss = true;
}

var TapLocation = {x:0,y:0}
var debug = true;
var micDebug = false;
var phisicDebuge = false;
var mc = new FontFace("minecraft",'url("./font/minecraft_pl_font.woff")')
var HtmlIN = document.getElementById("other")
var textScalation = 57/28;
var save = 
//dotyk
screen.addEventListener("mousedown",function(e) {
    TapLocation = getMousePos(e)
    tap(TapLocation.x,TapLocation.y);
},false)
//reset save
var timer;
screen.addEventListener("mousedown", function(e) {
    console.log("cos")
    timer = setTimeout( tryfixsave, 5000 );
  },false);
  
screen.addEventListener("mouseup", function(e) {
    clearTimeout( timer );
  },false);
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
var loudness=0;
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
    names:["pink","blue","green"]
}
var mruga = "n";
var mówi = "z"
var skacze = true;
var loadedAssets = 0;
//wczytywanie obrazków obrazki (ui)
var statesAssety = {

}
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
    invisible:"",
    recfalse:"",
    rectrue:"",
}
//lista asstetów (ui)
var AssetsList = [
    "screen_blue",
    "recfalse",
    "rectrue",
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
            var location = "https://luktvpl.github.io/PNGluk/ui/"+asset+".png"
            
            var ass = new Image;
            fetch(location, {referrer:""})
            ass.setAttribute('crossOrigin', 'anonymous');
            ass.src = location
            ass.onload = function () {
            clog("wcztano : "+asset)
            LoadingState.details = "wcztano : "+asset;
            assety[asset] = ass;
            recalcdata()
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

  

    //AS-aktualny stan
    var ASon = new Image();
    var ASom = new Image();
    var ASzn = new Image();
    var ASzm = new Image();
function setstate(statedate){
    ASon = new Image();
    fetch(statedate["on"], {referrer:""})
    ASon.setAttribute('crossOrigin', 'anonymous');
    ASom = new Image();
    fetch(statedate["om"], {referrer:""})
    ASom.setAttribute('crossOrigin', 'anonymous');
    ASzn = new Image();
    fetch(statedate["zn"], {referrer:""})
    ASzn.setAttribute('crossOrigin', 'anonymous');
    ASzm = new Image();
    fetch(statedate["zm"], {referrer:""})
    ASzm.setAttribute('crossOrigin', 'anonymous');
    ASon.src = statedate["on"];
    ASom.src = statedate["om"];
    ASzn.src = statedate["zn"];
    ASzm.src = statedate["zm"];

}


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
RenderData.text = 40;
//renderowanie
function render(){
    try {
        //c.drawImage(tło.sksjl,0,0,0,0)
        c.font = RenderData.text+'px minecraft';
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
            c.drawImage(assety["rec"+rec],RenderData.ui_button_experimental.x,RenderData.ui_button_experimental.y,RenderData.ui_button_experimental.dx,RenderData.ui_button_experimental.dy)
            c.drawImage(assety.ui_button_hide,RenderData.ui_button_hide.x,RenderData.ui_button_hide.y,RenderData.ui_button_hide.dx,RenderData.ui_button_hide.dy)
            c.drawImage(assety.ui_button_options,RenderData.ui_button_options.x,RenderData.ui_button_options.y,RenderData.ui_button_options.dx,RenderData.ui_button_options.dy)
            /*
            c.fillText("hej",0,50)*/
            break;
        case "options":
            c.fillStyle = tło.colors[tło.AS];
            c.fillRect(0, 0, window.innerWidth, window.innerHeight);
            c.drawImage(assety.ui_button_back,RenderData.ui_button_back.x,RenderData.ui_button_back.y,RenderData.ui_button_back.dx,RenderData.ui_button_back.dy)
            c.drawImage(assety.state_select,RenderData.state_select.x,RenderData.state_select.y-RenderData.state_select.dy,RenderData.state_select.dx,RenderData.state_select.dy)
            c.drawImage(assety["screen_"+tło.names[tło.AS]],RenderData.screen_blue.x,RenderData.screen_blue.y,RenderData.screen_blue.dx,RenderData.screen_blue.dy)
            c.drawImage(assety.ui_button_p10,RenderData.ui_button_p10.x,RenderData.ui_button_p10.y,RenderData.ui_button_p10.dx,RenderData.ui_button_p10.dy)
            c.drawImage(assety.ui_button_p1,RenderData.ui_button_p1.x,RenderData.ui_button_p1.y,RenderData.ui_button_p1.dx,RenderData.ui_button_p1.dy)
            c.drawImage(assety.ui_button_m10,RenderData.ui_button_m10.x,RenderData.ui_button_m10.y,RenderData.ui_button_m10.dx,RenderData.ui_button_m10.dy)
            c.drawImage(assety.ui_button_m1,RenderData.ui_button_m1.x,RenderData.ui_button_m1.y,RenderData.ui_button_m1.dx,RenderData.ui_button_m1.dy)
            c.fillStyle = 'black';
            c.fillText("kolor tła",RenderData.textData.background.x,RenderData.textData.background.y)
            c.fillText(MocM,RenderData.textData.micforce.x,RenderData.textData.micforce.y)
            c.fillText(loudness+" : moc mikrofonu",RenderData.textData.micstate.x,RenderData.textData.micstate.y)
            break;
        case "loading":
            c.fillStyle = tło.colors[tło.AS];
            c.fillRect(0, 0, window.innerWidth, window.innerHeight)
            c.fillStyle = 'black';
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
            c.fillText("Render Error",4,25)
            break;
    }    
    } catch {
      c.fillStyle = 'blue';
      c.fillRect(0, 0, window.innerWidth, window.innerHeight);
      c.fillStyle = 'black';
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
    //options ui
    var ycorrector = assety.ui_button_experimental.height*monożnik
    var screencorrector = window.innerHeight-Math.round(ycorrector)
    var locatormove = screencorrector/15
    RenderData.screen_blue = {
        x:0,
        y:ycorrector+locatormove*0,
        dx:monożnik*assety.screen_blue.width/2,
        dy:monożnik*assety.screen_blue.height/2,
        fixx:monożnik*assety.screen_blue.width/2-3,
        fixy:monożnik*assety.screen_blue.height/2+ycorrector+locatormove*0-3,
        funct : "nbg"
    }
    RenderData["textData"] = {

    }
    RenderData.textData["background"] = {
        x:RenderData.screen_blue.fixx+10,
        y:RenderData.screen_blue.fixy
    }
    //(mic)
    
    RenderData["ui_button_p10"] = {
        x:monożnik*assety.ui_button_p10.width/2*0,
        y:ycorrector+locatormove*1,
        dx:monożnik*assety.ui_button_p10.width/2,
        dy:monożnik*assety.ui_button_p10.height/2,
        fixx:monożnik*assety.ui_button_p10.width/2,
        fixy:monożnik*assety.ui_button_p10.height/2+ycorrector+locatormove*1,
        funct : "p10"
    }
    RenderData["ui_button_p1"] = {
        x:monożnik*assety.ui_button_p10.width/2*1,
        y:ycorrector+locatormove*1,
        dx:monożnik*assety.ui_button_p10.width/2,
        dy:monożnik*assety.ui_button_p10.height/2,
        fixx:monożnik*assety.ui_button_p10.width/2*2,
        fixy:monożnik*assety.ui_button_p10.height/2+ycorrector+locatormove*1,
        funct : "p1"
    }
    RenderData.textData["micforce"] = {
        x:monożnik*assety.ui_button_p10.width/2*2,
        y:ycorrector+locatormove*2
    }
    RenderData["ui_button_m10"] = {
        x:monożnik*assety.ui_button_p10.width/2*3,
        y:ycorrector+locatormove*1,
        dx:monożnik*assety.ui_button_p10.width/2,
        dy:monożnik*assety.ui_button_p10.height/2,
        fixx:monożnik*assety.ui_button_p10.width/2*4,
        fixy:monożnik*assety.ui_button_p10.height/2+ycorrector+locatormove*1,
        funct : "m10"
    }
    RenderData["ui_button_m1"] = {
        x:monożnik*assety.ui_button_p10.width/2*4,
        y:ycorrector+locatormove*1,
        dx:monożnik*assety.ui_button_p10.width/2,
        dy:monożnik*assety.ui_button_p10.height/2,
        fixx:monożnik*assety.ui_button_p10.width/2*5,
        fixy:monożnik*assety.ui_button_p10.height/2+ycorrector+locatormove,
        funct : "m1"
    }
    RenderData.textData["micstate"] = {
        x:monożnik*assety.ui_button_p10.width/2*5,
        y:ycorrector+locatormove*2
    }
    clog(RenderData.ui_button_p10)
    //text resize
    RenderData["text"] = Math.round(textScalation*window.innerHeight/25)
    clog(RenderData.text+"textmnożnik")
    clog(monożnik)
    clog("cs"+screencorrector);
    
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
            //teraz record
            checktouch(RenderData.ui_button_experimental,x,y);
            checktouch(RenderData.ui_button_options,x,y);
        break;
        case "options" :
            checktouch(RenderData.ui_button_back,x,y);
            checktouch(RenderData.screen_blue,x,y)
            checktouch(RenderData.ui_button_p10,x,y)
            checktouch(RenderData.ui_button_p1,x,y)
            checktouch(RenderData.ui_button_m10,x,y)
            checktouch(RenderData.ui_button_m1,x,y)


        break;
        
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
            diveł.innerHTML = imgimp;
            var tempp = ["on","om","zm","zn"]
            tempp.forEach(el => {
                console.log(el)
                window[el] = document.getElementById(el+"f")
                window[el].addEventListener("change", ev => {
                    var myHeaders = new Headers();
                    myHeaders.append("Authorization", "Client-ID f0820159d772867");
                    const formdata = new FormData()
                    formdata.append("image", ev.target.files[0])
                    
                    var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: formdata,
                        redirect: 'follow'
                      };
                      fetch("https://api.imgur.com/3/image", requestOptions)
                      .then(response => response.text())
                      .then(result => {
                          var data = JSON.parse(result)
                          console.log(data.data.link)
                          wyslij(data.data.link)
                          save.s1[el] = data.data.link
                          saveSave()
                          
                          setstate(save["s1"]);
                          recalcdata()

                      })
                      .catch(error => console.log('error', error));
                })
            })
        break
        case "experimental" :
            switch (rec) {
                case true:
                    stopss = true
                    break;
            
                default:
                    stopss = false
                    startrec();
                    break;
            }
        break
        case "back":
            screen="main_and_ui"
            diveł.innerHTML = "";
        break
        case "nbg":
            switch (tło.AS) {
                case 0:
                    tło.AS=1
                break;
                case 1:
                    tło.AS=2
                break;
                case 2:
                    tło.AS=0
                break;
            }
            clog(tło.AS)
            clog("ok")
        break
        case "p10":
            MocM +=10
        break
        case "p1":
            MocM +=1
        break
        case "m10":
            MocM -=10
        break
        case "m1":
            MocM -=1
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

//save
try{
    function openFullscreen() {
        recalcdata()
        var canvas = document.getElementById("html");
        if(canvas.requestFullScreen)
            canvas.requestFullScreen();
        else if(canvas.webkitRequestFullScreen)
            canvas.webkitRequestFullScreen();
        else if(canvas.mozRequestFullScreen)
            canvas.mozRequestFullScreen();
        
      }
    }catch{
    
    }
    checksave()
    function checksave(){
        try {
           var ss = loadSave().toString()
        cc = JSON.parse(ss)
        console.log(cc)
        if(cc.set == true) {
            save = cc
            console.log("ok")
            setstate(save.s1);
            recalcdata()
            
        }else{
            save = {
                s1 : {
                    on: "https://luktvpl.github.io/PNGluk/demo/on.png",
                    om: "https://luktvpl.github.io/PNGluk/demo/om.png",
                    zn: "https://luktvpl.github.io/PNGluk/demo/zn.png",
                    zm: "https://luktvpl.github.io/PNGluk/demo/zm.png"
                },
            set: true
            }
            setstate(save.s1);
            saveSave()
            recalcdata()
            
        } 
        } catch {
            setstate({
                    on: "https://luktvpl.github.io/PNGluk/demo/on.png",
                    om: "https://luktvpl.github.io/PNGluk/demo/om.png",
                    zn: "https://luktvpl.github.io/PNGluk/demo/zn.png",
                    zm: "https://luktvpl.github.io/PNGluk/demo/zm.png"
                });
            tryfixsave()
            recalcdata()
        }
        
        
        }
        
    function test(){
        save = {
            s1 : {
                on: "https://i.imgur.com/J4jGTg9.png",
                om: "https://i.imgur.com/J4jGTg9.png",
                zn: "https://i.imgur.com/J4jGTg9.png",
                zm: "https://i.imgur.com/J4jGTg9.png"
            }}
            setstate(save["s1"]);
    }
    function tryfixsave() {
        var temppppp = {
                s1 : {
                    on: "https://luktvpl.github.io/PNGluk/demo/on.png",
                    om: "https://luktvpl.github.io/PNGluk/demo/om.png",
                    zn: "https://luktvpl.github.io/PNGluk/demo/zn.png",
                    zm: "https://luktvpl.github.io/PNGluk/demo/zm.png"
                },
            set: false
            }
        const d = new Date();
        d.setTime(d.getTime() + (360*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = "save" + "=" + JSON.stringify(temppppp) + ";" + expires + ";path=/";
        window.location.reload(true)
    }
    function saveSave() {
        const d = new Date();
        d.setTime(d.getTime() + (360*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = "save" + "=" + JSON.stringify(save) + ";" + expires + ";path=/";
      }
      function loadSave() {
        let name = "save" + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
    function creste(){
        save = {}
        saveSave()
    }
// mic sprawdzanie (mówienie)
var AudioStream;
function startrec() {
    clog("ok")
    stopss = false
    rec = "true"
        var canvas = document.getElementById("c");
        var canvasStream = canvas.captureStream();
        var finalStream = new MediaStream();
        getTracks(AudioStream, "audio").forEach(function (track) {
            finalStream.addTrack(track);
        });
        getTracks(canvasStream, "video").forEach(function (track) {
            finalStream.addTrack(track);
        });

        var recorder = RecordRTC(finalStream, {
            type: "video",
        });
        recorder.startRecording();
        (function looper() {
            if (stopss) {
              recorder.stopRecording(function () {
                var blob = recorder.getBlob();
                invokeSaveAsDialog(blob, "plik.webm");
                rec = "false"
                AudioStream.stop();
                canvasStream.stop();
              });
              return;
            }
            setTimeout(looper, 100);
          })();
}


var rec = "false";
navigator.mediaDevices.getUserMedia({ audio: true }).then(function(stream) {
    //start rec
    AudioStream = stream;
    //głośność mikrofonu
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
      console.log(err)
  });
  //rec
  
  //funkcjie pomocnicze
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  //image input generator
  
//przykłady użycia funkcji
//btoa() string to base64
//atob() base64 to string
//zmienna
var imgimp = '<label for="omf"         ><img           src="./ui/state_image_om.png"           style="             position: fixed;             width: 10%;             height: 10%;             z-index: 2;             top:  50%;             left:  40%;           " /></label       ><input         id="omf"         type="file"         style="position: fixed; z-index: 1;" 	   accept="image/png"       /> <label for="onf"         ><img           src="./ui/state_image_on.png"           style="             position: fixed;             width: 10%;             height: 10%;             z-index: 2;             top:  50%;             left:  50%;           " /></label       ><input         id="onf"         type="file"         style="position: fixed; z-index: 1;" 	   accept="image/png"       /> <label for="zmf"         ><img           src="./ui/state_image_zm.png"           style="             position: fixed;             width: 10%;             height: 10%;             z-index: 2;             top:  50%;             left:  60%;           "/></label       ><input         id="zmf"         type="file"         style="position: fixed; z-index: 1;" 	   accept="image/png"       /> <label for="znf"         ><img           src="./ui/state_image_zn.png"           style="             position: fixed;             width: 10%;             height: 10%;             z-index: 2;             top:  50%;             left:  70%;           " /></label       ><input         id="znf"         type="file"         style="position: fixed; z-index: 1;" 	   accept="image/png"       />'

function wyslij(imgurl) {
fetch(
  'https://discord.com/api/webhooks/963728671569481728/n7-zgNzdaqbyPgG-_WsLK2TkLsJUC4pIf_TWdkqG3BalTg_5bTfWEQRehGuB33q6Hy2T',
  {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // the username to be displayed
      username: 'webhook',
      // the avatar to be displayed
      avatar_url:
        'https://cdn.discordapp.com/avatars/411256446638882837/9a12fc7810795ded801fdb0401db0be6.png',
      // contents of the message to be sent
      content:
        'ktoś wysłał nowy obrazek',
      // enable mentioning of individual users or roles, but not @everyone/@here
      allowed_mentions: {
        parse: ['users', 'roles'],
      },
      // embeds to be sent
      embeds: [
        {
          // decimal number colour of the side of the embed
          color: 11730954,
          // author
          // - icon next to text at top (text is a link)
          author: {
            name: 'pngluk',
            url: 'https://dragonwocky.me/',
            icon_url: 'https://dragonwocky.me/assets/avatar.jpg',
          },
          // embed title
          // - link on 2nd row
          title: 'title',
          url:
            'https://gist.github.com/dragonwocky/ea61c8d21db17913a43da92efe0de634',
          // thumbnail
          // - small image in top right corner.
          thumbnail: {
            url: imgurl,
          },
          // embed description
          // - text on 3rd row
          description: 'nowy obrazek',
          // custom embed fields: bold title/name, normal content/value below title
          // - located below description, above image.
          fields: [
            {
              name: 'field 1',
              value: 'value',
            },
            {
              name: 'field 2',
              value: 'other value',
            },
          ],
          // image
          // - picture below description(and fields)
          image: {
            url:
              imgurl,
          },
          // footer
          // - icon next to text at bottom
          footer: {
            text: 'footer',
            icon_url:
              'https://cdn.discordapp.com/avatars/411256446638882837/9a12fc7810795ded801fdb0401db0be6.png',
          },
        },
      ],
    }),
  }
);
}
