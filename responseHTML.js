var xhrCount=0,xhrCountDec=0,xhrCountBol=false; var urlXhr;
//var tabUrlImport=[];
//var tabUrlImportReturn=[];
/**
	responseHTML
	(c) 2007-2008 xul.fr		
	Licence Mozilla 1.1
*/	


/**
	Searches for body, extracts and return the content
	New version contributed by users
*/
var strImp;
var xhrTemp;
//var xhrTempImp;
//var uRrl;


function getBody(content) 
{
   test = content.toLowerCase();    // to eliminate case sensitivity
   var x = test.indexOf("<body");
   if(x == -1) return "";

   x = test.indexOf(">", x);
   if(x == -1) return "";

   var y = test.lastIndexOf("</body>");
   if(y == -1) y = test.lastIndexOf("</html>");
   if(y == -1) y = content.length;    // If no HTML then just grab everything till end

   return content.slice(x + 1, y);   
} 

/**
	Loads a HTML page
	Put the content of the body tag into the current page.
	Arguments:
		url of the other HTML page to load
		id of the tag that has to hold the content
		
*/		

 function  removeReturnFromTo(ele,stR1,stR2,bolRemRet,x1,y1,_F) {
   //var eleData=ele.split("data:");
   //if(eleData.length>1 && eleData[0].trim().split("url")>1 && eleData[0].trim().split("url")[1].trim()==="(" )
       var ele2=ele,ele3=[];
        var ele22;
   var ele1=ele2.indexOf(stR1);
   var trueUrl,falseUrlbol=true;

			      
   var jjjj=typeof ele;
 //if(bolRemRet==="rem"){
   // ele1+1 for "*/"
   
 // while(ele1> -1  && ele2.indexOf(stR2)> ele1+1){
     while(ele1> -1  && ele2.indexOf(stR2,ele1+stR1.length)> ele1){
     //alert("yes")
  //  ele2=ele2.replace( ele2.slice(ele1,ele2.indexOf(stR2)+2),"");
  ele22=ele2.slice(ele1+x1,ele2.indexOf(stR2,ele1+stR1.length)+y1);
  if(stR1==="url"){
  	falseUrlbol=false;
  	trueUrl=ele22.split("(");
  }
  	
			        if(falseUrlbol || trueUrl.length>1 && trueUrl[0].split("url")[1].trim()==="" ){
   if(bolRemRet==="ret"){
     /*
     if(_F==="F")
      ele3[ele3.length]=ele2.slice(ele1+x1,ele2.indexOf(stR2,ele1+stR1.length)+y1+1);
      else
      */
     
   //  if(ele22.search("data:")===-1)
      
       
      ele3[ele3.length]=ele22;
      // ele2=ele2.replace( ele2.slice(ele1+x1,ele2.indexOf(stR2)+y1),"");
   }/*
   if(_F==="F")
    ele2=ele2.replace( ele2.slice(ele1+x1-x1,ele2.indexOf(stR2,ele1+stR1.length)+y1+1),"");
    else
    */
    //var rrf=
   // if(_F==="ALLA_h")
    
  
   if(bolRemRet==="rem")
   // ele2=ele2.replace( ele22,"");
    ele2= ele2.split(ele22).join(" ");//jadddddid
 //ele1=ele2.indexOf(stR1);

     //ele1=ele2.indexOf(stR1,ele1+1);

  
   // removeFromTo(ele);
     }/*
     if(bolRemRet==="rem"){
   // ele2=ele2.replace( ele22,"");
    ele2= ele2.split(ele22).join("");//jadddddid
    if(x1===0)//pas fini important hocin
 ele1=ele2.indexOf(stR1);
     }else*/
     ele1=ele2.indexOf(stR1,ele1+1);
   }
   if(bolRemRet==="rem")  ele3[ele3.length]=ele2;
// }
   /*
 }
   if(bolRemRet==="ret"){
     //ele2=ele2.slice(ele1+x1,ele2.indexOf(stR2)+y1);
     ele2=ele2.slice(ele1+x1,ele2.indexOf(stR2)+y1);
   }else if(bolRemRet==="retTab"){
     
     
   }
   */
   // alert("------"+ele2);
   //alert("hhhhhhhhhhh")
  return ele3;
      }

