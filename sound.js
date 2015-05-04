var notes = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];    
var note = function(freq) {
  return notes[(Math.round(12*(Math.log(freq/440) / Math.log(2))))%12];
}

console.log(note(1232));

var synth = T("OscGen", {wave:"sin", mul:0.5});

T("interval", {interval: 500, timeout:"5sec"}, function() {
    synth.noteOnWithFreq(200, 80);
}).on("ended", function() {
    this.stop();
}).set({buddies:synth}).start();

T("interval", {interval: 100, timeout:"5sec"}, function() {
    synth.noteOnWithFreq(500, 80);
}).on("ended", function() {
    this.stop();
}).set({buddies:synth}).start();


T("interval", {interval: 100, timeout:"5sec"}, function() {
    synth.noteOnWithFreq(800, 80);
}).on("ended", function() {
    this.stop();
}).set({buddies:synth}).start();

