/* Generated by the Nim Compiler v1.0.2 */
/*   (c) 2019 Andreas Rumpf */

var framePtr = null;
var excHandler = 0;
var lastJSError = null;
if (typeof Int8Array === 'undefined') Int8Array = Array;
if (typeof Int16Array === 'undefined') Int16Array = Array;
if (typeof Int32Array === 'undefined') Int32Array = Array;
if (typeof Uint8Array === 'undefined') Uint8Array = Array;
if (typeof Uint16Array === 'undefined') Uint16Array = Array;
if (typeof Uint32Array === 'undefined') Uint32Array = Array;
if (typeof Float32Array === 'undefined') Float32Array = Array;
if (typeof Float64Array === 'undefined') Float64Array = Array;
var nim_program_result = 0;
var global_raise_hook_18618 = [null];
var local_raise_hook_18623 = [null];
var out_of_mem_hook_18626 = [null];
  if (!Math.trunc) {
    Math.trunc = function(v) {
      v = +v;
      if (!isFinite(v)) return v;

      return (v - v % 1)   ||   (v < 0 ? -0 : v === 0 ? v : 0);
    };
  }
var object_id_53237 = [0];

function HEX2AHEX3D_82047(x_82051, x_82051_Idx, y_82052) {
	var F={procname:"*=.*=",prev:framePtr,filename:"system.nim",line:0};
	framePtr = F;
		F.line = 4135;
		x_82051[x_82051_Idx] = (x_82051[x_82051_Idx] * y_82052);
	framePtr = F.prev;

	
}

function HEX3Aanonymous_82030() {
	var F={procname:"test.:anonymous",prev:framePtr,filename:"test.nim",line:0};
	framePtr = F;
		if ((0.0 < gain_82028[0].gain.value)) {
		F.line = 17;
		gain_82028[0].gain.value = (gain_82028[0].gain.value - 1.0000000000000000e-002);
		if ((gain_82028[0].gain.value < 0.0)) {
		F.line = 19;
		gain_82028[0].gain.value = 0.0;
		}
		
		}
		
	framePtr = F.prev;

	
}

function HEX3Aanonymous_82045() {
	var F={procname:"test.:anonymous",prev:framePtr,filename:"test.nim",line:0};
	framePtr = F;
		F.line = 24;
		HEX2AHEX3D_82047(osc_82029[0].frequency, "value", 5.0000000000000000e-001);
		if ((osc_82029[0].frequency.value < 2.0000000000000000e+001)) {
		F.line = 26;
		gain_82028[0].gain.value = 0.0;
		}
		
	framePtr = F.prev;

	
}

function HEX3Aanonymous_82080(e_82082) {
	var F={procname:"test.:anonymous",prev:framePtr,filename:"test.nim",line:0};
	framePtr = F;
		F.line = 30;
		osc_82029[0].frequency.value = 8.8000000000000000e+002;
		F.line = 31;
		gain_82028[0].gain.value = 5.0000000000000000e-001;
	framePtr = F.prev;

	
}
var ctx_82027 = [new AudioContext()];
var gain_82028 = [ctx_82027[0].createGain()];
gain_82028[0].gain.value = 5.0000000000000000e-001;
gain_82028[0].connect(ctx_82027[0].destination);
var osc_82029 = [ctx_82027[0].createOscillator()];
osc_82029[0].type = "square";
osc_82029[0].frequency.value = 4.4000000000000000e+002;
osc_82029[0].connect(gain_82028[0]);
osc_82029[0].start();
window.setInterval(HEX3Aanonymous_82030, 30);
window.setInterval(HEX3Aanonymous_82045, 60);
window.addEventListener("mousedown", HEX3Aanonymous_82080, false);