function whileLast(urlPage,urLpath,urlPageParent){
  /*
  ex www.ex.com/aa/bb/cc
  @font url(jj/ff/hh)
  @imort url(jjj/fff/hhh)
  whileLast(  /aa/bb/cc  ,   jj/ff/hh  ,   www.ex.com  )
  whileLast(www.ex.com/aa/bb/cc   ,  jjj/fff/hhh)
  */
 
  var _urlPageParent="";
  if(urlPageParent!==undefined){
  	_urlPageParent=urlPageParent.trim();
  	 if(_urlPageParent[_urlPageParent.length-1]==="/")
  	_urlPageParent=_urlPageParent.slice(0,_urlPageParent.length-1);
	//if(urLpath[urLpath.length-1])
  }
  
	 
  // var urL=urlPage.trim();
  var urLPg=urlPage.trim();
  var uPchar=urLPg.split("?")
  if(uPchar.length>1)
   urLPg=uPchar[0];
  //alert("yyyy")
   var _urL=urLpath.trim();
   /*
   if(_urL[_urL.length-1]==="/")
  _urL= rremove(_urL, _urL.length-1, 1) 
  */
   
  if(urLPg[urLPg.length-1]!=="/")
  urLPg+= "/";
 
  // _urL[_urL.length-1]="";
       var urlImp=[];
			    // url=urL.length-1==="/"?urL:"/";
			     urlImp[urlImp.length]=_urlPageParent+urLPg+_urL;
			     //urLPg= rremove(urLPg, urLPg.length-1, 1) 
			     urLPg=urLPg.slice(0,urLPg.length-1);
			     ////
			      var uLC;
			      while(function(){
			        //uLC=urlImp[urlImp.length-1].lastIndexOf("/");
			        uLC=urLPg.lastIndexOf("/");
			    // urLPg= rremove(urLPg, uLC, 1) 
			      urLPg=urLPg.slice(0,uLC);
			      // _urL[uLC]="";

			         return uLC>-1;}()){
			         //urlImp[urlImp.length]=urlImp[urlImp.length-1].slice(0,uLC);
			          urlImp[urlImp.length]=_urlPageParent+urLPg+"/"+_urL
			       }
			       alert("____ "+urlImp)
			       return urlImp;
			    }
			     
			     
			     
			     
			     
			     
			     function retImpFont (stR,s1,ff){//1.0.2
			     var _strImp;
			    // if(stR==="@import")
			    if(s1==="url")
			     _strImp= removeReturnFromTo(stR,s1,")","ret",0,1);
			     else
			     _strImp= removeReturnFromTo(stR,s1,")","ret",0,2);
			    // else
			    if(s1==="@import")
		 _strImp = _strImp.filter (function (value, index, array) { 
    return array.indexOf (value) === index;
});
			      //alert("strImp . "+strImp)
			      var _strImp2=[]
			      var _strImp22;
			      var siBol=true;
			      var si=0;
			     // var trueUrl;

			      while(si<_strImp.length){
			      //	trueUrl=_strImp[si].split("(");
			       // if(trueUrl.length>1 && trueUrl[0].split("url")[1].trim()==="" ){


			      //   _strImp2[si]="*"+removeReturnFromTo(_strImp[si],'(',')',"ret",1,0,ff)[0].trim()+"*";
			     // _strImp2[si]=removeReturnFromTo(_strImp2[si],'*','*',"ret",2,-2,ff)[0];
			    //  _strImp22=removeReturnFromTo(_strImp[si],'(',')',"ret",1,0)[0].trim();
			    _strImp22=removeReturnFromTo(_strImp[si],'(',')',"ret",1,0)[0]
			    
			    _strImp22.trim();
			      
			      if(_strImp22[0]==='"' || _strImp22[0]==="'"){
			        //rsrc.php/v3/yD/r/2wuGfVYB2an.png
			        /*
			      _strImp2[si]=_strImp2[si].replace(_strImp2[si][0],"");
			      _strImp2[si]=_strImp2[si].replace(_strImp2[si][_strImp2[si].length-1],"");
			      */
			       _strImp22= rremove(_strImp22, 0, 1) 
			       _strImp22= rremove(_strImp22, _strImp22.length-1, 1) 
			      }
			      _strImp2[_strImp2.length]=_strImp22;
			    
			      
			      /*
			      var si2=_strImp2.length;
			   
			      while (si2--){
			      if(_strImp2[si2]===_strImp22){
			        si2=0;
			        siBol=false;
			        //alert(hoho)
			      }}
			      
			      if(siBol){
			      _strImp2[_strImp2.length]=_strImp22;
			       
			      }
			      */
			      //}
			      si++;
			        
			      }
			      if(s1==="url")
			      _strImp2 = _strImp2.filter (function (value, index, array) { 
    return array.indexOf (value) === index;
});
			      return [_strImp2,_strImp];
			      }


