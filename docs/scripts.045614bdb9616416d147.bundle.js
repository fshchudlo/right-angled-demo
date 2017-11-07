!function(e,t){"use strict";var i,n=e.document;i=function(){var i,r,a,s,o,l={},c={},f=!1,u={ENTER:13,ESC:27,SPACE:32},d=[];return c={buttons:{holder:'<nav class="alertify-buttons">{{buttons}}</nav>',submit:'<button type="submit" class="alertify-button alertify-button-ok" id="alertify-ok" />{{ok}}</button>',ok:'<a href="#" class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</a>',cancel:'<a href="#" class="alertify-button alertify-button-cancel" id="alertify-cancel">{{cancel}}</a>'},input:'<div class="alertify-text-wrapper"><input type="text" class="alertify-text" id="alertify-text"></div>',message:'<p class="alertify-message">{{message}}</p>',log:'<article class="alertify-log{{class}}">{{message}}</article>'},i=function(e){return n.getElementById(e)},l={labels:{ok:"OK",cancel:"Cancel"},delay:5e3,addListeners:function(r){var a,s,o,l,c,f=i("alertify-resetFocus"),d=i("alertify-ok")||t,y=i("alertify-cancel")||t,h=i("alertify-text")||t,p=i("alertify-form")||t,b=void 0!==d,m=void 0!==y,v=void 0!==h,g="",k=this;a=function(e){void 0!==e.preventDefault&&e.preventDefault(),o(e),void 0!==h&&(g=h.value),"function"==typeof r&&r(!0,g)},s=function(e){void 0!==e.preventDefault&&e.preventDefault(),o(e),"function"==typeof r&&r(!1)},o=function(e){k.hide(),k.unbind(n.body,"keyup",l),k.unbind(f,"focus",c),v&&k.unbind(p,"submit",a),b&&k.unbind(d,"click",a),m&&k.unbind(y,"click",s)},l=function(e){var t=e.keyCode;t===u.SPACE&&!v&&a(e),t===u.ESC&&m&&s(e)},c=function(e){v?h.focus():m?y.focus():d.focus()},this.bind(f,"focus",c),b&&this.bind(d,"click",a),m&&this.bind(y,"click",s),this.bind(n.body,"keyup",l),v&&this.bind(p,"submit",a),e.setTimeout(function(){h?(h.focus(),h.select()):d.focus()},50)},bind:function(e,t,i){"function"==typeof e.addEventListener?e.addEventListener(t,i,!1):e.attachEvent&&e.attachEvent("on"+t,i)},build:function(e){var t="",i=e.type,n=e.message,r=e.cssClass||"";switch(t+='<div class="alertify-dialog">',"prompt"===i&&(t+='<form id="alertify-form">'),t+='<article class="alertify-inner">',t+=c.message.replace("{{message}}",n),"prompt"===i&&(t+=c.input),t+=c.buttons.holder,t+="</article>","prompt"===i&&(t+="</form>"),t+='<a id="alertify-resetFocus" class="alertify-resetFocus" href="#">Reset Focus</a>',t+="</div>",i){case"confirm":t=t.replace("{{buttons}}",c.buttons.cancel+c.buttons.ok),t=t.replace("{{ok}}",this.labels.ok).replace("{{cancel}}",this.labels.cancel);break;case"prompt":t=t.replace("{{buttons}}",c.buttons.cancel+c.buttons.submit),t=t.replace("{{ok}}",this.labels.ok).replace("{{cancel}}",this.labels.cancel);break;case"alert":t=t.replace("{{buttons}}",c.buttons.ok),t=t.replace("{{ok}}",this.labels.ok)}return s.className="alertify alertify-show alertify-"+i+" "+r,a.className="alertify-cover",t},close:function(e,t){var i=t&&!isNaN(t)?+t:this.delay;this.bind(e,"click",function(){o.removeChild(e)}),setTimeout(function(){void 0!==e&&e.parentNode===o&&o.removeChild(e)},i)},dialog:function(e,t,i,a,o){r=n.activeElement;var l=function(){s&&null!==s.scrollTop||l()};if("string"!=typeof e)throw new Error("message must be a string");if("string"!=typeof t)throw new Error("type must be a string");if(void 0!==i&&"function"!=typeof i)throw new Error("fn must be a function");return"function"==typeof this.init&&(this.init(),l()),d.push({type:t,message:e,callback:i,placeholder:a,cssClass:o}),f||this.setup(),this},extend:function(e){if("string"!=typeof e)throw new Error("extend method must have exactly one paramter");return function(t,i){return this.log(t,e,i),this}},hide:function(){d.splice(0,1),d.length>0?this.setup():(f=!1,s.className="alertify alertify-hide alertify-hidden",a.className="alertify-cover alertify-hidden",r.focus())},init:function(){n.createElement("nav"),n.createElement("article"),n.createElement("section"),a=n.createElement("div"),a.setAttribute("id","alertify-cover"),a.className="alertify-cover alertify-hidden",n.body.appendChild(a),s=n.createElement("section"),s.setAttribute("id","alertify"),s.className="alertify alertify-hidden",n.body.appendChild(s),o=n.createElement("section"),o.setAttribute("id","alertify-logs"),o.className="alertify-logs",n.body.appendChild(o),n.body.setAttribute("tabindex","0"),delete this.init},log:function(e,t,i){var n=function(){o&&null!==o.scrollTop||n()};return"function"==typeof this.init&&(this.init(),n()),this.notify(e,t,i),this},notify:function(e,t,i){var r=n.createElement("article");r.className="alertify-log"+("string"==typeof t&&""!==t?" alertify-log-"+t:""),r.innerHTML=e,o.insertBefore(r,o.firstChild),setTimeout(function(){r.className=r.className+" alertify-log-show"},50),this.close(r,i)},set:function(e){var t;if("object"!=typeof e&&e instanceof Array)throw new Error("args must be an object");for(t in e)e.hasOwnProperty(t)&&(this[t]=e[t])},setup:function(){var e=d[0];f=!0,s.innerHTML=this.build(e),"string"==typeof e.placeholder&&""!==e.placeholder&&(i("alertify-text").value=e.placeholder),this.addListeners(e.callback)},unbind:function(e,t,i){"function"==typeof e.removeEventListener?e.removeEventListener(t,i,!1):e.detachEvent&&e.detachEvent("on"+t,i)}},{alert:function(e,t,i){return l.dialog(e,"alert",t,"",i),this},confirm:function(e,t,i){return l.dialog(e,"confirm",t,"",i),this},extend:l.extend,init:l.init,log:function(e,t,i){return l.log(e,t,i),this},prompt:function(e,t,i,n){return l.dialog(e,"prompt",t,i,n),this},success:function(e,t){return l.log(e,"success",t),this},error:function(e,t){return l.log(e,"error",t),this},set:function(e){l.set(e)},labels:l.labels}},"function"==typeof define?define([],function(){return new i}):void 0===e.alertify&&(e.alertify=new i)}(this);