import{M as $,f as R,u as z,C as x,W as _,a8 as U,a9 as I,U as j,S as G,P as N,c as Q,a6 as q,aa as X,p as Y,R as J,V as K,a4 as Z}from"./ExtendedTriangle-Chm2bbkR.js";import{O as ee}from"./OrbitControls-lzJCl7xY.js";import{G as te}from"./GLTFLoader-Dl6abS6P.js";import{F as oe}from"./Pass-DgEPdZ3p.js";import{g as ae}from"./lil-gui.module.min-Bc0DeA9g.js";import{M as re}from"./MeshBVHHelper-jLfel8l5.js";import{C as ne,A as ie,S as O}from"./MeshBVH-CPVAl5W3.js";import{g as se,e as B}from"./Debug-Bq6kbTOM.js";import{a as le,c as de,d as me}from"./ExtensionUtilities-D80Yg0dh.js";import"./BufferGeometryUtils-Cscy-pCt.js";$.prototype.raycast=le;R.prototype.computeBoundsTree=de;R.prototype.disposeBoundsTree=me;let w,c,o,u,a,S,L,l,h,s,M=new z;const P=new Float32Array(1),ce="https://raw.githubusercontent.com/gkjohnson/3d-demo-data/main/models/dragon-attenuation/DragonAttenuation.glb",e={options:{strategy:O,maxLeafTris:10,maxDepth:40,rebuild:function(){D()}},visualization:{displayMesh:!0,simpleColors:!1,outline:!0,traversalThreshold:50},benchmark:{displayRays:!1,firstHitOnly:!0,rotations:10,castCount:1e3}},ue=new x(16770670).convertLinearToSRGB().getHex(),fe=25453,he=16081063;class pe extends Z{constructor(n){super({uniforms:{map:{value:null},threshold:{value:35},boundsColor:{value:new x(16777215)},backgroundColor:{value:new x(0)},thresholdColor:{value:new x(16711680)},resolution:{value:new z},outlineAlpha:{value:.5}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				uniform float threshold;

				uniform vec3 thresholdColor;
				uniform vec3 boundsColor;
				uniform vec3 backgroundColor;
				uniform vec2 resolution;
				uniform float outlineAlpha;

				varying vec2 vUv;
				void main() {

					float count = texture2D( map, vUv ).r;

					if ( count == 0.0 ) {

						vec2 offset = 1.0 / resolution;
						float c1 = texture2D( map, vUv + offset * vec2( 1.0, 0.0 ) ).r;
						float c2 = texture2D( map, vUv + offset * vec2( - 1.0, 0.0 ) ).r;
						float c3 = texture2D( map, vUv + offset * vec2( 0.0, 1.0 ) ).r;
						float c4 = texture2D( map, vUv + offset * vec2( 0.0, - 1.0 ) ).r;

						float maxC = max( c1, max( c2, max( c3, c4 ) ) );
						if ( maxC != 0.0 ) {

							gl_FragColor.rgb = mix( backgroundColor, mix( boundsColor, vec3( 1.0 ), 0.5 ), outlineAlpha );
							gl_FragColor.a = 1.0;
							return;

						}

					}

					if ( count > threshold ) {

						gl_FragColor.rgb = thresholdColor.rgb;
						gl_FragColor.a = 1.0;

					} else {

						float alpha = count / threshold;
						vec3 color = mix( boundsColor, vec3( 1.0 ), pow( alpha, 1.75 ) );

						gl_FragColor.rgb = mix( backgroundColor, color, alpha ).rgb ;
						gl_FragColor.a = 1.0;

					}

				}
			`});const t=this.uniforms;for(const r in t)Object.defineProperty(this,r,{get(){return this.uniforms[r].value},set(i){this.uniforms[r].value=i}});this.setValues(n)}}function ge(){S=document.getElementById("output"),L=document.getElementById("benchmark"),o=new _({antialias:!0}),o.setPixelRatio(window.devicePixelRatio),o.setSize(window.innerWidth,window.innerHeight),o.setClearColor(0,1),document.body.appendChild(o.domElement),h=new U(1,1,{format:I,type:j}),s=new oe(new pe({map:h.texture,depthWrite:!1})),w=new G,c=new N(75,window.innerWidth/window.innerHeight,.1,50),c.position.set(-2.5,1.5,2.5),c.far=100,c.updateProjectionMatrix(),new ee(c,o.domElement),window.addEventListener("resize",H,!1),H(),new te().load(ce,m=>{m.scene.traverse(f=>{f.isMesh&&f.name==="Dragon"&&(a=f)}),a.material=new Q({colorWrite:!1}),a.geometry.center(),a.position.set(0,0,0),w.add(a),u=new re(a,40),u.displayEdges=!1,u.displayParents=!0,u.color.set(16777215),u.opacity=1,u.depth=40;const g=u.meshMaterial;g.blending=q,g.blendDst=X,w.add(u),D(),y(!0)}),l=new Y,l.material.opacity=.1,l.material.transparent=!0,l.material.depthWrite=!1,l.frustumCulled=!1,w.add(l);const n=new ae,t=n.addFolder("BVH");t.add(e.options,"strategy",{CENTER:ne,AVERAGE:ie,SAH:O}),t.add(e.options,"maxLeafTris",1,30,1),t.add(e.options,"maxDepth",1,40,1),t.add(e.options,"rebuild"),t.open();const r=n.addFolder("Visualization");r.add(e.visualization,"displayMesh"),r.add(e.visualization,"simpleColors"),r.add(e.visualization,"outline"),r.add(e.visualization,"traversalThreshold",1,300,1),r.open();const i=n.addFolder("Benchmark");i.add(e.benchmark,"displayRays"),i.add(e.benchmark,"firstHitOnly").onChange(T),i.add(e.benchmark,"castCount",100,5e3,1).onChange(()=>{T(),y(!0)}),i.add(e.benchmark,"rotations",1,20,1).onChange(()=>{T(),y(!0)}),i.open(),window.addEventListener("pointermove",m=>{M.set(m.clientX,window.innerHeight-m.clientY)})}function H(){c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(window.devicePixelRatio),h.setSize(window.innerWidth*window.devicePixelRatio,window.innerHeight*window.devicePixelRatio)}function D(){const d=performance.now();a.geometry.computeBoundsTree({strategy:parseInt(e.options.strategy),maxLeafTris:e.options.maxLeafTris,maxDepth:e.options.maxDepth});const n=performance.now()-d;u.update(),T();const t=se(a.geometry.boundsTree)[0];S.innerText=`construction time        : ${n.toFixed(2)}ms
surface area score       : ${t.surfaceAreaScore.toFixed(2)}
total nodes              : ${t.nodeCount}
total leaf nodes         : ${t.leafNodeCount}
min / max tris per leaf  : ${t.tris.min} / ${t.tris.max}
min / max depth          : ${t.depth.min} / ${t.depth.max}
memory (incl. geometry)  : ${(B(a.geometry.boundsTree)*1e-6).toFixed(3)} mb 
memory (excl. geometry)  : ${(B(a.geometry.boundsTree._roots)*1e-6).toFixed(3)} mb`}function y(d=!1){let n=null,t=null;d&&(a.updateMatrixWorld(),t=new R,l.geometry.dispose(),n=[]);const r=new J;r.firstHitOnly=e.benchmark.firstHitOnly;const i=e.benchmark.castCount,m=e.benchmark.rotations,{ray:g}=r,{origin:f,direction:A}=g,V=performance.now();for(let v=0;v<i;v++){const p=v/i-.5;if(f.set(Math.cos(.75*Math.PI*p)*Math.sin(m*2*Math.PI*v/i),2*p,Math.cos(.75*Math.PI*p)*Math.cos(m*2*Math.PI*v/i)).multiplyScalar(2.5),A.set(Math.cos(m*5*p),Math.sin(m*10*p),Math.sin(m*5*p)).sub(f).normalize(),r.intersectObject(a),d){const F=r.intersectObject(a)[0];if(n.push(f.clone()),F)n.push(F.point.clone());else{const k=new K;g.at(5,k),n.push(k)}}}const W=performance.now()-V;return d&&(t.setFromPoints(n),l.geometry=t),W}let C=0,b=0;function T(){C=0,b=0}function E(){requestAnimationFrame(E);const d=o.getPixelRatio();o.readRenderTargetPixels(h,M.x*d,M.y*d,1,1,P),a&&(C=Math.min(C+1,50),b+=(y()-b)/C,L.innerText=`
traversal depth at mouse : ${Math.round(P[0])}
benchmark rolling avg    : ${b.toFixed(3)} ms`),e.visualization.simpleColors?(s.material.boundsColor.set(16777215),s.material.thresholdColor.set(16711680),s.material.backgroundColor.set(0)):(s.material.boundsColor.set(ue),s.material.thresholdColor.set(he),s.material.backgroundColor.set(fe)),s.material.threshold=e.visualization.traversalThreshold,s.material.outlineAlpha=e.visualization.outline?.5:0,s.material.resolution.set(h.width,h.height),l.visible=!1,o.autoClear=!0,a&&(a.visible=e.visualization.displayMesh),o.setRenderTarget(h),o.render(w,c),o.setRenderTarget(null),s.render(o),o.autoClear=!1,l.visible=e.benchmark.displayRays,a&&o.render(a,c),o.render(l,c)}ge();E();