function loadHTMLL(url, fun, storage, param,param2,param3,param4,param5,param6_0, param7xhrCount)
{
  xhrCount++;
   console.log("...url ...."+url)
  var xhr = createXHR();

	xhr.onreadystatechange=xhrRET;
	function xhrRET()
	{
		if( xhr.status == 403){
			alert("hhhhhh")
		}
		console.log("xhr.status "+xhr.status)
	  	if(xhr.status == 200 /* || xhr.status == 0*//*Forbidden*/ /*|| bolStatut*/)
		{
		 
				if(xhr.readyState == 4 )
			{ //xhrCountDec++;
			xhrCount--;
			//console.log("...url + xhr.responseURL "+url + " ____ "+xhrCount)
			var xhrTempImp;
			var xhrTempImp;
			if(param5!==undefined && param5.search("import")>-1){
			//var hohotajrib=removeReturnFromTo("/**/kk/*6*//*/",'/*','*/',"rem",0,2)[0]
				 var removeComment=removeReturnFromTo(xhr.responseText,'/*','*/',"rem",0,2)[0]
			  param3= param3.split(param4).join(removeComment);
			}
			if(param3 !==undefined)
			xhrTempImp=param3;
			else
			xhrTempImp=xhr.responseText;
			var sImp;var sImp2;
			
			 
			        
			          
			        
			// }else{
			 var tempxx= retImpFont (xhrTempImp,"url"/*,xhr.responseURL*/);
			     // if(param6_0==="2_import"){
			         //var tempxx= retImpFont (xhrTempImp,"url");
			         if(tempxx[0].length>0 ){
			         for(var tfr=0 ; tfr<tempxx[0].length ; tfr++){
			           /*
  
if(tabFR_All[tfr][0]==="img/sprites.svg?v=d689de80c4e2")
alert("vvv")
controlRepeat[controlRepeat.length]=tabFR_All[tfr][0];
countCotrole=controlRepeat.length;
controlRepeat= controlRepeat.filter (function (value, index, array) { 
    return array.indexOf (value) == index;
});
if(countCotrole===controlRepeat.length)
*/

sImp= resolveRelative(tempxx[0][tfr], xhr.responseURL,true)
if(sImp!==false)
xhrTempImp= xhrTempImp.split(tempxx[0][tfr]).join(sImp)
 
 // for(var cF in cssFinal)
 //console.log("tfr "+tabFontReturn[tfr][0]);
  //console.log("tfr "+ tabFontReturn[tfr][1]);

  }
			         }
			         if(xhrTempImp.search("@import")>-1){
			         bolImport=true;
			        // param6_0="2_import";
			        var tempx= retImpFont (xhrTempImp,"@import"/*,xhr.responseURL*/);
			    //   var strImp2=tempx[0][0];
			     //   var strImp=tempx[1][0];
			        
			        
			       // for(var amp in tempx[0]){
			          sImp= resolveRelative(tempx[0][0], xhr.responseURL)//jadid
			        // loadHTMLL(tempx[1][amp],loadjscssfile,"cssIntern","outer",k[i]);
			         //xhrTempImp= xhrTempImp.replace(tempx[1][amp]," "+loadHTMLL(sImp);
			         //xhrTempImp= xhrTempImp.split(tempx[1][amp]).join(loadHTMLL(sImp));
			         loadHTMLL(sImp, fun, storage, param,param2,xhrTempImp,tempx[1][0],"import",param6_0, param7xhrCount)
			         }else
			          fun(xhrTempImp, storage, param,param2,xhrTempImp)
			          if(xhrCount===0){
			          console.log("-----")
			          funevent();
			          }
			         
			 //}
			           //return  xhrTempImp;
			        
	}
	
	
		  
		
	  
	}else
	  	if(xhr.status!= 0 || xhr.readyState == 4 ){
	  xhrCount--;
	  console.log("nooooo "+xhr.status)
	  console.log("...url + xhr.responseURL "+url + " ____ "+xhrCount)
	  //if (xhr && xhr.readyState != 0) {
		xhr.abort(); // On annule la requête en cours !
		if(xhrCount===0){
			          console.log("-----")
			          funevent();
			          }
	//}

	  // return  "hahahahaha";
	  // if( xhr.status == 403)
//	}
  
	}
}
  xhr.open("GET", url ,true);
	xhr.send(null); 
}

 //return /*loadHTML2;*/
 //loadHTML2(uRl, fun, storage, param,param2,param3,param4,param5);
