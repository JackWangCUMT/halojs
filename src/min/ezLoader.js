define("ezLoader",function(require){var d=require("prefix"),e=function(a,b,c){var e,f,g,h,i,j,k,l,m,n,o,p;for(c=c||1,a="undefined"==typeof a?1:a,e=function(a){var d,b=a.offsetParent;if(null==b)return-1;for(d=a.offsetTop;"BODY"!=b.tagName&&"HTML"!=b.tagName;)d+=b.offsetTop,b=b.offsetParent;return d*c},f=window.screen.height,g=function(){window.addEventListener("scroll",i)},h=function(){window.removeEventListener("scroll",i)},i=function(){var d,e,c=document.body.scrollTop||document.documentElement.scrollTop||window.HALO_ST||0;for(d=0,e=l.length;e>d;++d)c+b>=l[d][0]&&(l[d][2]||function(b){var c=l[b][3];k[c].onload=k[c].onerror=function(){"function"==typeof p.load_change&&p.load_change(k[c]),++j==e&&h(),a&&(this.style.opacity="1")},l[b][2]=1,k[c].src=l[b][1]}(d))},j=0,k=document.querySelectorAll("[halo-data-ez]"),l=[],m=0,n=k.length;n>m;++m)o=e(k[m]),0>o||(l.push([o,k[m].getAttribute("halo-data-ez"),0,m]),k[m].removeAttribute("halo-data-ez"),a&&(k[m].style.opacity=0,k[m].style[d+"transition"]="opacity .6s linear"));return b=b||0,b+=f,i(),g(),p={}};return window.$&&($.ezLoader=e),e});