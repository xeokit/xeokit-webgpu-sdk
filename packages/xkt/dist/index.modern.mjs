import*as e from"pako";import{SDKError as t}from"@xeokit/core";function i(t){function i(t,i){return 0===t.length?[]:e.inflate(t,i).buffer}return{metadata:JSON.parse(e.inflate(t.metadata,{to:"string"})),textureData:new Uint8Array(i(t.textureData)),eachTextureDataPortion:new Uint32Array(i(t.eachTextureDataPortion)),eachTextureAttributes:new Uint16Array(i(t.eachTextureAttributes)),positions:new Uint16Array(i(t.positions)),colors:new Uint8Array(i(t.colors)),uvs:new Float32Array(i(t.uvs)),indices8Bit:new Uint8Array(i(t.indices8Bit)),indices16Bit:new Uint16Array(i(t.indices16Bit)),indices32Bit:new Uint32Array(i(t.indices32Bit)),edgeIndices8Bit:new Uint8Array(i(t.edgeIndices8Bit)),edgeIndices16Bit:new Uint16Array(i(t.edgeIndices16Bit)),edgeIndices32Bit:new Uint32Array(i(t.edgeIndices32Bit)),eachTextureSetTextures:new Int32Array(i(t.eachTextureSetTextures)),decodeMatrices:new Float32Array(i(t.decodeMatrices)),eachBucketPositionsPortion:new Uint32Array(i(t.eachBucketPositionsPortion)),eachBucketColorsPortion:new Uint32Array(i(t.eachBucketColorsPortion)),eachBucketUVsPortion:new Uint32Array(i(t.eachBucketUVsPortion)),eachBucketIndicesPortion:new Uint32Array(i(t.eachBucketIndicesPortion)),eachBucketEdgeIndicesPortion:new Uint32Array(i(t.eachBucketEdgeIndicesPortion)),eachBucketIndicesBitness:new Uint8Array(i(t.eachBucketIndicesBitness)),eachGeometryPrimitiveType:new Uint8Array(i(t.eachGeometryPrimitiveType)),eachGeometryBucketPortion:new Uint32Array(i(t.eachGeometryBucketPortion)),eachGeometryDecodeMatricesPortion:new Uint32Array(i(t.eachGeometryDecodeMatricesPortion)),matrices:new Float32Array(i(t.matrices)),eachMeshGeometriesPortion:new Uint32Array(i(t.eachMeshGeometriesPortion)),eachMeshMatricesPortion:new Uint32Array(i(t.eachMeshMatricesPortion)),eachMeshTextureSet:new Uint32Array(i(t.eachMeshTextureSet)),eachMeshMaterialAttributes:new Uint8Array(i(t.eachMeshMaterialAttributes)),eachObjectId:JSON.parse(e.inflate(t.eachObjectId,{to:"string"})),eachObjectMeshesPortion:new Uint32Array(i(t.eachObjectMeshesPortion))}}function r(e){const t=new DataView(e),i=new Uint8Array(e);t.getUint32(0,!0);const r=t.getUint32(4,!0),s=[];let o=4*(r+2);for(let e=0;e<r;e++){const r=t.getUint32(4*(e+2),!0);s.push(i.subarray(o,o+r)),o+=r}let c=0;return{metadata:s[c++],textureData:s[c++],eachTextureDataPortion:s[c++],eachTextureAttributes:s[c++],positions:s[c++],colors:s[c++],uvs:s[c++],indices8Bit:s[c++],indices16Bit:s[c++],indices32Bit:s[c++],edgeIndices8Bit:s[c++],edgeIndices16Bit:s[c++],edgeIndices32Bit:s[c++],eachTextureSetTextures:s[c++],decodeMatrices:s[c++],eachBucketPositionsPortion:s[c++],eachBucketColorsPortion:s[c++],eachBucketUVsPortion:s[c++],eachBucketIndicesPortion:s[c++],eachBucketEdgeIndicesPortion:s[c++],eachBucketIndicesBitness:s[c++],eachGeometryPrimitiveType:s[c++],eachGeometryBucketPortion:s[c++],eachGeometryDecodeMatricesPortion:s[c++],matrices:s[c++],eachMeshGeometriesPortion:s[c++],eachMeshMatricesPortion:s[c++],eachMeshTextureSet:s[c++],eachMeshMaterialAttributes:s[c++],eachObjectId:s[c++],eachObjectMeshesPortion:s[c++]}}var s=1001;const o=function(){const e=new Float32Array(3);return function(t){return e[0]=t[0]/255,e[1]=t[1]/255,e[2]=t[2]/255,e}}();function c(e){if(e.sceneModel.destroyed)throw new Error("SceneModel already destroyed");if(e.sceneModel.built)throw new t("SceneModel already built");if(e.dataModel){if(e.dataModel.destroyed)throw new t("DataModel already destroyed");if(e.dataModel.built)throw new t("DataModel already built")}return new Promise(function(t,s){!function(e){const t=e.xktData,i=e.sceneModel,r=e.dataModel;r&&t.metadata&&r.fromJSON(t.metadata);const s=t.eachTextureDataPortion.length,c=t.eachTextureSetTextures.length/5,n=t.eachBucketPositionsPortion.length,a=t.eachObjectMeshesPortion.length;let d=0;const h={};for(let e=0;e<s;e++){const r=t.eachTextureDataPortion[e],o=e===s-1?t.textureData.length:t.eachTextureDataPortion[e+1],c=9*e,n=1===t.eachTextureAttributes[c],a=t.eachTextureAttributes[c+1],d=t.eachTextureAttributes[c+4],h=t.eachTextureAttributes[c+5],u=t.eachTextureAttributes[c+6],l=t.eachTextureAttributes[c+7],f=t.eachTextureAttributes[c+8];if(o-r>0){const s=new Uint8Array(t.textureData.subarray(r,o)).buffer,c=`texture-${e}`;if(n)i.createTexture({id:c,buffers:[s],minFilter:d,magFilter:h,wrapS:u,wrapT:l,wrapR:f});else{const e=new Blob([s],{type:10001===a?"image/jpeg":10002===a?"image/png":"image/gif"}),t=(window.URL||window.webkitURL).createObjectURL(e),r=document.createElement("img");r.src=t,i.createTexture({id:c,image:r,mediaType:a,minFilter:d,magFilter:h,wrapS:u,wrapT:l,wrapR:f})}}}for(let e=0;e<c;e++){const r=5*e,s=t.eachTextureSetTextures[r],o=t.eachTextureSetTextures[r+1],c=t.eachTextureSetTextures[r+2],n=t.eachTextureSetTextures[r+3],a=t.eachTextureSetTextures[r+4];i.createTextureSet({id:`textureSet-${e}`,colorTextureId:s>=0?`texture-${s}`:void 0,normalsTextureId:c>=0?`texture-${c}`:void 0,metallicRoughnessTextureId:o>=0?`texture-${o}`:void 0,emissiveTextureId:n>=0?`texture-${n}`:void 0,occlusionTextureId:a>=0?`texture-${a}`:void 0})}for(let e=0;e<=a;e++){const r=t.eachObjectId[e],s=e===a-1?t.eachMeshGeometriesPortion.length-1:t.eachObjectMeshesPortion[e+1]-1,c=[];for(let r=t.eachObjectMeshesPortion[e];r<=s;r++){const s=t.eachMeshGeometriesPortion[r],a=t.eachMeshTextureSet[r],u=a>=0?`textureSet-${a}`:void 0,l=o(t.eachMeshMaterialAttributes.subarray(6*r,6*r+3)),f=t.eachMeshMaterialAttributes[6*r+3]/255,g=t.eachMeshMaterialAttributes[6*r+4]/255,m=t.eachMeshMaterialAttributes[6*r+5]/255,y="mesh-"+d++,B=t.eachMeshMatricesPortion[r],P=t.matrices.slice(B,B+16),M=`geometry.${s}`;if(!h[M]){const r={geometryBuckets:[]};r.primitive=t.eachGeometryPrimitiveType[s];const o=t.eachGeometryDecodeMatricesPortion[s];r.positionsDecompressMatrix=t.eachGeometryDecodeMatricesPortion.slice(o,o+16);const c=t.eachGeometryBucketPortion[s],a=c===n-1,d=a?t.eachMeshGeometriesPortion.length-1:t.eachObjectMeshesPortion[e+1]-1;for(let e=c;e<=d;e++){const i={positionsCompressed:[],indices:[]},s=t.eachBucketIndicesBitness[e],o=8===s?t.indices8Bit:16===s?t.indices16Bit:t.indices32Bit,c=8===s?t.edgeIndices8Bit:16===s?t.edgeIndices16Bit:t.edgeIndices32Bit;let n=!1;switch(r.primitive){case 20002:i.positionsCompressed=t.positions.subarray(t.eachBucketPositionsPortion[e],a?t.positions.length:t.eachBucketPositionsPortion[e+1]),i.indices=o.subarray(t.eachBucketIndicesPortion[e],a?o.length:t.eachBucketIndicesPortion[e+1]),i.edgeIndices=c.subarray(t.eachBucketEdgeIndicesPortion[e],a?c.length:t.eachBucketEdgeIndicesPortion[e+1]),n=i.positionsCompressed.length>0&&i.indices.length>0;break;case 2e4:i.positionsCompressed=t.positions.subarray(t.eachBucketPositionsPortion[e],a?t.positions.length:t.eachBucketPositionsPortion[e+1]),n=i.positionsCompressed.length>0;break;case 20001:i.positionsCompressed=t.positions.subarray(t.eachBucketPositionsPortion[e],a?t.positions.length:t.eachBucketPositionsPortion[e+1]),i.indices=o.subarray(t.eachBucketIndicesPortion[e],a?o.length:t.eachBucketIndicesPortion[e+1]),n=i.positionsCompressed.length>0&&i.indices.length>0;break;default:continue}n&&r.geometryBuckets.push(i)}r.geometryBuckets.length>0&&(i.createGeometryCompressed(r),h[M]=!0)}i.createMesh({id:y,geometryId:M,textureSetId:u,matrix:P,color:l,metallic:g,roughness:m,opacity:f}),c.push(y)}c.length>0&&i.createObject({id:r,meshIds:c})}}({xktData:i(r(e.data)),sceneModel:e.sceneModel,dataModel:e.dataModel}),t()})}function n(i){if(i.sceneModel.destroyed)throw new t("SceneModel already destroyed");if(!i.sceneModel.built)throw new t("SceneModel not yet built");if(i.dataModel){if(i.dataModel.destroyed)throw new t("DataModel already destroyed");if(!i.dataModel.built)throw new t("DataModel not yet built")}return r=function(t,i){let r;{const t=JSON.stringify(["{}"]).replace(/[\u007F-\uFFFF]/g,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).substr(-4)});r=e.deflate(t)}return{metadata:r,textureData:e.deflate(t.textureData.buffer),eachTextureDataPortion:e.deflate(t.eachTextureDataPortion.buffer),eachTextureAttributes:e.deflate(t.eachTextureAttributes.buffer),positions:e.deflate(t.positions.buffer),colors:e.deflate(t.colors.buffer),uvs:e.deflate(t.uvs.buffer),indices8Bit:e.deflate(t.indices8Bit.buffer),indices16Bit:e.deflate(t.indices16Bit.buffer),indices32Bit:e.deflate(t.indices32Bit.buffer),edgeIndices8Bit:e.deflate(t.edgeIndices8Bit.buffer),edgeIndices16Bit:e.deflate(t.edgeIndices16Bit.buffer),edgeIndices32Bit:e.deflate(t.edgeIndices32Bit.buffer),eachTextureSetTextures:e.deflate(t.eachTextureSetTextures.buffer),decodeMatrices:e.deflate(t.decodeMatrices.buffer),eachBucketPositionsPortion:e.deflate(t.eachBucketPositionsPortion.buffer),eachBucketColorsPortion:e.deflate(t.eachBucketColorsPortion.buffer),eachBucketUVsPortion:e.deflate(t.eachBucketUVsPortion.buffer),eachBucketIndicesPortion:e.deflate(t.eachBucketIndicesPortion.buffer),eachBucketEdgeIndicesPortion:e.deflate(t.eachBucketEdgeIndicesPortion.buffer),eachBucketIndicesBitness:e.deflate(t.eachBucketIndicesBitness.buffer),eachGeometryPrimitiveType:e.deflate(t.eachGeometryPrimitiveType.buffer),eachGeometryBucketPortion:e.deflate(t.eachGeometryBucketPortion.buffer),eachGeometryDecodeMatricesPortion:e.deflate(t.eachGeometryDecodeMatricesPortion.buffer),matrices:e.deflate(t.matrices.buffer),eachMeshGeometriesPortion:e.deflate(t.eachMeshGeometriesPortion.buffer),eachMeshMatricesPortion:e.deflate(t.eachMeshMatricesPortion.buffer),eachMeshTextureSet:e.deflate(t.eachMeshTextureSet.buffer),eachMeshMaterialAttributes:e.deflate(t.eachMeshMaterialAttributes.buffer),eachObjectId:e.deflate(JSON.stringify(t.eachObjectId).replace(/[\u007F-\uFFFF]/g,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).substr(-4)})),eachObjectMeshesPortion:e.deflate(t.eachObjectMeshesPortion.buffer)}}(function(e){const t=e.sceneModel,i=e.dataModel,r=Object.values(t.geometries),o=Object.values(t.textures),c=Object.values(t.textureSets),n=Object.values(t.meshes),a=Object.values(t.objects),d=r.length,h=o.length,u=c.length,l=n.length,f=a.length;let g=0,m=0,y=0,B=0,P=0,M=0,b=0,x=0,T=0,A=0,w=0;const p={},I={},k={};for(let e=0;e<d;e++){const t=r[e].geometryBuckets;g+=t.length;for(let e=0,i=t.length;e<i;e++){const i=t[e];if(i.positionsCompressed){const e=i.positionsCompressed.length/3;m+=i.positionsCompressed.length,i.indices&&(e<=256?B+=i.indices.length:e<=65536?P+=i.indices.length:M+=i.indices.length),i.edgeIndices&&(e<=256?b+=i.edgeIndices.length:e<=65536?x+=i.edgeIndices.length:T+=i.edgeIndices.length),i.uvsCompressed&&(y+=i.uvsCompressed.length)}}}for(let e=0;e<h;e++)A+=o[e].imageData.byteLength;w=16*d;const U={metadata:i?i.getJSON():{},textureData:new Uint8Array(A),eachTextureDataPortion:new Uint32Array(h),eachTextureAttributes:new Uint16Array(9*h),positions:new Uint16Array(m),colors:new Uint8Array(0),uvs:new Float32Array(y),indices8Bit:new Uint8Array(B),indices16Bit:new Uint16Array(P),indices32Bit:new Uint32Array(M),edgeIndices8Bit:new Uint8Array(b),edgeIndices16Bit:new Uint16Array(x),edgeIndices32Bit:new Uint32Array(T),eachTextureSetTextures:new Int32Array(5*u),decodeMatrices:new Float32Array(w),eachBucketPositionsPortion:new Uint32Array(g),eachBucketColorsPortion:new Uint32Array(g),eachBucketUVsPortion:new Uint32Array(g),eachBucketIndicesPortion:new Uint32Array(g),eachBucketEdgeIndicesPortion:new Uint32Array(g),eachBucketIndicesBitness:new Uint8Array(g),eachGeometryPrimitiveType:new Uint8Array(d),eachGeometryBucketPortion:new Uint32Array(d),eachGeometryDecodeMatricesPortion:new Uint32Array(d),matrices:new Float32Array(0),eachMeshGeometriesPortion:new Uint32Array(l),eachMeshMatricesPortion:new Uint32Array(l),eachMeshTextureSet:new Uint32Array(l),eachMeshMaterialAttributes:new Uint8Array(6*l),eachObjectId:[],eachObjectMeshesPortion:new Uint32Array(f)};let S=0,D=0,v=0,G=0,O=0,C=0,j=0,F=0,E=0,R=0,V=0,$=0;for(let e in t.geometries){const i=t.geometries[e],r=i.geometryBuckets;U.eachGeometryPrimitiveType[$]=i.primitive,U.eachGeometryBucketPortion[$]=S,U.eachGeometryDecodeMatricesPortion[$]=V,U.decodeMatrices.set(i.positionsDecompressMatrix,V),V+=16;for(let e=0,t=r.length;e<t;e++){const t=r[e],i=t.positionsCompressed.length/3,s=i<=256?0:i<=65536?1:2;if(U.eachBucketPositionsPortion[S]=D,U.eachBucketColorsPortion[S]=v,U.eachBucketUVsPortion[S]=G,U.eachBucketIndicesBitness[S]=s,U.positions.set(t.positionsCompressed,D),D+=t.positionsCompressed.length,t.indices)switch(s){case 0:U.indices8Bit.set(t.indices,O),U.eachBucketIndicesPortion[$]=O,O+=t.indices.length;break;case 1:U.indices16Bit.set(t.indices,C),U.eachBucketIndicesPortion[$]=C,C+=t.indices.length;break;case 2:U.indices32Bit.set(t.indices,j),U.eachBucketIndicesPortion[$]=j,j+=t.indices.length}if(t.edgeIndices)switch(s){case 0:U.edgeIndices8Bit.set(t.edgeIndices,F),U.eachBucketEdgeIndicesPortion[$]=F,F+=t.edgeIndices.length;break;case 1:U.edgeIndices16Bit.set(t.edgeIndices,E),U.eachBucketEdgeIndicesPortion[$]=E,E+=t.edgeIndices.length;break;case 2:U.edgeIndices32Bit.set(t.edgeIndices,R),U.eachBucketEdgeIndicesPortion[$]=R,R+=t.edgeIndices.length}t.colorsCompressed&&(U.colors.set(t.colorsCompressed,v),v+=t.colorsCompressed.length),t.uvsCompressed&&(U.uvs.set(t.uvsCompressed,G),G+=t.uvsCompressed.length),S++}p[i.id]=$,$++}for(let e=0,t=o.length,i=0;e<t;e++){const t=o[e],r=t.imageData;U.textureData.set(r,i),U.eachTextureDataPortion[e]=i,i+=r.byteLength;let c=9*e;U.eachTextureAttributes[c++]=t.compressed?1:0,U.eachTextureAttributes[c++]=t.mediaType||0,U.eachTextureAttributes[c++]=t.width,U.eachTextureAttributes[c++]=t.height,U.eachTextureAttributes[c++]=t.minFilter||1008,U.eachTextureAttributes[c++]=t.magFilter||1008,U.eachTextureAttributes[c++]=t.wrapS||s,U.eachTextureAttributes[c++]=t.wrapT||s,U.eachTextureAttributes[c++]=t.wrapR||s,I[t.id]=e}for(let e=0,t=c.length,i=0;e<t;e++){const t=c[e];U.eachTextureSetTextures[i++]=t.colorTexture?I[t.colorTexture.id]:-1,U.eachTextureSetTextures[i++]=t.metallicRoughnessTexture?I[t.metallicRoughnessTexture.id]:-1,U.eachTextureSetTextures[i++]=t.emissiveTexture?I[t.emissiveTexture.id]:-1,U.eachTextureSetTextures[i++]=t.occlusionTexture?I[t.occlusionTexture.id]:-1,k[t.id]=e}let J=0,N=0,L=0;for(let e=0;e<f;e++){const t=a[e],i=t.meshes.length;U.eachObjectId[e]=t.id,U.eachObjectMeshesPortion[e]=L;for(let e=0;e<i;e++){const i=t.meshes[e];U.eachMeshGeometriesPortion[e]=p[i.geometry.id],U.eachMeshMatricesPortion[e]=N,U.matrices.set(i.matrix,N),N+=16,U.eachMeshTextureSet[e]=i.textureSet?k[i.textureSet.id]:-1,U.eachMeshMaterialAttributes[J++]=255*i.color[0],U.eachMeshMaterialAttributes[J++]=255*i.color[1],U.eachMeshMaterialAttributes[J++]=255*i.color[2],U.eachMeshMaterialAttributes[J++]=255*i.opacity,U.eachMeshMaterialAttributes[J++]=255*i.metallic,U.eachMeshMaterialAttributes[J++]=255*i.roughness}L+=i}return U}({sceneModel:i.sceneModel,dataModel:i.dataModel})),function(e){const t=new Uint32Array(e.length+2);t[0]=11,t[1]=e.length;let i=0;for(let r=0,s=e.length;r<s;r++){const s=e[r].length;t[r+2]=s,i+=s}const r=new Uint8Array(t.buffer),s=new Uint8Array(r.length+i);s.set(r);let o=r.length;for(let t=0,i=e.length;t<i;t++){const i=e[t];s.set(i,o),o+=i.length}return s.buffer}([r.metadata,r.textureData,r.eachTextureDataPortion,r.eachTextureAttributes,r.positions,r.colors,r.uvs,r.indices8Bit,r.indices16Bit,r.indices32Bit,r.edgeIndices8Bit,r.edgeIndices16Bit,r.edgeIndices32Bit,r.eachTextureSetTextures,r.decodeMatrices,r.eachBucketPositionsPortion,r.eachBucketColorsPortion,r.eachBucketUVsPortion,r.eachBucketIndicesPortion,r.eachBucketEdgeIndicesPortion,r.eachBucketIndicesBitness,r.eachGeometryPrimitiveType,r.eachGeometryBucketPortion,r.eachGeometryDecodeMatricesPortion,r.matrices,r.eachMeshGeometriesPortion,r.eachMeshMatricesPortion,r.eachMeshTextureSet,r.eachMeshMaterialAttributes,r.eachObjectId,r.eachObjectMeshesPortion]);var r}export{c as loadXKT,n as saveXKT};
//# sourceMappingURL=index.modern.mjs.map