//}

	/**
		Callback
		Assign directly a tag
	*/
	function rremove(str, startIndex, count) {
	 // rremove("crt/r2002_2", 4, 1) Output: crt/2002_2
    return str.substr(0, startIndex) + str.substr(startIndex + count);
}

function checkUrlFont0( pr0,tFR){
  /*
   var _urlFont=[]
  for (var uu in pr1){
    _urlFont = _urlFont.concat(whileLast(pr1[uu]));
   // _urlFont[_urlFont.length]=whileLast(pr1[uu]);
  }
  */
  //////
  ////
  //var _urlSite=uP[0],_urlPath=uP[1];
  //var _urlFont=whileLast(_urlSite,_urlPath);
   /////
   //////
 // checkUrlFont0([],urLPage,tab_font);
// for (var _tf in pr0[1]){
  // checkUrlFont0( tabFontFinal,[w.l.href,w.l.pathname],tabFontReturn) 
  
   
   loadHTML(pr0,checkUrlFont1,0,"bla bla","_urlFont","font",0);
  // whileLast(urlPage,urLpath,urlPageParent)
 //}
   // loadHTML(pr0,checkUrlFont1,0,"bla bla",_urlFont,"font",0);
    //loadHTML(pr0,checkUrlFont1,0,"bla bla",_urlFont,"font",0);
   // _urlFont=["path",k[i].getAttribute("href"),window.location.href,window.location.pathname]
   
   
 
}
function checkUrlFont1(tabF_All,tabFR_All){
 //var tfrStr;
  alert("hoho")
  console.log("hoho")
  var _tabF_All;
  var controlRepeat=[];
  var countCotrole;
  
  //for(var cF in tabF_All){
    for(var tfr=0 ; tfr<tabFR_All.length ; tfr++){
     // /#|_/g
 // tfrStr=tabFontReturn[tfr][0];
  //myString.replace(RegExp(tabFontReturn[tfr][0], "g"), "");
 // myString.split(oldWord).join('222')
// cssFinal[cF]= cssFinal[cF].replace(RegExp(tfrStr, "g"),"+++++++")
//cssFinal[cF]= cssFinal[cF].replace(tabFontReturn[tfr][0],tabFontReturn[tfr][1])
//tabF_All[cF]= tabF_All[cF].split(tabFR_All[tfr][0]).join(tabFR_All[tfr][1])
if(tabFR_All[tfr][0]==="img/sprites.svg?v=d689de80c4e2")
alert("vvv")
controlRepeat[controlRepeat.length]=tabFR_All[tfr][0];
countCotrole=controlRepeat.length;
controlRepeat= controlRepeat.filter (function (value, index, array) { 
    return array.indexOf (value) == index;
});
if(countCotrole===controlRepeat.length)

tabF_All= tabF_All.split(tabFR_All[tfr][0]).join(tabFR_All[tfr][1])
 
 // for(var cF in cssFinal)
 //console.log("tfr "+tabFontReturn[tfr][0]);
  //console.log("tfr "+ tabFontReturn[tfr][1]);

  }
 // console.log(cF+" "+tabF_All[cF] +"    " +tabF_All[cF].length);
  //tfr++;
 // }
  _tabF_All=tabF_All;
  return _tabF_All;
}
  

	function processHTML(temp, target)
	{
		target.innerHTML = temp.innerHTML;
	//	target.innerHTML = temp;
	}

	function loadWholePage(url)
	{
		var y = document.getElementById("storage");
		var x = document.getElementById("displayed");
		loadHTML(url, processHTML, x, y);
	}	
	function xHr2(){}
