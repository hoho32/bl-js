/**
 * http://www.bl-js.com
 * BL library and framework of JavaScript
 * @version v0.2
 * @author Housseyn Cheriet
 * @copyright ©2017 Housseyn Cheriet
 * Released under the MIT license
**/

function bl(){var e,t,n=[["click",!1]],r=!1,l=!1;if("after"===arguments[arguments.length-1])return[ele,[].slice.call(arguments),"noAfter"];"object"==typeof arguments[0]&&("noAfter"===arguments[arguments.length-1]&&(arguments=arguments[1]),"anmt"===arguments[1]&&("string"==typeof arguments[0][arguments[0].length-1]||"number"==typeof arguments[0][arguments[0].length-1]?(arguments=arguments[0],e=arguments[arguments.length-1]):arguments=arguments[0]));for(var a,s=[],p=0;void 0!==arguments[p];){if("string"==typeof arguments[p]){if(r=!1,l=!1,0===arguments[p].search("e:"))n=eT(arguments[p]);else if(arguments[p].search(".chld")>-1?(arguments[p].search(".chld2")>-1?r=!0:l=!0,a=document.querySelector(arguments[p].split(".chld")[0]).children):a=document.querySelectorAll(arguments[p]),"number"!=typeof arguments[p+1])for(var i=0;i<a.length;i++)if(r)for(var o=0;o<a[i].children.length;o++)s[s.length]=a[i].children[o];else s[s.length]=a[i]}else if("number"==typeof arguments[p])if(r)for(var o=0;o<a[arguments[p]].children.length;o++)s[s.length]=a[arguments[p]].children[o];else l?s[s.length]=a[arguments[p]]:s[s.length]=a[arguments[p]];else if("object"==typeof arguments[p]||"function"==typeof arguments[p])if(0===s.length)if("function"==typeof arguments[p])arguments[p]();else{if(void 0===arguments[p])return cib(arguments[p],arguments[p][0],"","")();cib(arguments[p],arguments[p][0],"","","",e)(),void 0!==e&&p===arguments.length-2&&p++}else{s=isO(s);for(var f=0;f<s.length;f++){for(var v=0;v<n.length;v++)"function"==typeof arguments[p]?"an2"==arguments[p].name?(void 0!=n[f]&&(t=[n[f][0],n[f][1]]),s[f].addEventListener(t[0],arguments[p](f),t[1]),v=n.length):s[f].addEventListener(n[v][0],arguments[p],n[v][1]):s[f].addEventListener(n[v][0],cib(arguments[p],arguments[p][0],s[f],s,f,v),n[v][1]);f==s.length-1&&void 0!==arguments[p+1]&&("object"!=typeof arguments[p+1]&&"function"!=typeof arguments[p+1]?s=[]:f=0)}}p++}return 0!==s.length?1==s.length?s[0]:s:void 0}function sIT(e,t,n,r,l,a,s){function p(){function p(){if("object"==typeof e){if(0===l)if("set"===e[0].name){if(void 0!=a&&(e[1][1][2][0].length!==a.length||e[1][1][2][0]!==a))return"+"===e[1][1][2][1]?e[1][1][2][1]="-":e[1][1][2][1]="+",void clearInterval(i);var p;f=e[1][1],p=f[2][0][f[2][0].length-1],"+"===f[2][1]?f[2][1]="-":f[2][1]="+";var y;if("∞"!==f[2][3][0]){if("1"===p)if(-1!=f[2][0].indexOf("."))f[2][2][0]=f[2][3][3]=f[2][3][0],y=f[2][3][0]-1;else{if(0==f[2][3][3])return void clearInterval(i);y=f[2][3][3]-1}else if(-1!=f[2][0].indexOf("."))f[2][2][0]=0,f[2][3][3]=0,y=f[2][3][0]-1;else{if(f[2][3][0]==f[2][3][3])return void clearInterval(i);y=0==f[2][3][3]?f[2][3][0]-1:f[2][3][0]-f[2][3][3]-1}sIT(e,y*f[2][3][2],f[2][3][1],1,1,f[2][0],s)}else sIT(e,f[2][3][0],f[2][3][1],1,1,f[2][0],s)}else e[0](e[1],e[2],e[e.length-1]);var m,b=!1,d=!0;1===l&&("set"===e[0].name?(v=e[1][1],u=e[1][1][2],b="∞"===t,v[2][3][4]==s&&v[2][0].length===a.length&&v[2][0]===a?(v[2][3][5]>0&&v[2][3][5]--,"0"===v[2][0][v[2][0].length-1]?(v[2][0]=a="0",v[2][3][3]++):(v[2][0]=a="1",v[2][3][3]--),"function"==typeof v[2][4]?(o=v[2][4](v[2][1],u[2][0],v[1],u[3][1],e[1][0],u[3]),v[2][1]=o[0],u[2][0]=o[1],void 0!=o[2]&&(m=o[2])):"+"===v[2][1]&&(b||u[2][0]<u[3][0])?u[2][0]++:(u[2][0]--,v[2][1]="-",-1===u[2][0]&&(u[2][0]+=2,v[2][1]="+")),e[0](e[1][0],v[0],void 0!=m?m[0]:v[1],u[2])):(v[2][3][5]--,clearInterval(i),d=!1)):e[0]("obj",e[1]),void 0!=m&&(clearInterval(i),d&&0!=h&&(v[2][3][5]++,sIT(e,h-1,m[1],1,1,v[2][0],v[2][3][4]))))}else e();1==r?(c++,"∞"!==h&&c>h&&clearInterval(i)):(r=1,g=n,h=t,clearInterval(i),"∞"===h?sIT(e,h,g,r,"noObj"):0!=h&&sIT(e,h-1,g,r,"noObj"))}var i,o,f,v,u,c=0,g=n,h=t;1!==r&&(g=r),i=setInterval(p,g)}if("function"==typeof e){if(t="number"==typeof t||"∞"===t?t:5,n="number"==typeof n?n:1e3,r="number"==typeof r?r:0,"noObj"!=l)return[sIT,[e,t,n,r]];p()}else{if("number"==typeof e){var i=[].slice.call(arguments);return i[1]="number"==typeof i[1]?i[1]:0,i[2]="number"==typeof i[2]?i[2]:1,i[i.length]="sit",i}if("object"==typeof e)return"number"!=typeof e[1]&&"∞"!==e[1]||(t=e[1],n=e[2],r=e[3],e=e[0]),void p()}}function style(ele,prpT,val,aS){function style2(ele,prpT,val){"obj"===ele?eval("prpT[0].style.setProperty('"+prpT[1]+"','"+prpT[2]+"', null)"):eval("ele.style.setProperty('"+prpT+"',val, null)")}var _sit,val_=[0],valF_,fois=1,bolCent;if("object"!=typeof aS&&"object"!=typeof arguments[arguments.length-1]||(_sit=copy(arguments[arguments.length-1],!0)),"now"!==aS){var prpT_,_val,vall,vall_bolAnmt=!1,ele=isO(ele);if(retu=[fOr,set,[ele,[]],_sit],"string"==typeof prpT){retu[2][2]="noAnmt";var anm=anmt(prpT,val);prpT=[anm[0]],vall=[anm[1]]}"string"==typeof val&&(val_=val.split("|"));for(var ev_=-1,xx=[-1],x_Sum=["0","+","p+10*X+s",25,1e3],x_Sum2=[],set0,set1,prp,prp_,pG,prc,prc2=[],prc3=[],f0=0;f0<ele.length;f0++){retu[2][1][f0]=[];for(var pp=0;pp<prpT[0].length;pp++){prpT_=prpT[0][pp],void 0!==prpT[1]&&(prc=prpT[1][pp][0].split(",")),void 0!==vall&&(vall_=vall[0][pp]),valF_=void 0!=val_[pp]?val_[pp]:val_[val_.length-1];for(var p=0;p<prpT_.length;p++){pG="string"==typeof valF_&&""!==valF_.trim()?[[prpT_[p],valF_]]:prpT_[p].search("//")>-1?[[prpT_[p].split("//")[0],""]]:gS(ele[f0],prpT_[p].split("_"),retu[2][2]);for(var i=0;i<pG.length;i++)if(_prp=pG[i][0],void 0!==prpT[1]){if(set0=pG[i][1],set1=pG[i][1].match(/([+-]?\d+\.\d+|[+-]?\d+)/g),null!==set1){prc2=[];for(var prc3,s=0;s<set1.length;s++)void 0!==prc[s]&&prc[s].search("%")>-1?(fois=prc[s].search("%.")>-1?prpT[2][0]:1,bolCent=!0):bolCent=!1,void 0!==prc[s]?(bolCent?prc2[s]=prc[s].match(/([+-]?\d+\.\d+|[+-]?\d+)/g).map(Number)[0]*set1[s]/100/fois:prc2[s]=prc[s].match(/([+-]?\d+\.\d+|[+-]?\d+)/g).map(Number)[0],prc3=prc2[s]):prc2[s]=prc3;set0=set0.replace(/([+-]?\d+\.\d+|[+-]?\d+)/g,"ALlah");var xs=[set0,set1,prc2];if(prpT[1][pp][1].search(".p")>-1){var prp2=prpT[1][pp][1].split(".p")[0].split(".")[1],prp2res=gS(ele[f0],prp2.split("_"))[0][1];prp2res=prp2res.match(/([+-]?\d+\.\d+|[+-]?\d+)/g)[0],prpT[1][pp][1]=prpT[1][pp][1].replace("."+prp2+".p",prp2res)}x_Sum2="function"==typeof prpT[prpT.length-1]&&0==prpT[prpT.length-1].name.search("x_")?copy(prpT[prpT.length-1](ele[f0],["0","+",[0,prpT[1][pp][1]],prpT[2],prpT[3]]),!0):copy(["0","+",[0,prpT[1][pp][1]],prpT[2],prpT[3]],!0),retu[2][1][f0][retu[2][1][f0].length]=[_prp,xs,x_Sum2]}}else retu[1]=style2,retu[2][1][f0][retu[2][1][f0].length]=[_prp,vall_]}}}return retu}style2(ele,prpT,val)}function iHtml(D,S,e1,e2,aS){function iHtml2(D,S,exp){"obj"===D?"no"===S[1]?eval("S[0].innerHTML"+S[2]):eval("S[0].innerHTML"+S[2]+"S[1].innerHTML"):"no"===S?eval("D.innerHTML"+exp):eval("D.innerHTML"+exp+"S.innerHTML")}var e11="string"==typeof e1&&"sit2"!==e1?e1:"+=",e22="string"==typeof e2&&"sit2"!==e2?e2:"+=",srcc=0!==S?S:["no"],_sit=copy(arguments[arguments.length-1],!0);return"object"==typeof _sit&&"sit"===_sit[_sit.length-1]?[fOrI,iHtml2,[D,srcc,[e11,e22]],_sit]:[fOrI,iHtml2,[D,srcc,[e11,e22]],""]}function oHtml(D,S,e1,e2,aS){function oHtml2(D,S,exp){"obj"===D?"no"===S[1]?eval("S[0].outerHTML"+S[2]):eval("S[0].outerHTML"+S[2]+"S[1].outerHTML"):"no"===S?eval("D.outerHTML"+exp):eval("D.outerHTML"+exp+"S.outerHTML")}var e11="string"==typeof e1&&"sit2"!==e1?e1:"+=",e22="string"==typeof e2&&"sit2"!==e2?e2:"+=",srcc=0!==S?S:["no"],_sit=copy(arguments[arguments.length-1],!0);return"object"==typeof _sit&&"sit"===_sit[_sit.length-1]?[fOrI,oHtml2,[D,srcc,[e11,e22]],_sit]:[fOrI,oHtml2,[D,srcc,[e11,e22]],""]}function fOr(e,t,n,r){for(var l,a,s,p,i,p,o="",f=!1,v=isO(t[0]),u=(isO(t[1]),t[2],0),c=v.length;c>u;u++){i=void 0!==t[1][u]?t[1][u]:t[1];for(var g=0,h=i.length;h>g;g++)"object"==typeof n&&"sit"===n[n.length-1]&&(f=!0,0==g&&0==u?(a=n[2],l=n[0]*a):a=1),void 0!==r&&void 0!==i[g][2]&&(s=i[g][2][0]+=r,0==i[g][2][3][5]?i[g][2][3][4]=1:i[g][2][3][4]++,o=i[g][2][3][4],i[g][2][3][5]++),p=void 0!==i[g][1][u]?i[g][1][u]:i[g][1][i[g][1].length-1],f?"noAnmt"===t[2]?sIT([e,[v[u],i[g][0],p]],0,u*n[0]+g*n[1]+l,a,1):sIT([e,[v[u],i[g],p]],0,u*n[0]+g*n[1]+l,a,0,s,o):"noAnmt"===t[2]?e("obj",[v[u],i[g][0],p]):sIT([e,[v[u],i[g],p]],0,0,1,0,s,o)}}function fOrI(e,t,n){for(var r,l,a=isO(t[0]),s=isO(t[1]),p=t[2],i=0;i<a.length;i++)for(var o=0;o<s.length;o++)void 0!=n&&(0==o&&0==i?r=n[0]*n[2]:n[2]=1),l=0===o?p[0]:p[1],"object"==typeof n&&"sit"===n[n.length-1]?sIT([e,[a[i],s[o],l]],0,i*n[0]+o*n[1]+r,n[2],1):e("obj",[a[i],s[o],l])}function fOrGs(f,tab,sit,mark){function suN(e){return e.length>10&&(e=e.substring(0,10),e+=" ..."),e}for(var sit1,sit2,tab0=isO(tab[0]),tab1=isO(tab[1]),tab2=[],tab3=[],f0=0;f0<tab0.length;f0++){tab2[tab2.length]="The element : "+tab0[f0].nodeName+" ( "+suN(tab0[f0].textContent)+" )\n ",tab2[tab2.length]=[],tab3[tab3.length]=[];for(var f1=0;f1<tab1.length;f1++){if("object"==typeof sit&&"sit"===sit[sit.length-1])sIT([f,[tab0[f0],tab1[f1]]],0,f0*sit[0]+f1*sit[1],1,1);else var tabtmp=f("obj",[tab0[f0],tab1[f1]]);tab2[tab2.length-2]+="\n\n"+tabtmp[0],tab2[tab2.length-1][tab2[tab2.length-1].length]=tabtmp[1],tab3[tab3.length-1][tab3[tab3.length-1].length]=tabtmp[1]}void 0===tab[2]&&""===tab[2]||eval(""+tab[2]+"(tab2[tab2.length-2])")}return tab3}function cib(e,t,n,r,l,a){function s(){return void 0!==t?t(e[1],p,e[e.length-1],a):void e[1]("obj",p)}this.removeEventListener("click",cib);var p=isO(e[2]);if(""!==n&&void 0!=e[2])for(var i=0;i<e[2].length;i++)"this"===e[2][i]?p[i]=[n]:"those"===e[2][i]&&(p[i]=r);return s}function eT(evt){var EV=[],EV2=[],EV3=[],Ef=[];if("string"==typeof evt&&0===evt.search("e:"))if(EV=evt.split(":")[1].split("|"),void 0!==EV[0]){if(EV2=EV[0].split("_"),void 0!==EV[1]){EV3=EV[1].split("_");for(var ev=0;ev<EV3.length;ev++)eval("EV3[ev]="+EV3[ev])}else EV3[0]=!1;for(var event3,evv=0;evv<EV2.length;evv++)void 0!==EV3[evv]&&(event3=EV3[evv]),Ef[Ef.length]=[EV2[evv],event3]}else Ef[Ef.length]=["click",!1];else Ef[Ef.length]=["click",!1];return Ef}function getValue(e,t,n){function r(e,t){if("obj"!==e)return a;var n="",r=[],l=(window.getComputedStyle(t[0]),""),a=gS(t[0],t[1].split("_"));if(n+=l,!0){for(var s=0;s<a.length;s++)n+=a[s][0]+" : "+a[s][1]+" , ",r[r.length]=a[s];return n+="@_",n=n.replace(", @_","").replace("@_",""),[n,r,t[2]]}}return void 0===t&&(t=""),void 0===n&&(n=""),[fOrGs,r,[e,t.split("|"),n],""]}function gS(el,p,_bb){function bs(e,t,n){return n?e.trim()===t:e.search(t)>=0}function stRepat(){if(void 0!==pSV)if(0==sty&&win.getComputedStyle){style=win.getComputedStyle(el,""),pSV2[psv].search("/")>-1?(pSV2[psv]=pSV2[psv].split("/")[0],_b=!1):_b=!0;for(var i=0;i<style.length;i++)bs(style[i],pSV2[psv].trim(),_b)&&(bolSt=!0,void 0!==pX?style.getPropertyValue(style[i]).search(pX)>=0&&(bolRes?(eval('condt_2=("1A"+style.getPropertyValue(style[i])).match(/[+-]?\\d+(\\.\\d+)?/g).map(Number)[1]'+condt_+"result"),condt_2&&sN.push([style[i],style.getPropertyValue(style[i])])):sN.push([style[i],style.getPropertyValue(style[i])])):sN.push([style[i],style.getPropertyValue(style[i])]));psv++}else if(1==sty){pSV2[psv].search("/")>-1?(pSV2[psv]=pSV2[psv].split("/")[0],_b=!1):_b=!0;for(var name in style)bs(name,pSV2[psv].trim(),_b)&&(bolSt=!0,void 0!==pX?style[name].search(pX)>=0&&(bolRes?(eval('condt_2=("1A"+style[name]).match(/[+-]?\\d+(\\.\\d+)?/g).map(Number)[1]'+condt_+"result"),condt_2&&sN.push([name,style[name]])):sN.push([name,style[name]])):sN.push([name,style[name]]));psv++}else if(2==sty&&el.currentStyle){style=el.currentStyle,pSV2[psv].search("/")>-1?(pSV2[psv]=pSV2[psv].split("/")[0],_b=!1):_b=!0;for(var name in style)bs(name,pSV2[psv].trim(),_b)&&(bolSt=!0,void 0!==pX?style[name].search(pX)>=0&&(bolRes?(eval('condt_2=("1A"+style[name]).match(/[+-]?\\d+(\\.\\d+)?/g).map(Number)[1]'+condt_+"result"),condt_2&&sN.push([name,style[name]])):sN.push([name,style[name]])):sN.push([name,style[name]]));psv++}else{style=el.style,pSV2[psv].search("/")>-1?(pSV2[psv]=pSV2[psv].split("/")[0],_b=!1):_b=!0;for(var i=0;i<style.length;i++)bs(style[i],pSV2[psv].trim(),_b)&&(bolSt=!0,void 0!==pX?style[style[i]].search(pX)>=0&&(bolRes?(eval('condt_2=("1A"+style.getPropertyValue(style[i])).match(/[+-]?\\d+(\\.\\d+)?/g).map(Number)[1]'+condt_+"result"),condt_2&&sN.push([style[i],style[style[i]]])):sN.push([style[i],style[style[i]]])):sN.push([style[i],style[style[i]]]));psv++}bolSt?bolSt=!1:3!=sty?(psv--,sty++,stRepat()):sty=0}var sty=0,bolSt=!1,_b,pSV=p[0],pX=p[1],result=p[2],bolRes=void 0!=result&&"number"==typeof Number(result),condt=p[3],pSV2=[],strPS="",condt_=void 0!==condt?condt:"==",condt_2;if(!el)return[];var win=document.defaultView||window,style,sN=[],psv=0;for(pSV2=pSV.trim().split(".");void 0!==pSV2[psv];)"noAnmt"==_bb&&null!=pSV2[psv].match(/-/)?(sN.push([pSV2[psv],"noAnimate"]),psv++):stRepat();return sN}function set(ele,prp,zet,exp){var zett=zet,X=exp[0],_exp,id;exp[1].search("ele.id")>-1?(id=ele.id.match(/([+-]?\d+\.\d+|[+-]?\d+)/g).map(Number)[0],_exp=exp[1].replace("p","zett[1][z]").replace("ele.id",id)):_exp=exp[1].replace("p","zett[1][z]").replace("s","zett[2][z]");var _set,_set2,_set3=zet;if("object"==typeof zett){_set3=zett[0];for(var z in zett[1])zett[1][z]=Number(zett[1][z]),zett[2][z]=Number(zett[2][z]),eval("_set2="+_exp),_set3.search("rgb")>-1&&(0>_set2||_set2>255)&&(_set2=0>_set2?255+Math.round(_set2):Math.round(_set2)-255),_set3=_set3.replace("ALlah",_set2)}style(ele,prp,_set3,"now")}function anmt(){for(var e,t=!1,n=[,[["5%","p+X+s"]],[10,100,1,0]],r=0,l=0;l<arguments.length;l++)if("string"==typeof arguments[l]&&"∞"!==arguments[l]){n[l]=[],e=arguments[l].split("|");for(var a=0;a<e.length;a++)0===l?n[l][n[l].length]=e[a].split("."):n[l][n[l].length]=e[a].split("_")}else"number"==typeof arguments[l]||"∞"==arguments[l]?(n[2][r]=arguments[l],r++):"function"==typeof arguments[l]&&(t=!0),t&&(n[n.length]=arguments[l]);return n[2].push(0,0),n}function ho(e,t,n){function r(e,t,r,s,el,jk){return"+"===e&&(l===!0||l>t)?t++:(t--,e="-",t==a&&(t+=2,e="+")),"function"==typeof n?[e,t,n(e,Math.abs(t),r,s,el,jk)]:[e,t]}var l;"function"!=typeof e?l=void 0!==e?e:10:(n=e,l=10);var a;return"function"!=typeof t?a=void 0!==t?t:-1:(n=t,a=-1),r}function hofI(e,t,n){function r(r){function l(t,n,r,l,p){var i=void 0!==e?e:10,o=void 0!==a?a:"";return"+"===t&&i>n?n++:(n--,t="-",-1===n&&(n++,t="+")),"x#*@"!==o[0]&&n===s&&"+"===t&&style(p,"display",o[0],"now"),"x#*@"!==o[1]&&n===s-1&&"-"===t&&style(p,"display",o[1],"now"),[t,n]}var a=copy(t,!0),s=n;if("none"===r)"x#*@"!==a[0]&&""!==a[0].trim()||(a[0]="block"),s=1,"x#*@"!==a[1]&&""!==a[1].trim()||(a[1]="none");else{"x#*@"!==a[0]&&""!==a[0].trim()||(a[0]=r),"x#*@"!==a[1]&&""!==a[1].trim()||(a[1]=r);var p=a[0];a[0]=a[1],a[1]=p}return l}return r}function fade(e){var t=["x#*@","x#*@"],arguments=[].slice.call(arguments),n=arguments[arguments.length-1];"object"==typeof n&&arguments.splice(arguments.length-1,1);var r,l,a=0,s=0,p=0;if("string"==typeof arguments[1]){var i=arguments[1].split("_");i[1]=void 0!==i[1]?i[1]:"x#*@",t=[i[0],i[1]],p=1}return"number"==typeof arguments[1+p]&&void 0==arguments[2+p]?(r=300,l=10,a=arguments[1+p],s=0):(r=void 0!==arguments[1+p]?arguments[1+p]:300,l=void 0!==arguments[2+p]?arguments[2+p]:5,a=void 0!==arguments[3+p]?arguments[3+p]:1,s=void 0!==arguments[4+p]?arguments[4+p]:0),"object"==typeof n?animate(e,anmt("opacity","4_0+X*"+1/(r/l),r/l,l,hofI(r/l,t,r/l),x_fade),"",n,a,s):animate(e,anmt("opacity","4_0+X*"+1/(r/l),r/l,l,hofI(r/l,t,r/l),x_fade),"",a,s)}function x_fade(e,t){var n=gS(e,"display".split("_"))[0][1];return"none"!==n&&"0"!==gS(e,"opacity".split("_"))[0][1]&&(t[2][1]=t[2][1].replace("0+","1-"),t[1]="-"),t[4]=t[4](n),t}function hiSho(e,t,n){var r,n,l=1,a="no";"string"==typeof arguments[1]?(r=arguments[1],l=2):r="block",n="number"==typeof arguments[l]?arguments[l]:1,2==n&&(n=1,a="1");var s,p=arguments[arguments.length-1];s="object"==typeof p?style(e,"display","+++",p):style(e,"display","+++");for(var i=0,o=s[2][0],f=o.length;f>i;i++){var v=gS(o[i],"display".split("_"))[0][1];"none"==v?s[2][1][i][0][1]=[r+"_none_1_"+n+n]:("string"!=typeof arguments[1]&&(r=v),s[2][1][i][0][1]=["none_"+r+"_1_"+n+n])}return hS_(s,a)}function hS(e,t){style(t[0],t[1],t[2],"now")}function hS_(a,aa){function an2(e){function t(){if("no"!==aa){if(""+e==aa)return;aa="0"==aa?"1":"0"}for(var t=copy(a,!0),n=0,r=a[2][1],l=r.length;l>n;n++){if(-1!=r[n][0][1][0].search("_22"))return;var s=r[n][0][1][0].split("_"),p=0==Number(s[2])?1:0;r[n][0][1][0]=r[n][0][1][0].replace("_"+s[2],"_"+p),t[2][1][n][0][1][0]=s[p],-1!=r[n][0][1][0].search("_00")&&(r[n][0][1][0]=r[n][0][1][0].replace("_00","_22"))}bl(t)}return t}var an;return eval("an=an2"),"no"!==aa?an:an()}function animate(){var ss="hhhh",txtFun="style(",arguments=[].slice.call(arguments),i,j=0,n=0,n2=0;for("object"==typeof arguments[arguments.length-1]&&(j=1),"number"==typeof arguments[arguments.length-2-j]?(n=arguments[arguments.length-2-j],n2=arguments[arguments.length-1-j],arguments.splice(arguments.length-2-j,2)):"number"==typeof arguments[arguments.length-1-j]&&(n=arguments[arguments.length-1-j],n2=0,arguments.splice(arguments.length-1-j,1)),arguments[0]=isO(arguments[0]),i=0,ar=arguments.length;i<ar-1;i++)txtFun+="arguments["+i+"],";txtFun+="arguments["+i+"])";var a;return eval("a="+txtFun),an([a,"1"],n,""+n2,ss)}function an(arg,n,n2,ss){function an0(){"1"==arg[arg.length-1]&&(arg[arg.length-1]=arg[arg.length-1]==n2?n2+n2:n2,bl(arg,"anmt"))}function an3(){var e=arg[arg.length-1];arg[arg.length-1]=e=="."+n2?"."+n2+n2:"."+n2,bl(arg,"anmt")}function an1(e,t){var n=arg[arg.length-1];if("string"!=typeof e)"0"==n2?arg[arg.length-1]="0"==n?"1":"0":arg[arg.length-1]="1"==n?"0":"1";else{if("0"!=n)return;if(arg[arg.length-1]="1"==n?"0":"1","function"==typeof t){t();for(var r=2;r<arguments.length;r++)"function"==typeof arguments[r]&&arguments[r]()}}bl(arg,"anmt")}function an4(){var e=arg[arg.length-1];"0"==n2?arg[arg.length-1]=".0"==e?".1":".0":arg[arg.length-1]=".1"==e?".0":".1",bl(arg,"anmt")}function an2(e){function t(){var t=arg[arg.length-1];""+e!=t&&("0"==n2?arg[arg.length-1]="0"==t?"1":"0":arg[arg.length-1]="1"==t?"0":"1",bl(arg,"anmt"))}return t}var ret_;return eval("ret_=an"+n),ret_}function copy(e,t){var n,r,l;n=Array.isArray(e)?[]:{};for(l in e)r=e[l],t===!0?n[l]=Array.isArray(r)?copy(r,t):r:n[l]="object"==typeof r?copy(r):r;return n}function isO(e){return"object"!=typeof e||Array.isArray(e)||null===e?e:[e]}
