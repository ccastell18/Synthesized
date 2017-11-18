
  //GET AUDIO//
  let context = new(window.AudioContext || window.webkitAudioContext)();
  let osc=null;
  let lfo;


  //VOLUME//
  let vol = context.createGain();
  vol.gain;
  vol.connect(context.destination);

  //VOLUME-SLIDER//
  document.getElementById('volume').addEventListener('input',function(){
  vol.gain.value = event.target.value;
  });

  //LP filter create//
  filter= context.createBiquadFilter();
  filter.type;
  filter.frequency.value;
  filter.connect(vol);

  // filter frequency//
  document.getElementById('filter').addEventListener('input',function(){
    filter.frequency.value = event.target.value;
  })
  //Choose filter//
  document.getElementById('filter-type').addEventListener('click',function(){
    filter.type = event.target.value;
  })

  //LFO//
  function lfoStart(){
    lfo= context.createOscillator();
    lfo.type='sine';
    lfo.frequency.value;
    lfo.connect(vol.gain);
    lfo.start();
  }
  document.getElementById('lfo-start').addEventListener('click', lfoStart);

  //LFO STOP//
  function lfoStop(){
    lfo.stop();
    lfo.disconnect();
  }
  document.getElementById('lfo-stop').addEventListener('click', lfoStop);

  //LFO Speed//
  document.getElementById('lfo-slider').addEventListener('input',function(){
    lfo.frequency.value = event.target.value;
  })

  //WAVEFORM-BUILDER-START//
  function playSound(){
    osc = context.createOscillator();
    osc.type= null;
    osc.frequency.value;
    osc.connect(filter);
    osc.start();
  }
  //Select Waveform//
  document.getElementById('waveform').addEventListener('click',function(){
    osc.type = event.target.value;
  })
  //FREQUENCY-SLIDER//
  document.getElementById('hertz').addEventListener('input',function(){
    osc.frequency.value = event.target.value;
  })
  //WAVEFORM-STOP//
  function stopSound(){
    osc.stop();
    osc.disconnect()
  }
  //START-BUTTON//
  document.getElementById("play").addEventListener('click',playSound);
  //STOP-BUTTON//
  document.getElementById("stop").addEventListener('click',stopSound);


//keyboard//

//let keyboard = document.getElementById('keyboard');

let osc2;
let vol2= context.createGain();
vol2.gain = 0.5;
vol2.connect(context.destination);


function stopNote(){
  osc2.stop()
  osc2.disconnect()
}
function keyPlayc(){
  osc2 = context.createOscillator();
  osc2.type= 'sine';
  osc2.frequency.value =261.626;
  osc2.connect(vol2);
  osc2.start(context.currentTime);
}
document.getElementById('c').addEventListener('mousedown', keyPlayc);
document.getElementById('c').addEventListener('mouseup', stopNote);

function keyPlayd(){
  osc2 = context.createOscillator();
  osc2.type= 'sine';
  osc2.frequency.value =293.665;
  osc2.connect(vol2);
  osc2.start();
}
document.getElementById('d').addEventListener('mousedown', keyPlayd);
document.getElementById('d').addEventListener('mouseup', stopNote);

function keyPlaye(){
  osc2 = context.createOscillator();
  osc2.type= 'sine';
  osc2.frequency.value =329.628;
  osc2.connect(vol2);
  osc2.start();
}
document.getElementById('e').addEventListener('mousedown', keyPlaye);
document.getElementById('e').addEventListener('mouseup', stopNote);

function keyPlayf(){
  osc2 = context.createOscillator();
  osc2.type= 'sine';
  osc2.frequency.value =349.228;
  osc2.connect(vol2);
  osc2.start();
}
document.getElementById('f').addEventListener('mousedown', keyPlayf);
document.getElementById('f').addEventListener('mouseup', stopNote);

function keyPlayg(){
  osc2 = context.createOscillator();
  osc2.type= 'sine';
  osc2.frequency.value =391.995;
  osc2.connect(vol2);
  osc2.start();
}
document.getElementById('g').addEventListener('mousedown', keyPlayg);
document.getElementById('g').addEventListener('mouseup', stopNote);

function keyPlaya(){
  osc2 = context.createOscillator();
  osc2.type= 'sine';
  osc2.frequency.value =440;
  osc2.connect(vol2);
  osc2.start();
}
document.getElementById('a').addEventListener('mousedown', keyPlaya);
document.getElementById('a').addEventListener('mouseup', stopNote);

function keyPlayb(){
  osc2 = context.createOscillator();
  osc2.type= 'sine';
  osc2.frequency.value =493.883;
  osc2.connect(vol2);
  osc2.start();
}
document.getElementById('b').addEventListener('mousedown', keyPlayb);
document.getElementById('b').addEventListener('mouseup', stopNote);

function keyPlayc3(){
  osc2 = context.createOscillator();
  osc2.type= 'sine';
  osc2.frequency.value =523.251;
  osc2.connect(vol2);
  osc2.start();
}
document.getElementById('c3').addEventListener('mousedown', keyPlayc3);
document.getElementById('c3').addEventListener('mouseup', stopNote);


function keyPlayc2(){
  osc2 = context.createOscillator();
  osc2.type= 'sine';
  osc2.frequency.value =277.183;
  osc2.connect(vol2);
  osc2.start();
}
document.getElementById('c2').addEventListener('mousedown', keyPlayc2);
document.getElementById('c2').addEventListener('mouseup', stopNote);

function keyPlayd2(){
  osc2 = context.createOscillator();
  osc2.type= 'sine';
  osc2.frequency.value =311.127;
  osc2.connect(vol2);
  osc2.start();
}
document.getElementById('d2').addEventListener('mousedown', keyPlayd2);
document.getElementById('d2').addEventListener('mouseup', stopNote);

function keyPlayf2(){
  osc2 = context.createOscillator();
  osc2.type= 'sine';
  osc2.frequency.value =369.994;
  osc2.connect(vol2);
  osc2.start();
}
document.getElementById('f2').addEventListener('mousedown', keyPlayf2);
document.getElementById('f2').addEventListener('mouseup', stopNote)

function keyPlayg2(){
  osc2 = context.createOscillator();
  osc2.type= 'sine';
  osc2.frequency.value = 415.305;
  osc2.connect(vol2);
  osc2.start();
}
document.getElementById('g2').addEventListener('mousedown', keyPlayg2);
document.getElementById('g2').addEventListener('mouseup', stopNote);

function keyPlaya2(){
  osc2 = context.createOscillator();
  osc2.type= 'sine';
  osc2.frequency.value =466.164;
  osc2.connect(vol2);
  osc2.start();
}
document.getElementById('a2').addEventListener('mousedown', keyPlaya2);
document.getElementById('a2').addEventListener('mouseup', stopNote);


///Ajax///
let weather= document.getElementById('weather');
let condition= document.getElementById('condition');
let $xhr = $.getJSON('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22austin%2C%20tx%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys');

$xhr.done(function(data) {
    if ($xhr.status !== 200) {
        return error;
    }

    weather.prepend(data.query.results.channel.item.condition.temp +'F');
    condition.prepend(data.query.results.channel.item.condition.text);

});