function loadCssJs(url,fUn,prm0,prm1,prm2,prm3,prm4,prm5,prm6,prm7)
	{
	//loadCssJs(k[i].getAttribute("href"),loadjscssfile,"cssIntern");
		loadHTML(url, fUn,prm0,prm1,prm2,prm3,prm4/*,prm5,prm6,prm7*/);
	//	uRl, fun, storage, param,param2,param3,param4,param5,param6_0, param7xhrCount)

	}	
function processFun(_CssJs)
	{
		CssJs[CssJs.length] = _CssJs;
		 console.log("-- "+CssJs[CssJs.length-1])
		 return CssJs[CssJs.length-1];
	//	target.innerHTML = temp;
	}
	/**
		Create responseHTML
		for acces by DOM's methods
	*/	
	    function resolveRelative(path, base,bol) {
        // Absolute URL
        //if (path.match(/^[a-z]*:\/\//)) {
        /*
        if(/^(https?|file|ftps?|mailto|javascript|data:image\/[^;]{2,9};):/i.test(path)){
        alert(path)
          return path;
        }
        */
        if(/^(https?|file|ftps?|mailto|javascript|[a-z]+):/i.test(path))
        {
       // alert(path)
       if(bol)
       return false;
       else
       return path;   
        }
        
        
        // Protocol relative URL
        if (path.startsWith("//")) {
          return base.replace(/\/\/.*/, path)
        }
    	// Upper directory
    	if (path.startsWith("../")) {
    		return resolveRelative(path.slice(3), base.replace(/\/[^\/]*$/, ''));
    	}
    	// Relative to the root
    	if (path.startsWith('/')) {
    		var match = base.match(/(\w*:\/\/)?[^\/]*\//) || [base];
    		return match[0] + path.slice(1);
    	}
    	//relative to the current directory
    	return base.replace(/\/[^\/]*$/, "") + '/' + path.replace(/^\.\//, '');
    }
	
	function processByDOM(responseHTML, target)
	{
		target.innerHTML = "Extracted by id:<br />";

		// does not work with Chrome/Safari
		//var message = responseHTML.getElementsByTagName("div").namedItem("two").innerHTML;
		var message = responseHTML.getElementsByTagName("div").item(1).innerHTML;
		
		target.innerHTML += message;

		target.innerHTML += "<br />Extracted by name:<br />";
		
		message = responseHTML.getElementsByTagName("form").item(0);
		target.innerHTML += message.dyn.value;
	}
	
	function accessByDOM(url)
	{
		//var responseHTML = document.createElement("body");	// Bad for opera
		var responseHTML = document.getElementById("storage");
		var y = document.getElementById("displayed");
		loadHTML(url, processByDOM, responseHTML, y);
	}	
