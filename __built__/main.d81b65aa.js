var y="/gox/__built__/main.44ebf3c6.wasm";(()=>{if(typeof global=="undefined")if(typeof window!="undefined")window.global=window;else if(typeof self!="undefined")self.global=self;else throw new Error("cannot export Go (neither global, window nor self is defined)");if(!global.require&&typeof require!="undefined"&&(global.require=require),!global.fs&&global.require){const r=require("fs");typeof r=="object"&&r!==null&&Object.keys(r).length!==0&&(global.fs=r)}const l=()=>{const r=new Error("not implemented");return r.code="ENOSYS",r};if(!global.fs){let r="";global.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(n,s){r+=g.decode(s);const i=r.lastIndexOf(`
`);return i!=-1&&(console.log(r.substr(0,i)),r=r.substr(i+1)),s.length},write(n,s,i,c,m,u){if(i!==0||c!==s.length||m!==null){u(l());return}const f=this.writeSync(n,s);u(null,f)},chmod(n,s,i){i(l())},chown(n,s,i,c){c(l())},close(n,s){s(l())},fchmod(n,s,i){i(l())},fchown(n,s,i,c){c(l())},fstat(n,s){s(l())},fsync(n,s){s(null)},ftruncate(n,s,i){i(l())},lchown(n,s,i,c){c(l())},link(n,s,i){i(l())},lstat(n,s){s(l())},mkdir(n,s,i){i(l())},open(n,s,i,c){c(l())},read(n,s,i,c,m,u){u(l())},readdir(n,s){s(l())},readlink(n,s){s(l())},rename(n,s,i){i(l())},rmdir(n,s){s(l())},stat(n,s){s(l())},symlink(n,s,i){i(l())},truncate(n,s,i){i(l())},unlink(n,s){s(l())},utimes(n,s,i,c){c(l())}}}if(global.process||(global.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw l()},pid:-1,ppid:-1,umask(){throw l()},cwd(){throw l()},chdir(){throw l()}}),!global.crypto&&global.require){const r=require("crypto");global.crypto={getRandomValues(n){r.randomFillSync(n)}}}if(!global.crypto)throw new Error("global.crypto is not available, polyfill required (getRandomValues only)");if(global.performance||(global.performance={now(){const[r,n]=process.hrtime();return r*1e3+n/1e6}}),!global.TextEncoder&&global.require&&(global.TextEncoder=require("util").TextEncoder),!global.TextEncoder)throw new Error("global.TextEncoder is not available, polyfill required");if(!global.TextDecoder&&global.require&&(global.TextDecoder=require("util").TextDecoder),!global.TextDecoder)throw new Error("global.TextDecoder is not available, polyfill required");const d=new TextEncoder("utf-8"),g=new TextDecoder("utf-8");if(global.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=e=>{e!==0&&console.warn("exit code:",e)},this._exitPromise=new Promise(e=>{this._resolveExitPromise=e}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const r=(e,t)=>{this.mem.setUint32(e+0,t,!0),this.mem.setUint32(e+4,Math.floor(t/4294967296),!0)},n=e=>{const t=this.mem.getUint32(e+0,!0),o=this.mem.getInt32(e+4,!0);return t+o*4294967296},s=e=>{const t=this.mem.getFloat64(e,!0);if(t===0)return;if(!isNaN(t))return t;const o=this.mem.getUint32(e,!0);return this._values[o]},i=(e,t)=>{const o=2146959360;if(typeof t=="number"&&t!==0){if(isNaN(t)){this.mem.setUint32(e+4,o,!0),this.mem.setUint32(e,0,!0);return}this.mem.setFloat64(e,t,!0);return}if(t===void 0){this.mem.setFloat64(e,0,!0);return}let a=this._ids.get(t);a===void 0&&(a=this._idPool.pop(),a===void 0&&(a=this._values.length),this._values[a]=t,this._goRefCounts[a]=0,this._ids.set(t,a)),this._goRefCounts[a]++;let h=0;switch(typeof t){case"object":t!==null&&(h=1);break;case"string":h=2;break;case"symbol":h=3;break;case"function":h=4;break}this.mem.setUint32(e+4,o|h,!0),this.mem.setUint32(e,a,!0)},c=e=>{const t=n(e+0),o=n(e+8);return new Uint8Array(this._inst.exports.mem.buffer,t,o)},m=e=>{const t=n(e+0),o=n(e+8),a=new Array(o);for(let h=0;h<o;h++)a[h]=s(t+h*8);return a},u=e=>{const t=n(e+0),o=n(e+8);return g.decode(new DataView(this._inst.exports.mem.buffer,t,o))},f=Date.now()-performance.now();this.importObject={go:{"runtime.wasmExit":e=>{e>>>=0;const t=this.mem.getInt32(e+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(t)},"runtime.wasmWrite":e=>{e>>>=0;const t=n(e+8),o=n(e+16),a=this.mem.getInt32(e+24,!0);fs.writeSync(t,new Uint8Array(this._inst.exports.mem.buffer,o,a))},"runtime.resetMemoryDataView":e=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":e=>{e>>>=0,r(e+8,(f+performance.now())*1e6)},"runtime.walltime":e=>{e>>>=0;const t=new Date().getTime();r(e+8,t/1e3),this.mem.setInt32(e+16,t%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":e=>{e>>>=0;const t=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(t,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(t);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},n(e+8)+1)),this.mem.setInt32(e+16,t,!0)},"runtime.clearTimeoutEvent":e=>{e>>>=0;const t=this.mem.getInt32(e+8,!0);clearTimeout(this._scheduledTimeouts.get(t)),this._scheduledTimeouts.delete(t)},"runtime.getRandomData":e=>{e>>>=0,crypto.getRandomValues(c(e+8))},"syscall/js.finalizeRef":e=>{e>>>=0;const t=this.mem.getUint32(e+8,!0);if(this._goRefCounts[t]--,this._goRefCounts[t]===0){const o=this._values[t];this._values[t]=null,this._ids.delete(o),this._idPool.push(t)}},"syscall/js.stringVal":e=>{e>>>=0,i(e+24,u(e+8))},"syscall/js.valueGet":e=>{e>>>=0;const t=Reflect.get(s(e+8),u(e+16));e=this._inst.exports.getsp()>>>0,i(e+32,t)},"syscall/js.valueSet":e=>{e>>>=0,Reflect.set(s(e+8),u(e+16),s(e+32))},"syscall/js.valueDelete":e=>{e>>>=0,Reflect.deleteProperty(s(e+8),u(e+16))},"syscall/js.valueIndex":e=>{e>>>=0,i(e+24,Reflect.get(s(e+8),n(e+16)))},"syscall/js.valueSetIndex":e=>{e>>>=0,Reflect.set(s(e+8),n(e+16),s(e+24))},"syscall/js.valueCall":e=>{e>>>=0;try{const t=s(e+8),o=Reflect.get(t,u(e+16)),a=m(e+32),h=Reflect.apply(o,t,a);e=this._inst.exports.getsp()>>>0,i(e+56,h),this.mem.setUint8(e+64,1)}catch(t){e=this._inst.exports.getsp()>>>0,i(e+56,t),this.mem.setUint8(e+64,0)}},"syscall/js.valueInvoke":e=>{e>>>=0;try{const t=s(e+8),o=m(e+16),a=Reflect.apply(t,void 0,o);e=this._inst.exports.getsp()>>>0,i(e+40,a),this.mem.setUint8(e+48,1)}catch(t){e=this._inst.exports.getsp()>>>0,i(e+40,t),this.mem.setUint8(e+48,0)}},"syscall/js.valueNew":e=>{e>>>=0;try{const t=s(e+8),o=m(e+16),a=Reflect.construct(t,o);e=this._inst.exports.getsp()>>>0,i(e+40,a),this.mem.setUint8(e+48,1)}catch(t){e=this._inst.exports.getsp()>>>0,i(e+40,t),this.mem.setUint8(e+48,0)}},"syscall/js.valueLength":e=>{e>>>=0,r(e+16,parseInt(s(e+8).length))},"syscall/js.valuePrepareString":e=>{e>>>=0;const t=d.encode(String(s(e+8)));i(e+16,t),r(e+24,t.length)},"syscall/js.valueLoadString":e=>{e>>>=0;const t=s(e+8);c(e+16).set(t)},"syscall/js.valueInstanceOf":e=>{e>>>=0,this.mem.setUint8(e+24,s(e+8)instanceof s(e+16)?1:0)},"syscall/js.copyBytesToGo":e=>{e>>>=0;const t=c(e+8),o=s(e+32);if(!(o instanceof Uint8Array||o instanceof Uint8ClampedArray)){this.mem.setUint8(e+48,0);return}const a=o.subarray(0,t.length);t.set(a),r(e+40,a.length),this.mem.setUint8(e+48,1)},"syscall/js.copyBytesToJS":e=>{e>>>=0;const t=s(e+8),o=c(e+16);if(!(t instanceof Uint8Array||t instanceof Uint8ClampedArray)){this.mem.setUint8(e+48,0);return}const a=o.subarray(0,t.length);t.set(a),r(e+40,a.length),this.mem.setUint8(e+48,1)},debug:e=>{console.log(e)}}}}async run(r){if(!(r instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=r,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,global,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[global,5],[this,6]]),this._idPool=[],this.exited=!1;let n=4096;const s=e=>{const t=n,o=d.encode(e+"\0");return new Uint8Array(this.mem.buffer,n,o.length).set(o),n+=o.length,n%8!=0&&(n+=8-n%8),t},i=this.argv.length,c=[];this.argv.forEach(e=>{c.push(s(e))}),c.push(0),Object.keys(this.env).sort().forEach(e=>{c.push(s(`${e}=${this.env[e]}`))}),c.push(0);const u=n;c.forEach(e=>{this.mem.setUint32(n,e,!0),this.mem.setUint32(n+4,0,!0),n+=8});const f=4096+4096;if(n>=f)throw new Error("command line too long");this._inst.exports.run(i,u),this.exited&&this._resolveExitPromise(),await this._exitPromise}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(r){const n=this;return function(){const s={id:r,this:this,args:arguments};return n._pendingEvent=s,n._resume(),s.result}}},typeof module!="undefined"&&global.require&&global.require.main===module&&global.process&&global.process.versions&&!global.process.versions.electron){process.argv.length<3&&(console.error("usage: go_js_wasm_exec [wasm binary] [arguments]"),process.exit(1));const r=new Go;r.argv=process.argv.slice(2),r.env=Object.assign({TMPDIR:require("os").tmpdir()},process.env),r.exit=process.exit,WebAssembly.instantiate(fs.readFileSync(process.argv[2]),r.importObject).then(n=>(process.on("exit",s=>{s===0&&!r.exited&&(r._pendingEvent={id:0},r._resume())}),r.run(n.instance))).catch(n=>{console.error(n),process.exit(1)})}})();const b=async()=>{const l=new Go;return WebAssembly.instantiateStreaming(fetch(y),l.importObject).then(d=>l.run(d.instance))};export{b as main};
