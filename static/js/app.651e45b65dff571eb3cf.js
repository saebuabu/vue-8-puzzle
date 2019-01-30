webpackJsonp([0],{"+t+x":function(t,e,i){t.exports=i.p+"static/media/cat.18555a5.mp4"},AXoc:function(t,e,i){t.exports=i.p+"static/media/penguin.f2997e6.mp4"},HXkA:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW");const o=0;var n;!function(t){t.Above="Above",t.Below="Below",t.Left="Left",t.Right="Right"}(n||(n={}));var a=class{constructor(t){if(this.dy=t.length,this.dx=t[0].length,this.dy<2||this.dx<2)throw new Error("cannot initialize with the array which has less than 2 col/rows");this.blocks=new Array(this.dx*this.dy);let e=0;for(let i=0;i<this.dy;i++)for(let s=0;s<this.dx;s++)this.blocks[e]=t[i][s],t[i][s]===o&&(this.blankpos=e),e++}row(t){return Math.floor(t/this.dx)}col(t){return t%this.dx}dimensions(){return{x:this.dx,y:this.dy}}checkInRange(...t){for(let e of t)if(null==this.blocks[e])throw new Error(`Index ${e} not in range [0 .. ${this.blocks.length-1}]`)}direction(t,e){if(this.checkInRange(t,e),this.row(e)===this.row(t)){if(e%this.dx==t%this.dx-1)return n.Left;if(e%this.dx==t%this.dx+1)return n.Right}return e===t+this.dx?n.Below:e===t-this.dx?n.Above:null}hamming(){let t=0;for(let e=0,i=1,s=this.blocks.length;e<s;e++,i++)this.blocks[e]!==o&&this.blocks[e]!==i&&t++;return t}manhattan(){let t=0;for(let e=0,i=this.blocks.length;e<i;e++)this.blocks[e]!==o&&(t+=Math.abs(this.row(this.blocks[e]-1)-this.row(e))+Math.abs(this.col(this.blocks[e]-1)-this.col(e)));return t}isGoal(){for(let t=0,e=this.blocks.length;t<e;t++)if(this.blocks[t]!==o&&this.blocks[t]!==t+1)return!1;return!0}swap(t,e,i){if(this.checkInRange(e,i),this.blocks[e]!==o&&this.blocks[i]!==o)throw new Error("cannot swap non-space block");return[t[e],t[i]]=[t[i],t[e]],this.blankpos=t[e]===o?e:i,this}swapAbove(t){return this.swap(this.blocks,t,t-this.dx)}swapBelow(t){return this.swap(this.blocks,t,t+this.dx)}swapLeft(t){return this.swap(this.blocks,t,t-1)}swapRight(t){return this.swap(this.blocks,t,t+1)}slide(t){switch(this.checkInRange(t),this.direction(t,this.blankpos)){case n.Above:return this.swapAbove(t);case n.Below:return this.swapBelow(t);case n.Left:return this.swapLeft(t);case n.Right:return this.swapRight(t);default:return this}}toArray2D(){let t=0;const e=[];for(let i=0;i<this.dy;i++){const i=[];for(let e=0;e<this.dx;e++,t++)i.push(this.blocks[t]);e.push(i)}return e}},r=i("y1vT"),c=i.n(r),l=i("vy4U"),h=i.n(l),u=function(t,e){for(var i=function(t,e){for(var i=[],s=0,o=0;o<e;o++){for(var n=[],a=0;a<t;a++)n.push(++s%(t*e));i.push(n)}return i}(t,e),s=new a(i),o=["swapAbove","swapLeft","swapRight","swapBelow"],n=o.length,r=0;r<100;r++){var c=o[Math.floor(Math.random()*n)];try{s[c](s.blankpos)}catch(t){continue}}return s},d={name:"PuzzleBoard",data:function(){this._blockPositions=[],this._isStarted=!1;var t=u(this.cols,this.rows);return{isTouchNeeded:!0,blocks:t.blocks,isGoal:!1,manhattan:null,hamming:null,width:0,height:0,board:t}},props:{src:{type:String},sources:{type:Array},muted:{type:Boolean,default:!0},animation:{type:Boolean,default:!0},cols:{type:Number,default:4},rows:{type:Number,default:4},showNumber:{type:Boolean,default:!0},autoResize:{type:Boolean,default:!1}},computed:{cellWidth:function(){return this.width/this.cols},cellHeight:function(){return this.height/this.rows},isImage:function(){return/\.(jpe?g|png|webm|gif)$/i.test(this.src)},canvasStyle:function(){return{left:this.isGoal?"-100%":0}},sourceStyle:function(){return{display:"none"}}},mounted:function(){var t=this;this.onResize(),window.addEventListener("resize",c()(this.onResize.bind(this),300)),this._tmpCanvas=document.createElement("canvas"),this._tmpCtx=this._tmpCanvas.getContext("2d"),this._lastRenderVideoTime=-1,this._lastRenderTime=0,this.isImage?this.$refs.sourceImg.onload=function(){t.isTouchNeeded=!1,t._loadImageToCanvas()}:this.$refs.sourceImg.addEventListener("play",function(){t.isTouchNeeded=!1});this.$nextTick(function e(){if(h.a.update(),null==t.$refs.sourceImg||t.$refs.sourceImg.readyState<3)requestAnimationFrame(e);else{var i=t.$refs.sourceImg,s=t.$refs["puzzle-canvas"],o=s.getContext("2d"),n=t.width;if(i.currentTime!==t._lastRender&&(t._lastRenderVideoTime=i.currentTime,t._loadVideoFrameToCanvas()),t.isGoal)requestAnimationFrame(e);else{o.clearRect(0,0,t.width,t.height),t.showNumber&&(o.font="24px 'Avenir', Helvetica, Arial, sans-serif",o.fillStyle="#fafafa",o.textBaseline="top");for(var a=0,r=t.blocks.length;a<r;a++){var c=t.blocks[a];if(0!==c){var l=t.board.row(c-1),u=t.board.col(c-1),d=t.cellWidth*u+n,f=t.cellHeight*l,m=t._blockPositions[c];if(null!=m){var p=m.x,v=m.y;if(o.drawImage(s,d,f,t.cellWidth,t.cellHeight,p,v,t.cellWidth,t.cellHeight),t.showNumber){var g=String(c);o.strokeText(g,5+p,5+v),o.fillText(g,5+p,5+v)}}}}requestAnimationFrame(e)}}}),this.$emit("init")},watch:{cols:function(){this.initBoard()},rows:function(){this.initBoard()},board:function(){this.blocks=this.board.blocks},blocks:function(){var t=!this.animation;this.updateBlockPositions(t),this.isGoal=this.board.isGoal(),this.manhattan=this.board.manhattan(),this.hamming=this.board.hamming(),this.$emit("change",{blocks:this.blocks,isGoal:this.isGoal,distance:this.manhattan})},isGoal:function(){this.isGoal&&this.$emit("finish")},sources:function(){var t=this;this.isImage||this.$nextTick(function(){t.$refs.sourceImg.load(),t.isTouchNeeded=!0,t.$refs.sourceImg.play(),t.$refs.sourceImg.addEventListener("play",function(){t.isTouchNeeded=!1})})},src:function(){var t=this;this.isImage&&(this.isTouchNeeded=!1,this.$nextTick(function(){t.$refs.sourceImg.addEventListener("load",function(){t._loadImageToCanvas()})}))}},methods:{initBoard:function(){this.board=u(this.cols,this.rows),this._blockPositions=[],this._isStarted=!1,this.$emit("init")},updateBlockPositions:function(t){for(var e=this,i=function(i,s){var o=e.blocks[i],n=e.board.col(i),a=e.board.row(i),r=e.cellWidth*n,c=e.cellHeight*a,l=e._blockPositions[o]||{x:0,y:0};if(null==e._blockPositions[o]&&(e._blockPositions[o]=l),l.x-r==0&&l.y-c==0)return"continue";var u={x:l.x,y:l.y};t?(e._blockPositions[o].x=r,e._blockPositions[o].y=c):new h.a.Tween(u).to({x:r,y:c},200).easing(h.a.Easing.Quadratic.Out).onUpdate(function(){e._blockPositions[o].x=u.x,e._blockPositions[o].y=u.y}).start()},s=0,o=this.blocks.length;s<o;s++)i(s)},_loadImageToCanvas:function(){var t=this.$refs.sourceImg,e=this.$refs["puzzle-canvas"].getContext("2d"),i=this.width,s=this.height,o=t.width,n=t.height,a=Math.max(i/o,s/n);this._tmpCanvas.width=o*a,this._tmpCanvas.height=n*a,this._tmpCtx.drawImage(t,0,0,o*a,n*a);var r=(o*a-i)/2,c=(n*a-s)/2;e.drawImage(this._tmpCanvas,r,c,i,s,i,0,i,s)},_loadVideoFrameToCanvas:function(){var t=this.$refs.sourceImg,e=this.$refs["puzzle-canvas"].getContext("2d"),i=this.width,s=this.height,o=t.videoWidth,n=t.videoHeight,a=Math.max(i/o,s/n);this._tmpCanvas.width=o*a,this._tmpCanvas.height=n*a,this._tmpCtx.drawImage(t,0,0,o*a,n*a);var r=(o*a-i)/2,c=(n*a-s)/2;e.drawImage(this._tmpCanvas,r,c,i,s,i,0,i,s)},slide:function(t){this._isStarted||(this._isStarted=!0,this.$emit("start")),this.board.slide(t),s.a.set(this,"blocks",this.board.blocks.concat())},onTouchEnd:function(t){this.isTouchNeeded&&this.$refs.sourceImg.play();var e=t.changedTouches[0],i=this.$el.getBoundingClientRect(),s=e.clientX-i.left,o=e.clientY-i.top;this.handleClick(s,o)},onClick:function(t){var e=t.offsetX-(this.isGoal?this.width:0),i=t.offsetY;this.handleClick(e,i)},handleClick:function(t,e){t/=this.cellWidth,e/=this.cellHeight;var i=Math.floor(t),s=Math.floor(e)*this.cols+i;this.slide(s)},onClickBoard:function(){this.$el.focus()},onResize:function(){var t=this.$el.offsetWidth,e=this.$el.offsetHeight;this.autoResize&&(this.width=t,this.height=e),this.isImage&&this.$nextTick(this._loadImageToCanvas.bind(this)),this.updateBlockPositions(!0)},onKeyUp:function(t){var e=this.board.blankpos,i=this.blocks.length;switch(t.keyCode){case 37:e+1<i&&this.slide(e+1);break;case 38:e+this.cols<i&&this.slide(e+this.cols);break;case 39:e-1>=0&&this.slide(e-1);break;case 40:e-this.cols>=0&&this.slide(e-this.cols)}}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"puzzle-board",attrs:{tabindex:"-1"},on:{keyup:function(e){return e.preventDefault(),t.onKeyUp(e)},click:t.onClickBoard}},[t.isTouchNeeded?i("div",{staticClass:"puzzle-message"},[t._v("Touch to start")]):t._e(),t._v(" "),i("canvas",{ref:"puzzle-canvas",staticClass:"puzzle-canvas",style:t.canvasStyle,attrs:{width:2*t.width,height:t.height},on:{click:function(t){t.preventDefault()},mousedown:function(t){t.preventDefault()},mouseup:function(e){return e.preventDefault(),t.onClick(e)},touchend:function(e){return e.preventDefault(),t.onTouchEnd(e)}}}),t._v(" "),t.isImage?i("img",{ref:"sourceImg",style:t.sourceStyle,attrs:{src:t.src}}):i("video",{ref:"sourceImg",style:t.sourceStyle,attrs:{autoplay:"",loop:"",playsinline:"",src:t.src,width:t.width,height:t.height},domProps:{muted:t.muted}},[t._l(t.sources,function(t){return i("source",{key:t.src,attrs:{src:t.src,type:t.type}})}),t._v("\n  No video")],2)])},staticRenderFns:[]};var m=i("VU/8")(d,f,!1,function(t){i("kR0q")},"data-v-4dd666ad",null).exports,p=i("xMld"),v=i.n(p),g=i("AXoc"),b=i.n(g),w=i("wh8N"),k=i.n(w),y=i("+t+x"),_=i.n(y),x=i("QWiY"),z={Dog:{src:i.n(x).a},Cat:{sources:[{src:k.a,type:"video/webm"},{src:_.a,type:"video/mp4"}]},Penguin:{sources:[{src:v.a,type:"video/webm"},{src:b.a,type:"video/mp4"}]}},C={Easy:{x:3,y:3},Normal:{x:4,y:4},Difficult:{x:5,y:5}},T={name:"App",components:{PuzzleBoard:m},data:function(){return{videoTitle:"Cat",difficulty:"Easy",distance:null,isGoal:!1,autoResize:!0,showNumber:!1,animation:!0}},computed:{sources:function(){return z[this.videoTitle].sources},src:function(){return z[this.videoTitle].src},dimensions:function(){return C[this.difficulty]}},watch:{isGoal:function(t){t?this.$confetti.start({shape:"rect"}):this.$confetti.stop()}},methods:{onTitleClick:function(){window.open("https://github.com/meganetaaan/vue-8-puzzle")},onPuzzleBoardInit:function(){console.log("init"),this.isGoal=!1},onPuzzleBoardStart:function(){console.log("start")},onPuzzleBoardFinish:function(){console.log("finish"),this.isGoal=!0},onPuzzleBoardChange:function(t){console.log("change"),this.distance=t.distance}}},N={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"header"},[i("span",{staticClass:"header-item title",on:{click:t.onTitleClick}},[t._v("Vue-8-Puzzle")]),t._v(" "),i("span",{staticClass:"header-item distance"},[t._v(" d: "+t._s(t.distance)+" ")]),t._v(" "),i("span",{staticClass:"header-item"},[i("label",{attrs:{for:"showNumber"}},[t._v("#:")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.showNumber,expression:"showNumber"}],attrs:{type:"checkbox",id:"showNumber"},domProps:{checked:Array.isArray(t.showNumber)?t._i(t.showNumber,null)>-1:t.showNumber},on:{change:function(e){var i=t.showNumber,s=e.target,o=!!s.checked;if(Array.isArray(i)){var n=t._i(i,null);s.checked?n<0&&(t.showNumber=i.concat([null])):n>-1&&(t.showNumber=i.slice(0,n).concat(i.slice(n+1)))}else t.showNumber=o}}})]),t._v(" "),i("span",{staticClass:"header-item"},[i("label",{attrs:{for:"animation"}},[t._v("a:")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.animation,expression:"animation"}],attrs:{type:"checkbox",id:"animation"},domProps:{checked:Array.isArray(t.animation)?t._i(t.animation,null)>-1:t.animation},on:{change:function(e){var i=t.animation,s=e.target,o=!!s.checked;if(Array.isArray(i)){var n=t._i(i,null);s.checked?n<0&&(t.animation=i.concat([null])):n>-1&&(t.animation=i.slice(0,n).concat(i.slice(n+1)))}else t.animation=o}}})]),t._v(" "),i("span",{staticClass:"header-item"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.videoTitle,expression:"videoTitle"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.videoTitle=e.target.multiple?i:i[0]}}},[i("option",[t._v("Dog")]),t._v(" "),i("option",[t._v("Cat")]),t._v(" "),i("option",[t._v("Penguin")])])]),t._v(" "),i("span",{staticClass:"header-item"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.difficulty,expression:"difficulty"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.difficulty=e.target.multiple?i:i[0]}}},[i("option",[t._v("Easy")]),t._v(" "),i("option",[t._v("Normal")]),t._v(" "),i("option",[t._v("Difficult")])])]),t._v(" "),i("span",{staticClass:"header-item"},[t.isGoal?[t._v("\n        finish!!\n      ")]:t._e()],2)]),t._v(" "),i("div",{staticClass:"container"},[i("puzzle-board",{attrs:{autoResize:t.autoResize,showNumber:t.showNumber,cols:t.dimensions.x,rows:t.dimensions.y,src:t.src,sources:t.sources,animation:t.animation},on:{init:t.onPuzzleBoardInit,start:t.onPuzzleBoardStart,change:t.onPuzzleBoardChange,finish:t.onPuzzleBoardFinish}})],1)])},staticRenderFns:[]};var I=i("VU/8")(T,N,!1,function(t){i("HXkA")},null,null).exports,$=i("4gUt"),A=i.n($);s.a.use(A.a),s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:I},template:"<App/>"})},QWiY:function(t,e,i){t.exports=i.p+"static/img/dog.cccfd52.jpg"},kR0q:function(t,e){},wh8N:function(t,e,i){t.exports=i.p+"static/media/cat.ae00415.webm"},xMld:function(t,e,i){t.exports=i.p+"static/media/penguin.3d50f11.webm"}},["NHnr"]);
//# sourceMappingURL=app.651e45b65dff571eb3cf.js.map