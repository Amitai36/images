"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6192],{46192:(e,n,t)=>{t.r(n),t.d(n,{registerFunctions:()=>O});var r=t(47620),i=t(17288),s=t(8736),a=t(82344),o=t(98412),c=t(96680),l=t(5752),u=t(19692),f=t(15424),d=t(24296),h=t(95247),w=t(50853),m=t(99643),g=t(53004),p=t(67776),y=t(7488),v=t(48516),b=t(6704),I=t(54872),P=t(2600);async function k(e,n,t){const i=r.id?.findCredential(e.restUrl);if(!i)return null;if("loaded"===e.loadStatus&&""===n&&e.user?.sourceJSON&&!1===t)return e.user.sourceJSON;const s={responseType:"json",query:{f:"json"}};if(t&&(s.query.returnUserLicenseTypeExtensions=!0),""===n){const n=await(0,P.c)(e.restUrl+"/community/self",s);if(n.data){const e=n.data;if(e?.username)return e}return null}const a=await(0,P.c)(e.restUrl+"/community/users/"+n,s);if(a.data){const e=a.data;return e.error?null:e}return null}function _(e){return 0===r.WU.indexOf("4.")?y.c.fromExtent(e):new y.c({spatialReference:e.spatialReference,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]})}function A(e,n,t){if((0,c.H)(e,2,2,n,t),e[0]instanceof w.c&&e[1]instanceof w.c);else if(e[0]instanceof w.c&&null===e[1]);else if(e[1]instanceof w.c&&null===e[0]);else if(null!==e[0]||null!==e[1])throw new a.w7(n,a.iU.InvalidParameter,t)}async function U(e,n){if("polygon"!==e.type&&"polyline"!==e.type&&"extent"!==e.type)return 0;let t=1;(e.spatialReference.vcsWkid||e.spatialReference.latestVcsWkid)&&(t=(0,u.gl)(e.spatialReference)/(0,d.k8)(e.spatialReference));let r=0;if("polyline"===e.type)for(const n of e.paths)for(let e=1;e<n.length;e++)r+=(0,u.M9)(n[e],n[e-1],t);else if("polygon"===e.type)for(const n of e.rings){for(let e=1;e<n.length;e++)r+=(0,u.M9)(n[e],n[e-1],t);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||void 0!==n[0][2]&&n[0][2]!==n[n.length-1][2])&&(r+=(0,u.M9)(n[0],n[n.length-1],t))}else"extent"===e.type&&(r+=2*(0,u.M9)([e.xmin,e.ymin,0],[e.xmax,e.ymin,0],t),r+=2*(0,u.M9)([e.xmin,e.ymin,0],[e.xmin,e.ymax,0],t),r*=2,r+=4*Math.abs((0,c.K)(e.zmax,0)*t-(0,c.K)(e.zmin,0)*t));const i=new v.c({hasZ:!1,hasM:!1,spatialReference:e.spatialReference,paths:[[0,0],[0,r]]});return(0,m.sH)(i,n)}function O(e){"async"===e.mode&&(e.functions.disjoint=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>(A(i=(0,c.I)(i),n,t),null===i[0]||null===i[1]||(0,m.O6)(i[0],i[1]))))},e.functions.intersects=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>(A(i=(0,c.I)(i),n,t),null!==i[0]&&null!==i[1]&&(0,m.K0)(i[0],i[1]))))},e.functions.touches=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>(A(i=(0,c.I)(i),n,t),null!==i[0]&&null!==i[1]&&(0,m._g)(i[0],i[1]))))},e.functions.crosses=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>(A(i=(0,c.I)(i),n,t),null!==i[0]&&null!==i[1]&&(0,m.iS)(i[0],i[1]))))},e.functions.within=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>(A(i=(0,c.I)(i),n,t),null!==i[0]&&null!==i[1]&&(0,m.Cu)(i[0],i[1]))))},e.functions.contains=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>(A(i=(0,c.I)(i),n,t),null!==i[0]&&null!==i[1]&&(0,m.Y7)(i[0],i[1]))))},e.functions.overlaps=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>(A(i=(0,c.I)(i),n,t),null!==i[0]&&null!==i[1]&&(0,m.q8)(i[0],i[1]))))},e.functions.equals=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>((0,c.H)(i,2,2,n,t),i[0]===i[1]||(i[0]instanceof w.c&&i[1]instanceof w.c?(0,m.yK)(i[0],i[1]):((0,c.k)(i[0])&&(0,c.k)(i[1])||!!((0,c.n)(i[0])&&(0,c.n)(i[1])||(0,c.m)(i[0])&&(0,c.m)(i[1])))&&i[0].equals(i[1])))))},e.functions.relate=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{if(i=(0,c.I)(i),(0,c.H)(i,3,3,n,t),i[0]instanceof w.c&&i[1]instanceof w.c)return(0,m.qY)(i[0],i[1],(0,c.j)(i[2]));if(i[0]instanceof w.c&&null===i[1])return!1;if(i[1]instanceof w.c&&null===i[0])return!1;if(null===i[0]&&null===i[1])return!1;throw new a.w7(n,a.iU.InvalidParameter,t)}))},e.functions.intersection=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>(A(i=(0,c.I)(i),n,t),null===i[0]||null===i[1]?null:(0,m.d)(i[0],i[1]))))},e.functions.union=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{const s=[];if(0===(i=(0,c.I)(i)).length)throw new a.w7(n,a.iU.WrongNumberOfParameters,t);if(1===i.length)if((0,c.o)(i[0])){const e=(0,c.I)(i[0]);for(let r=0;r<e.length;r++)if(null!==e[r]){if(!(e[r]instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);s.push(e[r])}}else{if(!(0,c.q)(i[0])){if(i[0]instanceof w.c)return(0,c.x)((0,o.SW)(i[0]),n.spatialReference);if(null===i[0])return null;throw new a.w7(n,a.iU.InvalidParameter,t)}{const e=(0,c.I)(i[0].toArray());for(let r=0;r<e.length;r++)if(null!==e[r]){if(!(e[r]instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);s.push(e[r])}}}else for(let e=0;e<i.length;e++)if(null!==i[e]){if(!(i[e]instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);s.push(i[e])}return 0===s.length?null:(0,m.SQ)(s)}))},e.functions.difference=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>(A(i=(0,c.I)(i),n,t),null!==i[0]&&null===i[1]?(0,o.SW)(i[0]):null===i[0]?null:(0,m.o1)(i[0],i[1]))))},e.functions.symmetricdifference=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>(A(i=(0,c.I)(i),n,t),null===i[0]&&null===i[1]?null:null===i[0]?(0,o.SW)(i[1]):null===i[1]?(0,o.SW)(i[0]):(0,m.uR)(i[0],i[1]))))},e.functions.clip=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{if(i=(0,c.I)(i),(0,c.H)(i,2,2,n,t),!(i[1]instanceof h.c)&&null!==i[1])throw new a.w7(n,a.iU.InvalidParameter,t);if(null===i[0])return null;if(!(i[0]instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);return null===i[1]?null:(0,m.wR)(i[0],i[1])}))},e.functions.cut=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{if(i=(0,c.I)(i),(0,c.H)(i,2,2,n,t),!(i[1]instanceof v.c)&&null!==i[1])throw new a.w7(n,a.iU.InvalidParameter,t);if(null===i[0])return[];if(!(i[0]instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);return null===i[1]?[(0,o.SW)(i[0])]:(0,m.us)(i[0],i[1])}))},e.functions.area=function(n,t){return e.standardFunctionAsync(n,t,(async(e,r,i)=>{if((0,c.H)(i,1,2,n,t),null===(i=(0,c.I)(i))[0])return 0;if((0,c.u)(i[0])){const e=await i[0].sumArea((0,o.Oo)((0,c.K)(i[1],-1)),!1,n.abortSignal);if(n.abortSignal.aborted)throw new a.w7(n,a.iU.Cancelled,t);return e}if((0,c.o)(i[0])||(0,c.q)(i[0])){const e=(0,c.J)(i[0],n.spatialReference);return null===e?0:(0,m.i6)(e,(0,o.Oo)((0,c.K)(i[1],-1)))}if(!(i[0]instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);return(0,m.i6)(i[0],(0,o.Oo)((0,c.K)(i[1],-1)))}))},e.functions.areageodetic=function(n,t){return e.standardFunctionAsync(n,t,(async(e,r,i)=>{if((0,c.H)(i,1,2,n,t),null===(i=(0,c.I)(i))[0])return 0;if((0,c.u)(i[0])){const e=await i[0].sumArea((0,o.Oo)((0,c.K)(i[1],-1)),!0,n.abortSignal);if(n.abortSignal.aborted)throw new a.w7(n,a.iU.Cancelled,t);return e}if((0,c.o)(i[0])||(0,c.q)(i[0])){const e=(0,c.J)(i[0],n.spatialReference);return null===e?0:(0,m.O4)(e,(0,o.Oo)((0,c.K)(i[1],-1)))}if(!(i[0]instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);return(0,m.O4)(i[0],(0,o.Oo)((0,c.K)(i[1],-1)))}))},e.functions.length=function(n,t){return e.standardFunctionAsync(n,t,(async(e,r,i)=>{if((0,c.H)(i,1,2,n,t),null===(i=(0,c.I)(i))[0])return 0;if((0,c.u)(i[0])){const e=await i[0].sumLength((0,o.ID)((0,c.K)(i[1],-1)),!1,n.abortSignal);if(n.abortSignal.aborted)throw new a.w7(n,a.iU.Cancelled,t);return e}if((0,c.o)(i[0])||(0,c.q)(i[0])){const e=(0,c.L)(i[0],n.spatialReference);return null===e?0:(0,m.sH)(e,(0,o.ID)((0,c.K)(i[1],-1)))}if(!(i[0]instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);return(0,m.sH)(i[0],(0,o.ID)((0,c.K)(i[1],-1)))}))},e.functions.length3d=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{if((0,c.H)(i,1,2,n,t),null===(i=(0,c.I)(i))[0])return 0;if((0,c.o)(i[0])||(0,c.q)(i[0])){const e=(0,c.L)(i[0],n.spatialReference);return null===e?0:!0===e.hasZ?U(e,(0,o.ID)((0,c.K)(i[1],-1))):(0,m.sH)(e,(0,o.ID)((0,c.K)(i[1],-1)))}if(!(i[0]instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);return!0===i[0].hasZ?U(i[0],(0,o.ID)((0,c.K)(i[1],-1))):(0,m.sH)(i[0],(0,o.ID)((0,c.K)(i[1],-1)))}))},e.functions.lengthgeodetic=function(n,t){return e.standardFunctionAsync(n,t,(async(e,r,i)=>{if((0,c.H)(i,1,2,n,t),null===(i=(0,c.I)(i))[0])return 0;if((0,c.u)(i[0])){const e=await i[0].sumLength((0,o.ID)((0,c.K)(i[1],-1)),!0,n.abortSignal);if(n.abortSignal.aborted)throw new a.w7(n,a.iU.Cancelled,t);return e}if((0,c.o)(i[0])||(0,c.q)(i[0])){const e=(0,c.L)(i[0],n.spatialReference);return null===e?0:(0,m.mk)(e,(0,o.ID)((0,c.K)(i[1],-1)))}if(!(i[0]instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);return(0,m.mk)(i[0],(0,o.ID)((0,c.K)(i[1],-1)))}))},e.functions.distance=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{i=(0,c.I)(i),(0,c.H)(i,2,3,n,t);let s=i[0];((0,c.o)(i[0])||(0,c.q)(i[0]))&&(s=(0,c.M)(i[0],n.spatialReference));let l=i[1];if(((0,c.o)(i[1])||(0,c.q)(i[1]))&&(l=(0,c.M)(i[1],n.spatialReference)),!(s instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);if(!(l instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);return(0,m.qy)(s,l,(0,o.ID)((0,c.K)(i[2],-1)))}))},e.functions.distancegeodetic=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{i=(0,c.I)(i),(0,c.H)(i,2,3,n,t);const s=i[0],l=i[1];if(!(s instanceof p.c))throw new a.w7(n,a.iU.InvalidParameter,t);if(!(l instanceof p.c))throw new a.w7(n,a.iU.InvalidParameter,t);const u=new v.c({paths:[],spatialReference:s.spatialReference});return u.addPath([s,l]),(0,m.mk)(u,(0,o.ID)((0,c.K)(i[2],-1)))}))},e.functions.densify=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{if(i=(0,c.I)(i),(0,c.H)(i,2,3,n,t),null===i[0])return null;if(!(i[0]instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);const s=(0,c.g)(i[1]);if(isNaN(s))throw new a.w7(n,a.iU.InvalidParameter,t);if(s<=0)throw new a.w7(n,a.iU.InvalidParameter,t);return i[0]instanceof y.c||i[0]instanceof v.c?(0,m.CK)(i[0],s,(0,o.ID)((0,c.K)(i[2],-1))):i[0]instanceof h.c?(0,m.CK)(_(i[0]),s,(0,o.ID)((0,c.K)(i[2],-1))):i[0]}))},e.functions.densifygeodetic=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{if(i=(0,c.I)(i),(0,c.H)(i,2,3,n,t),null===i[0])return null;if(!(i[0]instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);const s=(0,c.g)(i[1]);if(isNaN(s))throw new a.w7(n,a.iU.InvalidParameter,t);if(s<=0)throw new a.w7(n,a.iU.InvalidParameter,t);return i[0]instanceof y.c||i[0]instanceof v.c?(0,m.wx)(i[0],s,(0,o.ID)((0,c.K)(i[2],-1))):i[0]instanceof h.c?(0,m.wx)(_(i[0]),s,(0,o.ID)((0,c.K)(i[2],-1))):i[0]}))},e.functions.generalize=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{if(i=(0,c.I)(i),(0,c.H)(i,2,4,n,t),null===i[0])return null;if(!(i[0]instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);const s=(0,c.g)(i[1]);if(isNaN(s))throw new a.w7(n,a.iU.InvalidParameter,t);return(0,m.EZ)(i[0],s,(0,c.h)((0,c.K)(i[2],!0)),(0,o.ID)((0,c.K)(i[3],-1)))}))},e.functions.buffer=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{if(i=(0,c.I)(i),(0,c.H)(i,2,3,n,t),null===i[0])return null;if(!(i[0]instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);const s=(0,c.g)(i[1]);if(isNaN(s))throw new a.w7(n,a.iU.InvalidParameter,t);return 0===s?(0,o.SW)(i[0]):(0,m.cz)(i[0],s,(0,o.ID)((0,c.K)(i[2],-1)))}))},e.functions.buffergeodetic=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{if(i=(0,c.I)(i),(0,c.H)(i,2,3,n,t),null===i[0])return null;if(!(i[0]instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);const s=(0,c.g)(i[1]);if(isNaN(s))throw new a.w7(n,a.iU.InvalidParameter,t);return 0===s?(0,o.SW)(i[0]):(0,m.uk)(i[0],s,(0,o.ID)((0,c.K)(i[2],-1)))}))},e.functions.offset=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{if(i=(0,c.I)(i),(0,c.H)(i,2,6,n,t),null===i[0])return null;if(!(i[0]instanceof y.c||i[0]instanceof v.c))throw new a.w7(n,a.iU.InvalidParameter,t);const s=(0,c.g)(i[1]);if(isNaN(s))throw new a.w7(n,a.iU.InvalidParameter,t);const l=(0,c.g)((0,c.K)(i[4],10));if(isNaN(l))throw new a.w7(n,a.iU.InvalidParameter,t);const u=(0,c.g)((0,c.K)(i[5],0));if(isNaN(u))throw new a.w7(n,a.iU.InvalidParameter,t);return(0,m.E3)(i[0],s,(0,o.ID)((0,c.K)(i[2],-1)),(0,c.j)((0,c.K)(i[3],"round")).toLowerCase(),l,u)}))},e.functions.rotate=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{i=(0,c.I)(i),(0,c.H)(i,2,3,n,t);let s=i[0];if(null===s)return null;if(!(s instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);s instanceof h.c&&(s=y.c.fromExtent(s));const o=(0,c.g)(i[1]);if(isNaN(o))throw new a.w7(n,a.iU.InvalidParameter,t);const l=(0,c.K)(i[2],null);if(null===l)return(0,m.c9)(s,o);if(l instanceof p.c)return(0,m.c9)(s,o,l);throw new a.w7(n,a.iU.InvalidParameter,t)}))},e.functions.centroid=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{if(i=(0,c.I)(i),(0,c.H)(i,1,1,n,t),null===i[0])return null;let s=i[0];if(((0,c.o)(i[0])||(0,c.q)(i[0]))&&(s=(0,c.M)(i[0],n.spatialReference)),null===s)return null;if(!(s instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);return s instanceof p.c?(0,c.x)((0,o.SW)(i[0]),n.spatialReference):s instanceof y.c?s.centroid:s instanceof v.c?(0,u.i4)(s):s instanceof g.c?(0,u.kr)(s):s instanceof h.c?s.center:null}))},e.functions.measuretocoordinate=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{if(i=(0,c.I)(i),(0,c.H)(i,2,2,n,t),null===i[0])return null;let o=i[0];if(((0,c.o)(i[0])||(0,c.q)(i[0]))&&(o=(0,c.L)(i[0],n.spatialReference)),null===o)return null;if(!(o instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);if(!(o instanceof v.c))throw new a.w7(n,a.iU.InvalidParameter,t);if((0,c.b)(!1===i[1]))throw new a.w7(n,a.iU.InvalidParameter,t);const l=(0,f.iq)(o,i[1]);return l?s.c.convertObjectToArcadeDictionary(l,(0,c.N)(n),!1,!0):null}))},e.functions.pointtocoordinate=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{if(i=(0,c.I)(i),(0,c.H)(i,2,2,n,t),null===i[0])return null;let o=i[0];if(((0,c.o)(i[0])||(0,c.q)(i[0]))&&(o=(0,c.L)(i[0],n.spatialReference)),null===o)return null;if(!(o instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);if(!(o instanceof v.c))throw new a.w7(n,a.iU.InvalidParameter,t);const l=i[1];if(null===l)return null;if(!(l instanceof p.c))throw new a.w7(n,a.iU.InvalidParameter,t);if((0,c.b)(!1===i[1]))throw new a.w7(n,a.iU.InvalidParameter,t);const u=(0,f.mm)(o,l);return u?s.c.convertObjectToArcadeDictionary(u,(0,c.N)(n),!1,!0):null}))},e.functions.distancetocoordinate=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{if(i=(0,c.I)(i),(0,c.H)(i,2,2,n,t),null===i[0])return null;let o=i[0];if(((0,c.o)(i[0])||(0,c.q)(i[0]))&&(o=(0,c.L)(i[0],n.spatialReference)),null===o)return null;if(!(o instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);if(!(o instanceof v.c))throw new a.w7(n,a.iU.InvalidParameter,t);if((0,c.b)(!1===i[1]))throw new a.w7(n,a.iU.InvalidParameter,t);const l=(0,f.qK)(o,i[1]);return l?s.c.convertObjectToArcadeDictionary(l,(0,c.N)(n),!1,!0):null}))},e.functions.multiparttosinglepart=function(n,t){return e.standardFunctionAsync(n,t,(async(e,r,i)=>{i=(0,c.I)(i),(0,c.H)(i,1,1,n,t);const s=[];if(null===i[0])return null;if(!(i[0]instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);if(i[0]instanceof p.c)return[(0,c.x)((0,o.SW)(i[0]),n.spatialReference)];if(i[0]instanceof h.c)return[(0,c.x)((0,o.SW)(i[0]),n.spatialReference)];const l=await(0,m.OM)(i[0]);if(l instanceof y.c){const e=[],n=[];for(let t=0;t<l.rings.length;t++)if(l.isClockwise(l.rings[t])){const n=(0,b.h4)({rings:[l.rings[t]],hasZ:!0===l.hasZ,hazM:!0===l.hasM,spatialReference:l.spatialReference.toJSON()});e.push(n)}else n.push({ring:l.rings[t],pt:l.getPoint(t,0)});for(let t=0;t<n.length;t++)for(let r=0;r<e.length;r++)if(e[r].contains(n[t].pt)){e[r].addRing(n[t].ring);break}return e}if(l instanceof v.c){const e=[];for(let n=0;n<l.paths.length;n++){const t=(0,b.h4)({paths:[l.paths[n]],hasZ:!0===l.hasZ,hazM:!0===l.hasM,spatialReference:l.spatialReference.toJSON()});e.push(t)}return e}if(i[0]instanceof g.c){const e=(0,c.x)((0,o.SW)(i[0]),n.spatialReference);for(let n=0;n<e.points.length;n++)s.push(e.getPoint(n));return s}return null}))},e.functions.issimple=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{if(i=(0,c.I)(i),(0,c.H)(i,1,1,n,t),null===i[0])return!0;if(!(i[0]instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);return(0,m.i2)(i[0])}))},e.functions.simplify=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{if(i=(0,c.I)(i),(0,c.H)(i,1,1,n,t),null===i[0])return null;if(!(i[0]instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);return(0,m.OM)(i[0])}))},e.functions.convexhull=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{if(i=(0,c.I)(i),(0,c.H)(i,1,1,n,t),null===i[0])return null;if(!(i[0]instanceof w.c))throw new a.w7(n,a.iU.InvalidParameter,t);return(0,m.mq)(i[0])}))},e.functions.getuser=function(n,t){return e.standardFunctionAsync(n,t,(async(e,r,o)=>{(0,c.H)(o,0,2,n,t);let u=(0,c.K)(o[1],""),f=!0===u;if(u=!0===u||!1===u?"":(0,c.j)(u),0===o.length||o[0]instanceof i.c){let e=null;e=n.services?.portal?n.services.portal:I.c.getDefault(),o.length>0&&(e=(0,l.q)(o[0],e));const t=await k(e,u,f);if(t){const e=JSON.parse(JSON.stringify(t));for(const n of["lastLogin","created","modified"])void 0!==e[n]&&null!==e[n]&&(e[n]=new Date(e[n]));return s.c.convertObjectToArcadeDictionary(e,(0,c.N)(n))}return null}let d=null;if((0,c.u)(o[0])&&(d=o[0]),d){if(f=!1,u)return null;await d.load();const e=await d.getOwningSystemUrl();if(!e){if(!u){const e=await d.getIdentityUser();return e?s.c.convertObjectToArcadeDictionary({username:e},(0,c.N)(n)):null}return null}let t=null;t=n.services?.portal?n.services.portal:I.c.getDefault(),t=(0,l.q)(new i.c(e),t);const r=await k(t,u,f);if(r){const e=JSON.parse(JSON.stringify(r));for(const n of["lastLogin","created","modified"])void 0!==e[n]&&null!==e[n]&&(e[n]=new Date(e[n]));return s.c.convertObjectToArcadeDictionary(e,(0,c.N)(n))}return null}throw new a.w7(n,a.iU.InvalidParameter,t)}))}),e.functions.nearestcoordinate=function(n,t){return e.standardFunctionAsync(n,t,(async(e,r,i)=>{if(i=(0,c.I)(i),(0,c.H)(i,2,2,n,t),!(i[0]instanceof w.c||null===i[0]))throw new a.w7(n,a.iU.InvalidParameter,t);if(!(i[1]instanceof p.c||null===i[1]))throw new a.w7(n,a.iU.InvalidParameter,t);if(null===i[0]||null===i[1])return null;const o=await(0,m.KU)(i[0],i[1]);return null===o?null:s.c.convertObjectToArcadeDictionary({coordinate:o.coordinate,distance:o.distance,sideOfLine:0===o.distance?"straddle":o.isRightSide?"right":"left"},(0,c.N)(n),!1,!0)}))},e.functions.nearestvertex=function(n,t){return e.standardFunctionAsync(n,t,(async(e,r,i)=>{if(i=(0,c.I)(i),(0,c.H)(i,2,2,n,t),!(i[0]instanceof w.c||null===i[0]))throw new a.w7(n,a.iU.InvalidParameter,t);if(!(i[1]instanceof p.c||null===i[1]))throw new a.w7(n,a.iU.InvalidParameter,t);if(null===i[0]||null===i[1])return null;const o=await(0,m.wf)(i[0],i[1]);return null===o?null:s.c.convertObjectToArcadeDictionary({coordinate:o.coordinate,distance:o.distance,sideOfLine:0===o.distance?"straddle":o.isRightSide?"right":"left"},(0,c.N)(n),!1,!0)}))}}},5752:(e,n,t)=>{t.d(n,{q:()=>i});var r=t(54872);function i(e,n){return null===e?n:new r.c({url:e.field("url")})}},54792:(e,n,t)=>{t.d(n,{c:()=>s});var r=t(67432),i=t(9592);class s{constructor(e=(e=>e.values().next().value)){this._peeker=e,this._observable=new i.n,this._items=new Set}get length(){return(0,r.am)(this._observable),this._items.size}clear(){0!==this.length&&(this._items.clear(),this._observable.notify())}last(){if(0===this.length)return;let e;for(e of this._items);return e}peek(){if(0!==this.length)return this._peeker(this._items)}push(e){this.contains(e)||(this._items.add(e),this._observable.notify())}contains(e){return(0,r.am)(this._observable),this._items.has(e)}pop(){if(0===this.length)return;const e=this.peek();return this._items.delete(e),this._observable.notify(),e}popLast(){if(0===this.length)return;const e=this.last();return this._items.delete(e),this._observable.notify(),e}remove(e){this.contains(e)&&(this._items.delete(e),this._observable.notify())}filter(e){const n=this.length;return this._items.forEach((n=>{e(n)||this._items.delete(n)})),n!==this._items.size&&this._observable.notify(),this}*[Symbol.iterator](){(0,r.am)(this._observable),yield*this._items}}},46448:(e,n,t)=>{t.d(n,{c:()=>l});var r=t(38912),i=t(10860),s=t(54792),a=t(13056),o=t(25512),c=t(38432);class l{constructor(){this._inUseClients=new Array,this._clients=new Array,this._clientPromises=new Array,this._ongoingJobsQueue=new s.c}destroy(){this.close()}get closed(){return!this._clients?.length}open(e,n){return new Promise(((t,r)=>{let s=!0;const a=e=>{(0,i.wp)(n.signal),s&&(s=!1,e())};this._clients.length=e.length,this._clientPromises.length=e.length,this._inUseClients.length=e.length;for(let s=0;s<e.length;++s){const o=e[s];(0,i.eW)(o)?this._clientPromises[s]=o.then((e=>(this._clients[s]=new c.default(e,n,this._ongoingJobsQueue),a(t),this._clients[s])),(()=>(a(r),null))):(this._clients[s]=new c.default(o,n,this._ongoingJobsQueue),this._clientPromises[s]=Promise.resolve(this._clients[s]),a(t))}}))}broadcast(e,n,t){const r=new Array(this._clientPromises.length);for(let i=0;i<this._clientPromises.length;++i){const s=this._clientPromises[i];r[i]=s.then((r=>r?.invoke(e,n,t)))}return r}close(){let e;for(;e=this._ongoingJobsQueue.pop();)e.resolver.reject((0,i.Uh)(`Worker closing, aborting job calling '${e.methodName}'`));for(const e of this._clientPromises)e.then((e=>e?.close()));this._clients.length=0,this._clientPromises.length=0,this._inUseClients.length=0,(0,a.S)(this)}invoke(e,n,t){return this.apply(e,[n],t)}apply(e,n,t){const r=(0,i.qG)();this._ongoingJobsQueue.push({methodName:e,data:n,invokeOptions:t,resolver:r});for(let e=0;e<this._clientPromises.length;e++){const n=this._clients[e];n?n.jobAdded():this._clientPromises[e].then((e=>e?.jobAdded()))}return r.promise}createInvokeProxy(e){return(0,o.Y)(this,e)}on(e,n){return Promise.all(this._clientPromises).then((()=>(0,r.Ip)(this._clients.map((t=>t.on(e,n))))))}openPorts(){return new Promise((e=>{const n=new Array(this._clientPromises.length);let t=n.length;for(let r=0;r<this._clientPromises.length;++r)this._clientPromises[r].then((i=>{i&&(n[r]=i.openPort()),0==--t&&e(n)}))}))}get test(){return{numClients:this._clients.length}}}},13056:(e,n,t)=>{t.d(n,{S:()=>s,s:()=>i});const r=new FinalizationRegistry((e=>{e.close()}));function i(e,n){r.register(e,n,n)}function s(e){r.unregister(e)}},35268:(e,n,t)=>{t.d(n,{eU:()=>W});var r=t(20744),i=t(9456),s=t(10860),a=t(46448),o=t(13056),c=t(38432),l=t(66360),u=t(70680),f=t(2600),d=t(28176);const h={async request(e,n){const t=e.options,r=t.responseType;t.signal=n?.signal,t.responseType="native"===r||"native-request-init"===r?"native-request-init":r&&["blob","json","text"].includes(r)&&(0,d.OO)(e.url)?.after?r:"array-buffer";const i=await(0,f.c)(e.url,t),s={data:i.data,httpStatus:i.httpStatus,ssl:i.ssl};switch(i.requestOptions?.responseType){case"native-request-init":return delete s.data.signal,s;case"blob":s.data=await s.data.arrayBuffer();break;case"json":s.data=(new TextEncoder).encode(JSON.stringify(s.data)).buffer;break;case"text":s.data=(new TextEncoder).encode(s.data).buffer}return{result:s,transferList:[s.data]}}};var w=t(31056),m=t(24832),g=t(6220),p=(t(2016),t(47620));const y={};var v=t(52324);class b{constructor(){const e=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach((n=>{this[n]=(...t)=>e[n](...t)}))}}class I{constructor(){this._dispatcher=new b,this._workerPostMessage({type:w.MessageType.HANDSHAKE})}terminate(){}get onmessage(){return this._onmessageHandler}set onmessage(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)}get onmessageerror(){return this._onmessageerrorHandler}set onmessageerror(e){this._onmessageerrorHandler&&this.removeEventListener("messageerror",this._onmessageerrorHandler),this._onmessageerrorHandler=e,e&&this.addEventListener("messageerror",e)}get onerror(){return this._onerrorHandler}set onerror(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)}postMessage(e){(0,v.o)((()=>{this._workerMessageHandler(new MessageEvent("message",{data:e}))}))}dispatchEvent(e){return this._dispatcher.dispatchEvent(e)}addEventListener(e,n,t){this._dispatcher.addEventListener(e,n,t)}removeEventListener(e,n,t){this._dispatcher.removeEventListener(e,n,t)}_workerPostMessage(e){(0,v.o)((()=>{this.dispatchEvent(new MessageEvent("message",{data:e}))}))}async _workerMessageHandler(e){const n=(0,w.mO)(e);if(n&&n.type===w.MessageType.OPEN){const{modulePath:e,jobId:t}=n;let r=await c.default.loadWorker(e);r||(r=await import(e));const i=c.default.connect(r);this._workerPostMessage({type:w.MessageType.OPENED,jobId:t,data:i})}}}var P=t(89960),k=t(69880);const _=()=>l.c.getLogger("esri.core.workers.workerFactory"),{HANDSHAKE:A}=w.MessageType;let U,O;const N="Failed to create Worker. Fallback to execute module in main thread";async function E(e){return new Promise((n=>{function t(i){const s=(0,w.mO)(i);s&&s.type===A&&(e.removeEventListener("message",t),e.removeEventListener("error",r),n(e))}function r(n){n.preventDefault(),e.removeEventListener("message",t),e.removeEventListener("error",r),_().warn("Failed to create Worker. Fallback to execute module in main thread",n),(e=new I).addEventListener("message",t),e.addEventListener("error",r)}e.addEventListener("message",t),e.addEventListener("error",r)}))}let S=0;const{ABORT:R,INVOKE:H,OPEN:M,OPENED:x,RESPONSE:D}=w.MessageType;class F{static async create(e){const n=await async function(){if(!(0,i.c)("esri-workers"))return E(new I);if(!U&&!O)try{const e='let globalId=0;const outgoing=new Map,configuration=JSON.parse("{CONFIGURATION}");self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;return new Promise(((r,s)=>{if(t){if(t.aborted)return s(createAbortError());t.addEventListener("abort",(()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:ABORT,jobId:n}),s(createAbortError()))}))}outgoing.set(n,{resolve:r,reject:s}),self.postMessage({type:INVOKE,jobId:n,methodName:e,abortable:null!=t,data:o})}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,fullVersion:r}=configuration.kernelInfo,{revision:t,fullVersion:n,version:s}=e.kernelInfo;esriConfig.assetsPath!==esriConfig.defaultAssetsPath&&o!==t&&console.warn(`Version mismatch detected between ArcGIS Maps SDK for JavaScript modules and assets. For more information visit https://bit.ly/3QnsuSo.\\nModules version: ${r}\\nAssets version: ${n??s}\\nAssets path: ${esriConfig.assetsPath}`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case OPEN:let n;function t(e){const o=n.connect(e);self.postMessage({type:OPENED,jobId:r,data:o},[o])}"function"==typeof define&&define.amd?require([workerPath],(e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((e=>(n=e.default,checkWorkerRevision(n),n.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):esriConfig.workers.useDynamicImport?import(workerPath).then((e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||import(o.modulePath))).then(t)})):(self.RemoteClient||importScripts(workerPath),n=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(n),n.loadWorker(o.modulePath).then(t));break;case RESPONSE:if(outgoing.has(r)){const s=outgoing.get(r);outgoing.delete(r),o.error?s.reject(JSON.parse(o.error)):s.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});'.split('"{CONFIGURATION}"').join(`'${function(){let e;if(null!=g.default.default){const n={...g.default};delete n.default,e=JSON.parse(JSON.stringify(n))}else e=JSON.parse(JSON.stringify(g.default));e.assetsPath=(0,d.WM)(e.assetsPath),e.defaultAssetsPath=e.defaultAssetsPath?(0,d.WM)(e.defaultAssetsPath):void 0,e.request.interceptors=[],e.log.interceptors=[],e.locale=(0,P.a8)(),e.has={"esri-csp-restrictions":(0,i.c)("esri-csp-restrictions"),"esri-2d-debug":!1,"esri-2d-update-debug":(0,i.c)("esri-2d-update-debug"),"esri-2d-log-updating":(0,i.c)("esri-2d-log-updating"),"featurelayer-pbf":(0,i.c)("featurelayer-pbf"),"featurelayer-fast-triangulation-enabled":(0,i.c)("featurelayer-fast-triangulation-enabled"),"featurelayer-simplify-thresholds":(0,i.c)("featurelayer-simplify-thresholds"),"featurelayer-simplify-payload-size-factors":(0,i.c)("featurelayer-simplify-payload-size-factors"),"featurelayer-simplify-mobile-factor":(0,i.c)("featurelayer-simplify-mobile-factor"),"featurelayer-query-max-depth":(0,i.c)("featurelayer-query-max-depth"),"featurelayer-query-pausing-enabled":(0,i.c)("featurelayer-query-pausing-enabled"),"featurelayer-snapshot-enabled":(0,i.c)("featurelayer-snapshot-enabled"),"esri-atomics":(0,i.c)("esri-atomics"),"esri-shared-array-buffer":(0,i.c)("esri-shared-array-buffer"),"esri-tiles-debug":(0,i.c)("esri-tiles-debug"),"esri-workers-arraybuffer-transfer":(0,i.c)("esri-workers-arraybuffer-transfer"),"feature-polyline-generalization-factor":(0,i.c)("feature-polyline-generalization-factor"),"host-webworker":1},e.workers.loaderUrl&&(e.workers.loaderUrl=(0,d.WM)(e.workers.loaderUrl)),e.workers.workerPath?e.workers.workerPath=(0,d.WM)(e.workers.workerPath):e.workers.workerPath=(0,d.WM)((0,m.O)("esri/core/workers/RemoteClient.js")),e.workers.useDynamicImport=!1;const n=g.default.workers.loaderConfig,t=function(e){const n={async:e.async,isDebug:e.isDebug,locale:e.locale,baseUrl:e.baseUrl,has:{...e.has},map:{...e.map},packages:e.packages?.concat()||[],paths:{...e.paths}};return e.hasOwnProperty("async")||(n.async=!0),e.hasOwnProperty("isDebug")||(n.isDebug=!1),e.baseUrl||(n.baseUrl=y.baseUrl),n}({baseUrl:n?.baseUrl,locale:(0,P.a8)(),has:{"csp-restrictions":1,"dojo-test-sniff":0,"host-webworker":1,...n?.has},map:{...n?.map},paths:{...n?.paths},packages:n?.packages||[]}),r={buildDate:k.W,fullVersion:p.c1,revision:k.m};return JSON.stringify({esriConfig:e,loaderConfig:t,kernelInfo:r})}()}'`);U=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}catch(e){O=e||{}}let e;if(U)try{e=new Worker(U,{name:"esri-worker-"+S++})}catch(n){_().warn(N,O),e=new I}else _().warn(N,O),e=new I;return E(e)}();return new F(n,e)}constructor(e,n){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=n,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",(e=>{e.preventDefault(),l.c.getLogger("esri.core.workers.WorkerOwner").error(e)}))}terminate(){this.worker.terminate()}async open(e,n={}){const{signal:t}=n,r=(0,w.W4)();return new Promise(((n,i)=>{const a={resolve:n,reject:i,abortHandle:(0,s.Ij)(t,(()=>{this._outJobs.delete(r),this._post({type:R,jobId:r})}))};this._outJobs.set(r,a),this._post({type:M,jobId:r,modulePath:e})}))}_onMessage(e){const n=(0,w.mO)(e);if(n)switch(n.type){case x:this._onOpenedMessage(n);break;case D:this._onResponseMessage(n);break;case R:this._onAbortMessage(n);break;case H:this._onInvokeMessage(n)}}_onAbortMessage(e){const n=this._inJobs,t=e.jobId,r=n.get(t);r&&(r.controller&&r.controller.abort(),n.delete(t))}_onInvokeMessage(e){const{methodName:n,jobId:t,data:r,abortable:i}=e,a=i?new AbortController:null,o=this._inJobs,c=h[n];let l;try{if("function"!=typeof c)throw new TypeError(`${n} is not a function`);l=c.call(null,r,{signal:a?a.signal:null})}catch(e){return void this._post({type:D,jobId:t,error:(0,w.O)(e)})}(0,s.eW)(l)?(o.set(t,{controller:a,promise:l}),l.then((e=>{o.has(t)&&(o.delete(t),this._post({type:D,jobId:t},e))}),(e=>{o.has(t)&&(o.delete(t),e||(e={message:"Error encountered at method"+n}),(0,s.mA)(e)||this._post({type:D,jobId:t,error:(0,w.O)(e||{message:`Error encountered at method ${n}`})}))}))):this._post({type:D,jobId:t},l)}_onOpenedMessage(e){const{jobId:n,data:t}=e,r=this._outJobs.get(n);r&&(this._outJobs.delete(n),(0,u.oR)(r.abortHandle),r.resolve(t))}_onResponseMessage(e){const{jobId:n,error:t,data:i}=e,s=this._outJobs.get(n);s&&(this._outJobs.delete(n),(0,u.oR)(s.abortHandle),t?s.reject(r.c.fromJSON(JSON.parse(t))):s.resolve(i))}_post(e,n,t){return(0,w.E9)(this.worker,e,n,t)}}const K=(0,i.c)("host-browser")?Math.min(navigator.hardwareConcurrency-1,(0,i.c)("workers-pool-size")):0;let j=(0,i.c)("esri-mobile")?Math.min(K,3):K;j||(j=(0,i.c)("safari")&&(0,i.c)("mac")?7:2);let C=0;const q=[];async function L(e,n){const t=new a.c,{registryTarget:r,...i}=n;return await t.open(e,i),r&&(0,o.s)(r,t),t}async function W(e,n={}){if("string"!=typeof e)throw new r.c("workers:undefined-module","modulePath is missing");let t=n.strategy||"distributed";if((0,i.c)("host-webworker")&&!(0,i.c)("esri-workers")&&(t="local"),"local"===t){let t=await c.default.loadWorker(e);t||(t=await import(e)),(0,s.wp)(n.signal);const r=n.client||t;return L([c.default.connect(t)],{...n,client:r})}if(await async function(){if(T)return T;J=new AbortController;const e=[];for(let n=0;n<j;n++){const t=F.create(n).then((e=>(q[n]=e,e)));e.push(t)}return T=Promise.all(e),T}(),(0,s.wp)(n.signal),"dedicated"===t){const t=C++%j;return L([await q[t].open(e,n)],n)}if(n.maxNumWorkers&&n.maxNumWorkers>0){const t=Math.min(n.maxNumWorkers,j);if(t<j){const r=new Array(t);for(let i=0;i<t;++i){const t=C++%j;r[i]=q[t].open(e,n)}return L(r,n)}}return L(q.map((t=>t.open(e,n))),n)}let J,T=null},99643:(e,n,t)=>{t.d(n,{CK:()=>K,Cu:()=>v,E3:()=>S,EZ:()=>F,K0:()=>p,KU:()=>M,O4:()=>L,O6:()=>b,OM:()=>_,SQ:()=>E,Y7:()=>h,_g:()=>y,c9:()=>D,cz:()=>R,d:()=>N,i2:()=>k,i6:()=>C,iS:()=>w,mk:()=>W,mq:()=>A,o1:()=>U,q8:()=>I,qY:()=>P,qy:()=>m,sH:()=>q,uR:()=>O,uk:()=>H,us:()=>d,wR:()=>f,wf:()=>x,wx:()=>j,yK:()=>g}),t(60708);var r=t(35268),i=t(67776),s=t(6704);function a(e){return Array.isArray(e)?e[0]?.spatialReference:e?.spatialReference}function o(e){return e?Array.isArray(e)?e.map(o):e.toJSON?e.toJSON():e:e}function c(e){return Array.isArray(e)?e.map((e=>(0,s.h4)(e))):(0,s.h4)(e)}let l;async function u(e,n){return(await async function(){return l||(l=(0,r.eU)("geometryEngineWorker",{strategy:"distributed"})),l}()).invoke("executeGEOperation",{operation:e,parameters:o(n)})}async function f(e,n){return c(await u("clip",[a(e),e,n]))}async function d(e,n){return c(await u("cut",[a(e),e,n]))}function h(e,n){return u("contains",[a(e),e,n])}function w(e,n){return u("crosses",[a(e),e,n])}function m(e,n,t){return u("distance",[a(e),e,n,t])}function g(e,n){return u("equals",[a(e),e,n])}function p(e,n){return u("intersects",[a(e),e,n])}function y(e,n){return u("touches",[a(e),e,n])}function v(e,n){return u("within",[a(e),e,n])}function b(e,n){return u("disjoint",[a(e),e,n])}function I(e,n){return u("overlaps",[a(e),e,n])}function P(e,n,t){return u("relate",[a(e),e,n,t])}function k(e){return u("isSimple",[a(e),e])}async function _(e){return c(await u("simplify",[a(e),e]))}async function A(e,n=!1){return c(await u("convexHull",[a(e),e,n]))}async function U(e,n){return c(await u("difference",[a(e),e,n]))}async function O(e,n){return c(await u("symmetricDifference",[a(e),e,n]))}async function N(e,n){return c(await u("intersect",[a(e),e,n]))}async function E(e,n=null){const t=function(e,n){let t;return Array.isArray(e)?t=e:(t=[],t.push(e),null!=n&&t.push(n)),t}(e,n);return c(await u("union",[a(t),t]))}async function S(e,n,t,r,i,s){return c(await u("offset",[a(e),e,n,t,r,i,s]))}async function R(e,n,t,r=!1){const i=[a(e),e,n,t,r];return c(await u("buffer",i))}async function H(e,n,t,r,i,s){const o=[a(e),e,n,t,r,i,s];return c(await u("geodesicBuffer",o))}async function M(e,n,t=!0){const r=await u("nearestCoordinate",[a(e),e,n,t]);return{...r,coordinate:i.c.fromJSON(r.coordinate)}}async function x(e,n){const t=await u("nearestVertex",[a(e),e,n]);return{...t,coordinate:i.c.fromJSON(t.coordinate)}}async function D(e,n,t){if(null==e)throw new J;const r=e.spatialReference;if(null==(t=t??function(e){return"xmin"in e?e.center:"x"in e?e:e.extent?.center}(e)))throw new J;const i=e.constructor.fromJSON(await u("rotate",[r,e,n,t]));return i.spatialReference=r,i}async function F(e,n,t,r){return c(await u("generalize",[a(e),e,n,t,r]))}async function K(e,n,t){return c(await u("densify",[a(e),e,n,t]))}async function j(e,n,t,r=0){return c(await u("geodesicDensify",[a(e),e,n,t,r]))}function C(e,n){return u("planarArea",[a(e),e,n])}function q(e,n){return u("planarLength",[a(e),e,n])}function L(e,n,t){return u("geodesicArea",[a(e),e,n,t])}function W(e,n,t){return u("geodesicLength",[a(e),e,n,t])}class J extends Error{constructor(){super("Illegal Argument Exception")}}}}]);