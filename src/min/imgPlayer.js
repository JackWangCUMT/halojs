define("imgPlayer",function(require,b,c){var k,d=require("prefix"),e=require("klass"),f=e.addClass,g=e.removeClass,h=require("stylesheet"),i=require("css"),j=require("isDom");h.add(".halo_page_drag_keep{"+d+"transition:"+d+"transform .2s linear;}"),h.add(".halo_page_drag_h_keep{"+d+"transition:"+d+"transform .2s linear;}"),h.add(".halo_page_drag_restore{"+d+"transition:"+d+"transform .1s linear;}"),k=function(a){var b,c,e,h,k,l,m,n,o,q,r,s,t,u,w,x,y,z,A,B,M,C,D,E,F,G,H,I,J,K,L,N,V,O,P,Q,R,S,T,U,W,X,Y;if("undefined"==typeof a)throw"imgPlayer: takes no arguments, expected 1";if("object"!=typeof a)throw"imgPlayer: takes bad arguments, expected object";if(b=a.selector,c=a.motion,e=a.showNumList,b){if("string"==typeof b&&(h=b,b=document.querySelector(b),!j(b)))throw"imgPlayer: '"+h+"' is invalid!"}else if(j(this))b=this;else{if(!j(this[0]))throw"imgPlayer: 'this' isn't a HTMLDivElement!";b=this[0]}for("undefined"==typeof e&&(e=!0),c=c||"X",c=c.toUpperCase(),k=i(b,"positon"),"static"!=k&&k||(b.style.position="relative"),l=document.createElement("div"),l.style.cssText="position:absolute; width:100%; height:100%; left:0; top:0;",m=b.childNodes,n=0,o=[];m.length;)1==m[0].nodeType&&(m[0].style.cssText="position:absolute; width:100%; height:100%; overflow:hidden; left:0; top:0; "+(0==n?"display:block;":" display:none;"),++n,o.push(m[0])),l.appendChild(m[0]);if(b.appendChild(l),!(1>=n)){if(q={move:function(){}},e){for(r=document.createElement("div"),s="border:1px solid rgba(0,0,0,.3); background-color:rgba(255,255,255,.3);",t="position:relative; display:inline-block; width:8px; height:8px; overflow:hidden; border-radius:5px;",u="border:1px solid rgba(0,0,0,0); background-color:#e62548;",w=[],r.style.cssText="position:absolute; width:auto; height:10px; text-align:center; left:0; bottom:10px; left:50%; "+d+"transform:translate(-50%,0);",x=0;n>x;++x)y=document.createElement("i"),y.style.cssText=t+(0==x?u:s+" margin-left:8px;"),r.appendChild(y),w.push(y);b.appendChild(r),q.move=function(a,b){w[a]&&(w[a].style.cssText+=s),w[b]&&(w[b].style.cssText+=u)}}return z="X"==c?"halo_page_drag_h_keep":"halo_page_drag_keep",A="halo_page_drag_restore",B=function(a){return a>=0?a%n:n+a%n},C=!1,D=0,E=0,F=0,G=B(-1),H=B(1),I=0,J="none",K="none",L="none",N=!1,O=function(a){if(V&&clearTimeout(V),!Y.stop&&(N=!0,!C)){var b=a.changedTouches||a.targetTouches;D=b[0].pageX,E=b[0].pageY}},P=function(a){var b,e,f,g,h;if(!Y.stop&&(N=!0,!C)){if(b=a.changedTouches||a.targetTouches,e=b[0].pageX,f=b[0].pageY,"none"==J){if(g=e-D,h=f-E,Math.abs(g)==Math.abs(h))return a.preventDefault(),a.stopPropagation(),void 0;if(J=Math.abs(g)>Math.abs(h)?"X":"Y",c!=J)return l.removeEventListener("touchstart",O,!1),l.removeEventListener("touchmove",P,!1),l.removeEventListener("release",Q,!1),l.addEventListener("touchend",T,!1),l.addEventListener("touchcancel",T,!1),void 0}a.stopPropagation(),a.preventDefault(),"X"==c?(I=e-D,o[F].style[d+"transform"]="translate3d("+I+"px,0,0)"):(I=f-E,o[F].style[d+"transform"]="translate3d(0,"+I+"px,0)"),K=I>0?"X"==J?"right":"up":0>I?"X"==J?"left":"down":"none",K!=L&&(I>0?("X"==J?o[G].style.left="-100%":o[G].style.top="-100%",o[G].style.display="block",o[H].style.display="none",M=G):0>I&&("X"==J?o[H].style.left="100%":o[H].style.top="100%",o[H].style.display="block",o[G].style.display="none",M=H),L=K),o[M].style[d+"transform"]="X"==c?"translate3d("+I+"px,0,0)":"translate3d(0,"+I+"px,0)",Y.ondrag&&Y.ondrag(I,F,M)}},Q=function(){if(!Y.stop&&(Y.auto&&U(),!C)){C=!0;var b=Math.abs(I),c=30>b;Y.release&&Y.release(c,F,M),c&&0!=b?(f(o[F],A),f(o[M],A),o[M].style[d+"transform"]=o[F].style[d+"transform"]="translate3d(0,0,0)",setTimeout(function(){g(o[F],A),g(o[M],A),o[M].style.display="none",I=0,J="none",K="none",L="none",C=!1,N=!1},200)):0!=b?R():(C=!1,N=!1)}},R=function(){f(o[F],z),f(o[M],z),p=I>0?"":"-",o[M].style[d+"transform"]=o[F].style[d+"transform"]="X"==c?"translate3d("+p+o[F].offsetWidth+"px,0,0)":"translate3d(0,"+p+o[F].offsetHeight+"px,0)",setTimeout(function(){g(o[F],z),g(o[M],z),I=0,J="none",K="none",L="none",C=!1,N=!1,o[F].style.display="none","function"==typeof Y.onchange&&Y.onchange(F,M),q.move(F,M),F=M,G=B(F-1),H=B(F+1),o[F].style.cssText="position:absolute; width:100%; height:100%; overflow:hidden; left:0; top:0;"},300)},S=function(a){if(!C&&!N){if(a==F)return"function"==typeof Y.onchange&&Y.onchange(F,a),void 0;C=!0,M=a,R()}},T=function(){I=0,J="none",K="none",L="none",C=!1,N=!1,this.removeEventListener("touchend",T,!1),this.removeEventListener("touchcancel",T,!1),this.addEventListener("touchstart",O,!1),this.addEventListener("touchmove",P,!1),this.addEventListener("touchend",Q,!1),this.addEventListener("touchcancel",Q,!1),Y.auto&&U()},U=function(){V=setTimeout(function(){var a=B(F+1);o[a].style.cssText="position:absolute; width:100%; height:100%; overflow:hidden; left:100%; top:0;",setTimeout(function(){Y.auto&&S(a)},60),U()},Y.duration)},W=function(){var a=B(F-1);o[a].style.cssText="position:absolute; width:100%; height:100%; overflow:hidden; left:100%; top:0; "+d+"transform:translate3d(0,0,0)",V&&clearTimeout(V),setTimeout(function(){S(a),setTimeout(function(){Y.auto&&U()},300)},60)},X=function(){var a=B(F+1);o[a].style.cssText="position:absolute; width:100%; height:100%; overflow:hidden; left:-100%; top:0; "+d+"transform:translate3d(0,0,0)",V&&clearTimeout(V),setTimeout(function(){I=1,S(a),setTimeout(function(){Y.auto&&U()},300)},60)},l.addEventListener("touchstart",O,!1),l.addEventListener("touchmove",P,!1),l.addEventListener("touchend",Q,!1),l.addEventListener("touchcancel",Q,!1),Y={move:S,prev:W,next:X,autoPlay:"undefined"==typeof a.autoPlay?1:a.autoPlay,duration:a.duration||4e3,totalPage:n},U(),Y}},c.exports=k,window.$&&($.fn.imgPlayer=k)});