var c = document.getElementById("c").getContext("2d");
var loudness;
var data = {
    s1 : {
        loaded:true,
        //1-tylko mówienie 2-mówianie i mruganie
        type:1,
        on: "./demo/on.png",
        on: "./demo/om.png",
        zn: "./demo/zn.png",
        zm: "./demo/zm.png"
    }
};
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
function fix(){
    document.getElementById("c").width = window.innerWidth;
    document.getElementById("c").height = window.innerHeight;
    //c.drawImage(image, dx, dy, dWidth, dHeight);
    c.fillStyle = '#ff00ff';
    c.fillRect(0, 0, window.innerWidth, window.innerHeight);
    c.drawImage(ASon,0,0,window.innerWidth/4,ASon.height/ASon.width*window.innerWidth/4);
    
}
fix();
setInterval(fix,10)


// mic check
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
      
    }
    })
    .catch(function(err) {
      /* handle the error */
  });