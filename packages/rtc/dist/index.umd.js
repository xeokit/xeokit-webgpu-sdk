!function(o,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("@xeokit/matrix"),require("@xeokit/boundaries")):"function"==typeof define&&define.amd?define(["exports","@xeokit/matrix","@xeokit/boundaries"],r):r((o||self).rtc={},o.matrix,o.boundaries)}(this,function(o,r,e){var t=r.createVec3(),n=new Float32Array(16),a=new Float64Array(4),i=new Float64Array(4);o.createRTCViewMat=function(o,e,t){return void 0===t&&(t=n),a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=1,r.transformVec4(o,a,i),r.setMat4Translation(o,i,t),t},o.getPlaneRTCPos=function(o,e,n,a){var i=r.dotVec3(e,n)+o,u=r.normalizeVec3(e,t);return r.mulVec3Scalar(u,-i,a),a},o.rtcToWorldPos=function(o,r,e){return e[0]=o[0]+r[0],e[1]=o[1]+r[1],e[2]=o[2]+r[2],e},o.worldToRTCCenter=function(o,r,e){return void 0===e&&(e=200),r[0]=Math.round(o[0]/e)*e,r[1]=Math.round(o[1]/e)*e,r[2]=Math.round(o[2]/e)*e,r},o.worldToRTCPos=function(o,r,e){var t=Float32Array.from([o[0]])[0],n=o[0]-t,a=Float32Array.from([o[1]])[0],i=o[1]-a,u=Float32Array.from([o[2]])[0],d=o[2]-u;r[0]=t,r[1]=a,r[2]=u,e[0]=n,e[1]=i,e[2]=d},o.worldToRTCPositions=function(o,r,n,a){void 0===a&&(a=200);for(var i=e.getPositions3Center(o,t),u=Math.round(i[0]/a)*a,d=Math.round(i[1]/a)*a,f=Math.round(i[2]/a)*a,l=0,c=o.length;l<c;l+=3)r[l+0]=o[l+0]-u,r[l+1]=o[l+1]-d,r[l+2]=o[l+2]-f;return n[0]=u,n[1]=d,n[2]=f,0!==n[0]||0!==n[1]||0!==n[2]}});
//# sourceMappingURL=index.umd.js.map