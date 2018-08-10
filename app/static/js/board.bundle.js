!function(t){var o={};function i(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,o,r){i.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,o){if(1&o&&(t=i(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)i.d(r,n,function(o){return t[o]}.bind(null,n));return r},i.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(o,"a",o),o},i.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},i.p="",i(i.s=8)}({0:function(t,o){t.exports=jQuery},8:function(t,o,i){"use strict";i.r(o);var r=i(0),n=i.n(r),s=function(t){var o=t||{},i={provider:function(){throw new Error("No provider!")},maxLength:30,onUpdate:function(){}};this.provider=void 0!==o.provider?o.provider:i.provider,this.maxLength=void 0!==o.maxLength?o.maxLength:i.maxLength,this.onUpdate=void 0!==o.onUpdate?o.onUpdate:i.onUpdate,this.initialItem=null,this.clear()};s.prototype.initialize=function(t){this.stack[0]=t,this.initialItem=t},s.prototype.clear=function(){this.stack=[this.initialItem],this.position=0,this.onUpdate()},s.prototype.save=function(){this.provider(function(t){!function(t,o){for(;t.length>o;)t.shift()}(this.stack,this.maxLength),this.position=Math.min(this.position,this.stack.length-1),this.stack=this.stack.slice(0,this.position+1),this.stack.push(t),this.position++,this.onUpdate()}.bind(this))},s.prototype.undo=function(t){if(this.canUndo()){var o=this.stack[--this.position];this.onUpdate(),t&&t(o)}},s.prototype.redo=function(t){if(this.canRedo()){var o=this.stack[++this.position];this.onUpdate(),t&&t(o)}},s.prototype.canUndo=function(){return this.position>0},s.prototype.canRedo=function(){return this.position<this.count()},s.prototype.count=function(){return this.stack.length-1};var e,a=s;window.DrawingBoard="undefined"!=typeof DrawingBoard?DrawingBoard:{},DrawingBoard.Utils={},
/*!
* Tim (lite)
*   github.com/premasagar/tim
*/
DrawingBoard.Utils.tpl=(e=new RegExp("{{\\s*([a-z0-9_][\\.a-z0-9_]*)\\s*}}","gi"),function(t,o){return t.replace(e,function(t,i){for(var r=i.split("."),n=r.length,s=o,e=0;e<n;e++){if(void 0===(s=s[r[e]]))throw"tim: '"+r[e]+"' not found in "+t;if(e===n-1)return s}})}),DrawingBoard.Utils.MicroEvent=function(){},DrawingBoard.Utils.MicroEvent.prototype={bind:function(t,o){this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(o)},unbind:function(t,o){this._events=this._events||{},t in this._events!=!1&&this._events[t].splice(this._events[t].indexOf(o),1)},trigger:function(t){if(this._events=this._events||{},t in this._events!=!1)for(var o=0;o<this._events[t].length;o++)this._events[t][o].apply(this,Array.prototype.slice.call(arguments,1))}},DrawingBoard.Utils._boxBorderSize=function(t,o,i,r){o=!!o||!0,i=!!i||!1;var n,s=0;"width"==r?(n=["border-left-width","border-right-width"],o&&n.push("padding-left","padding-right"),i&&n.push("margin-left","margin-right")):(n=["border-top-width","border-bottom-width"],o&&n.push("padding-top","padding-bottom"),i&&n.push("margin-top","margin-bottom"));for(var e=n.length-1;e>=0;e--)s+=parseInt(t.css(n[e]).replace("px",""),10);return s},DrawingBoard.Utils.boxBorderWidth=function(t,o,i){return DrawingBoard.Utils._boxBorderSize(t,o,i,"width")},DrawingBoard.Utils.boxBorderHeight=function(t,o,i){return DrawingBoard.Utils._boxBorderSize(t,o,i,"height")},DrawingBoard.Utils.isColor=function(t){return!(!t||!t.length)&&(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)||-1!==n.a.inArray(t.substring(0,3),["rgb","hsl"]))},DrawingBoard.Utils.RGBToInt=function(t,o,i){var r=0;return r|=(255&t)<<16,r|=(255&o)<<8,r|=255&i},DrawingBoard.Utils.pixelAt=function(t,o,i){var r=4*(i*t.width+o);return[r,o,i,DrawingBoard.Utils.RGBToInt(t.data[r],t.data[r+1],t.data[r+2])]},DrawingBoard.Utils.compareColors=function(t,o,i){if(0===i)return t===o;var r=t>>16&255,n=o>>16&255,s=t>>8&255,e=o>>8&255,a=255&t,d=255&o;return Math.abs(r-n)<=i&&Math.abs(s-e)<=i&&Math.abs(a-d)<=i},function(){for(var t=["ms","moz","webkit","o"],o=0;o<t.length&&!window.requestAnimationFrame;++o)window.requestAnimationFrame=window[t[o]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[o]+"CancelAnimationFrame"]||window[t[o]+"CancelRequestAnimationFrame"]}(),window.DrawingBoard="undefined"!=typeof DrawingBoard?DrawingBoard:{},DrawingBoard.Board=function(t,o){if(this.opts=this.mergeOptions(o),this.ev=new DrawingBoard.Utils.MicroEvent,this.id=t,this.$el=n()(document.getElementById(t)),!this.$el.length)return!1;var i='<div class="drawing-board-canvas-wrapper"></canvas><canvas class="drawing-board-canvas"></canvas><div class="drawing-board-cursor drawing-board-utils-hidden"></div></div>';if(this.opts.controlsPosition.indexOf("bottom")>-1?i+='<div class="drawing-board-controls"></div>':i='<div class="drawing-board-controls"></div>'+i,this.$el.addClass("drawing-board").append(i),this.dom={$canvasWrapper:this.$el.find(".drawing-board-canvas-wrapper"),$canvas:this.$el.find(".drawing-board-canvas"),$cursor:this.$el.find(".drawing-board-cursor"),$controls:this.$el.find(".drawing-board-controls")},n.a.each(["left","right","center"],n.a.proxy(function(t,o){if(this.opts.controlsPosition.indexOf(o)>-1)return this.dom.$controls.attr("data-align",o),!1},this)),this.canvas=this.dom.$canvas.get(0),this.ctx=this.canvas&&this.canvas.getContext&&this.canvas.getContext("2d")?this.canvas.getContext("2d"):null,this.color=this.opts.color,!this.ctx)return this.opts.errorMessage&&this.$el.html(this.opts.errorMessage),!1;this.storage=this._getStorage(),this.initHistory(),this.reset({webStorage:!1,history:!1,background:!1}),this.initControls(),this.resize(),this.reset({webStorage:!1,history:!1,background:!0}),this.restoreWebStorage(),this.initDropEvents(),this.initDrawEvents()},DrawingBoard.Board.defaultOpts={controls:["Color","DrawingMode","Size","Navigation"],controlsPosition:"top left",color:"#000000",size:1,background:"#fff",eraserColor:"background",fillTolerance:100,fillHack:!0,webStorage:"session",droppable:!1,enlargeYourContainer:!1,errorMessage:'<p>It seems you use an obsolete browser. <a href="http://browsehappy.com/" target="_blank">Update it</a> to start drawing.</p>',stretchImg:!1},DrawingBoard.Board.prototype={mergeOptions:function(t){return(t=n.a.extend({},DrawingBoard.Board.defaultOpts,t)).background||"background"!==t.eraserColor||(t.eraserColor="transparent"),t},reset:function(t){t=n.a.extend({color:this.opts.color,size:this.opts.size,webStorage:!0,history:!0,background:!1},t),this.setMode("pencil"),t.background&&this.resetBackground(this.opts.background,n.a.proxy(function(){t.history&&this.saveHistory()},this)),t.color&&this.setColor(t.color),t.size&&(this.ctx.lineWidth=t.size),this.ctx.lineCap="round",this.ctx.lineJoin="round",t.webStorage&&this.saveWebStorage(),t.history&&!t.background&&this.saveHistory(),this.blankCanvas=this.getImg(),this.ev.trigger("board:reset",t)},resetBackground:function(t,o){t=t||this.opts.background;var i=DrawingBoard.Utils.isColor(t),r=this.getMode();this.setMode("pencil"),this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),i?(this.ctx.fillStyle=t,this.ctx.fillRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.history.initialize(this.getImg()),o&&o()):t&&this.setImg(t,{callback:n.a.proxy(function(){this.history.initialize(this.getImg()),o&&o()},this)}),this.setMode(r)},resize:function(){var t,o;this.dom.$controls.toggleClass("drawing-board-controls-hidden",!this.controls||!this.controls.length);var i=[this.$el.width(),DrawingBoard.Utils.boxBorderWidth(this.$el),DrawingBoard.Utils.boxBorderWidth(this.dom.$canvasWrapper,!0,!0)],r=[this.$el.height(),DrawingBoard.Utils.boxBorderHeight(this.$el),this.dom.$controls.height(),DrawingBoard.Utils.boxBorderHeight(this.dom.$controls,!1,!0),DrawingBoard.Utils.boxBorderHeight(this.dom.$canvasWrapper,!0,!0)],n=function(t,o){o=o||1;for(var i=t[0],r=1;r<t.length;r++)i+=t[r]*o;return i},s=function(t){return n(t,-1)};this.opts.enlargeYourContainer?(t=this.$el.width(),o=this.$el.height(),this.$el.width(n(i)),this.$el.height(n(r))):(t=s(i),o=s(r)),this.dom.$canvasWrapper.css("width",t+"px"),this.dom.$canvasWrapper.css("height",o+"px"),this.dom.$canvas.css("width",t+"px"),this.dom.$canvas.css("height",o+"px"),this.canvas.width=t,this.canvas.height=o},initControls:function(){if(this.controls=[],!this.opts.controls.length||!DrawingBoard.Control)return!1;for(var t=0;t<this.opts.controls.length;t++){var o=null;if("string"==typeof this.opts.controls[t])o=new window.DrawingBoard.Control[this.opts.controls[t]](this);else if("object"==typeof this.opts.controls[t]){for(var i in this.opts.controls[t])break;o=new window.DrawingBoard.Control[i](this,this.opts.controls[t][i])}o&&this.addControl(o)}},addControl:function(t,o,i){if("string"!=typeof t&&("object"!=typeof t||!t instanceof DrawingBoard.Control))return!1;var r="object"==typeof o?o:{};i=i?1*i:"number"==typeof o?o:null,"string"==typeof t&&(t=new window.DrawingBoard.Control[t](this,r)),i?this.dom.$controls.children().eq(i).before(t.$el):this.dom.$controls.append(t.$el),this.controls||(this.controls=[]),this.controls.push(t),this.dom.$controls.removeClass("drawing-board-controls-hidden")},initHistory:function(){this.history=new a({maxLength:30,provider:n.a.proxy(function(t){t(this.getImg())},this),onUpdate:n.a.proxy(function(){this.ev.trigger("historyNavigation")},this)})},saveHistory:function(){this.history.save()},restoreHistory:function(t){this.setImg(t,{callback:n.a.proxy(function(){this.saveWebStorage()},this)})},goBackInHistory:function(){this.history.undo(n.a.proxy(this.restoreHistory,this))},goForthInHistory:function(){this.history.redo(n.a.proxy(this.restoreHistory,this))},setImg:function(t,o){o=n.a.extend({stretch:this.opts.stretchImg,callback:null},o);var i=this.ctx,r=new Image,s=i.globalCompositeOperation;r.onload=function(){i.globalCompositeOperation="source-over",i.clearRect(0,0,i.canvas.width,i.canvas.height),o.stretch?i.drawImage(r,0,0,i.canvas.width,i.canvas.height):i.drawImage(r,0,0),i.globalCompositeOperation=s,o.callback&&o.callback()},r.src=t},getImg:function(){return this.canvas.toDataURL("image/png")},getBlob:function(t){return this.canvas.toBlob(t,"image/png")},downloadImg:function(){var t=this.getImg();t=t.replace("image/png","image/octet-stream"),window.location.href=t},saveWebStorage:function(){window[this.storage]&&(window[this.storage].setItem("drawing-board-"+this.id,this.getImg()),this.ev.trigger("board:save"+this.storage.charAt(0).toUpperCase()+this.storage.slice(1),this.getImg()))},restoreWebStorage:function(){window[this.storage]&&null!==window[this.storage].getItem("drawing-board-"+this.id)&&(this.setImg(window[this.storage].getItem("drawing-board-"+this.id)),this.ev.trigger("board:restore"+this.storage.charAt(0).toUpperCase()+this.storage.slice(1),window[this.storage].getItem("drawing-board-"+this.id)))},clearWebStorage:function(){window[this.storage]&&null!==window[this.storage].getItem("drawing-board-"+this.id)&&(window[this.storage].removeItem("drawing-board-"+this.id),this.ev.trigger("board:clear"+this.storage.charAt(0).toUpperCase()+this.storage.slice(1)))},_getStorage:function(){return!(!this.opts.webStorage||"session"!==this.opts.webStorage&&"local"!==this.opts.webStorage)&&this.opts.webStorage+"Storage"},initDropEvents:function(){if(!this.opts.droppable)return!1;this.dom.$canvas.on("dragover dragenter drop",function(t){t.stopPropagation(),t.preventDefault()}),this.dom.$canvas.on("drop",n.a.proxy(this._onCanvasDrop,this))},_onCanvasDrop:function(t){var o=(t=t.originalEvent?t.originalEvent:t).dataTransfer.files;if(!o||!o.length||-1==o[0].type.indexOf("image")||!window.FileReader)return!1;var i=new FileReader;i.readAsDataURL(o[0]),i.onload=n.a.proxy(function(t){this.setImg(t.target.result,{callback:n.a.proxy(function(){this.saveHistory()},this)}),this.ev.trigger("board:imageDropped",t.target.result),this.ev.trigger("board:userAction")},this)},setMode:function(t,o){o=o||!1,t=t||"pencil",this.ev.unbind("board:startDrawing",n.a.proxy(this.fill,this)),"transparent"===this.opts.eraserColor?this.ctx.globalCompositeOperation="eraser"===t?"destination-out":"source-over":("eraser"===t?"background"===this.opts.eraserColor&&DrawingBoard.Utils.isColor(this.opts.background)?this.ctx.strokeStyle=this.opts.background:DrawingBoard.Utils.isColor(this.opts.eraserColor)&&(this.ctx.strokeStyle=this.opts.eraserColor):this.mode&&"eraser"!==this.mode||(this.ctx.strokeStyle=this.color),"filler"===t&&this.ev.bind("board:startDrawing",n.a.proxy(this.fill,this))),this.mode=t,o||this.ev.trigger("board:mode",this.mode)},getMode:function(){return this.mode||"pencil"},setColor:function(t){var o=this;if(t=t||this.color,!DrawingBoard.Utils.isColor(t))return!1;if(this.color=t,"transparent"!==this.opts.eraserColor&&"eraser"===this.mode){var i=function(t){"eraser"!==t&&(o.strokeStyle=o.color),o.ev.unbind("board:mode",i)};this.ev.bind("board:mode",i)}else this.ctx.strokeStyle=this.color},fill:function(t){if(this.getImg()===this.blankCanvas)return this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.ctx.fillStyle=this.color,void this.ctx.fillRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);var o=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height),i=0,r=this.ctx.strokeStyle,n=parseInt(r.substr(1,2),16),s=parseInt(r.substr(3,2),16),e=parseInt(r.substr(5,2),16),a=DrawingBoard.Utils.pixelAt(o,parseInt(t.coords.x,10),parseInt(t.coords.y,10)),d=a[3],h=this.opts.fillTolerance,l=this.opts.fillHack;if(!DrawingBoard.Utils.compareColors(d,DrawingBoard.Utils.RGBToInt(n,s,e),h)){for(var c,g=[a],u=o.width-1,p=o.height-1;c=g.pop();)l&&w(c),DrawingBoard.Utils.compareColors(c[3],d,h)&&(l||w(c),c[1]>0&&g.push(DrawingBoard.Utils.pixelAt(o,c[1]-1,c[2])),c[1]<u&&g.push(DrawingBoard.Utils.pixelAt(o,c[1]+1,c[2])),c[2]>0&&g.push(DrawingBoard.Utils.pixelAt(o,c[1],c[2]-1)),c[2]<p&&g.push(DrawingBoard.Utils.pixelAt(o,c[1],c[2]+1)));this.ctx.putImageData(o,0,0)}function w(t){o.data[t[i]]=n,o.data[t[i]+1]=s,o.data[t[i]+2]=e}},initDrawEvents:function(){this.isDrawing=!1,this.isMouseHovering=!1,this.coords={},this.coords.old=this.coords.current=this.coords.oldMid={x:0,y:0},this.dom.$canvas.on("mousedown touchstart",n.a.proxy(function(t){this._onInputStart(t,this._getInputCoords(t))},this)),this.dom.$canvas.on("mousemove touchmove",n.a.proxy(function(t){this._onInputMove(t,this._getInputCoords(t))},this)),this.dom.$canvas.on("mousemove",n.a.proxy(function(t){},this)),this.dom.$canvas.on("mouseup touchend",n.a.proxy(function(t){this._onInputStop(t,this._getInputCoords(t))},this)),this.dom.$canvas.on("mouseover",n.a.proxy(function(t){this._onMouseOver(t,this._getInputCoords(t))},this)),this.dom.$canvas.on("mouseout",n.a.proxy(function(t){this._onMouseOut(t,this._getInputCoords(t))},this)),n()("body").on("mouseup touchend",n.a.proxy(function(t){this.isDrawing=!1},this)),window.requestAnimationFrame&&requestAnimationFrame(n.a.proxy(this.draw,this))},draw:function(){if(window.requestAnimationFrame&&this.ctx.lineWidth>10&&this.isMouseHovering){this.dom.$cursor.css({width:this.ctx.lineWidth+"px",height:this.ctx.lineWidth+"px"});var t=DrawingBoard.Utils.tpl("translateX({{x}}px) translateY({{y}}px)",{x:this.coords.current.x-this.ctx.lineWidth/2,y:this.coords.current.y-this.ctx.lineWidth/2});this.dom.$cursor.css({transform:t,"-webkit-transform":t,"-ms-transform":t}),this.dom.$cursor.removeClass("drawing-board-utils-hidden")}else this.dom.$cursor.addClass("drawing-board-utils-hidden");if(this.isDrawing){var o=this._getMidInputCoords(this.coords.current);this.ctx.beginPath(),this.ctx.moveTo(o.x,o.y),this.ctx.quadraticCurveTo(this.coords.old.x,this.coords.old.y,this.coords.oldMid.x,this.coords.oldMid.y),this.ctx.stroke(),this.coords.old=this.coords.current,this.coords.oldMid=o}window.requestAnimationFrame&&requestAnimationFrame(n.a.proxy(function(){this.draw()},this))},_onInputStart:function(t,o){this.coords.current=this.coords.old=o,this.coords.oldMid=this._getMidInputCoords(o),this.isDrawing=!0,window.requestAnimationFrame||this.draw(),this.ev.trigger("board:startDrawing",{e:t,coords:o}),t.stopPropagation(),t.preventDefault()},_onInputMove:function(t,o){this.coords.current=o,this.ev.trigger("board:drawing",{e:t,coords:o}),window.requestAnimationFrame||this.draw(),t.stopPropagation(),t.preventDefault()},_onInputStop:function(t,o){!this.isDrawing||t.touches&&0!==t.touches.length||(this.isDrawing=!1,this.saveWebStorage(),this.saveHistory(),this.ev.trigger("board:stopDrawing",{e:t,coords:o}),this.ev.trigger("board:userAction"),t.stopPropagation(),t.preventDefault())},_onMouseOver:function(t,o){this.isMouseHovering=!0,this.coords.old=this._getInputCoords(t),this.coords.oldMid=this._getMidInputCoords(this.coords.old),this.ev.trigger("board:mouseOver",{e:t,coords:o})},_onMouseOut:function(t,o){this.isMouseHovering=!1,this.ev.trigger("board:mouseOut",{e:t,coords:o})},_getInputCoords:function(t){t=t.originalEvent?t.originalEvent:t;var o,i,r=this.canvas.getBoundingClientRect(),n=this.dom.$canvas.width(),s=this.dom.$canvas.height();return t.touches&&1==t.touches.length?(o=t.touches[0].pageX,i=t.touches[0].pageY):(o=t.pageX,i=t.pageY),o-=this.dom.$canvas.offset().left,i-=this.dom.$canvas.offset().top,{x:o*=n/r.width,y:i*=s/r.height}},_getMidInputCoords:function(t){return{x:this.coords.old.x+t.x>>1,y:this.coords.old.y+t.y>>1}}},DrawingBoard.Control=function(t,o){return this.board=t,this.opts=n.a.extend({},this.defaults,o),this.$el=n()(document.createElement("div")).addClass("drawing-board-control"),this.name&&this.$el.addClass("drawing-board-control-"+this.name),this.board.ev.bind("board:reset",n.a.proxy(this.onBoardReset,this)),this.initialize.apply(this,arguments),this},DrawingBoard.Control.prototype={name:"",defaults:{},initialize:function(){},addToBoard:function(){this.board.addControl(this)},onBoardReset:function(t){}},DrawingBoard.Control.extend=function(t,o){var i,r=this;i=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return r.apply(this,arguments)},n.a.extend(i,r,o);var s=function(){this.constructor=i};return s.prototype=r.prototype,i.prototype=new s,t&&n.a.extend(i.prototype,t),i.__super__=r.prototype,i},DrawingBoard.Control.Color=DrawingBoard.Control.extend({name:"colors",initialize:function(){this.initTemplate();var t=this;this.$el.on("click",".drawing-board-control-colors-picker",function(o){var i=n()(this).attr("data-color");t.board.setColor(i),t.$el.find(".drawing-board-control-colors-current").css("background-color",i).attr("data-color",i),t.board.ev.trigger("color:changed",i),t.$el.find(".drawing-board-control-colors-rainbows").addClass("drawing-board-utils-hidden"),o.preventDefault()}),this.$el.on("click",".drawing-board-control-colors-current",function(o){t.$el.find(".drawing-board-control-colors-rainbows").toggleClass("drawing-board-utils-hidden"),o.preventDefault()}),n()("body").on("click",function(o){var i=n()(o.target),r=i.hasClass("drawing-board-control-colors-current")?i:i.closest(".drawing-board-control-colors-current"),s=t.$el.find(".drawing-board-control-colors-current"),e=t.$el.find(".drawing-board-control-colors-rainbows");r.length&&r.get(0)===s.get(0)||e.hasClass("drawing-board-utils-hidden")||e.addClass("drawing-board-utils-hidden")})},initTemplate:function(){var t='<div class="drawing-board-control-colors-picker" data-color="{{color}}" style="background-color: {{color}}"></div>',o="";n.a.each([.75,.5,.25],n.a.proxy(function(i,r){var n=0,s=null;for(o+='<div class="drawing-board-control-colors-rainbow">',.25==r&&(s=this._rgba(0,0,0,1)),.5==r&&(s=this._rgba(150,150,150,1)),.75==r&&(s=this._rgba(255,255,255,1)),o+=DrawingBoard.Utils.tpl(t,{color:s.toString()});n<=330;)o+=DrawingBoard.Utils.tpl(t,{color:this._hsl2Rgba(this._hsl(n-60,1,r)).toString()}),n+=30;o+="</div>"},this)),this.$el.append(n()(DrawingBoard.Utils.tpl('<div class="drawing-board-control-inner"><div class="drawing-board-control-colors-current" style="background-color: {{color}}" data-color="{{color}}"></div><div class="drawing-board-control-colors-rainbows">{{rainbows}}</div></div>',{color:this.board.color,rainbows:o}))),this.$el.find(".drawing-board-control-colors-rainbows").addClass("drawing-board-utils-hidden")},onBoardReset:function(t){this.board.setColor(this.$el.find(".drawing-board-control-colors-current").attr("data-color"))},_rgba:function(t,o,i,r){return{r:t,g:o,b:i,a:r,toString:function(){return"rgba("+t+", "+o+", "+i+", "+r+")"}}},_hsl:function(t,o,i){return{h:t,s:o,l:i,toString:function(){return"hsl("+t+", "+100*o+"%, "+100*i+"%)"}}},_hex2Rgba:function(t){var o=parseInt(t.substring(1),16);return this._rgba(o>>16,o>>8&255,255&o,1)},_hsl2Rgba:function(t){var o,i,r,n=t.h/360,s=t.s,e=t.l;function a(t,o,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(o-t)*i:i<.5?o:i<2/3?t+(o-t)*(2/3-i)*6:t}if(0===s)o=i=r=e;else{var d=e<.5?e*(1+s):e+s-e*s,h=2*e-d;o=Math.floor(255*a(h,d,n+1/3)),i=Math.floor(255*a(h,d,n)),r=Math.floor(255*a(h,d,n-1/3))}return this._rgba(o,i,r,1)}}),DrawingBoard.Control.DrawingMode=DrawingBoard.Control.extend({name:"drawingmode",defaults:{pencil:!0,eraser:!0,filler:!0},initialize:function(){this.prevMode=this.board.getMode(),n.a.each(["pencil","eraser","filler"],n.a.proxy(function(t,o){this.opts[o]&&this.$el.append('<button class="button drawing-board-control-drawingmode-'+o+'-button" data-mode="'+o+'"></button>')},this)),this.$el.on("click","button[data-mode]",n.a.proxy(function(t){var o=n()(t.currentTarget).attr("data-mode"),i=this.board.getMode();i!==o&&(this.prevMode=i);var r=i===o?this.prevMode:o;this.board.setMode(r),t.preventDefault()},this)),this.board.ev.bind("board:mode",n.a.proxy(function(t){this.toggleButtons(t)},this)),this.toggleButtons(this.board.getMode())},toggleButtons:function(t){this.$el.find("button[data-mode]").each(function(o,i){var r=n()(i);r.toggleClass("active",t===r.attr("data-mode"))})}}),DrawingBoard.Control.Navigation=DrawingBoard.Control.extend({name:"navigation",defaults:{back:!0,forward:!0,reset:!0},initialize:function(){var t="";if(this.opts.back&&(t+='<button class="button drawing-board-control-navigation-back">&larr;</button>'),this.opts.forward&&(t+='<button class="button drawing-board-control-navigation-forward">&rarr;</button>'),this.opts.reset&&(t+='<button class="button drawing-board-control-navigation-reset">&times;</button>'),this.$el.append(t),this.opts.back){var o=this.$el.find(".drawing-board-control-navigation-back");this.board.ev.bind("historyNavigation",n.a.proxy(this.updateBack,this,o)),this.$el.on("click",".drawing-board-control-navigation-back",n.a.proxy(function(t){this.board.goBackInHistory(),t.preventDefault()},this)),this.updateBack(o)}if(this.opts.forward){var i=this.$el.find(".drawing-board-control-navigation-forward");this.board.ev.bind("historyNavigation",n.a.proxy(this.updateForward,this,i)),this.$el.on("click",".drawing-board-control-navigation-forward",n.a.proxy(function(t){this.board.goForthInHistory(),t.preventDefault()},this)),this.updateForward(i)}this.opts.reset&&this.$el.on("click",".drawing-board-control-navigation-reset",n.a.proxy(function(t){this.board.reset({background:!0}),t.preventDefault()},this))},updateBack:function(t){this.board.history.canUndo()?t.removeAttr("disabled"):t.attr("disabled","disabled")},updateForward:function(t){this.board.history.canRedo()?t.removeAttr("disabled"):t.attr("disabled","disabled")}}),DrawingBoard.Control.Size=DrawingBoard.Control.extend({name:"size",defaults:{type:"auto",dropdownValues:[1,3,6,10,20,30,40,50],min:1,max:50},types:["dropdown","range"],initialize:function(){"auto"==this.opts.type&&(this.opts.type=this._iHasRangeInput()?"range":"dropdown");var t=n.a.inArray(this.opts.type,this.types)>-1&&this["_"+this.opts.type+"Template"]();if(!t)return!1;this.val=this.board.opts.size,this.$el.append(n()(t)),this.$el.attr("data-drawing-board-type",this.opts.type),this.updateView();var o=this;"range"==this.opts.type&&this.$el.on("change",".drawing-board-control-size-range-input",function(t){o.val=n()(this).val(),o.updateView(),o.board.ev.trigger("size:changed",o.val),t.preventDefault()}),"dropdown"==this.opts.type&&(this.$el.on("click",".drawing-board-control-size-dropdown-current",n.a.proxy(function(t){this.$el.find(".drawing-board-control-size-dropdown").toggleClass("drawing-board-utils-hidden")},this)),this.$el.on("click","[data-size]",function(t){o.val=parseInt(n()(this).attr("data-size"),0),o.updateView(),o.board.ev.trigger("size:changed",o.val),t.preventDefault()}))},_rangeTemplate:function(){return DrawingBoard.Utils.tpl('<div class="drawing-board-control-inner" title="{{size}}"><input type="range" min="{{min}}" max="{{max}}" value="{{size}}" step="1" class="drawing-board-control-size-range-input"><span class="drawing-board-control-size-range-current"></span></div>',{min:this.opts.min,max:this.opts.max,size:this.board.opts.size})},_dropdownTemplate:function(){var t='<div class="drawing-board-control-inner" title="{{size}}"><div class="drawing-board-control-size-dropdown-current"><span></span></div><ul class="drawing-board-control-size-dropdown">';return n.a.each(this.opts.dropdownValues,function(o,i){t+=DrawingBoard.Utils.tpl('<li data-size="{{size}}"><span style="width: {{size}}px; height: {{size}}px; border-radius: {{size}}px;"></span></li>',{size:i})}),t+="</ul></div>"},onBoardReset:function(t){this.updateView()},updateView:function(){var t=this.val;if(this.board.ctx.lineWidth=t,this.$el.find(".drawing-board-control-size-range-current, .drawing-board-control-size-dropdown-current span").css({width:t+"px",height:t+"px",borderRadius:t+"px",marginLeft:-1*t/2+"px",marginTop:-1*t/2+"px"}),this.$el.find(".drawing-board-control-inner").attr("title",t),"dropdown"==this.opts.type){var o=null;n.a.each(this.opts.dropdownValues,function(i,r){(null===o||Math.abs(r-t)<Math.abs(o-t))&&(o=r)}),this.$el.find(".drawing-board-control-size-dropdown").addClass("drawing-board-utils-hidden")}},_iHasRangeInput:function(){var t,o=document.createElement("input"),i=document.documentElement;return o.setAttribute("type","range"),t="text"!==o.type,o.value=":)",o.style.cssText="position:absolute;visibility:hidden;",/^range$/.test("range")&&void 0!==o.style.WebkitAppearance&&(i.appendChild(o),defaultView=document.defaultView,t=defaultView.getComputedStyle&&"textfield"!==defaultView.getComputedStyle(o,null).WebkitAppearance&&0!==o.offsetHeight,i.removeChild(o)),!!t}}),DrawingBoard.Control.Download=DrawingBoard.Control.extend({name:"download",initialize:function(){this.$el.append('<button class="button drawing-board-control-download-button"></button>'),this.$el.on("click",".drawing-board-control-download-button",n.a.proxy(function(t){this.board.downloadImg(),t.preventDefault()},this))}});o.default=DrawingBoard}});