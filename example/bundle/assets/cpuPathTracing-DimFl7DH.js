import{V as T,C as te,w as E,M as R,f as ve,x as ct,j as Xe,W as dt,c as Pe,S as mt,P as ht,H as ft,m as ye,n as Z,d as k,b as ut,y as Be,B as he,u as pt,z as ke,R as gt,J as yt,e as wt,K as bt,Q as Mt,U as xt}from"./ExtendedTriangle-Chm2bbkR.js";import{O as St}from"./OrbitControls-lzJCl7xY.js";import{G as Re}from"./GLTFLoader-Dl6abS6P.js";import{m as Tt}from"./BufferGeometryUtils-Cscy-pCt.js";import{F as zt}from"./Pass-DgEPdZ3p.js";import{M as Ft}from"./meshopt_decoder.module-Cf1-17OU.js";import{g as Ct}from"./lil-gui.module.min-Bc0DeA9g.js";import{G as De}from"./GenerateMeshBVHWorker-B43A4fin.js";import{S as we,C as It}from"./MeshBVH-CPVAl5W3.js";import{a as vt,c as At,d as Pt}from"./ExtensionUtilities-D80Yg0dh.js";const oe=new T,be=new T,We=new T,Me=1e-7,Ve=16,Ee=[[1,1],[-1,-3],[-3,2],[4,-1],[-5,-2],[2,5],[5,3],[3,-5],[-2,6],[0,-7],[-4,-6],[-6,4],[-8,0],[7,-4],[6,7],[-7,-8]];function Bt(o,e){return e+(1-e)*Math.pow(1-o,5)}function ue(o,e){const t=Math.pow((1-e)/(1+e),2);return Bt(o,t)}function kt(o,e,t,n){let r=Math.min(-o.dot(e),1);oe.copy(o).addScaledVector(e,r).multiplyScalar(t),n.copy(e).multiplyScalar(-Math.sqrt(Math.abs(1-oe.lengthSq()))).add(oe)}function Rt(o,e){Math.abs(o.x)>.5?oe.set(0,1,0):oe.set(1,0,0),be.crossVectors(o,oe).normalize(),We.crossVectors(o,be).normalize(),e.makeBasis(We,be,o)}function Ye(o,e,t){return t.addVectors(o,e).normalize()}function He(o,e,t){const n=o.dot(e)>0,r=o.dot(t)>0;return n===r}const Dt=new T,Le=new T,Wt=new T,Vt=new T,Et=new T(0,0,1),xe=Math.PI;function Ht(o,e,t,n,r,s){const m=Dt.set(e*o.x,t*o.y,o.z).normalize(),c=m.z<.9999?Le.crossVectors(m,Et).normalize():Le.set(1,0,0),i=Wt.crossVectors(c,m),l=1/(1+m.z),d=Math.sqrt(n),g=r<l?r/l*xe:xe+(r-l)/(1-l)*xe,b=d*Math.cos(g),u=d*Math.sin(g)*(r<l?1:m.z);c.multiplyScalar(b),i.multiplyScalar(u);const M=Vt.addVectors(c,i).addScaledVector(m,Math.sqrt(Math.max(0,1-b*b-u*u)));return M.x*=e,M.y*=t,M.z=Math.max(0,M.z),M.normalize(),s.copy(M),s}function Ce(o,e){const t=Math.tan(o),n=t*t,r=e*e;return(-1+Math.sqrt(1+r*n))/2}function Lt(o,e){return 1/(1+Ce(o,e))}function Gt(o,e,t){const n=Math.acos(o.z),r=Math.acos(e.z);return 1/(1+Ce(n,t)+Ce(r,t))}function Qe(o,e){const t=e*e,n=o.z,r=Math.pow(n,4);if(n===0)return 0;const s=Math.acos(o.z),m=Math.tan(s),c=Math.pow(m,2),i=Math.PI*r*Math.pow(t+c,2);return t/i}function Nt(o,e,t){const n=Math.acos(o.z),r=Qe(e,t),s=Lt(n,t);return r*s*Math.max(0,o.dot(e))/o.z}const se=new T,U=new T,Ge=new te,qt=new te(16777215);function jt(o,e,t,n){return e.z/Math.PI}function $t(o,e,t,n){n.randomDirection(),n.z+=1,n.normalize()}function _t(o,e,t,n,r){const{metalness:s,transmission:m}=t;r.copy(t.color).multiplyScalar((1-s)*e.z/Math.PI/Math.PI).multiplyScalar(1-m)}function Ot(o,e,t,n){const r=n.filteredSurfaceRoughness;return Ye(e,o,U),Nt(e,U,r)/(4*e.dot(U))}function Ne(o,e,t,n){const r=e.filteredSurfaceRoughness;Ht(o,r,r,Math.random(),Math.random(),U),n.copy(o).reflect(U).multiplyScalar(-1)}function Ut(o,e,t,n,r){const{metalness:s,ior:m}=t,{frontFace:c}=n,i=n.filteredSurfaceRoughness;Ye(o,e,U);const l=c?1/m:m,d=Gt(e,o,i),g=Qe(U,i);let b=ue(e.dot(U),l);const u=Math.min(o.z,1),M=Math.sqrt(1-u*u);l*M>1&&(b=1),r.lerpColors(qt,t.color,s).multiplyScalar(d*g/(4*Math.abs(e.z*o.z))).multiplyScalar(E.lerp(b,1,s)).multiplyScalar(e.z)}function Xt(o,e,t,n){const{ior:r}=t,{frontFace:s}=n,m=s?1/r:r,c=Math.min(o.z,1),i=Math.sqrt(1-c*c);let l=ue(c,m);return m*i>1?0:1/(1-l)}function Yt(o,e,t,n){const{roughness:r,ior:s}=t,{frontFace:m}=e,c=m?1/s:s;se.copy(o).multiplyScalar(-1),kt(se,new T(0,0,1),c,n),se.randomDirection().multiplyScalar(r),n.add(se)}function Qt(o,e,t,n,r){const{metalness:s,transmission:m}=t;r.copy(t.color).multiplyScalar(1-s).multiplyScalar(m)}function Ze(o,e,t,n){const{ior:r,metalness:s,transmission:m}=t,{frontFace:c}=n,i=c?1/r:r,l=Math.min(o.z,1),d=Math.sqrt(1-l*l);let g=ue(l,i);i*d>1&&(g=1);let u=0,M=0,I=0;e.z<0?I=Xt(o,e,t,n):(u=Ot(o,e,t,n),M=jt(o,e));const z=E.lerp(g,1,s),j=.5+.5*s;return u*m*z+I*m*(1-z)+u*(1-m)*j+M*(1-m)*(1-j)}function Je(o,e,t,n,r){e.z<0?Qt(o,e,t,n,r):(_t(o,e,t,n,r),r.multiplyScalar(1-t.transmission),Ut(o,e,t,n,Ge),r.add(Ge))}function Zt(o,e,t,n){const r=n.direction,{ior:s,metalness:m,transmission:c}=t,{frontFace:i}=e,l=i?1/s:s,d=Math.min(o.z,1),g=Math.sqrt(1-d*d);let b=ue(d,l);if(l*g>1&&(b=1),Math.random()<c){const M=E.lerp(b,1,m);Math.random()<M?Ne(o,e,t,r):Yt(o,e,t,r)}else{const M=.5+.5*m;Math.random()<M?Ne(o,e,t,r):$t(o,e,t,r)}n.pdf=Ze(o,r,t,e),Je(o,r,t,e,n.color)}R.prototype.raycast=vt;ve.prototype.computeBoundsTree=At;ve.prototype.disposeBoundsTree=Pt;let $,q,A,qe,Ke,K,je,N,O,et,ae,fe,L,H,tt,ot,Ie,re,ee,y,W;const $e=300,Se=150,le=new ct,ce=new T,_e=new T,Oe=new T,de=new T,Te=new yt,ze=new Xe,me=new Xe,Y=new T,Q=new te,_=new T,D={},a={model:"Dragon",resolution:{resolutionScale:.5,smoothImageScaling:!1,stretchImage:!0},pathTracing:{pause:!1,displayScanLine:!1,antialiasing:!0,bounces:10,filterGlossyFactor:.5,smoothNormals:!0,directLightSampling:!0},material:{color:"#0099ff",emissive:"#000000",emissiveIntensity:1,roughness:.1,metalness:0,ior:1.8,transmission:0},floor:{enable:!0,color:"#7f7f7f",roughness:.1,metalness:.1,width:10,height:10},light:{enable:!0,position:"Diagonal",intensity:30,color:"#ffffff",width:1,height:1},environment:{skyMode:"sky",skyIntensity:.025}};Jt();nt();function Jt(){A=new dt({antialias:!0}),A.setPixelRatio(window.devicePixelRatio),A.setSize(window.innerWidth,window.innerHeight),A.setClearColor(0,1),A.outputEncoding=void 0,H=document.createElement("div"),H.style.position="absolute",H.style.inset="0",H.style.margin="auto",H.style.zIndex="-1",document.body.appendChild(H),H.appendChild(A.domElement),L=document.createElement("div"),L.style.width="100%",L.style.position="absolute",L.style.borderBottom="1px solid #e91e63",L.style.visibility="hidden",H.appendChild(L),tt=document.getElementById("output"),K=new zt(new Pe),K.material.transparent=!0,$=new mt,q=new ht(75,window.innerWidth/window.innerHeight,.1,50),q.position.set(-2.5,1.5,2.5),q.far=100,q.updateProjectionMatrix(),qe=new ft(16777215,6710886,1),$.add(qe),y=new R(new ye(1,1,1,1),new Pe({side:Z})),y.position.set(2,2,2),y.lookAt(0,0,0),$.add(y),W=new R(new ye(1,1,1,1),new k({side:Z})),W.rotation.x=-Math.PI/2,W.scale.setScalar(1),W.material.ior=1.6,W.material.transmission=0,$.add(W),je=new St(q,A.domElement),je.addEventListener("change",p),window.addEventListener("resize",J,!1),J(),D.Sphere=null;{const c=new R(new ut(1,100,50),new k),{geometry:i,materials:l}=Fe([c],!0),d=new R(i,new k);$.add(d),i.computeBoundsTree({strategy:we,maxLeafTris:1}),D.Sphere={mesh:d,materials:l,floorHeight:-1}}D["Cornell Box"]=null;{const c=new ye(1,1,1,1),i=new R(c,new k({color:60928,side:Z}));i.rotation.y=Math.PI/2,i.position.x=-2,i.scale.setScalar(4),i.updateMatrixWorld(!0);const l=new R(c,new k({color:15597568}));l.rotation.y=Math.PI/2,l.position.x=2,l.scale.setScalar(4),l.updateMatrixWorld(!0);const d=new R(c,new k({color:15658734}));d.position.z=-2,d.scale.setScalar(4),d.updateMatrixWorld(!0);const g=new R(c.clone(),new k({color:15658734}));g.rotation.x=Math.PI/2,g.position.y=2,g.scale.setScalar(4),g.updateMatrixWorld(!0);const b=new R(new Be(1,2,1),new k({side:Z}));b.position.y=-1,b.position.x=-.6,b.position.z=-.25,b.rotation.y=Math.PI/4;const u=new R(new Be(1,1,1),new k({side:Z}));u.position.y=-1.5,u.position.x=.75,u.position.z=.5,u.rotation.y=-Math.PI/8;const{geometry:M,materials:I}=Fe([b,u,i,l,d,g],!0),z=new R(M,new k);$.add(z),M.computeBoundsTree({strategy:we,maxLeafTris:1}),D["Cornell Box"]={mesh:z,materials:I,floorHeight:-2}}D.Dragon=null,new Re().load("https://raw.githubusercontent.com/gkjohnson/3d-demo-data/main/models/dragon-attenuation/DragonAttenuation.glb",c=>{let i;c.scene.traverse(u=>{u.isMesh&&u.name==="Dragon"&&(i=u)}),i.material=new k,i.geometry.center().scale(.25,.25,.25).rotateX(Math.PI/2),i.position.set(0,0,0),i.scale.set(1,1,1),i.quaternion.identity();const{geometry:l,materials:d}=Fe([i],!0),g=new R(l,new k),b=new De;b.generate(l,{maxLeafTris:1,strategy:we}).then(u=>{D.Dragon={mesh:g,materials:d,floorHeight:i.geometry.boundingBox.min.y},l.boundsTree=u,b.dispose(),$.add(g)})}),D.Engine=null,new Re().setMeshoptDecoder(Ft).load("https://raw.githubusercontent.com/gkjohnson/3d-demo-data/main/models/internal-combustion-engine/model.gltf",c=>{const i=c.scene.children[0],l=i.geometry,d=new ve,g=l.attributes.position,b=l.attributes.normal,u=new he(new Float32Array(g.count*3),3,!1),M=new he(new Float32Array(b.count*3),3,!1),I=new T;for(let v=0,ie=g.count;v<ie;v++)I.fromBufferAttribute(g,v),u.setXYZ(v,I.x,I.y,I.z),I.fromBufferAttribute(b,v),I.multiplyScalar(1/127),M.setXYZ(v,I.x,I.y,I.z);i.scale.multiplyScalar(5),i.updateMatrixWorld(),d.setAttribute("position",u),d.setAttribute("normal",M),d.setAttribute("materialIndex",new he(new Uint8Array(u.count),1,!1)),d.setIndex(l.index),d.applyMatrix4(i.matrixWorld).center(),d.computeBoundingBox();const z=new R(d,new k),j=new De;j.generate(d,{maxLeafTris:1,strategy:It}).then(v=>{D.Engine={mesh:z,materials:[new k],floorHeight:d.boundingBox.min.y},d.boundsTree=v,j.dispose(),$.add(z)})}),O=0,Ke=new wt;const o=new Ct;o.add(a,"model",Object.keys(D)).onChange(p);const e=o.addFolder("resolution");e.add(a.resolution,"resolutionScale",.1,1,.01).onChange(J),e.add(a.resolution,"smoothImageScaling").onChange(J),e.add(a.resolution,"stretchImage").onChange(J),e.open();const t=o.addFolder("path tracing");t.add(a.pathTracing,"pause"),t.add(a.pathTracing,"displayScanLine").onChange(c=>{L.style.visibility=c?"visible":"hidden"}),t.add(a.pathTracing,"antialiasing").onChange(p),t.add(a.pathTracing,"directLightSampling").onChange(p),t.add(a.pathTracing,"smoothNormals").onChange(p),t.add(a.pathTracing,"bounces",1,50,1).onChange(p),t.add(a.pathTracing,"filterGlossyFactor",0,1,.001).onChange(p),t.open();const n=o.addFolder("model");n.addColor(a.material,"color").onChange(p),n.addColor(a.material,"emissive").onChange(p),n.add(a.material,"emissiveIntensity",0,5,.001).onChange(p),n.add(a.material,"roughness",0,1,.001).onChange(p),n.add(a.material,"metalness",0,1,.001).onChange(p),n.add(a.material,"transmission",0,1,.001).onChange(p),n.add(a.material,"ior",1,2.5,.001).onChange(p),n.open();const r=o.addFolder("floor");r.add(a.floor,"enable").onChange(p),r.addColor(a.floor,"color").onChange(p),r.add(a.floor,"roughness",0,1,.001).onChange(p),r.add(a.floor,"metalness",0,1,.001).onChange(p),r.add(a.floor,"width",3,20,.001).onChange(p),r.add(a.floor,"height",3,20,.001).onChange(p);const s=o.addFolder("light");s.add(a.light,"enable").onChange(p),s.addColor(a.light,"color").onChange(p),s.add(a.light,"intensity",0,100,.001).onChange(p),s.add(a.light,"width",0,5,.001).onChange(p),s.add(a.light,"height",0,5,.001).onChange(p),s.add(a.light,"position",["Diagonal","Above","Below"]).onChange(p);const m=o.addFolder("environment");m.add(a.environment,"skyMode",["sky","sun","checkerboard"]).onChange(p),m.add(a.environment,"skyIntensity",0,5,.001).onChange(p),J()}function Fe(o,e=!0){const t=[],n=[];for(let s=0,m=o.length;s<m;s++){const c=o[s],i=o[s].geometry,l=e&&i.clone();c.updateMatrixWorld(),l.applyMatrix4(c.matrixWorld);const d=l.attributes.position.count,g=new Uint8Array(d).fill(s);l.setAttribute("materialIndex",new he(g,1,!1)),t.push(l),n.push(c.material)}return{geometry:Tt(t,!1),materials:n}}function J(){function o(n,r){(!N||N.image.width!==n||N.image.height!==r)&&(N&&N.dispose(),N=new bt(new Float32Array(n*r*4),n,r,Mt,xt),p())}q.aspect=window.innerWidth/window.innerHeight,q.updateProjectionMatrix();const e=window.devicePixelRatio,t=a.resolution.resolutionScale;a.resolution.stretchImage?(H.style.width=`${window.innerWidth}px`,H.style.height=`${window.innerHeight}px`,A.setSize(window.innerWidth,window.innerHeight),A.setPixelRatio(e*t),o(Math.floor(window.innerWidth*e*t),Math.floor(window.innerHeight*e*t))):(H.style.width=`${window.innerWidth*t}px`,H.style.height=`${window.innerHeight*t}px`,A.setSize(Math.floor(window.innerWidth*t),Math.floor(window.innerHeight*t)),A.setPixelRatio(e),o(Math.floor(window.innerWidth*e*t),Math.floor(window.innerHeight*e*t))),A.domElement.style.imageRendering=a.resolution.smoothImageScaling?"auto":"pixelated"}function p(){N.image.data.fill(0),N.needsUpdate=!0,O=0,et=Kt(),ae=0,L.style.visibility="hidden",fe=100,y.scale.set(a.light.width,a.light.height,1),y.material.color.set(a.light.color).multiplyScalar(a.light.intensity),y.visible=a.light.enable,W.scale.set(a.floor.width,a.floor.height,1),W.material.color.set(a.floor.color),W.material.roughness=Math.pow(a.floor.roughness,2),W.material.metalness=a.floor.metalness,W.visible=a.floor.enable}function*Kt(){const{width:o,height:e,data:t}=N.image,n=parseInt(a.pathTracing.bounces),r=parseFloat(a.environment.skyIntensity),s=a.environment.skyMode,m=a.pathTracing.smoothNormals,c=new te,i=new te,l=new T,d=new T,g=new pt,b=new Array(n).fill().map(()=>new ke),u=new T(0,0,1).transformDirection(y.matrixWorld),M=y.scale.x,I=y.scale.y,z=new gt;z.firstHitOnly=!0;const j=new ke,v={pdf:0,color:new te,direction:new T};let ie=performance.now();for(ot=performance.now(),Ie=0,fe=100,L.style.visibility=a.pathTracing.displayScanLine?"visible":"hidden",re.material.side=Z,ee.forEach(S=>{S.side=Z});;){let S=0,h=0;if(a.pathTracing.antialiasing){const f=O%Ee.length;[S,h]=Ee[f],S=S/Ve/o,h=h/Ve/e}for(let f=e-1;f>=0;f--)for(let x=0;x<o;x++){g.set(S+x/(o-1),h+f/(e-1)),z.setFromCamera({x:g.x*2-1,y:g.y*2-1},q),_.set(0,0,-1).transformDirection(q.matrixWorld),j.direction.copy(z.ray.direction),j.origin.copy(z.ray.origin).addScaledVector(z.ray.direction,q.near/z.ray.direction.dot(_)),c.set(0),rt(j,c);const P=(f*o+x)*4,V=t[P+0],w=t[P+1],B=t[P+2];t[P+0]+=(c.r-V)/(O+1),t[P+1]+=(c.g-w)/(O+1),t[P+2]+=(c.b-B)/(O+1),t[P+3]=1;const F=performance.now()-ie;F>16&&(Ie+=F,fe=100*f/e,yield,ie=performance.now())}O++}function at(S,h,f){const x=S.object,P=x.geometry.attributes.position,V=x.geometry.attributes.normal,w=x.geometry.attributes.materialIndex,B=S.face,F=S.face.normal;if(m){const G=S.point;le.a.fromBufferAttribute(P,B.a),le.b.fromBufferAttribute(P,B.b),le.c.fromBufferAttribute(P,B.c),ce.fromBufferAttribute(V,B.a),_e.fromBufferAttribute(V,B.b),Oe.fromBufferAttribute(V,B.c),le.getBarycoord(G,de),d.setScalar(0).addScaledVector(ce,de.x).addScaledVector(_e,de.y).addScaledVector(Oe,de.z).normalize()}else d.copy(F);F.transformDirection(x.matrixWorld),d.transformDirection(x.matrixWorld);const C=F.dot(h.direction)<0;C||(d.multiplyScalar(-1),F.multiplyScalar(-1));let X=x.material;if(w){const G=w.getX(B.a);X=ee[G]}S.material=X,S.normal=d,S.geometryNormal=F,S.frontFace=C,S.filteredSurfaceRoughness=Math.min(Math.max(1e-6,X.roughness,f*a.pathTracing.filterGlossyFactor*5),1)}function rt(S,h){let f=S,x=0,P=0;i.set(16777215);for(let V=0;V<n;V++){let w=null;z.ray.copy(f);const B=[re];if(a.light.enable&&B.push(y),a.floor.enable&&B.push(W),w=z.intersectObjects(B,!0)[0],w)if(w.object===y){if(V===0){const F=y.material.color;h.r=Math.min(F.r,1),h.g=Math.min(F.g,1),h.b=Math.min(F.b,1)}else if(f.direction.dot(u)<0){const F=w.distance*w.distance,C=M*I,X=F/(C*-f.direction.dot(u)),G=x/(x+X);h.r+=G*i.r*y.material.color.r,h.g+=G*i.g*y.material.color.g,h.b+=G*i.b*y.material.color.b}break}else{at(w,f,P);const{material:F}=w,C=b[V];if(Rt(w.normal,ze),me.copy(ze).invert(),a.light.enable&&(_.set(Math.random()-.5,Math.random()-.5,0).applyMatrix4(y.matrixWorld),C.origin.copy(w.point).addScaledVector(w.geometryNormal,Me),C.direction.subVectors(_,C.origin).normalize(),C.direction.dot(u)<0&&He(C.direction,w.normal,w.geometryNormal))){const st=M*I,ne=C.origin.distanceToSquared(_)/(st*-C.direction.dot(u));z.ray.copy(C);const Ae=z.intersectObjects(B,!0)[0];if(Ae&&Ae.object===y){Y.copy(f.direction).applyMatrix4(me).multiplyScalar(-1).normalize(),_.copy(C.direction).applyMatrix4(me).normalize(),Y.normalize(),Je(Y,_,F,w,Q);const lt=Ze(Y,_,F,w),ge=ne/(lt+ne);h.r+=y.material.color.r*i.r*Q.r*ge/ne,h.g+=y.material.color.g*i.g*Q.g*ge/ne,h.b+=y.material.color.b*i.b*Q.b*ge/ne}}Y.copy(f.direction).applyMatrix4(me).multiplyScalar(-1).normalize(),Zt(Y,w,F,v),l.addVectors(Y,v.direction).normalize(),P+=Math.sin(Math.acos(l.z)),C.direction.copy(v.direction).applyMatrix4(ze).normalize();const X=C.direction.dot(w.geometryNormal)<0;C.origin.copy(w.point).addScaledVector(w.geometryNormal,X?-Me:Me);const{emissive:G,emissiveIntensity:pe}=F;if(h.r+=pe*G.r*i.r,h.g+=pe*G.g*i.g,h.b+=pe*G.b*i.b,v.pdf<=0||!He(C.direction,w.normal,w.geometryNormal))break;v.color.multiplyScalar(1/v.pdf),i.multiply(v.color),f=C,x=v.pdf}else{it(f.direction,Q),Q.multiply(i),h.add(Q);break}}}function it(S,h){if(s==="checkerboard"){Te.setFromVector3(S);const f=Math.PI/10,x=Math.floor(Te.theta/f)%2===0,P=Math.floor(Te.phi/f)%2===0,V=x===P;h.set(V?0:16777215).multiplyScalar(1.5),h.multiplyScalar(r)}else if(s==="sun"){ce.setScalar(1).normalize();let f=Math.max(0,S.dot(ce)+1)/2;if(f*=f,h.r=E.lerp(.01,.5,f),h.g=E.lerp(.01,.7,f),h.b=E.lerp(.01,1,f),f>.95){let x=(f-.95)/.05;x*=x,h.r=E.lerp(.5,10,x),h.g=E.lerp(.7,10,x),h.b=E.lerp(1,10,x)}h.multiplyScalar(r)}else{const f=(S.y+.5)/2;h.r=E.lerp(1,.5,f),h.g=E.lerp(1,.7,f),h.b=E.lerp(1,1,f),h.multiplyScalar(r)}}}function Ue(o){o=o||0;let e=o*.001;const t=Math.floor(e/60);e=e-t*60;const n=(t<10?"0":"")+t,r=(e<10?"0":"")+e.toFixed(3);return`${n}m ${r}s`}function nt(){requestAnimationFrame(nt);for(const e in D)D[e]&&(D[e].mesh.visible=!1);if(D[a.model]){const e=D[a.model];e.mesh.visible=!0,re=e.mesh,ee=e.materials,W.position.y=e.floorHeight,ee.forEach(n=>{n.ior===void 0&&(n.ior=1),n.transmission===void 0&&(n.transmission=0)});const t=ee[0];switch(t.color.set(a.material.color).convertSRGBToLinear(),t.emissive.set(a.material.emissive).convertSRGBToLinear(),t.emissiveIntensity=parseFloat(a.material.emissiveIntensity),t.ior=parseFloat(a.material.ior),t.metalness=parseFloat(a.material.metalness),t.transmission=parseFloat(a.material.transmission),t.roughness=Math.pow(parseFloat(a.material.roughness),2),a.light.position){case"Below":y.rotation.set(-Math.PI/2,0,0),y.position.set(0,e.floorHeight+.001,0);break;case"Above":y.rotation.set(Math.PI/2,0,0),y.position.set(0,2-.001,0);break;default:y.position.set(2,2,2),y.lookAt(0,0,0);break}}else re=null,ee=null,W.position.y=0;let o=0;ae>Se&&(o=Math.min((ae-Se)/($e-Se),1)),L.style.bottom=`${fe}%`,a.resolution.stretchImage?L.style.borderBottomWidth=`${Math.ceil(1/a.resolution.resolutionScale)}px`:L.style.borderBottomWidth="1px",A.render($,q),A.autoClear=!1,K.material.map=N,K.material.opacity=o,K.render(A),A.autoClear=!0,re&&!a.pathTracing.pause&&et.next(),N.needsUpdate=!0,A.compile(K._mesh),ae<$e&&(ae+=Ke.getDelta()*1e3),tt.innerText=`completed samples : ${O}
computation time  : ${Ue(Ie)}
elapsed time      : ${Ue(performance.now()-ot)}`}
