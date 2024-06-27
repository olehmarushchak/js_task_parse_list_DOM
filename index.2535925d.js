for(var e=document.getElementsByTagName("li"),t=document.getElementsByTagName("ul")[0],a=Array.from(e).sort(function(e,t){return+t.getAttribute("data-salary").replaceAll(",","").slice(1)-+e.getAttribute("data-salary").replaceAll(",","").slice(1)});e.length>0;)t.removeChild(e[0]);a.forEach(function(e){return t.append(e)});
//# sourceMappingURL=index.2535925d.js.map
