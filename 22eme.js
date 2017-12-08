alert("Url  ="+document.location);
alert("PathName  ="+ window.location.pathname);// Returns path only
alert("url  ="+window.location.href);// Returns full URL

var _claSs;
//var _claSs;
var importStr="";
var dd2tab2=[];
var CssJs=[];
var fileref;
var tabFontFinal=[];
var tabFontReturn=[];
var cssFinal=[];
var cssFinal2=[],cssFinal3=[];
var cfMediaBolresponce=false;
var strStyleMedia=[];
//var cssFinal4=[];
var cssFinalMedia=[];
var cfMediaBol=false;
var strMedia0,strMedia1;
var b_LNum;


//function csS (xI_,dal_,bolParent_,bolChild_){
  function csS (_xI,_dal,_bolParent,_bolChild,b_LN){
 alert("dal_0 "+_dal.outerHTML)
 var __dal=_dal;
  // console.log("dal_0 "+dal_.outerHTML)
  //alert("dal_1 "+dal_.parentElement.outerHTML)
  //alert("dal_2 "+dal_.parentElement.parentElement.outerHTML)
  //var claSs=_bolChild;
  //var BolClaSs=bolChild_;//JADID
//////var _xI=xI_;
/////var _dal=dal_;
/////var _bolChild=bolChild_;
//////var _bolParent=bolParent_;
var claSs;
b_LNum=b_LN;
var claSs0=_claSs=" ."+_bolChild+" ";
var bolStar=false;
//var eleParentTab = [];
//var _dalParentElement=_dal.parentElement;
var bolClass=false;
var bolClassParent=true;//jadid
 var countEle=-1;//jadid
 var styleSpecifiq;
//var xddLength;


csS2 (0,_dal,_bolParent,_bolChild);
function csS2 (_xI,_dal,_bolParent,_bolChild){
//alert("dal_------ "+_dal)
//csS (0,document.all.length)
var xI= _xI===undefined ? 0:_xI ;
var dal= _dal===undefined ? document.all:_dal ;
var bolChild= _bolChild===undefined ? "":_bolChild ;
var bolParent= _bolParent===undefined ? "":_bolParent ;
var MTstr="..",MTstr2,MTstr3="";
// var testObj = dal.parentNode;
  //var testObj2;
 
var el='{';
 //var strMedia0,strMedia1;
 var tab0,tab1;var strCss;
var cssText=[],cssText2=[],cssText22=[]/*,tabRepeat*/;
var cT/*,cT2*/;
var cssText3="",cssText4="", cssText5="";
var dd,ddd,d;var dd2;
var zz,zz2="", zZ=[],zzz="",zzz2="",Xzzz="";
var  tabStr2;
var bolMatch;
var mTT;
 var bolChild2;var dd2tab;
 var i=0;
  
//var cT2Bol;
var x=-1,y=-1;var tabChar=[":","+","~"];
 var sheets = document.styleSheets /*||
 
 document.Sheets*/;

  function cssMatch(a) {
    a.matches = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
    return a.matches}
     function fOR(dD){
 for(var ii = xI; ii < dal.length; ii++)
    {
    zz[zz.length]=repeat(dD);
     }
 }
function allIndexOf(str, toSearch) {
    var indices = [];
    for(var pos = str.indexOf(toSearch); pos !== -1; pos = str.indexOf(toSearch, pos + 1)) {
        indices.push(pos);
    }
    return indices;
} 
 function srchFromTo(ele,from,to,str) {
  var eleSl;
  eleSl=str=== undefined?ele.slice(from,to):(ele.slice(from,to).search(str)> -1);
        return eleSl;
      }
        
     //zz="";
     for ( cS=0 ; cS< CssJs.length ; cS++) {
//alert(sheets[i])
zz="";

/*
asSheet(rules);
 zz2+=zz;
 if(zz!==""){
// alert(zz)
 zZ[zZ.length]=zz;
 }
 */
 }
for ( i=0 ; i< sheets.length ; i++) {
//alert(sheets[i])
zz="";

 //console.log("sheets.length "+sheets.length )
//console.log("sheets.length i "+ i )
var rules = sheets[i].rules || sheets[i].cssRules;
asSheet(rules);
 zz2+=zz;
 if(zz!==""){
// alert(zz)
 zZ[zZ.length]=zz;
 }
 }
 zZ[zZ.length]="ttoottaall " +zz2;
 cssFinal[cssFinal.length]="ttoottaall " +zz2;
 
 if(zZ[zZ.length-1].search("@font")){
 //  hohohohoho
 }
 function asSheet(rL,bolRL){
  // console.dir(rL)
   for (var r in rL) {
   // console.dir(rL[r])
 dd2tab2=ddd=rL[r].cssText || rL[r];
        //cT2=0;
/*
//console.log("rules[r]/// -- " +rules[r].length);
if(rL[r]===CSSImportRule){
console.log("*********"+rL[r].cssText+" "+r);
 // if(rL[r].cssText.search("@import")>-1){
 console.log("if hohohoho"+rL[r]);
  //alert(hohohoh);
}else{ console.log("else hohohoho"+rL[r]);}


console.log("ddd -- " +ddd);
  */
  //console.log("ddd -- " +ddd);
  //console.log("ddd -- " +ddd);
if(typeof ddd==="string"){
	//console.log("ddd -- " +ddd);
  /*
  if (ddd.search("url")>-1 && ddd.search("@")===-1){
   // console.dir(ddd);
   tabFontFinal=fontStrUrl(ddd);
  
 }*/
  var indxCont=ddd.indexOf("content")
  if(indxCont>-1 && (ddd.indexOf("before")>-1 || ddd.indexOf("after")>-1)){
  var strQuote =ddd.slice(indxCont,ddd.length-1);
  grabstrQuote = strQuote.split(/"/);
  if(grabstrQuote[1]!==undefined && grabstrQuote[1].length===1){
  grabstrQuote[0]="\\"+grabstrQuote[1].charCodeAt(0).toString(16).toUpperCase();
  var strQuote2=strQuote.replace(grabstrQuote[1],grabstrQuote[0]);
   ddd=ddd.replace(strQuote,strQuote2)
   //console.log("grabstrQuote__ddd___  "+ddd)
  // console.log("strQuote2___  "+strQuote2)
  //console.log("grabstrQuote___  "+grabstrQuote[0])
  }
  //if(ddd.search(/\//g)>-1)
  //alert(ddd)
  }
//console.log("ddd -- " +ddd);
//	alert("ay "+ddd+" "+typeof ddd)
zzz="";
Xzzz="";
if( rL[r].cssText.search("@import")>-1){
  console.log("ddd .. "+rL[r].cssText);
  var rule2=rL[r].styleSheet.cssRules ||rL[r].styleSheet.rules;
  //alert("rule2  "+rule2["0"])
  // console.log("rule2  "+rule2)
   //console.dir(rule2)
  asSheet(rule2);
   // console.log("fin rule2  ")
  // alert("fin rule2  ")
 // r++;
}else{
 if( rL[r].media ){
   //console.log("mmedia "+rL[r]+" "+r);
   //console.log("mmmmmmedia "+rL[r][0]+" "+r);
tab0=allIndexOf(ddd, '{');
//alert("tab0 "+tab0)
 strMedia0=srchFromTo(ddd,0,tab0[0]+1);
 tab1=allIndexOf(ddd, '}');
//alert("tab1 "+tab1)
 strMedia1=ddd.charAt(tab1[tab1.length-1]);
 strCss=srchFromTo(ddd,tab0[0]+1,tab1[tab1.length-1]);
 //console.log("______///////______ "+strCss);
//alert("______///////______ "+strCss);

cfMediaBol=true;
cssFinalMedia=[];
  dd2=strCss.split("}");
zzz2="";
rulesStr();

if(zzz2!== ""){
// alert(zzz)
//alert("strMedia[0]  "+strMedia0)
//alert("strMedia[1]  "+strMedia1)

 zz+=" "+strMedia0+zzz2+strMedia1;
 //console.log("####### ///hoho/// "+zz+ zz.length);
   
      }
 if(cfMediaBolresponce){
   strStyleMedia[strStyleMedia.length]=" "+strMedia0+parentStyle(cmpSt_filtering(filtering(cssFinalMedia)),_claSs)+strMedia1;
cfMediaBolresponce=false;
 }

cfMediaBol=false;

 }else if (ddd.search("@")>-1){
   //console.log(ddd+" --******-- "+rL[r])
   /*
   for(var hh in rL[r])
   if(r==="0")
    for(var hhh in rL[r][hh])
 console.log("******-- "+rL[r][hh][hhh])
 */
 if (ddd.search("@font")>-1 ){
  // tabFontFinal=fontStrUrl(ddd); finnnn
  
  
   
 }
     zz+=" "+ddd;
  
 //  if(!bolChid){
   //  alert();
  
     
// }
}else{
 bolClassParent=true;
//zzz="";
dd=ddd.split(el);
dd[0]=dd[0].split(",");
//console.log("ddd -- " +ddd);
//if()
//cT2Bol=true;
//alert("/////////////////////////////////////// "+dd)
var xdd=0;

while (xdd <  dd[0].length ){
 bolChild2=true;
 //MTstr3="";
//alert("***************************** "+dd[0][xdd])
//if(dal.parentNode)
//eleAndChild(xI,dd[0][xdd],dal,bolChild)();
//eleAndChild(xI,dd[0][xdd],dal,bolParent,bolChild)();
/*if(dd[0][xdd].indexOf("after")>-1 && dd[0][xdd].indexOf("*")>-1)
{
	alert("edit");
}*/
dd[0][xdd]=edit (dd[0][xdd])
styleSpecifiq=dd[dd.length-1];
 if( ( dd[0][xdd]!=="._." &&eleAndChild(xI,dd[0][xdd],dal,bolParent,bolChild)()) || (xdd ===  dd[0].length-1 && zzz !== "")){
  xdd =  dd[0].length-1;
 // if(xdd ===  dd[0].length-1 && zzz !== ""){
 if(zzz.search("X_LLah")===-1){
    
  
  
   zzz = zzz.substring(0, zzz.length-1);

 zzz +=" {"+dd[dd.length-1];
}else{
  //Xzzz+=" X_LLah"+zzz.split("X_LLah")[1];
   Xzzz+=zzz.split("X_LLah")[1];
  zzz=zzz.split("X_LLah")[0];
}
 } 
xdd++;
}

//alert("fffffffiiiiiiiiiiiinnnnnnn /////////////////////////////////////// "+dd)
zz+=zzz;
zz+=Xzzz;


/*
for(var ii = xI; ii < dal.length; ii++)
    {
   
 
   if (document.all[ii].matches(dd[0])) {
   dal[ii].matches=cssMatch(dal[ii]);
   //  if (document.all[ii].matches(dd[0]) || dd[0].search(":")>-1) {
     console.log("document.all "+dal(ii).tagName+" "+ ii +" / "+dal.length);
     tabRepeat=repeat(dd,ii);
   zz+=tabRepeat[0];
   ii=tabRepeat[1];
    
 
     }*/
}
}}
 }
 }
 function rulesStr(){
  // alert("----- "+dd2)
 for(var dS = 0; dS < dd2.length-1; dS++){
 zzz="";
 Xzzz="";
 bolClassParent=true;
 //console.log("ddd "+ddd)
 // cssText3="";
 //cT2=0;
 dd2[dS]+="}";
 //alert("dd2[dS] "+dd2[dS]);
 //if (ddd.search("@")>-1){}
 //zzz="";
 dd=dd2[dS].split(el);
 dd[0]=dd[0].split(",");
 
//alert("/////////////////////////////////////// "+dd)
 //console.log("@@@@àà@@@@@@@@@");
var xdd=0;



while (xdd <  dd[0].length){
 bolChild2=true;
 
 //MTstr3="";
 if (dd[0][xdd].search("@font")>-1 || dd[0][xdd].search("@page")>-1){
   alert("hahahaha")
  // window.location.protocol = “http:“
//window.location.host = “mycodingtricks.com“
//window.location.pathname = “/jquery/shareit-js-social-content-unlocker/“
//var urlThis=window.location.href.slice(0,window.location.href.lastIndexOf("/"))
//hostName.substring(hostName.lastIndexOf(".", hostName.lastIndexOf(".") - 1) + 1)
 //alert("dd2 "+dd2)
// alert("dd "+dd)
//tabFont[tabFont.length]=dd[0][xdd]+" { "+dd[dd.length-1];
var foNt=dd[0][xdd]+" { "+dd[dd.length-1];
// if(param3=="font"){
    if (foNt.search("@font")>-1 ){
 // tabFontFinal=fontStrUrl(foNt); finnn2
  
  
   
 }
   
			      
     zzz+=foNt/*dd[0][xdd]+" { "+dd[dd.length-1]*/;
  // alert("zzzzzz "+zzz)
 }
     else{
//alert("***************************** "+dd[0][xdd])
//eleAndChild(xI,dd[0][xdd],dal,bolParent,bolChild)();
/*if(dd[0][xdd].indexOf("after")>-1 && dd[0][xdd].indexOf("*")>-1)
{
	alert("edit");
}*/
dd[0][xdd]=edit (dd[0][xdd])
styleSpecifiq=dd[dd.length-1];
 
 if( ( dd[0][xdd]!=="._." &&eleAndChild(xI,dd[0][xdd],dal,bolParent,bolChild)()) || (xdd ===  dd[0].length-1 && zzz !== "")){
  xdd =  dd[0].length-1;
  
  
  if(zzz.search("X_LLah")===-1){
    
  
  
   zzz = zzz.substring(0, zzz.length-1);

 zzz +=" {"+dd[dd.length-1];
}else{
 // Xzzz+=" X_LLah"+zzz.split("X_LLah")[1];
   Xzzz+=zzz.split("X_LLah")[1];
  zzz=zzz.split("X_LLah")[0];
}
  

  }

}
  xdd++;
}
zzz2+=zzz;
zzz2+=Xzzz;

//alert("zzz2 "+zzz2)
}
}
 function eleAndChild(xI,cT22,dal2,blPrnt,blChld){
  //eleAndChild(xI,dd[0][xdd],dal,bolParent,bolChild)();
  //var tabRepeat;
function clOse(){
  bolClass=false;
  
var ddx=cT22;
 var ii = xI;
 var dall=dal2;
 var blPrntt=blPrnt;
 var blChldd=blChld;
 var tabRepeat;


 //var cT2Boll2 = cT2Boll ? false : true ;
  if(blPrntt === "prnt1"){
  //  claSs=_bolChild;//JADID
    var dallTab=dall;
    var ept2=dall.length;
    countEle=0;
    while(bolChild2 && ept2--){
      //if(ept2===dall.length)
      //bolStar=true;
      claSs=" ."+_bolChild+(ept2-1);
     
 //alert("iiii "+dall.length+" iii "+ii+" ")
 //alert("vdall.length "+dall)
    dall=dallTab[ept2];
   // console.log("ddall "+dall.tagName)
    
   // alert("dalRep.outerHTML+++ ****** "+ddx+" "+dall.outerHTML);
   // alert("+++++++  "+dall+" "+ept)
   if(bolClassParent && ept2>0)
  eleAndChild( 0,ddx,dall,"prnt1haha")();
   // countEle++;
  else
  ept2=0;
  
  
  if(ept2==0 && bolChild2  ){
    claSs="bla bla";//JADID
   // claSs=" ."+_bolChild+" ";
    //  console.log("dal_0 "+__dal.tagName)
      eleAndChild( 0,ddx,dall,"prnthaha","chld" )();// jadid
      //eleAndChild( 0,ddx,__dal,"prnthaha","chld" )();
      
    }
   //ii++;
   
 }
     
  }else{
 dall.matches=cssMatch(dall);
 countEle++;
 //console.log("ddx "+ddx)
  tabRepeat=repeat(ddx,dall);
   
   zzz+=tabRepeat[0];}
   // var testObj = dall.parentNode;
   // var count = 1;
   // {;// noprotectwindow.runnerWindow.protect.protect({ line: 5, reset: true }); 
  
  //else{

    if(blPrntt==="prnt"  && bolChild2 ){
      if( dall.parentElement /* && testObj2*/ && bolChild2) {;


        //alert('My name is ' + testObj.getAttribute('name') + '. Let\'s try moving up one level to see what we get.');
        //console.log("++++++++++ "+dall.parentElement.tagName)
         eleAndChild(0,ddx,dall.parentElement,blPrntt)();
       // testObj = testObj.parentNode;
       // count++;
    }
    //console.log("------")
    }
   
   if(blChldd==="chld" && bolChild2 && dall.children.length>0){
 while(bolChild2 && ii < dall.children.length){
 //alert("iiii "+dall.length+" iii "+ii+" ")
 //alert("vdall.length "+dall.length)
//alert("dalRep.outerHTML+++ ****** "+ddx+" "+dall.children[ii].outerHTML)
//console.log("dall "+dall.children[ii].tagName)
  eleAndChild(0,ddx,dall.children[ii],blPrntt,blChldd)();
  
   ii++;
   
 }}
//}
 //console.log("///////fin de func "+)
 //return tabRepeat[1];
 return bolClass;
 }
 return clOse;
 /*
for(var ii = xI; ii < dal.length ; ii++)

    {
   
 //alert(dal.length +"   "+ii+"    "+ dal[ii].outerHTML)
  // if (document.all[ii].matches(dd[0])) {
   dal[ii].matches=cssMatch(dal[ii]);
   //  if (document.all[ii].matches(dd[0]) || dd[0].search(":")>-1) {
     //console.log("document.all "+dal(ii).tagName+" "+ ii +" / "+dal.length);
     tabRepeat=repeat(dd,dal,ii,cT2);
   zzz+=tabRepeat[0];
   alert("zzz "+cT2+" "+zzz +" ** " )
   if(bolChid && dal[ii].children.length>0){
   //alert(dd+" "+dal[ii].outerHTML)
  eleAndChild(0,dal[ii].children,true);
  
     }
     
   ii=tabRepeat[1];
   cT2=tabRepeat[2];
   alert("iiiii "+ii+" "+cT2)
   
  // console.log("document.all "+dal[ii].tagName + dal[ii].children.length)
   
}*/
//}clOse();
}
  function repeat(tabStr,dalRep){
 // alert("cT2Bol  "+ cT2Boll)
 cssText3="";
 cT=0;
 
 //while(cT<tabStr.length-1){
 /*
  if(cT>0 ){
  //console.log("************** "+cT);
  repeat(tabStr[cT]);
  if(cT===tabStr.length-2)
  {
  tabStr2=tabStr[tabStr[0]]+"{"+cssText3;
  //cssText3 +=
  }
  //bolCt=true;
  
  }else{*/
//  cssText2=tabStr[cT].split(",");

//var MTstr,MTstr2="";
   cssText2=tabStr;
  bolMatch=true;
  var mT2,mT22;
  var strBi_
 
 // console.log("mmedia "+ddd+" "+r+ " "+i);
   // if(cssText2.indexOf(".tiles h3")>-1)
//alert("dalRep.outerHTML+++ "+dalRep.matches(cssText2)+" "+cssText2+" "+dalRep.outerHTML)
  //if(cssText2==="body.home #top-navigation")
 // alert("dalRep.outerHTML+++ "+dalRep.outerHTML)
  //alert("match "+cssText2 +"  "+dalRep[iI].outerHTML)
   matchTrue(bolMatch,cssText2);
function matchTrue(bM,mT){
//alert(mT+"  "+dalRep[iI].matches(mT))
//console.log("matchTrue "+bM +" " +cssText2.split(":").length);
//console.log(" matchhhhhhhhhhhh "+mT);
/*
try {
   var zo=dalRep.matches(mT);
}
catch(err) {
   // document.getElementById("demo").innerHTML = err.message;
   alert(err.message+" errHOHO "+ mT +" "+ddd);
}
*/
/*
if(mT===" ._51xa > " ){
  alert("allah ._51xa >  "+mT)
}*/
 if( dalRep.matches(mT) ){
  /* if(mT.search("._51xa > ._4jy0")>-1 ){
  alert("allah.... ._51xa >  "+mT)
}*/
  /* console.log("mT "+mT)
    if(mT.search(".w3-left")>-1){
      alert("jj")
    }
   */
   var  chekBiSpecifiq, chekBiSpecifiq2;
 var Specifiq=["#b_L"+b_LNum,".b_L"+b_LNum,":not(b_L)"];
    var EleSpecifiq=["","",""];
   var dif;
  // var css_Final;
   
   
   // en 22.js
//cssFinal2[EleCount]=[pseudo,[Specificity.calculate(c2),dd[dd.length-1]]]
/*
 if(mT.trim()==="*" )
cmp(cssFinal2,0,["*",MTstr3,Specificity.calculate(mT),stySplit (styleSpecifiq)])
else
cmp(cssFinal2,countEle,[dalRep,MTstr3,Specificity.calculate(mT),stySplit (styleSpecifiq)])
*/
// en mT
//return [cssText3,cssText4,MTstr3,sC];
   
   
   
   
   
   
     
     //mT22=mT;
     var mT3="";
    if(mT[mT.length-1]===" ")
  mT3=" ";
   mT2=mT.trim();
   
   //mT2=mT2.replace(/\  +/g," ")
    mT2=mT2.replace(/\  +/g," ")
//alert(mT2.length)
//}
mT2=mT2.replace(/ \+/g,"+")
mT2=mT2.replace(/\+ /g,"+")
mT2=mT2.replace(/ \~/g,"~")
mT2=mT2.replace(/\~ /g,"~")
mT2=mT2.replace(/ \>/g,">")
mT2=mT2.replace(/\> /g,">")

// alert("yes matchhhhhhhhhhhh "+mT)
// alert("yes matchhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhvhhhhhhhhhhhhvhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhvvhhhhhhhhhhhhhhhhhhhhhhhhvhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhvhhhhhhhhhhhhvhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
 
// console.log("yes_ match "+mT)
//if(document.all[iI]===document.querySelector(cssText22)){
 
 // cssText3 += cssText5 /*=" "+cssText2[cT2]+","*/;
 if(claSs.search("bismiLLAH_")>-1 /*&& false*/){
   ////////////////
   
    if(mT2==="*" ){
      if(cfMediaBol){
        cfMediaBolresponce=true;
      
cmp(cssFinalMedia,0,[" "+mT2,MTstr3,Specificity.calculate(mT2,""),stySplit (styleSpecifiq)])
}else
cmp(cssFinal2,0,[" "+mT2,MTstr3,Specificity.calculate(mT2,""),stySplit (styleSpecifiq)])
}else{
  
 
  if(cfMediaBol){
   cfMediaBolresponce=true;
  cmp(cssFinalMedia,countEle,[mT3,MTstr3,Specificity.calculate(mT2,""),stySplit (styleSpecifiq)])
  }else
  cmp(cssFinal2,countEle,[mT3,MTstr3,Specificity.calculate(mT2,""),stySplit (styleSpecifiq)])
 // cmp(cssFinal2,0,[" "+mT22,MTstr3,Specificity.calculate(mT22,""),stySplit (styleSpecifiq)])
}

  // claSs=" ."+claSs+" ";
  // console.log("yes match "+mT+" // ")
   var claSsP="";
   var claSsP2;
   
   /////////////////
   //bolClass=true; jadid
   
//alert(mT2)
/*
   var IndX=mT2.search(/([a-zA-Z] #|[a-zA-Z] [a-zA-Z]|[a-zA-Z] .)/i)
while (IndX>-1) {
  //alert('Letter Found'+IndX)
  mT2=rreplace(mT2, IndX+1, 1,"_AlLaH_")
  //alert(mT2)
  IndX=mT2.search(/[a-zA-Z] [a-zA-Z]/i)
}
 */  
   
   /*
   if( dalRep.matches(claSs+" "+strBi)  || dalRep.matches(strBi+claSs) || dalRep.matches(claSs+strBi) ){
        cssText3=  claSs+chekBiParent+strBi + MTstrr2 +" ,";
     }
    cssText3=  claSsP2+ MTstrr2 +" ,";
    */
   /*
   if(bM)
   cssText3= " .bismiLLAH ,";
   else
   */
  // cssText3= cssText2.replace(MTstr," .bismiLLAH")+" ,";
  //if(bolClassChld)//jadid
 // if(bolClassParent)//jadid


/*

  if(mT2==="*" ){
  // {if( bolStar)
   //cssText3= claSs+MTstr3+" ," ;
cssText3= " .bismiLLAH_ "+mT3+MTstr3+" ," +" .bismiLLAH_ * "+mT3+MTstr3+" ,";
 // cssText3= claSs+MTstr3+" ," +claSs+" * "+MTstr3+" ,";
  // cssText3= " .bismiLLAH_ "+MTstr3+" ," +" .bismiLLAH_ * "+MTstr3+" ,";
  }
   else{
    
     var mT22=mT2.split(" ");
     var numClaSs=parseInt(claSs.replace( /[^\d]/g, ''), 10);
     if(mT22[mT22.length-1]==="*")
     claSs=" * ";
    mT22.splice(mT22.length-1,1)
   if(mT22.length>0){
     var chBP=mT22.length+numClaSs;
     for(var chB in mT22){
       // claSsP=document.querySelector(mT2[chB]).getAttribute("class").split(" ");
         //claSsP2=claSsP[claSsP.length-1]+" ";
         claSsP+=".bismiLLAH_"+chBP+" ";
         chBP--;
     }
     
   }
   //claSsP+="bismiLLAH_"+chBP+" ";
   claSsP+=claSs;
     cssText3= claSsP+mT3+MTstr3+" ,";
   }
    */
    
    
   // cssText3= " .bismiLLAH_"+MTstr3+" ,";
 
   //bolClassParent=false;//jadid
 
  }else{
   // bolChild2=false;
    
    
    var  chekBiParentBol=false;
    var chekBiParent="";
    //var tabstrBi;
    
    //var tabstrBi2;
 // cssText3= " " + cssText2+" ,";
  //var bolBi=false;
 // if(true){
    chekBi(mT2,MTstr2,MTstr3);
  //  }
  function chekBi(cB,MTstrr,MTstrr2/*,bolstrBi*/){
    //console.log("++++ "+cB+"  ** "+MTstrr+" ** "+MTstrr2)
   // var strBi=cB;
     var strBi=strBi_=cB.trim();//change
     //var strBi=cB;
    //strBi+=" ";
    /*if(bolstrBi===undefined)
    bolstrBi=true*/
   /////////////// if(strBi.indexOf(" ")>-1){
    //var strBi2=strBi.substring(strBi.indexOf(" "),strBi.length);
  //  var strBi3=".bismiLLAH"+strBi;
    //alert("** "+strBi3+" "+dalRep.matches(strBi3))
    if(strBi==="*" ){
      
   console.log("////////////// "+MTstrr+" ** "+MTstrr2)
    //cssText3= claSs +" * "+MTstrr2+" ,";
   cssText3= claSs + MTstrr2+" ,"+" " + claSs +" *"+mT3+MTstrr2+" ,";
    // cssText3= " " + ".bismiLLAH_ "+MTstrr2+" ,"+" " + ".bismiLLAH_ * "+MTstrr2+" ,";
   // cssText3= " " + ".bismiLLAH * "+MTstrr2+" ,";
    }else
    { //ex a b c alors 1-b 2-a b 3-b c 4-a c 5-c 6-a b c
   // if(true)
   //  cssText3= " " + strBi + MTstrr2 +" ,";
     if( dalRep.matches(".bismiLLAH "+strBi)   || dalRep.matches(".bismiLLAH"+strBi) ){
       
      // cmpkkkkk(cssFinal2,countEle,[strBi,MTstr3,Specificity.calculate(strBi),stySplit (styleSpecifiq)])
      // cmpkkkkk(cssFinal2,countEle,[strBi,MTstrr2,Specificity.calculate(strBi),stySplit (styleSpecifiq)])
        if( chekBiParentBol){
         //  EleSpecifiq[2]=strBi;
          chekBiSpecifiq2=Specificity.calculate(strBi);
          for(var sp=0;sp< chekBiSpecifiq.length;sp++){
             dif=chekBiSpecifiq[sp]-chekBiSpecifiq2[sp];
           /* 
            if(sp===2 && dif >0)
            // bolNot=true
             EleSpecifiq[sp]=" "+strBi;
             */
            while(dif--){
             
              //strBi+=Specifiq[sp];
              EleSpecifiq[sp]+=Specifiq[sp];
            }
          }
          //if( bolNot){
     //cssText3=  claSs+EleSpecifiq[0]+EleSpecifiq[1]+" "+strBi +EleSpecifiq[sp]+ MTstrr2 +" ,";
          //}else
          //cssText3=  claSs+EleSpecifiq[0]+EleSpecifiq[1]+EleSpecifiq[2] +mT3+ MTstrr2 +" ,";
          cssText3=  claSs0+EleSpecifiq[0]+EleSpecifiq[1]+" "+strBi+EleSpecifiq[2] +mT3+ MTstrr2 +" ,";
      
        }else
        cssText3=  claSs0+strBi +mT3+ MTstrr2 +" ,";
     }
     else if(dalRep.matches(strBi+".bismiLLAH") && strBi.indexOf(" ")===-1){
       
       //cmpkkkkk(cssFinal2,countEle,[strBi,MTstrr2,Specificity.calculate(strBi),stySplit (styleSpecifiq)])
        if( chekBiParentBol){
         // EleSpecifiq[2]=strBi;
          chekBiSpecifiq2=Specificity.calculate(strBi);
          for(var sp=0;sp< chekBiSpecifiq.length;sp++){
             dif=chekBiSpecifiq[sp]-chekBiSpecifiq2[sp];
            
          /*  if(sp===2 && dif >0)
            // bolNot=true
             EleSpecifiq[sp]=" "+strBi;*/
            while(dif--){
             
              //strBi+=Specifiq[sp];
              EleSpecifiq[sp]+=Specifiq[sp];
            }
          }
          //if( bolNot){
     //cssText3=  claSs+EleSpecifiq[0]+EleSpecifiq[1]+" "+strBi +EleSpecifiq[sp]+ MTstrr2 +" ,";
          //}else
          //cssText3=  claSs+EleSpecifiq[0]+EleSpecifiq[1]+EleSpecifiq[2] +mT3+ MTstrr2 +" ,";
       cssText3=  claSs0+EleSpecifiq[0]+EleSpecifiq[1]+" "+strBi+EleSpecifiq[2] +mT3+ MTstrr2 +" ,";
        }else
        cssText3=  claSs0+strBi +mT3+ MTstrr2 +" ,";
       //cssText3=  "X_LLah"+claSs+strBi + MTstrr2 +" {"+styleSpecifiq;
       //cssText3=  "X_LLah"+"X2_LLah"+countEle+MTstrr2;
       //cmpkk2(cssFinal3,countEle,[strBi,MTstrr2,Specificity.calculate(strBi),stySplit (styleSpecifiq)])
       //cssText3= claSs+".bismiLLAH " + MTstrr2 +" ,";
     }/*
     else if(dalRep.matches(strBi) && chekBiParentBol){
       EleSpecifiq[2]=strBi;
       chekBiSpecifiq2=Specificity.calculate(strBi);
          for(var sp=0;sp< chekBiSpecifiq.length;sp++){
             dif=chekBiSpecifiq[sp]-chekBiSpecifiq2[sp];
            
           
            while(dif--){
             
              //strBi+=Specifiq[sp];
              EleSpecifiq[sp]+=Specifiq[sp];
            }
          }
          //if( bolNot){
     //cssText3=  claSs+EleSpecifiq[0]+EleSpecifiq[1]+" "+EleSpecifiq[2] +EleSpecifiq[sp]+ MTstrr2 +" ,";
          //}else
          cssText3=  claSs+EleSpecifiq[0]+EleSpecifiq[1]+" "+strBi + MTstrr2 +" ,";
     }
      */
     /*
    if( dalRep.matches(".bismiLLAH "+strBi)   ){
    // 
    //  if(bolBi)
      //cssText3= " " + strBi3 + MTstr2 + " ,";
     // else
    // console.log("++++ "+MTstrr+" ** "+MTstrr2)
    if( chekBiParentBol){
      //  4-a c  6-a b c
      cssText3= " " + ".bismiLLAH_ "+strBi + MTstrr2 +" ,";
       //cssText3= " " + ".bismiLLAH_ .bismiLLAH "+strBi + MTstrr2 +" ,";
      }else{
       // 5-c
      cssText3= " " + ".bismiLLAH_ "+strBi + MTstrr2 +" ,";
      //cssText3= " " + ".bismiLLAH "+strBi + MTstrr2 +" ,";
      }
    }else  if(  dalRep.matches(strBi+".bismiLLAH")  ){
      //1-b 
    // console.log("....222.... "+ strBi+".bismiLLAH")
    //  cssText3= " " + strBi+".bismiLLAH" + MTstrr2 +" ,";// tas7i7 
    if( chekBiParentBol){
        //2-a b 
      cssText3= " " + ".bismiLLAH_ "+ strBi +MTstrr2 +" ,";
      //cssText3= " " + ".bismiLLAH_ .bismiLLAH"+ MTstrr2 +" ,";
      }else{
        cssText3= " " + ".bismiLLAH_ "+ strBi +MTstrr2 +" ,";
       //cssText3= " " +".bismiLLAH" + MTstrr2 +" ,";
      }
    }else  if(  dalRep.matches(".bismiLLAH"+strBi)  ){
      
     
      
       //var tabstrBi=strBi.split(" ");
        //strBi=strBi.replace(tabstrBi[0],"")
        
      if( chekBiParentBol){
        //2-a b // 6-a b c
      cssText3= " " + ".bismiLLAH_ "+strBi + MTstrr2 +" ,";
    //  cssText3= " " + ".bismiLLAH_ .bismiLLAH"+strBi + MTstrr2 +" ,";
      }else{
        //3-b c //7 -c
      // var tabstrBi=strBi.split(" ")
     
    cssText3= " " + ".bismiLLAH_ "+strBi + MTstrr2 +" ,";
    //cssText3= " " + ".bismiLLAH"+strBi + MTstrr2 +" ,";
    
    
    //console.log("....111.... "+".bismiLLAH"+strBi)
      //cssText3= " " + ".bismiLLAH" + MTstrr2 +" ,";
    } 
    }*/
    else{
    
    // bolBi=true;
   
    if(strBi.indexOf(" ")>-1){
       if(strBi.indexOf("nav ul")>-1){
        alert("this")
      }
       
       console.log("+++++++++ "+strBi);
      //chekBiParent=strBi.split(" ")[0]+" ";
      if(!chekBiParentBol){
        chekBiParentBol=true;
      chekBiSpecifiq=Specificity.calculate(strBi);
      }
       
      var strBi2=strBi.substring(strBi.indexOf(" "),strBi.length);
      /*
      if(strBi.length-1===" ")
   strBi2+=" ";
   */
     // alert("cssText2 "+cssText2+" --  "+strBi2);
     //if(dalRep.matches(chekBiParent+".bismiLLAH"+strBi) ){
         
       //}else
      chekBi(strBi2,MTstrr,MTstrr2);
    }else if( chekBiParentBol){
      console.log("if( chekBiParentBol) "+strBi2);
    }
    /*
    /////modif
     //cmpkkkkk(cssFinal2,countEle,[strBi,MTstrr2,Specificity.calculate(strBi),stySplit (styleSpecifiq)])
     //cssText3=  "X_LLah"+claSs+strBi + MTstrr2 +" {"+styleSpecifiq; 
     cssText3=  "X_LLah"+"X2_LLah"+countEle+MTstrr2;
    cmpkk2(cssFinal3,countEle,[strBi,MTstrr2,Specificity.calculate(strBi),stySplit (styleSpecifiq)])
    
    */
    
    
    }
    
  }
    /*
  }else{
    if(strBi==="*")
    cssText3= " " + ".bismiLLAH "+MTstrr2+" ,";
    else
    cssText3= " " + strBi+MTstrr2+" ,";
  }
    */  
    }
    
  }
   //console.log("yes "+tabStr+" --- "+cssText3)
   //console.log("yes__  --- "+cssText3)
    if(cssText3==="" && claSs.search("bismiLLAH_")===-1)
    console.log("1122 "+tabStr+" .... "+strBi_)
  
///////////////////////////////////  
bolChild2=false;
 
  }/*
  else {if(bM){
   // x= xY(mT);

 x=mT.lastIndexOf(">");
for (var srch=0 ; srch<tabChar.length;srch++ )
  {
 
 var y=mT.lastIndexOf(tabChar[srch]);
 //alert(" y "+y)
if( y>-1 ){
 //  x= -1<x && x<y?x:y;9dima
   x=x>y?x:y;
    
   // alert(" x "+x)
 }
  }
  if(x>0 && mT.charAt(x)!==":"){
    x=-1;
  }
  if(x>0 && mT.charAt(x-1)===":"){
    x--;
  }
 //   return x1;
 // }
  
  if(x>-1){

  MTstr=mT.substring(0,x);
  MTstr2=mT.substring(x,mT.length);
  console.log("------------  "+ MTstr+" //  " +MTstr2 );
  mTT=MTstr.search(/[a-zA-Z]+/)=== -1?"*":MTstr;
  bolMatch=false;
  if( dalRep.matches(mTT) )

  matchTrue(bolMatch, mTT);
  else
   matchTrue(bolMatch, mTT+" *");
  }}
    
  }
  */
  }
 // else{
 
 return [cssText3]; 
 //return ["",iI,cT2];
 }
  function tryCatchEdit (tCe,tceStr){
  //console.log("+++++++++ "+tCe+" ** ")
   var TCE;
   try {
     TCE=document.querySelector(tCe);
    if(TCE!== null)
   
    TCE=tceStr;/*!==null*/
   // return TCE;
    
   //edit ()
}
catch(err) {
//console.log("errrrrrrr " +" "+tCe+" --/"+TCE);
//console.log(err.message +" "+tCe);
    TCE="error";
  // return TCE
   //edit ()
   
}
//fconsole.log("TCE "+TCE);
return [TCE,tceStr];
}
function edit (stttr){
   var MTstr="";MTstr2="..";MTstr3="";
  var _stttr=stttr;
  var sttrReturn="._.";
  var _x=-2;
//console.log("edittttt " +" "+_stttr);
  editClose (_stttr,_stttr);
  
   //var bolSttr= false;
  function editClose (sttr,sttr2){
  var checkEle=tryCatchEdit (sttr,sttr2)[0];
//alert("hhhh")
//console.log(typeof tryCatchEdit (sttr))

if(checkEle === null || checkEle === "error"){
  //console.log("nullllll");
  var _y=1;
  _x=sttr2.lastIndexOf(":");
  if(_x>0 && sttr2.charAt(_x-1)===":"){
    _x--;_y++;
    
  }
 // if(sttr2==="#bandeau .rubMenu:hover .btn2 a:hover")
 // console.log("sttrrrrrrr2 "+_x+" "+_y)
  // console.log("sttr2 "+sttr2)
  MTstr=sttr2;
  //console.log("sttr2 "+sttr2)
  if(_x>-1){
  //  console.log("sttr222 "+sttr2)
   // if(MTstr!=="..")
    MTstr=sttr2.substring(0,_x);
    MTstr2=sttr2.substring(_x+_y,sttr2.length);
    MTstr3=sttr2.substring(_x,sttr2.length)+MTstr3;
    //console.log( MTstr+" .. "+ MTstr2+" .. "+ MTstr3)
    if(MTstr.lastIndexOf(")") >= MTstr.lastIndexOf("("))
    
    editClose (MTstr2,MTstr);
  }else{
    if(MTstr2!==".." && sttr.indexOf("hobLover")===-1){
      //_x=-2;
     // MTstr="..";
     editClose (MTstr+":not(hobLover)",MTstr);
    }
  }
  
}else if( checkEle !== undefined /*&& checkEle !== null*/){
  //bolSttr= false;
  //sttr2=sttr2.trim();//change
  if(sttr2.trim()===""){
  sttr2="*";
  }
  sttrReturn= sttr2;
}
/*
else if(checkEle === "error"){
    
    console.log("errorrrrrr "+checkEle[1])
//alert("hhhhhhhh")
  //if(checkEle[1].lastIndexOf(":")>-1)
  // editClose (MTstr+":not(hobLover)",MTstr);
tryCatchEdit (MTstr)
  }
  */
  /*else{
    bolSttr= false;
  }*/
 
}
// console.log(".........___ "+sttrReturn)
var st2return=sttrReturn.trim()[sttrReturn.trim().length-1];
if(st2return===">" || st2return==="+" || st2return==="~")
return sttrReturn+"*";
else 
  return sttrReturn;
}
  
    
// for(var ZZ in zZ)
 
 //console.log("jadid "+ZZ+" "+zZ[ZZ] +zZ[ZZ].length);
     
 
 
  
return zZ;
  
}
//alert("///////fin de func "+dd2tab2);
//return csS2;
    
  }

 //csS ()
  //csS (0,document.getElementById("pagelet_bluebar"),true)
  //csS (0,document.chldren[0],true)
 //csS (0,  document.querySelector("body"),true)()
//document.addEventListener("click", csS (0,  document.querySelector("body"),true));


//csS (0,document.getElementById("topnav"),true)();
//alert("jadid")
//csS (0,document.querySelector("html"),true)();
// alert("///////fin de func "+dd2tab2);
//csS (0,document.querySelector("body"),true)();
/////////////
///////////
 
 
// tryCatchEdit ('div[class^="test"]:nnot(hover)');
 function  fontStrUrl(strddd){
      var foNt=strddd;
   var bolTf=false;
   var tfX=0;
   var  tabFont=[],tabFontTmp=[];
  // var 
// if(param3=="font"){
   
   var _tempx= retImpFont (foNt,"url","F");
			    //  var strFnt=_tempx[0];
			    // tabFont[tabFont.length]=strFnt;
			         tabFont =   tabFont.concat(_tempx[0]);
			         tabFontTmp=tabFontTmp.concat(tabFont);
			         if(tabFontFinal.length===0)
			        // tabFontFinal[tabFontFinal.length]=tabFontTmp;
			         tabFontFinal=tabFontFinal.concat(tabFontTmp);
			         else{
			         var tfW=0;
			        // var maxTf=tabFontFinal.length;
			       //  tabFontFinal[maxTf]
			       alert(" tabFont "+tabFont)
			         while(tfW< tabFontFinal.length ){
			           // bolWhileTf=false;
			           /*
			           tfX=0;
			           for(var tff=0;tff<tabFontFinal[tfW+tfX].length;tff++ ){
			           for(var tf=0;tf<tabFont.length;tf++){
			             console.log("&&&& "+tabFont[tf] +" "+tabFontFinal[tfW][tff])
			             if(tabFontFinal[tfW][tff]===tabFont[tf])
			             
			             {
			               console.log("@@@@@@@@@@");
			               alert("tabFont[tf]___ "+tabFont[tf])
			               bolTf=true;
			               //bolWhileTf=true;
			               tabFont.splice(tf,1);
			               if(tabFont.length===0){
			                 tfW=tabFontFinal.length-1;
			                 tff=tabFontFinal[tfW+tfX].length;
			               }else{
			               tf=tabFont.length;tfW=-1;tfX=1;tff=tabFontFinal[tfW+tfX].length;}
			             }
			             
			            // tabFontTmp[tabFontTmp.length]=tabFont[tf];
			             
			            // bolTf=true
			             
			         }
			         }
			         */
			         ////
			         ///
			         //
			          // for(var tff=0;tff<tabFontFinal.length;tff++ ){
			           for(var tf=0;tf<tabFont.length;tf++){
			            // console.log("&&&& "+tabFont[tf] +" "+tabFontFinal[tfW][tff])
			             if(tabFontFinal[tfW]===tabFont[tf])
			             
			             {
			               console.log("@@@@@@@@@@");
			               alert("tabFont[tf]___ "+tabFont[tf])
			               bolTf=true;
			               //bolWhileTf=true;
			               tabFont.splice(tf,1);
			               if(tabFont.length===0){
			                 tfW=tabFontFinal.length;
			                // tff=tabFontFinal.length;
			               }else{
			               tf=tabFont.length;tfW=-1;}
			             }
			             
			            // tabFontTmp[tabFontTmp.length]=tabFont[tf];
			             
			            // bolTf=true
			             
			         }
			        // }
			         tfW++;
			       
			         }
			          if(tabFont.length>0 && bolTf )
			          //if()
			      // tabFontFinal[tabFontFinal.length]=tabFont;
			      {
			      tabFontFinal=tabFontFinal.concat(tabFont);
			       
			      }
              }
			        
			         //tabFontFinal[tabFontFinal.length]=tabFontFinal[tabFontFinal.length].concat(tabFont);
			         
			         // alert("tabFontFinal/////___ "+tabFontFinal)
			        //  tabFontFinal[tabFontFinal.length]="tabFontFin";
			        //console.log("tabFontFinal//******///___ "+tabFontFinal)
			          return tabFontFinal;
			         
			 // _urlFont=["path",k[i].getAttribute("href"),window.location.href,window.location.pathname]
			         
   }

  
 function loadjscssfile(filename, filetype,typeMETHOD,eleOuter){
    if (filetype=="js"){ //if filename is a external JavaScript file
        fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    } else if (filetype.search("cssIntern")>-1){ //if filename is an external CSS file
         fileref=document.createElement("style")
        //fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.innerHTML=filename;
        if(typeMETHOD=="outer"){
         // console.log("_____..... "+fileref.outerHTML)
         // console.log("-----..... "+eleOuter.outerHTML)
        eleOuter.outerHTML=fileref.outerHTML;}
        else
        fileref.innerHTML=filename;
       // fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined" && typeMETHOD!="outer")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}
 
//loadjscssfile("myscript.js", "js") //dynamically load and add this .js file
//loadjscssfile("javascript.php", "js") //dynamically load "javascript.php" as a JavaScript file
//loadjscssfile("mystyle.css", "css") ////dynamically load and add this .css file
  
    let fetchStyle = function(url) {
  return new Promise((resolve, reject) => {
    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.onload = function() { resolve(); console.log('style has loaded'); };
    link.href = url;

    let headScript = document.querySelector('script');
    headScript.parentNode.insertBefore(link, headScript);
  });
};
//if(false)
document.addEventListener("click",function (event) {//jaddid
  var k = document.getElementsByTagName("*");
var j = k.length; 
var tabTmp=[];
for (var i = 0; i < j; i++){
  //console.log(",,,,,,, "+k[i].getAttribute("rel")); 
	//console.log(k[i].tagName);
	if(k[i]!== undefined){
	  /*
  	if(k[i].tagName.toUpperCase() ==="SCRIPT"){
	  k[i].parentNode.removeChild(k[i]);
	
  	  k[i].parentNode.removeChild(k[i]);
  	}else */
  if(/**//*k[i].getAttribute("rel")==="stylesheet" || */(k[i].tagName.toUpperCase() ==="STYLE" || k[i].getAttribute("rel")==="stylesheet") /* &&
  k[i].outerHTML.search("media")>-1 */){
    tabTmp[tabTmp.length]=k[i];
    
   //console.log(k[i].outerHTML); 
   // alert(".............. "+k[i].getAttribute("href"));
   // console.log(k[i].getAttribute("href")); 
    
    //console.dir(k[i]); 
    if(k[i].getAttribute("href")===null){
    if(k[i].innerText.search("url")>-1){
    // console.log("text............. "+k[i].innerText);
    
    //loadCssJs(["patH_",window.location.href,window.location.href,window.location.pathname],loadjscssfile,"cssIntern2","outer",k[i],0,k[i].innerText/*,"prm5","prm6",0*/);
   // loadjscssfile(loadHTMLL(window.location.href,k[i].innerText) ,"cssIntern","outer",k[i])
    loadHTMLL(window.location.href ,loadjscssfile,"cssIntern","outer",k[i],k[i].innerText)
    }
      
      
    }else{
    console.log("href.............. "+k[i].getAttribute("href"));
   // if(k[i].getAttribute("href")==="http://www.davidalism.com/omgthisisawesome/wp-content/themes/redlight/styles/default.css")
   
  // loadCssJs(["patH_",k[i].getAttribute("href"),window.location.href,window.location.pathname],loadjscssfile,"cssIntern","outer",k[i]/*,"","","prm5","prm6",0*/);
    
    // loadCssJs(k[i].getAttribute("href"),loadjscssfile,"cssIntern","outer",k[i]);
    // loadjscssfile(loadHTMLL(k[i].getAttribute("href")) ,"cssIntern","outer",k[i])
    loadHTMLL(k[i].getAttribute("href"),loadjscssfile,"cssIntern","outer",k[i])
    }
   // loadjscssfile(loadCssJs(k[i].getAttribute("href")), "cssIntern")
   //fetchStyle(k[i].getAttribute("href"))
   // loadjscssfile(k[i].getAttribute("href"), "css")
  
  }
	}
    
}
this.removeEventListener('click',arguments.callee,false);
}, false);//jadddid
/*
var sss=""
for (var t = 0; t < 3; t++)
{
    //tabTmp[tabTmp.length]=k[i];
    console.log( tabTmp[t].outerHTML); 
    //alert(".............. "+tabTmp[t].getAttribute("href"));
    console.log(tabTmp[t].getAttribute("href")); 
    console.dir(tabTmp[t]); 
   loadCssJs([tabTmp[t].getAttribute("href")],loadjscssfile,"cssIntern"+sss,"outer",tabTmp[t]);
   sss+="1";
   // loadjscssfile(loadCssJs(k[i].getAttribute("href")), "cssIntern")
   //fetchStyle(k[i].getAttribute("href"))
   // loadjscssfile(k[i].getAttribute("href"), "css")
  }
*/
if(false)
funevent();
function funevent(){
  console.log("alllaaaaah")
document.addEventListener("click",function (event) {
  
  
  //alert(CssJs)
  
  console.log("evvvvvvvvvvvvvent");
  
  
  var eT;var zZZ=[];
  var cssNum=2;
  //var clsCssNum="bismiLLAH_"+cssNum;
//eT=event.target;

//eT= document.getElementById("highlighter_531952").parentNode;
//eT= document.getElementById("ember855");//booking.com
//eT= document.querySelector(".nav-main.nav-container");
//eT= document.getElementById("oc-header");
//eT= document.getElementById("primaryHeaderView")//hotmail
//eT= document.getElementById("extended-nav");//linkedin
//eT= document.getElementById("main-header");//balajak
//eT= document.getElementById("blueBarDOMInspector");//facebook
//eT= document.getElementById("masthead-positioner");//youtube
//eT= document.querySelector(".header");//fraancefotbbal yt-masthead-container
//eT= document.querySelector(".Bgc(#fff).Pos(r).Z(6)");//column-image
//eT= document.querySelector(".codecolorer-container.javascript.vibrant");
eT= document.querySelector("#glob2");
//eT= document.querySelector(".bhUHJf.Wxeofe");//https://plus.google.com/
//eT= document.getElementById("x12");//facebook

//eT= document.querySelector("#myform");
//eT=bl("#contentcolumn.chld",2)[0]
alert(eT)
   if (eT.getAttribute("class")===null){
    eT.setAttribute("class", "bismiLLAH"); 
  }else{
//event.target.getAttribute("class");
var xaa = eT.getAttribute("class").replace(" enaabled", "");
eT.setAttribute("class", xaa); 
///// jadid
 //xaa = eT.getAttribute("class")
eT.setAttribute("class", eT.getAttribute("class")+" bismiLLAH"); }
//event.target.style.color = "";
//  csS (0,document.getElementById("topnav"),"prnt1","bismiLLah");
//csS (0,document.getElementById("main-header"),"prnthaha","chld")();

//zZZ=zZZ.concat(csS (0,eT,"prnt1","bismiLLah"));
//csS (0,eT,"prnt1","bismiLLah");
//zZZ=zZZ.concat(csS (0,eT,"prnthaha","chld")());
var eTParentElement=eT.parentElement;
var  eleParentTab=[];
var eTPEleOuterH=eT.outerHTML;

var contP=0;


      while( eTParentElement) {

 eleParentTab[eleParentTab.length] =eTParentElement ;
        //alert('My name is ' + testObj.getAttribute('name') + '. Let\'s try moving up one level to see what we get.');
       // console.log("++++++++++ "+_dalParentElement.tagName)
        eTParentElement=eTParentElement.parentElement;
       // eTParentElement.setAttribute("class", eTParentElement.getAttribute("class")+" bismiLLAH_"+contP);
       
       // eTPEleOuterH="<div class='bismiLLAH_"+contP+"' >"+eTPEleOuterH+"</div>";
       // contP++;
       
       //  eleAndChild(0,ddx,dall.parentElement,blPrntt)();
       // testObj = testObj.parentNode;
       // count++;
    }
   // eTPEleOuterH="<div class='bismiLLAH_' >"+eTPEleOuterH+"</div>";
   var eT_O = eT.outerHTML;
   eT_O=eT_O.replace(/\r?\n|\r/g,"")
   eT_O=eT_O.replace(/\  +/g," ")
  // eT_O=eT_O.replace(/\  +/g," ")
       //alert(claSs );
        
           /* claSs  = claSs.replace(/&amp;/g, '&');
           
            claSs  = claSs.replace(/&#47;/g, '/');
             claSs  = claSs.replace(/&lt;/g, '<');
            claSs  = claSs.replace(/&gt;/g, '>');
            claSs  = claSs.replace(/&quot;/g, '"');
            claSs  = claSs.replace(/&apos;/g, "'");  */
    eT_O="<div class='bismiLLAH_"+cssNum+"' style='position: relative;'><div id='b_L"+cssNum+"' class='b_L"+cssNum+"' >"+eT_O+"</div></div>";
   
   //eT_O= removeReturnFromTo(eT_O,'href="','"',"rem",6,0)[0]; aattention
    eT_O= removeReturnFromTo(eT_O,'<style','style>',"rem",0,7)[0];
     eT_O= removeReturnFromTo(eT_O,'<script','script>',"rem",0,7)[0];
     eT_O= removeReturnFromTo(eT_O,'<script','>',"rem",0,1)[0];
     if(true){
       var str_Ot;
      var eT_OTab= removeReturnFromTo(eT_O,'src="','"',"ret",5,0);
      for(var sr in eT_OTab){
        
        str_Ot= resolveRelative(eT_OTab[sr], window.location.href)
        eT_O=eT_O.split(eT_OTab[sr]).join(str_Ot);
      }
     
      
     }
    
    console.log(" _____oouutteerr   "+eT_O)
eleParentTab.splice(0,0,eT)

csS (0,eleParentTab,"prnt1","bismiLLAH_"+cssNum,cssNum);
/*
if(eT.tagName.toUpperCase() ==="BODY" /){
 // if(eT.parentElement)
if (eT.parentElement.getAttribute("class")===null){
    eT.parentElement.setAttribute("class", "bismiLLAH_"); 
}else{
  eT.parentElement.setAttribute("class", eT.parentElement.getAttribute("class")+" bismiLLAH_");
}
}else{
eT.outerHTML="<div class='bismiLLAH_' >"+eT.outerHTML+"</div>";
}
*/
//eT.outerHTML="<div class='bismiLLAH_' >"+eT.outerHTML+"</div>";
//csS (0,eT,"prnthaha","chld")();
//csS (0,event.target,"prnt1","bismiLLah");
//csS (0,event.target,"prnthaha","chld")();

//csS (0,event.target,"prnthaha","chld")();
//alert("what")
//csS (0,document.querySelector("body"),"prnt","chld")();
 //csS (0,document.getElementById("accueilApprendre"),true)();
// for(var _z in zZZ)
 //console.log(_z +" _____ "+zZZ[_z] +"    " +zZZ[_z].length);

 //cmpSt_filtering(filtering(cssFinal2))
// parentStyle(cssFinal4)

console.log("ttoo "+parentStyle(cmpSt_filtering(filtering(cssFinal2)),_claSs));


if(strStyleMedia.length>0)
console.log("ttoo Media ");
var SSMedia ="";
for (var sM in strStyleMedia){
SSMedia+=strStyleMedia[sM];
}
console.log(" Media "+SSMedia);

//var _cssFinalMedia=;
/*
for (var sM in cssFinalMedia){
//filtering(cssFinalMedia[sM][2]);
//parentStyle(cmpSt_filtering(cssFinal4),_claSs)
console.log("ttoo "+cssFinalMedia[sM][0]+parentStyle(cmpSt_filtering(filtering(cssFinalMedia[sM][2])),_claSs)+cssFinalMedia[sM][1]);
}
*/

 for(var cF2 in cssFinal)
 cssFinal[cF2]=cssFinal[cF2].replace(/\r?\n|\r/g,"")
   cssFinal[cF2]=cssFinal[cF2].replace(/\  +/g," ")
console.log(cF2+" _____ "+cssFinal[cF2] +"    " +cssFinal[cF2].length);
///////////////////////////////////////////////////////////////////////////////////////////
 //alert("zZ.length "+zZZ.length)
// if(zZ.length===3){
   alert("zzzzzzzzzzzzzzzzzzzz")
   /*
   if(tabFontFinal.length!==0 //&&tabFontFinal[tabFontFinal.length-1]==="tabFontFin")
   {
     //tabFontFinal.splice(tabFontFinal.length-1,1);
     console.dir(tabFontFinal)
   for (var _tf in tabFontFinal){
    checkUrlFont0( ["patH_",tabFontFinal[_tf],window.location.href,window.location.pathname],tabFontReturn) 
   }
   }
   */
 //}
 
}, false);
}
/*
document.addEventListener('mouseover', function (event) {
  if (event.target.getAttribute("class")===null){
    event.target.setAttribute("class", "NuLl enaabled"); 
  }else
//event.target.getAttribute("class");
event.target.setAttribute("class", event.target.getAttribute("class")+" enaabled"); 
//event.target.style.color = "";
 
}, false);
//var parent = document.getElementById('section2');

document.addEventListener('mouseout', function (event) {
if (event.target.getAttribute("class")!==null){
  var xa = event.target.getAttribute("class").replace(" enaabled", "");
event.target.setAttribute("class", xa); 
//event.target.style.color = "";
   
}}, false);
//onmouseover onmouseout
*/
function bl(){
  ////alert("fff")
  var eVEnt=[["click",false]];
   var chld2Bol=false,chld1Bol=false;
var evAnmt;
  if(arguments[arguments.length-1]==="after"){
  //return [style,[ele1,ele2],[prpt1,prpt2],[val1,val2][sit0,sit2]];
 for(var i=0;i <arguments.length;i++){
 
 }
   return [ele,[].slice.call(arguments),"noAfter"];
  }else if(typeof arguments[0]==="object" ){
    if(arguments[arguments.length-1]=== "noAfter"){
 arguments=arguments[1];
  }if(arguments[1]=== "anmt"){
if(typeof arguments[0][arguments[0].length-1]==="number"){
 //arguments=copy(arguments[0],true),
arguments=arguments[0]
 evAnmt=arguments[arguments.length-1]
 //arguments.splice(arguments.length-1, 1);
}else
 arguments=arguments[0];
  }

  }
  var _ele=[],dqs;
  var i=0;
  while(arguments[i]!==undefined){
  if(typeof arguments[i]==="string"){
    
    chld2Bol=false;chld1Bol=false;
   if(arguments[i].search("e:")===0){
   // _ele[_ele.length]=dqs[arguments[i]];
    //foreventt=tabs;
     eVEnt=eventType(arguments[i]);
   }else{if(arguments[i].search(".chld")>-1){
     if(arguments[i].search(".chld2")>-1){
        chld2Bol=true;
     }else
     chld1Bol=true;
      dqs=document.querySelector(arguments[i].split(".chld")[0]).children;
    }else
  dqs=document.querySelectorAll(arguments[i]);
  if(typeof arguments[i+1]!=="number"  ){
   

   for(var d=0;d <dqs.length;d++){
   if(chld2Bol){
      for(var dd=0;dd <dqs[d].children.length;dd++){
    _ele[_ele.length]=dqs[d].children[dd];
    }}else
     
  _ele[_ele.length]=dqs[d];
  }
  }}
  }else if(typeof arguments[i]==="number"){
    if(chld2Bol ){
      for(var dd=0;dd <dqs[arguments[i]].children.length;dd++){
  _ele[_ele.length]=dqs[arguments[i]].children[dd];
  }
    }else if(chld1Bol ){
      /*
      for(var dd=0;dd <dqs[arguments[i]].length;dd++){
  _ele[_ele.length]=dqs[arguments[i]][dd];
  }*/
  _ele[_ele.length]=dqs[arguments[i]];
    }
    else
  _ele[_ele.length]=dqs[arguments[i]]
  }else if(typeof arguments[i]==="object"){
//  ["th",style2,ele,prpT.split("|"),_val,[500,300,"sit"]];
 //if(arguments[i][0]==="th")
  //_ele=_ele.concat(dqs);
  //var _fOr=arguments[i][0];
 // arguments[i]=arguments[i].slice(1, 3);
 if(_ele.length===0){
 if(arguments[i]===undefined)
return cible(arguments[i],arguments[i][0],"","")();
else{
    
cible(arguments[i],arguments[i][0],"","","",evAnmt)();
if(evAnmt!==undefined && i===arguments.length-2)
i++;
}

 }else{
 //var _ele2=[]
 //var hh=[0];
 //var xx=[-3];
 //var argu=copy(arguments[i],true)
 //argu.splice(argu.length,xx)
// argu[argu.length]=xx
// alert(argu[argu.length-1])
  for(var ii=0;ii <_ele.length;ii++){
  for (var eV=0; eV <eVEnt.length;eV++){
//[fOr,style2,[ele,prpT.split("|"),_val,x_Sum],_sit];
/*
if(eV===1){
arguments[i][2][3][0][0]="-";
}
alert(arguments[i][2][3])
*/
 _ele[ii].addEventListener(eVEnt[eV][0], cible(arguments[i],arguments[i][0],_ele[ii],_ele,ii,eV), eVEnt[eV][1]);
}
  
  }
  if(arguments[i+1]!== undefined && typeof arguments[i+1]!=="object")
  _ele=[]
  }
   //_ele[_ele.length]=arguments[i];
  }
  i++;
  }
  if(_ele.length!==0)
  return _ele;
  }
