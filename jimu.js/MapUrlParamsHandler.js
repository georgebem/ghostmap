// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/_base/array dojo/Deferred dojo/topic dojo/promise/all esri/geometry/Point esri/geometry/Extent esri/geometry/scaleUtils esri/SpatialReference esri/tasks/ProjectParameters esri/config esri/geometry/webMercatorUtils esri/symbols/jsonUtils esri/graphic esri/layers/GraphicsLayer esri/InfoTemplate esri/tasks/query ./utils ./LayerInfos/LayerInfos ./shareUtils".split(" "),function(D,t,u,E,v,p,w,F,n,G,H,x,y,z,I,J,K,h,L,l){function M(a,d){var b=a.center.split(";");1===b.length&&
(b=a.center.split(","));if(2===b.length||3===b.length){a=parseFloat(b[0]);var c=parseFloat(b[1]);if(isNaN(a)||isNaN(c))a=parseFloat(b[0]),c=parseFloat(b[1]);if(!isNaN(a)&&!isNaN(c)){var e=4326;3!==b.length||isNaN(b[2])||(e=parseInt(b[2],10));b=new p(a,c,new n(e));q(b.spatialReference,d.spatialReference)?d.centerAt(b):r(b,d.spatialReference,function(a){d.centerAt(a[0])},function(){console.error("Project center point error.")})}}}function N(a,d){var b=a.extent.split("wkt\x3d"),c=null;2===b.length?(c=
b[1],b=b[0],b=b.split(",")):(b=a.extent.split(";"),1===b.length&&(b=a.extent.split(",")));if(4===b.length||5===b.length){a=parseFloat(b[0]);var e=parseFloat(b[1]),f=parseFloat(b[2]),g=parseFloat(b[3]);if(isNaN(a)||isNaN(a)||isNaN(a)||isNaN(a))a=parseFloat(b[0]),e=parseFloat(b[1]),f=parseFloat(b[2]),g=parseFloat(b[3]);if(isNaN(a)||isNaN(e)||isNaN(f)||isNaN(g))console.error("Wrong extent parameters.");else{var m=4326;5!==b.length||isNaN(b[4])||(m=parseInt(b[4],10));b=null;b=c?new w(a,e,f,g,new n({wkt:c})):
new w(a,e,f,g,new n({wkid:m}));q(d.spatialReference,b.spatialReference)?d.setExtent(b):r(b,d.spatialReference,function(a){d.setExtent(a[0])},function(){console.error("Project extent error.")})}}else console.error("Wrong extent parameters.")}function O(a,d){var b=null;if(a.markertemplate){b={title:"",content:"",isIncludeShareUrl:!1};try{var c=JSON.parse(decodeURIComponent(a.markertemplate));D.mixin(b,c)}catch(P){console.error("urlParams: \x26markertemplate JSON.parse error."+P.stack)}}c=a.marker.split(";");
1===c.length&&(c=a.marker.split(","));if(2<=c.length&&6>=c.length&&c[0].length&&!isNaN(c[0])&&c[1].length&&!isNaN(c[1])){var e=parseFloat(c[0]),f=parseFloat(c[1]),g=4326;3<=c.length&&c[2].length&&!isNaN(c[2])&&(g=parseInt(c[2],10));var m="";4<=c.length&&(m=c[3]);a=null;5<=c.length&&0===c[4].indexOf("http")&&(a=c[4]);var h=null;6===c.length&&(h=c[5]);var k=y.fromJson({type:"esriPMS",url:a,contentType:"image/png"}),l=null;h&&(l=y.fromJson({color:[0,0,0,255],type:"esriTS",verticalAlignment:"baseline",
horizontalAlignment:"left",angle:0,xoffset:0,yoffset:0,rotated:!1,kerning:!0,font:{size:12,style:"normal",weight:"bold",family:"Arial"},text:h}));Q(k).then(function(){var a=new p(e,f,new n({wkid:g}));q(a.spatialReference,d.spatialReference)?A(a,k,l,m,b,d):r(a,d.spatialReference,function(a){A(a[0],k,l,m,b,d)},function(){console.error("Project center point error.")})})}}function A(a,d,b,c,e,f){c=new J("",c);if(e){var g=l.getXyContent(e);e.isIncludeShareUrl&&(e=l.getShareUrl(f,e,!0),e=l.getShareUrlContent(e),
g+=e);c.setContent(g)}g=new I({id:"marker-feature-action-layer"});f.addLayer(g);c=new z(a,d,null,c);g.add(c);b&&(b.xoffset=d.width/2,b.yoffset=d.height/2+d.yoffset,d=new z(new p(a.toJson()),b),g.add(d),c._textSymbol=d);f.centerAt(a)}function Q(a){var d=new u;a.url?h.getImagesSize(a.url).then(function(b){a.width=b[0];a.height=b[1];d.resolve(a)},function(){a.url=require.toUrl("jimu")+"/images/EsriBluePinCircle26.png";a.width=26;a.height=26;a.setOffset(0,a.height/2);d.resolve(a)}):(a.url=require.toUrl("jimu")+
"/images/EsriBluePinCircle26.png",a.width=26,a.height=26,a.setOffset(0,a.height/2),d.resolve(a));return d}function R(a,d){var b=a.query.split(";");1===b.length&&(b=a.query.split(","));if(2!==b.length&&3!==b.length)console.error("query URL parameter is not correct.");else{var c=b[0];B("name",c,d).then(function(a){null===a?B("id",c,d).then(function(a){null===a?console.error("Invalid layer name or id."):C(d,a,b)}):C(d,a,b)})}}function C(a,d,b){var c=new K,e="";c.outSpatialReference=a.spatialReference;
if(2===b.length)c.where=b[1];else if(3===b.length&&(d.layerObject.url&&h.isHostedService(d.layerObject.url)&&h.containsNonLatinCharacter(b[2])&&(e="N"),t.forEach(d.layerObject.fields,function(a){if(a.alias.toLowerCase()===b[1].toLowerCase()||a.name.toLowerCase()===b[1].toLowerCase())-1<["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeOID"].indexOf(a.type)?c.where=a.name+"\x3d"+b[2]:-1<["esriFieldTypeString"].indexOf(a.type)&&(c.where=b[1]+
"\x3d"+e+"'"+b[2].replace(/\'/g,"''")+"'")},this),!c.where)){console.error("Invalid field name or type in query URL parameter.");return}c.maxAllowableOffset=1E-5;d.layerObject.queryFeatures(c).then(function(b){b=b.features;if(0===b.length)console.log("No result from query URL parameter.");else{if("esriGeometryPoint"===d.layerObject.geometryType&&1===b.length)a.setExtent(F.getExtentForScale(a,1E3)),a.centerAt(b[0].geometry);else{var c=h.graphicsExtent(b);a.setExtent(c)}S(a,d,b)}},function(a){console.error(a)})}
function S(a,d,b){function c(a){t.forEach(b,function(b){b.setInfoTemplate(a)})}function e(){a.infoWindow.setFeatures(b);a.infoWindow.show(T(b[0]))}if(a.getLayer(d.layerInfo.id))e();else{var f=d.layerInfo.getInfoTemplate();f?(c(f),e()):d.layerInfo.loadInfoTemplate().then(function(a){c(a);e()})}}function T(a){a=a.geometry;if("point"!==a.type)if("multipoint"===a.type)a=a.getPoint(0);else if("polyline"===a.type)a=a.getExtent().getCenter();else if("polygon"===a.type)a=a.getExtent().getCenter();else if("extent"===
a.type)a=a.getCenter();else return console.error("Can not get layer geometry type, unknow error."),null;return a}function B(a,d,b){var c=new u,e=[];L.getInstance(b,b.itemInfo).then(function(b){b.traversal(function(b){if(c.isResolved())return!0;("id"===a&&b.id.toLowerCase()===d.toLowerCase()||"name"===a&&b.title.toLowerCase()===d.toLowerCase())&&e.push(v({layerType:b.getLayerType(),layerObject:b.getLayerObject()}).then(function(a){"FeatureLayer"===a.layerType&&c.resolve({layerInfo:b,layerObject:a.layerObject})},
function(a){console.error("Find layer error from query URL parameter",a);c.resolve(null)}))});v(e).then(function(){c.isResolved()||c.resolve(null)})});return c}function r(a,d,b,c){var e=[102113,102100,3857],f;4326===a.spatialReference.wkid&&k(e,d.wkid)?(a.ymin=Math.max(a.ymin,-89.99),a.ymax=Math.min(a.ymax,89.99),a=x.geographicToWebMercator(a),(c=a.spatialReference._getInfo())&&a.xmin>a.xmax&&(e=c.valid[1]-a.xmin,f=a.xmax-c.valid[0],e>f?a.xmax=c.valid[1]+f:a.xmin=c.valid[0]-e),a.spatialReference.wkid=
d.wkid,b([a],null)):k(e,a.spatialReference.wkid)&&4326===d.wkid?(a=x.webMercatorToGeographic(a),(c=a.spatialReference._getInfo())&&a.xmin>a.xmax&&(e=c.valid[1]-a.xmin,f=a.xmax-c.valid[0],e>f?a.xmax=c.valid[1]+f:a.xmin=c.valid[0]-e),b([a],null)):(e=new G,e.geometries=[a],e.outSR=d,H.defaults.geometryService.project(e,function(a){!(a&&0<a.length&&a[0]&&"extent"===a[0].type)||isNaN(a[0].xmin)||isNaN(a[0].ymin)||isNaN(a[0].xmax)||isNaN(a[0].ymax)?a&&0<a.length&&a[0]&&"point"===a[0].type&&!isNaN(a[0].x)&&
!isNaN(a[0].y)&&b(a,null):b(a,null)},c))}function q(a,d){var b=[102113,102100,3857];return a&&d&&a.wkt===d.wkt&&(a.wkid===d.wkid||a.latestWkid&&a.latestWkid===d.wkid||d.latestWkid&&a.wkid===d.latestWkid||a.latestWkid&&a.latestWkid===d.latestWkid)||a&&d&&a.wkid&&d.wkid&&k(b,a.wkid)&&k(b,d.wkid)?!0:!1}function k(a,d){for(var b=a.length;b--;)if(a[b]===d)return!0;return!1}return{postProcessUrlParams:function(a,d){if("extent"in a)return N(a,d);if("center"in a)return M(a,d);if("marker"in a)return O(a,d);
if("find"in a)E.publish("publishData","framework","framework",{searchString:a.find},!0);else if("query"in a)return R(a,d)}}});