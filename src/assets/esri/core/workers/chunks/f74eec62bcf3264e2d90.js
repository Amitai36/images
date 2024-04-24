"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8864,8528],{95492:(e,t,r)=>{r.r(t),r.d(t,{registerFunctions:()=>d});var s=r(82344),n=r(98412),o=r(96680),i=r(12500),a=r(94120),l=r(50853),c=r(99643);function u(e){return e instanceof l.c}function h(e,t,r,h){return h(e,t,(async(h,d,f)=>{if(f.length<2)throw new s.w7(e,s.iU.WrongNumberOfParameters,t);if(null===(f=(0,o.I)(f))[0]&&null===f[1])return!1;if((0,o.u)(f[0])){if(f[1]instanceof l.c)return new i.c({parentfeatureset:f[0],relation:r,relationGeom:f[1]});if(null===f[1])return new a.c({parentfeatureset:f[0]});throw new s.w7(e,s.iU.InvalidParameter,t)}if(u(f[0])){if(u(f[1])){switch(r){case"esriSpatialRelEnvelopeIntersects":return(0,c.K0)((0,n.SK)(f[0]),(0,n.SK)(f[1]));case"esriSpatialRelIntersects":return(0,c.K0)(f[0],f[1]);case"esriSpatialRelContains":return(0,c.Y7)(f[0],f[1]);case"esriSpatialRelOverlaps":return(0,c.q8)(f[0],f[1]);case"esriSpatialRelWithin":return(0,c.Cu)(f[0],f[1]);case"esriSpatialRelTouches":return(0,c._g)(f[0],f[1]);case"esriSpatialRelCrosses":return(0,c.iS)(f[0],f[1])}throw new s.w7(e,s.iU.InvalidParameter,t)}if((0,o.u)(f[1]))return new i.c({parentfeatureset:f[1],relation:r,relationGeom:f[0]});if(null===f[1])return!1;throw new s.w7(e,s.iU.InvalidParameter,t)}if(null!==f[0])throw new s.w7(e,s.iU.InvalidParameter,t);return(0,o.u)(f[1])?new a.c({parentfeatureset:f[1]}):!(f[1]instanceof l.c||null===f[1])&&void 0}))}function d(e){"async"===e.mode&&(e.functions.intersects=function(t,r){return h(t,r,"esriSpatialRelIntersects",e.standardFunctionAsync)},e.functions.envelopeintersects=function(t,r){return h(t,r,"esriSpatialRelEnvelopeIntersects",e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:2,max:2}),e.functions.contains=function(t,r){return h(t,r,"esriSpatialRelContains",e.standardFunctionAsync)},e.functions.overlaps=function(t,r){return h(t,r,"esriSpatialRelOverlaps",e.standardFunctionAsync)},e.functions.within=function(t,r){return h(t,r,"esriSpatialRelWithin",e.standardFunctionAsync)},e.functions.touches=function(t,r){return h(t,r,"esriSpatialRelTouches",e.standardFunctionAsync)},e.functions.crosses=function(t,r){return h(t,r,"esriSpatialRelCrosses",e.standardFunctionAsync)},e.functions.relate=function(t,r){return e.standardFunctionAsync(t,r,((e,n,i)=>{if(i=(0,o.I)(i),(0,o.H)(i,3,3,t,r),u(i[0])&&u(i[1]))return(0,c.qY)(i[0],i[1],(0,o.j)(i[2]));if(i[0]instanceof l.c&&null===i[1])return!1;if(i[1]instanceof l.c&&null===i[0])return!1;if((0,o.u)(i[0])&&null===i[1])return new a.c({parentfeatureset:i[0]});if((0,o.u)(i[1])&&null===i[0])return new a.c({parentfeatureset:i[1]});if((0,o.u)(i[0])&&i[1]instanceof l.c)return i[0].relate(i[1],(0,o.j)(i[2]));if((0,o.u)(i[1])&&i[0]instanceof l.c)return i[1].relate(i[0],(0,o.j)(i[2]));if(null===i[0]&&null===i[1])return!1;throw new s.w7(t,s.iU.InvalidParameter,r)}))})}},8528:(e,t,r)=>{r.d(t,{c:()=>s,g:()=>n});var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}},54792:(e,t,r)=>{r.d(t,{c:()=>o});var s=r(67432),n=r(9592);class o{constructor(e=(e=>e.values().next().value)){this._peeker=e,this._observable=new n.n,this._items=new Set}get length(){return(0,s.am)(this._observable),this._items.size}clear(){0!==this.length&&(this._items.clear(),this._observable.notify())}last(){if(0===this.length)return;let e;for(e of this._items);return e}peek(){if(0!==this.length)return this._peeker(this._items)}push(e){this.contains(e)||(this._items.add(e),this._observable.notify())}contains(e){return(0,s.am)(this._observable),this._items.has(e)}pop(){if(0===this.length)return;const e=this.peek();return this._items.delete(e),this._observable.notify(),e}popLast(){if(0===this.length)return;const e=this.last();return this._items.delete(e),this._observable.notify(),e}remove(e){this.contains(e)&&(this._items.delete(e),this._observable.notify())}filter(e){const t=this.length;return this._items.forEach((t=>{e(t)||this._items.delete(t)})),t!==this._items.size&&this._observable.notify(),this}*[Symbol.iterator](){(0,s.am)(this._observable),yield*this._items}}},46448:(e,t,r)=>{r.d(t,{c:()=>c});var s=r(38912),n=r(10860),o=r(54792),i=r(13056),a=r(25512),l=r(38432);class c{constructor(){this._inUseClients=new Array,this._clients=new Array,this._clientPromises=new Array,this._ongoingJobsQueue=new o.c}destroy(){this.close()}get closed(){return!this._clients?.length}open(e,t){return new Promise(((r,s)=>{let o=!0;const i=e=>{(0,n.wp)(t.signal),o&&(o=!1,e())};this._clients.length=e.length,this._clientPromises.length=e.length,this._inUseClients.length=e.length;for(let o=0;o<e.length;++o){const a=e[o];(0,n.eW)(a)?this._clientPromises[o]=a.then((e=>(this._clients[o]=new l.default(e,t,this._ongoingJobsQueue),i(r),this._clients[o])),(()=>(i(s),null))):(this._clients[o]=new l.default(a,t,this._ongoingJobsQueue),this._clientPromises[o]=Promise.resolve(this._clients[o]),i(r))}}))}broadcast(e,t,r){const s=new Array(this._clientPromises.length);for(let n=0;n<this._clientPromises.length;++n){const o=this._clientPromises[n];s[n]=o.then((s=>s?.invoke(e,t,r)))}return s}close(){let e;for(;e=this._ongoingJobsQueue.pop();)e.resolver.reject((0,n.Uh)(`Worker closing, aborting job calling '${e.methodName}'`));for(const e of this._clientPromises)e.then((e=>e?.close()));this._clients.length=0,this._clientPromises.length=0,this._inUseClients.length=0,(0,i.S)(this)}invoke(e,t,r){return this.apply(e,[t],r)}apply(e,t,r){const s=(0,n.qG)();this._ongoingJobsQueue.push({methodName:e,data:t,invokeOptions:r,resolver:s});for(let e=0;e<this._clientPromises.length;e++){const t=this._clients[e];t?t.jobAdded():this._clientPromises[e].then((e=>e?.jobAdded()))}return s.promise}createInvokeProxy(e){return(0,a.Y)(this,e)}on(e,t){return Promise.all(this._clientPromises).then((()=>(0,s.Ip)(this._clients.map((r=>r.on(e,t))))))}openPorts(){return new Promise((e=>{const t=new Array(this._clientPromises.length);let r=t.length;for(let s=0;s<this._clientPromises.length;++s)this._clientPromises[s].then((n=>{n&&(t[s]=n.openPort()),0==--r&&e(t)}))}))}get test(){return{numClients:this._clients.length}}}},13056:(e,t,r)=>{r.d(t,{S:()=>o,s:()=>n});const s=new FinalizationRegistry((e=>{e.close()}));function n(e,t){s.register(e,t,t)}function o(e){s.unregister(e)}},35268:(e,t,r)=>{r.d(t,{eU:()=>D});var s=r(20744),n=r(9456),o=r(10860),i=r(46448),a=r(13056),l=r(38432),c=r(66360),u=r(70680),h=r(2600),d=r(28176);const f={async request(e,t){const r=e.options,s=r.responseType;r.signal=t?.signal,r.responseType="native"===s||"native-request-init"===s?"native-request-init":s&&["blob","json","text"].includes(s)&&(0,d.OO)(e.url)?.after?s:"array-buffer";const n=await(0,h.c)(e.url,r),o={data:n.data,httpStatus:n.httpStatus,ssl:n.ssl};switch(n.requestOptions?.responseType){case"native-request-init":return delete o.data.signal,o;case"blob":o.data=await o.data.arrayBuffer();break;case"json":o.data=(new TextEncoder).encode(JSON.stringify(o.data)).buffer;break;case"text":o.data=(new TextEncoder).encode(o.data).buffer}return{result:o,transferList:[o.data]}}};var g=r(31056),p=r(24832),m=r(6220),w=(r(2016),r(47620));const b={};var y=r(52324);class v{constructor(){const e=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach((t=>{this[t]=(...r)=>e[t](...r)}))}}class _{constructor(){this._dispatcher=new v,this._workerPostMessage({type:g.MessageType.HANDSHAKE})}terminate(){}get onmessage(){return this._onmessageHandler}set onmessage(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)}get onmessageerror(){return this._onmessageerrorHandler}set onmessageerror(e){this._onmessageerrorHandler&&this.removeEventListener("messageerror",this._onmessageerrorHandler),this._onmessageerrorHandler=e,e&&this.addEventListener("messageerror",e)}get onerror(){return this._onerrorHandler}set onerror(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)}postMessage(e){(0,y.o)((()=>{this._workerMessageHandler(new MessageEvent("message",{data:e}))}))}dispatchEvent(e){return this._dispatcher.dispatchEvent(e)}addEventListener(e,t,r){this._dispatcher.addEventListener(e,t,r)}removeEventListener(e,t,r){this._dispatcher.removeEventListener(e,t,r)}_workerPostMessage(e){(0,y.o)((()=>{this.dispatchEvent(new MessageEvent("message",{data:e}))}))}async _workerMessageHandler(e){const t=(0,g.mO)(e);if(t&&t.type===g.MessageType.OPEN){const{modulePath:e,jobId:r}=t;let s=await l.default.loadWorker(e);s||(s=await import(e));const n=l.default.connect(s);this._workerPostMessage({type:g.MessageType.OPENED,jobId:r,data:n})}}}var k=r(89960),P=r(69880);const E=()=>c.c.getLogger("esri.core.workers.workerFactory"),{HANDSHAKE:S}=g.MessageType;let O,I;const A="Failed to create Worker. Fallback to execute module in main thread";async function M(e){return new Promise((t=>{function r(n){const o=(0,g.mO)(n);o&&o.type===S&&(e.removeEventListener("message",r),e.removeEventListener("error",s),t(e))}function s(t){t.preventDefault(),e.removeEventListener("message",r),e.removeEventListener("error",s),E().warn("Failed to create Worker. Fallback to execute module in main thread",t),(e=new _).addEventListener("message",r),e.addEventListener("error",s)}e.addEventListener("message",r),e.addEventListener("error",s)}))}let R=0;const{ABORT:C,INVOKE:N,OPEN:j,OPENED:W,RESPONSE:L}=g.MessageType;class J{static async create(e){const t=await async function(){if(!(0,n.c)("esri-workers"))return M(new _);if(!O&&!I)try{const e='let globalId=0;const outgoing=new Map,configuration=JSON.parse("{CONFIGURATION}");self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;return new Promise(((r,s)=>{if(t){if(t.aborted)return s(createAbortError());t.addEventListener("abort",(()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:ABORT,jobId:n}),s(createAbortError()))}))}outgoing.set(n,{resolve:r,reject:s}),self.postMessage({type:INVOKE,jobId:n,methodName:e,abortable:null!=t,data:o})}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,fullVersion:r}=configuration.kernelInfo,{revision:t,fullVersion:n,version:s}=e.kernelInfo;esriConfig.assetsPath!==esriConfig.defaultAssetsPath&&o!==t&&console.warn(`Version mismatch detected between ArcGIS Maps SDK for JavaScript modules and assets. For more information visit https://bit.ly/3QnsuSo.\\nModules version: ${r}\\nAssets version: ${n??s}\\nAssets path: ${esriConfig.assetsPath}`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case OPEN:let n;function t(e){const o=n.connect(e);self.postMessage({type:OPENED,jobId:r,data:o},[o])}"function"==typeof define&&define.amd?require([workerPath],(e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((e=>(n=e.default,checkWorkerRevision(n),n.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):esriConfig.workers.useDynamicImport?import(workerPath).then((e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||import(o.modulePath))).then(t)})):(self.RemoteClient||importScripts(workerPath),n=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(n),n.loadWorker(o.modulePath).then(t));break;case RESPONSE:if(outgoing.has(r)){const s=outgoing.get(r);outgoing.delete(r),o.error?s.reject(JSON.parse(o.error)):s.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});'.split('"{CONFIGURATION}"').join(`'${function(){let e;if(null!=m.default.default){const t={...m.default};delete t.default,e=JSON.parse(JSON.stringify(t))}else e=JSON.parse(JSON.stringify(m.default));e.assetsPath=(0,d.WM)(e.assetsPath),e.defaultAssetsPath=e.defaultAssetsPath?(0,d.WM)(e.defaultAssetsPath):void 0,e.request.interceptors=[],e.log.interceptors=[],e.locale=(0,k.a8)(),e.has={"esri-csp-restrictions":(0,n.c)("esri-csp-restrictions"),"esri-2d-debug":!1,"esri-2d-update-debug":(0,n.c)("esri-2d-update-debug"),"esri-2d-log-updating":(0,n.c)("esri-2d-log-updating"),"featurelayer-pbf":(0,n.c)("featurelayer-pbf"),"featurelayer-fast-triangulation-enabled":(0,n.c)("featurelayer-fast-triangulation-enabled"),"featurelayer-simplify-thresholds":(0,n.c)("featurelayer-simplify-thresholds"),"featurelayer-simplify-payload-size-factors":(0,n.c)("featurelayer-simplify-payload-size-factors"),"featurelayer-simplify-mobile-factor":(0,n.c)("featurelayer-simplify-mobile-factor"),"featurelayer-query-max-depth":(0,n.c)("featurelayer-query-max-depth"),"featurelayer-query-pausing-enabled":(0,n.c)("featurelayer-query-pausing-enabled"),"featurelayer-snapshot-enabled":(0,n.c)("featurelayer-snapshot-enabled"),"esri-atomics":(0,n.c)("esri-atomics"),"esri-shared-array-buffer":(0,n.c)("esri-shared-array-buffer"),"esri-tiles-debug":(0,n.c)("esri-tiles-debug"),"esri-workers-arraybuffer-transfer":(0,n.c)("esri-workers-arraybuffer-transfer"),"feature-polyline-generalization-factor":(0,n.c)("feature-polyline-generalization-factor"),"host-webworker":1},e.workers.loaderUrl&&(e.workers.loaderUrl=(0,d.WM)(e.workers.loaderUrl)),e.workers.workerPath?e.workers.workerPath=(0,d.WM)(e.workers.workerPath):e.workers.workerPath=(0,d.WM)((0,p.O)("esri/core/workers/RemoteClient.js")),e.workers.useDynamicImport=!1;const t=m.default.workers.loaderConfig,r=function(e){const t={async:e.async,isDebug:e.isDebug,locale:e.locale,baseUrl:e.baseUrl,has:{...e.has},map:{...e.map},packages:e.packages?.concat()||[],paths:{...e.paths}};return e.hasOwnProperty("async")||(t.async=!0),e.hasOwnProperty("isDebug")||(t.isDebug=!1),e.baseUrl||(t.baseUrl=b.baseUrl),t}({baseUrl:t?.baseUrl,locale:(0,k.a8)(),has:{"csp-restrictions":1,"dojo-test-sniff":0,"host-webworker":1,...t?.has},map:{...t?.map},paths:{...t?.paths},packages:t?.packages||[]}),s={buildDate:P.W,fullVersion:w.c1,revision:P.m};return JSON.stringify({esriConfig:e,loaderConfig:r,kernelInfo:s})}()}'`);O=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}catch(e){I=e||{}}let e;if(O)try{e=new Worker(O,{name:"esri-worker-"+R++})}catch(t){E().warn(A,I),e=new _}else E().warn(A,I),e=new _;return M(e)}();return new J(t,e)}constructor(e,t){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=t,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",(e=>{e.preventDefault(),c.c.getLogger("esri.core.workers.WorkerOwner").error(e)}))}terminate(){this.worker.terminate()}async open(e,t={}){const{signal:r}=t,s=(0,g.W4)();return new Promise(((t,n)=>{const i={resolve:t,reject:n,abortHandle:(0,o.Ij)(r,(()=>{this._outJobs.delete(s),this._post({type:C,jobId:s})}))};this._outJobs.set(s,i),this._post({type:j,jobId:s,modulePath:e})}))}_onMessage(e){const t=(0,g.mO)(e);if(t)switch(t.type){case W:this._onOpenedMessage(t);break;case L:this._onResponseMessage(t);break;case C:this._onAbortMessage(t);break;case N:this._onInvokeMessage(t)}}_onAbortMessage(e){const t=this._inJobs,r=e.jobId,s=t.get(r);s&&(s.controller&&s.controller.abort(),t.delete(r))}_onInvokeMessage(e){const{methodName:t,jobId:r,data:s,abortable:n}=e,i=n?new AbortController:null,a=this._inJobs,l=f[t];let c;try{if("function"!=typeof l)throw new TypeError(`${t} is not a function`);c=l.call(null,s,{signal:i?i.signal:null})}catch(e){return void this._post({type:L,jobId:r,error:(0,g.O)(e)})}(0,o.eW)(c)?(a.set(r,{controller:i,promise:c}),c.then((e=>{a.has(r)&&(a.delete(r),this._post({type:L,jobId:r},e))}),(e=>{a.has(r)&&(a.delete(r),e||(e={message:"Error encountered at method"+t}),(0,o.mA)(e)||this._post({type:L,jobId:r,error:(0,g.O)(e||{message:`Error encountered at method ${t}`})}))}))):this._post({type:L,jobId:r},c)}_onOpenedMessage(e){const{jobId:t,data:r}=e,s=this._outJobs.get(t);s&&(this._outJobs.delete(t),(0,u.oR)(s.abortHandle),s.resolve(r))}_onResponseMessage(e){const{jobId:t,error:r,data:n}=e,o=this._outJobs.get(t);o&&(this._outJobs.delete(t),(0,u.oR)(o.abortHandle),r?o.reject(s.c.fromJSON(JSON.parse(r))):o.resolve(n))}_post(e,t,r){return(0,g.E9)(this.worker,e,t,r)}}const U=(0,n.c)("host-browser")?Math.min(navigator.hardwareConcurrency-1,(0,n.c)("workers-pool-size")):0;let H=(0,n.c)("esri-mobile")?Math.min(U,3):U;H||(H=(0,n.c)("safari")&&(0,n.c)("mac")?7:2);let T=0;const F=[];async function q(e,t){const r=new i.c,{registryTarget:s,...n}=t;return await r.open(e,n),s&&(0,a.s)(s,r),r}async function D(e,t={}){if("string"!=typeof e)throw new s.c("workers:undefined-module","modulePath is missing");let r=t.strategy||"distributed";if((0,n.c)("host-webworker")&&!(0,n.c)("esri-workers")&&(r="local"),"local"===r){let r=await l.default.loadWorker(e);r||(r=await import(e)),(0,o.wp)(t.signal);const s=t.client||r;return q([l.default.connect(r)],{...t,client:s})}if(await async function(){if(K)return K;x=new AbortController;const e=[];for(let t=0;t<H;t++){const r=J.create(t).then((e=>(F[t]=e,e)));e.push(r)}return K=Promise.all(e),K}(),(0,o.wp)(t.signal),"dedicated"===r){const r=T++%H;return q([await F[r].open(e,t)],t)}if(t.maxNumWorkers&&t.maxNumWorkers>0){const r=Math.min(t.maxNumWorkers,H);if(r<H){const s=new Array(r);for(let n=0;n<r;++n){const r=T++%H;s[n]=F[r].open(e,t)}return q(s,t)}}return q(F.map((r=>r.open(e,t))),t)}let x,K=null}}]);