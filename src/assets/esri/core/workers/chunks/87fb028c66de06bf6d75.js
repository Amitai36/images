"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8644],{44247:(e,t,r)=>{async function n(e,t){const{WhereClause:n}=await Promise.all([r.e(3220),r.e(988)]).then(r.bind(r,63220));return n.create(e,t)}function s(e,t){return null!=e&&""!==e?null!=t&&""!==t?`(${e}) AND (${t})`:e:t}r.d(t,{_:()=>s,u:()=>n})},75824:(e,t,r)=>{r.d(t,{Md:()=>o,m0:()=>i,qG:()=>s});var n=r(39452);class s{}function o(e){return e instanceof n.C?e===s.instance:"unknown"===e?.toString().toLowerCase()}function i(e){return o(e)?s.instance:e}s.instance=new n._C("Etc/UTC")},77048:(e,t,r)=>{r.d(t,{C6:()=>c,FZ:()=>y,K:()=>g,K8:()=>a,MZ:()=>l,Qv:()=>f,Su:()=>s,UN:()=>x,WK:()=>o,WO:()=>m,WU:()=>i,eC:()=>p,is:()=>S,mK:()=>d,qe:()=>u,qy:()=>h,yK:()=>v});var n=r(95247);function s(e=x){return[e[0],e[1],e[2],e[3],e[4],e[5]]}function o(e,t,r,n,o,i,l=s()){return l[0]=e,l[1]=t,l[2]=r,l[3]=n,l[4]=o,l[5]=i,l}function i(e,t){const r=isFinite(e[2])||isFinite(e[5]);return new n.c(r?{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],zmin:e[2],zmax:e[5],spatialReference:t}:{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],spatialReference:t})}function l(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function a(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function u(e,t,r=0,n=t.length/3){let s=e[0],o=e[1],i=e[2],l=e[3],a=e[4],u=e[5];for(let e=0;e<n;e++)s=Math.min(s,t[r+3*e]),o=Math.min(o,t[r+3*e+1]),i=Math.min(i,t[r+3*e+2]),l=Math.max(l,t[r+3*e]),a=Math.max(a,t[r+3*e+1]),u=Math.max(u,t[r+3*e+2]);e[0]=s,e[1]=o,e[2]=i,e[3]=l,e[4]=a,e[5]=u}function p(e,t=[0,0,0]){return t[0]=function(e){return e[0]>=e[3]?0:e[3]-e[0]}(e),t[1]=function(e){return e[1]>=e[4]?0:e[4]-e[1]}(e),t[2]=function(e){return e[2]>=e[5]?0:e[5]-e[2]}(e),t}function c(e,t,r=e){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r!==e&&(r[3]=e[3],r[4]=e[4],r[5]=e[5]),r}function d(e,t,r=e){return r[3]=t[0],r[4]=t[1],r[5]=t[2],r!==e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),e}function m(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function y(e){return e?m(e,g):s(g)}function f(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function h(e,t,r,n,s){return e[0]=t,e[1]=r,e[2]=Number.NEGATIVE_INFINITY,e[3]=n,e[4]=s,e[5]=Number.POSITIVE_INFINITY,e}function S(e){return 6===e.length}function v(e,t,r){if(null==e||null==t)return e===t;if(!S(e)||!S(t))return!1;if(r){for(let n=0;n<e.length;n++)if(!r(e[n],t[n]))return!1}else for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}r(83372);const g=[1/0,1/0,1/0,-1/0,-1/0,-1/0],x=[0,0,0,0,0,0];s()},6828:(e,t,r)=>{r.d(t,{c:()=>p});var n=r(41948),s=r(25228),o=r(13452),i=r(1580),l=(r(9456),r(66360),r(72052),r(12552)),a=r(564),u=r(99336);const p=e=>{let t=class extends e{get timeInfo(){const e=this.associatedLayer?.timeInfo;if(null==e)return e;const t=e.clone();return(0,a.Wc)(t,this.fieldsIndex),t}set timeInfo(e){(0,a.Wc)(e,this.fieldsIndex),this._override("timeInfo",e)}get timeExtent(){return this.associatedLayer?.timeExtent}set timeExtent(e){this._override("timeExtent",e)}get timeOffset(){return this.associatedLayer?.timeOffset}set timeOffset(e){this._override("timeOffset",e)}get useViewTime(){return this.associatedLayer?.useViewTime??!0}set useViewTime(e){this._override("useViewTime",e)}get datesInUnknownTimezone(){return this.associatedLayer?.datesInUnknownTimezone??!1}set datesInUnknownTimezone(e){this._override("datesInUnknownTimezone",e)}};return(0,n._)([(0,i.qq)({type:u.c})],t.prototype,"timeInfo",null),(0,n._)([(0,i.qq)({type:s.c})],t.prototype,"timeExtent",null),(0,n._)([(0,i.qq)({type:o.c})],t.prototype,"timeOffset",null),(0,n._)([(0,i.qq)({type:Boolean,nonNullable:!0})],t.prototype,"useViewTime",null),(0,n._)([(0,i.qq)({type:Boolean,nonNullable:!0})],t.prototype,"datesInUnknownTimezone",null),t=(0,n._)([(0,l.c)("esri.layers.mixins.TemporalSceneLayer")],t),t}},16424:(e,t,r)=>{r.d(t,{c:()=>d});var n=r(20744),s=r(40504),o=r(66360),i=r(86916),l=r(75824),a=r(564),u=r(28484),p=r(39452);const c=new Map;class d{static fromJSON(e){return new d(e.fields,e.timeZoneByFieldName)}static fromLayer(e){return new d(e.fields??[],h(e))}static fromLayerJSON(e){return new d(e.fields??[],h(e))}constructor(e=[],t){this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this._requiredFields=null,this.dateFields=[],this.numericFields=[],this.fields=e||[],this._timeZoneByFieldName=t?new Map(t):null;const r=[];for(const e of this.fields){const t=e?.name,n=y(t);if(t&&n){const s=m(t);this._fieldsMap.set(t,e),this._fieldsMap.set(s,e),this._normalizedFieldsMap.set(n,e),r.push(`${s}:${e.type}:${this._timeZoneByFieldName?.get(t)}`),(0,a.gp)(e)?(this.dateFields.push(e),this._dateFieldsSet.add(e)):(0,a.iW)(e)&&(this._numericFieldsSet.add(e),this.numericFields.push(e)),(0,a.Mz)(e)||(0,a.w1)(e)||(e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable)}}r.sort(),this.uid=r.join()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)(0,a.Mz)(e)||(0,a.w1)(e)||e.nullable||void 0!==(0,a.gB)(e)||this._requiredFields.push(e)}return this._requiredFields}equals(e){return this.uid===e?.uid}has(e){return null!=this.get(e)}get(e){if(!e)return;let t=this._fieldsMap.get(e);return t||(t=this._fieldsMap.get(m(e))??this._normalizedFieldsMap.get(y(e)),t&&this._fieldsMap.set(e,t),t)}getTimeZone(e){const t=this.get(e&&"string"!=typeof e?e.name:e);return t?this._timeZoneByFieldName?this._timeZoneByFieldName.get(t.name):"date"===t.type||"esriFieldTypeDate"===t.type?(o.c.getLogger("esri.layers.support.FieldsIndex").error(new n.c("getTimeZone:no-timezone-information",`no time zone information for field '${t.name}'`)),u.Gw):f.has(t.type)?u.OI:null:null}getLuxonTimeZone(e){const t=this.getTimeZone(e);return t?t===u.OI?l.qG.instance:t===u.Gw?p.Kq.utcInstance:(0,i.wJ)(c,t,(()=>p._C.create(t))):null}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isTimeOnlyField(e){return(0,a.eM)(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){return this.get(e)?.name??void 0}toJSON(){return{fields:this.fields.map((e=>(0,s.wt)(e)?e.toJSON():e)),timeZoneByFieldName:this._timeZoneByFieldName?Array.from(this._timeZoneByFieldName.entries()):null}}}function m(e){return e.trim().toLowerCase()}function y(e){return(0,a.gP)(e)?.toLowerCase()??""}const f=new Set(["time-only","date-only","timestamp-offset","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]);function h(e){const t=new Map;if(!e.fields)return t;const r=!0===e.datesInUnknownTimezone,{timeInfo:n,editFieldsInfo:s}=e,o=(n?"startField"in n?n.startField:n.startTimeField:"")??"",i=(n?"endField"in n?n.endField:n.endTimeField:"")??"",l=function(e){return"dateFieldsTimeZone"in e}(e)?e.dateFieldsTimeZone??null:e.dateFieldsTimeReference?(0,u.Mt)(e.dateFieldsTimeReference):null,a=s?function(e){return"timeZone"in e}(s)?s.timeZone??l:s.dateFieldsTimeReference?(0,u.Mt)(s.dateFieldsTimeReference):l??u.Gw:null,p=n?function(e){return"timeZone"in e}(n)?n.timeZone??l:n.timeReference?(0,u.Mt)(n.timeReference):l:null,c=new Map([[m(s?.creationDateField??""),a],[m(s?.editDateField??""),a],[m(o),p],[m(i),p]]);for(const{name:n,type:s}of e.fields)if(f.has(s))t.set(n,u.OI);else if("date"!==s&&"esriFieldTypeDate"!==s)t.set(n,null);else if(r)t.set(n,u.OI);else{const e=c.get(m(n??""))??l;t.set(n,e)}return t}},44104:(e,t,r)=>{r.d(t,{G4:()=>m,a:()=>c,iK:()=>S,yq:()=>a});var n=r(41948),s=r(40504),o=r(1580),i=(r(9456),r(66360),r(72052),r(9968)),l=r(12552);let a=class extends s.am{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,n._)([(0,o.qq)({type:Number})],a.prototype,"nodesPerPage",void 0),(0,n._)([(0,o.qq)({type:Number})],a.prototype,"rootIndex",void 0),(0,n._)([(0,o.qq)({type:String})],a.prototype,"lodSelectionMetricType",void 0),a=(0,n._)([(0,l.c)("esri.layer.support.I3SNodePageDefinition")],a);let u=class extends s.am{constructor(){super(...arguments),this.factor=1}};(0,n._)([(0,o.qq)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],u.prototype,"id",void 0),(0,n._)([(0,o.qq)({type:Number})],u.prototype,"factor",void 0),u=(0,n._)([(0,l.c)("esri.layer.support.I3SMaterialTexture")],u);let p=class extends s.am{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,n._)([(0,o.qq)({type:[Number]})],p.prototype,"baseColorFactor",void 0),(0,n._)([(0,o.qq)({type:u})],p.prototype,"baseColorTexture",void 0),(0,n._)([(0,o.qq)({type:u})],p.prototype,"metallicRoughnessTexture",void 0),(0,n._)([(0,o.qq)({type:Number})],p.prototype,"metallicFactor",void 0),(0,n._)([(0,o.qq)({type:Number})],p.prototype,"roughnessFactor",void 0),p=(0,n._)([(0,l.c)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],p);let c=class extends s.am{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,n._)([(0,i.G)({opaque:"opaque",mask:"mask",blend:"blend"})],c.prototype,"alphaMode",void 0),(0,n._)([(0,o.qq)({type:Number})],c.prototype,"alphaCutoff",void 0),(0,n._)([(0,o.qq)({type:Boolean})],c.prototype,"doubleSided",void 0),(0,n._)([(0,i.G)({none:"none",back:"back",front:"front"})],c.prototype,"cullFace",void 0),(0,n._)([(0,o.qq)({type:u})],c.prototype,"normalTexture",void 0),(0,n._)([(0,o.qq)({type:u})],c.prototype,"occlusionTexture",void 0),(0,n._)([(0,o.qq)({type:u})],c.prototype,"emissiveTexture",void 0),(0,n._)([(0,o.qq)({type:[Number]})],c.prototype,"emissiveFactor",void 0),(0,n._)([(0,o.qq)({type:p})],c.prototype,"pbrMetallicRoughness",void 0),c=(0,n._)([(0,l.c)("esri.layer.support.I3SMaterialDefinition")],c);let d=class extends s.am{};(0,n._)([(0,o.qq)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],d.prototype,"name",void 0),(0,n._)([(0,i.G)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],d.prototype,"format",void 0),d=(0,n._)([(0,l.c)("esri.layer.support.I3STextureFormat")],d);let m=class extends s.am{constructor(){super(...arguments),this.atlas=!1}};(0,n._)([(0,o.qq)({type:[d]})],m.prototype,"formats",void 0),(0,n._)([(0,o.qq)({type:Boolean})],m.prototype,"atlas",void 0),m=(0,n._)([(0,l.c)("esri.layer.support.I3STextureSetDefinition")],m);let y=class extends s.am{};(0,n._)([(0,i.G)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],y.prototype,"type",void 0),(0,n._)([(0,o.qq)({type:Number})],y.prototype,"component",void 0),y=(0,n._)([(0,l.c)("esri.layer.support.I3SGeometryAttribute")],y);let f=class extends s.am{};(0,n._)([(0,i.G)({draco:"draco"})],f.prototype,"encoding",void 0),(0,n._)([(0,o.qq)({type:[String]})],f.prototype,"attributes",void 0),f=(0,n._)([(0,l.c)("esri.layer.support.I3SGeometryCompressedAttributes")],f);let h=class extends s.am{constructor(){super(...arguments),this.offset=0}};(0,n._)([(0,o.qq)({type:Number})],h.prototype,"offset",void 0),(0,n._)([(0,o.qq)({type:y})],h.prototype,"position",void 0),(0,n._)([(0,o.qq)({type:y})],h.prototype,"normal",void 0),(0,n._)([(0,o.qq)({type:y})],h.prototype,"uv0",void 0),(0,n._)([(0,o.qq)({type:y})],h.prototype,"color",void 0),(0,n._)([(0,o.qq)({type:y})],h.prototype,"uvRegion",void 0),(0,n._)([(0,o.qq)({type:y})],h.prototype,"featureId",void 0),(0,n._)([(0,o.qq)({type:y})],h.prototype,"faceRange",void 0),(0,n._)([(0,o.qq)({type:f})],h.prototype,"compressedAttributes",void 0),h=(0,n._)([(0,l.c)("esri.layer.support.I3SGeometryBuffer")],h);let S=class extends s.am{};(0,n._)([(0,i.G)({triangle:"triangle"})],S.prototype,"topology",void 0),(0,n._)([(0,o.qq)()],S.prototype,"geometryBuffers",void 0),S=(0,n._)([(0,l.c)("esri.layer.support.I3SGeometryDefinition")],S)},24144:(e,t,r)=>{r.d(t,{c:()=>p});var n,s=r(41948),o=r(2952),i=r(40504),l=r(1580),a=(r(9456),r(66360),r(72052),r(12552));let u=n=class extends i.am{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new o.c}clone(){return new n({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,s._)([(0,l.qq)({type:String,json:{write:!0}})],u.prototype,"floorField",void 0),(0,s._)([(0,l.qq)({json:{read:!1,write:!1}})],u.prototype,"viewAllMode",void 0),(0,s._)([(0,l.qq)({json:{read:!1,write:!1}})],u.prototype,"viewAllLevelIds",void 0),u=n=(0,s._)([(0,a.c)("esri.layers.support.LayerFloorInfo")],u);const p=u},50420:(e,t,r)=>{r.d(t,{S:()=>p});var n=r(47620),s=r(2600),o=r(20744),i=r(10860),l=r(48212),a=r(54872),u=r(9764);async function p(e,t){const r=(0,l.K0)(e);if(!r)throw new o.c("invalid-url","Invalid scene service url");const p={...t,sceneServerUrl:r.url.path,layerId:r.sublayer??void 0};if(p.sceneLayerItem??=await async function(e){const t=(await c(e)).serviceItemId;if(!t)return null;const r=new u.default({id:t,apiKey:e.apiKey}),o=await async function(e){const t=n.id?.findServerInfo(e.sceneServerUrl);if(t?.owningSystemUrl)return t.owningSystemUrl;const r=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const t=(await(0,s.c)(r,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(t)return t}catch(e){(0,i.CE)(e)}return null}(e);null!=o&&(r.portal=new a.c({url:o}));try{return r.load({signal:e.signal})}catch(e){return(0,i.CE)(e),null}}(p),null==p.sceneLayerItem)return d(p.sceneServerUrl.replace("/SceneServer","/FeatureServer"),p);const m=await async function({sceneLayerItem:e,signal:t}){if(!e)return null;try{const r=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:t})).find((e=>"Feature Service"===e.type))||null;if(!r)return null;const n=new u.default({portal:r.portal,id:r.id});return await n.load(),n}catch(e){return(0,i.CE)(e),null}}(p);if(!m?.url)throw new o.c("related-service-not-found","Could not find feature service through portal item relationship");p.featureServiceItem=m;const y=await d(m.url,p);return y.portalItem=m,y}async function c(e){if(e.rootDocument)return e.rootDocument;const t={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const r=await(0,s.c)(e.sceneServerUrl,t);e.rootDocument=r.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,t){const r=(0,l.K0)(e);if(!r)throw new o.c("invalid-feature-service-url","Invalid feature service url");const n=r.url.path,i=t.layerId;if(null==i)return{serverUrl:n};const a=c(t),u=t.featureServiceItem?await t.featureServiceItem.fetchData("json"):null,p=(u?.layers?.[0]||u?.tables?.[0])?.customParameters,d=e=>{const r={query:{f:"json",...p},responseType:"json",authMode:e,signal:t.signal};return(0,s.c)(n,r)},m=d("anonymous").catch((()=>d("no-prompt"))),[y,f]=await Promise.all([m,a]),h=f?.layers,S=y.data&&y.data.layers;if(!Array.isArray(S))throw new Error("expected layers array");if(Array.isArray(h)){for(let e=0;e<Math.min(h.length,S.length);e++)if(h[e].id===i)return{serverUrl:n,layerId:S[e].id}}else if(null!=i&&i<S.length)return{serverUrl:n,layerId:S[i].id};throw new Error("could not find matching associated sublayer")}},36088:(e,t,r)=>{r.d(t,{u:()=>n});const n={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}},4144:(e,t,r)=>{r.d(t,{GC:()=>w,I5:()=>f,Wi:()=>S,Y$:()=>y,cF:()=>h,wf:()=>v,y6:()=>m});var n=r(88264);const s="__begin__",o="__end__",i=new RegExp(s,"ig"),l=new RegExp(o,"ig"),a=new RegExp("^"+s,"i"),u=new RegExp(o+"$","i"),p='"',c=p+" + ",d=" + "+p;function m(e){return e.replaceAll(new RegExp("\\[","g"),"{").replaceAll(new RegExp("\\]","g"),"}")}function y(e){return e.replaceAll(new RegExp("\\{","g"),"[").replaceAll(new RegExp("\\}","g"),"]")}function f(e){const t={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(t.expression=e.labelExpressionInfo.value,t.type="conventional"):e.labelExpressionInfo.expression&&(t.expression=e.labelExpressionInfo.expression,t.type="arcade"):null!=e.labelExpression&&(t.expression=m(e.labelExpression),t.type="conventional"),t}function h(e){const t=f(e);if(!t)return null;switch(t.type){case"conventional":return v(t.expression);case"arcade":return t.expression}return null}function S(e){const t=f(e);if(!t)return null;switch(t.type){case"conventional":return function(e){const t=e?.match(g);return t?.[1].trim()||null}(t.expression);case"arcade":return w(t.expression)}return null}function v(e){let t;return e?(t=(0,n.qq)(e,(e=>s+'$feature["'+e+'"]'+o)),t=a.test(t)?t.replace(a,""):p+t,t=u.test(t)?t.replace(u,""):t+p,t=t.replaceAll(i,c).replaceAll(l,d)):t='""',t}const g=/^\s*\{([^}]+)\}\s*$/i,x=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,q=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,I=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function w(e){if(!e)return null;let t=x.exec(e)||q.exec(e);return t?t[1]||t[3]:(t=I.exec(e),t?t[2]:null)}},69204:(e,t,r)=>{function n(e,t){return function(e,t){return t?.mode?t.mode:function(e){return e?a:u}(e).mode}(null!=e&&e.hasZ,t)}function s(e,t,r){return r&&r.mode!==t?`${e} only support ${t} elevation mode`:null}function o(e,t,r){return r?.mode===t?`${e} do not support ${t} elevation mode`:null}function i(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function l(e,t){t&&e.warn(".elevationInfo=",t)}r.d(t,{A$:()=>l,Ez:()=>s,W8:()=>i,ay:()=>o,m6:()=>n}),r(24296),r(35764);const a={mode:"absolute-height",offset:0},u={mode:"on-the-ground",offset:null}},45704:(e,t,r)=>{r.d(t,{Sg:()=>p,Uj:()=>u,Uz:()=>a,YP:()=>c}),r(9456);var n=r(47472),s=r(7432),o=r(49736),i=r(28652),l=r(9504);const a=o.c.fromJSON(l.qe),u=s.c.fromJSON(l.MZ),p=n.c.fromJSON(l.yq),c=i.c.fromJSON(l.gF);o.c.fromJSON(l.gP),s.c.fromJSON(l.aV),n.c.fromJSON(l.wp)},9504:(e,t,r)=>{r.d(t,{MZ:()=>o,aV:()=>u,gF:()=>l,gP:()=>a,qe:()=>s,wp:()=>p,yq:()=>i});const n=[252,146,31,255],s={type:"esriSMS",style:"esriSMSCircle",size:6,color:n,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},o={type:"esriSLS",style:"esriSLSSolid",width:.75,color:n},i={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},l={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},a={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},u={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},p={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},63680:(e,t,r)=>{r.d(t,{M$:()=>o,W_:()=>s});var n=r(564);async function s(e,t=e.popupTemplate){if(null==t)return[];const r=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:s}=t,{objectIdField:o,typeIdField:i,globalIdField:l,relationships:a}=e;if(r.includes("*"))return["*"];const u=s?(0,n.tm)(e):[],p=(0,n.OO)(e.fieldsIndex,[...r,...u]);return i&&p.push(i),p&&o&&e.fieldsIndex?.has(o)&&!p.includes(o)&&p.push(o),p&&l&&e.fieldsIndex?.has(l)&&!p.includes(l)&&p.push(l),a&&a.forEach((t=>{const{keyField:r}=t;p&&r&&e.fieldsIndex?.has(r)&&!p.includes(r)&&p.push(r)})),p}function o(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}}}]);