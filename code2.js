

function bl() {
    var e, t = [
            ["click", !1]
        ],
        l = !1,
        r = !1;
    var reservEv;
    if ("after" === arguments[arguments.length - 1]) return [ele, [].slice.call(arguments), "noAfter"];
    "object" == typeof arguments[0] && ("noAfter" === arguments[arguments.length - 1] && (arguments = arguments[1]),
        "anmt" === arguments[1] && (("string" == typeof arguments[0][arguments[0].length - 1] || "number" == typeof arguments[0][arguments[0].length - 1]) ? (arguments = arguments[0], e = arguments[arguments.length - 1]) : arguments = arguments[0]));
    for (var n, s = [], o = 0; void 0 !== arguments[o];) {
        if ("string" == typeof arguments[o]) {
            if (l = !1, r = !1, 0 === arguments[o].search("e:")) t = eT(arguments[o]);
            else if (arguments[o].search(".chld") > -1 ? (arguments[o].search(".chld2") > -1 ? l = !0 : r = !0, n = document.querySelector(arguments[o].split(".chld")[0]).children) : n = document.querySelectorAll(arguments[o]), "number" != typeof arguments[o + 1])
                for (var i = 0; i < n.length; i++)
                    if (l)
                        for (var a = 0; a < n[i].children.length; a++) s[s.length] = n[i].children[a];
                    else s[s.length] = n[i]
        } else if ("number" == typeof arguments[o])
            if (l)
                for (var a = 0; a < n[arguments[o]].children.length; a++) s[s.length] = n[arguments[o]].children[a];
            else r ? s[s.length] = n[arguments[o]] : s[s.length] = n[arguments[o]];
        else if ("object" == typeof arguments[o] || "function" == typeof arguments[o])
            if (0 === s.length) {
                if ("function" == typeof arguments[o]) {
                    arguments[o]();
                } else {
                    if (void 0 === arguments[o]) return cib(arguments[o], arguments[o][0], "", "")();
                    // console.log(e);
                    cib(arguments[o], arguments[o][0], "", "", "", e)(), void 0 !== e && o === arguments.length - 2 && o++
                }
            } else {
                s = isO(s);
                for (var c = 0; c < s.length; c++) {
                    for (var p = 0; p < t.length; p++) {
                        if ("function" == typeof arguments[o]) {
                            if ((arguments[o].toString().match(/^function\s*([^\s(]+)/) || [])[1] == "an2" /*||arguments[o].name=="an5"*/ ) {
                                //s[c].addEventListener(t[p][0],arguments[o](c), t[p][1]);	
                                if (t[c] != undefined)
                                    reservEv = [t[c][0], t[c][1]];
                                s[c].addEventListener(reservEv[0], arguments[o](c), reservEv[1]);
                                p = t.length;
                            } else
                                s[c].addEventListener(t[p][0], arguments[o], t[p][1]);

                        } else {
                            s[c].addEventListener(t[p][0], cib(arguments[o], arguments[o][0], s[c], s, c, p), t[p][1]);
                        }
                    }
                    c == s.length - 1 && (void 0 !== arguments[o + 1] && ("object" != typeof arguments[o + 1] && "function" != typeof arguments[o + 1] ? s = [] : c = 0))

                }

            }
        o++
    }
    return 0 !== s.length ? 1 == s.length ? s[0] : s : void 0
}

	

function sIT(e, l, r, t, n, s, s2) {

    //console.log("sit")					  
    function o() {
        //alert(t+" "+l+" "+r)
        function o() {
            // alert(e[1][1][2][3])
            //console.log(e[1][1][2][3])
            if ("object" == typeof e) {
                if (0 === n)
                    if ("set" === (e[0].toString().match(/^function\s*([^\s(]+)/) || [])[1]) {
                        // console.log(e[1][1][2][0]===s)
                        //  console.log(r+" *** "+e[1][1][2][0]+" *** "+s	+" *** "+e[1][1][2][1]);	
                        /*.......*/
                        if (s != undefined && (e[1][1][2][0].length !== s.length || e[1][1][2][0] !== s)) {
                            //console.log(r+" ___ "+e[1][1][2][0]+" *** "+s	+" *** "+e[1][1][2][1]);	
                            "+" === e[1][1][2][1] ? e[1][1][2][1] = "-" : e[1][1][2][1] = "+";
                            return void clearInterval(i);
                        }
                        /*
									if(wbol)
								   { if(e[1][1][2][0]!==s 	)
								   {
								  console.log(r+" ___ "+e[1][1][2][0]+" *** "+s	+" *** "+e[1][1][2][1]+" /// "+w+" ... "+wbol);	"+" === e[1][1][2][1] ? e[1][1][2][1] = "-" : e[1][1][2][1] = "+";
								   return void clearInterval(i);}
								   else if(e[1][1][2][1]!==w){
								   console.log("w+- . "+e[1][1][2][1]+" !!!!!! "+w)

								   }
								   }else{
								   if(e[1][1][2][1]!==w){
								   console.log(r+"--- "+e[1][1][2][0]+" *** "+s	+" *** "+e[1][1][2][1]+" /// "+w+" ... "+wbol);
								  //e[1][1][2][1]=w;
								   }//else
								  //  console.log(r+"+++ "+e[1][1][2][0]+" *** "+s	+" *** "+e[1][1][2][1]+" /// "+w+" ... "+wbol);	
									if(e[1][1][2][0]!==s){
								   console.log(r+"=== "+e[1][1][2][0]+" *** "+s	+" *** "+e[1][1][2][1]+" /// "+w+" ... "+wbol);	"+" === e[1][1][2][1] ? e[1][1][2][1] = "-" : e[1][1][2][1] = "+";
								   // e[1][1][2][1]=w;
								   return void clearInterval(i);
								   }//else
									//console.log(r+";;; "+e[1][1][2][0]+" *** "+s	+" *** "+e[1][1][2][1]+" /// "+w+" ... "+wbol);	
								   }

								  //  if(wbol==false )
								 */
                        var y;
                        //c = e[1][1], y = c[2][0][c[2][0].length - 1], "1" === y ? "+" === c[2][1] ? c[2][1] = "-" : c[2][1] = "+" : "0" === y && (c[2][1] = "+");
                     //   console.log("__________")
                        c = e[1][1], y = c[2][0][c[2][0].length - 1];
                        //console.log("... "+c[2][1]+" __ "+c[2][0])
                     // if (c[2][0]!=="000"/*c[2][0].length > 1 && Number(c[2][0]) != 0*/)
                            "+" === c[2][1] ? c[2][1] = "-" : c[2][1] = "+";

                        var o;
                        //console.log("__________")
                        //console.log(typeof c[2][0])
                        if ("∞" !== c[2][3][0]) {
                            if ("1" === y) {
                                if (c[2][0].indexOf(".") != -1) {
                                    //alert(c[2][2])
                                    c[2][2][0] = c[2][3][3] = c[2][3][0];
                                    //alert(c[2][2])
                                    //c[2][3][3]=0;
                                    o = c[2][3][0] - 1;
                                } else {
                                    if (0 == c[2][3][3]) return void clearInterval(i);
                                    o = c[2][3][3] - 1
                                }
                            } else {
                                if (c[2][0].indexOf(".") != -1) {
                                    //alert(c[2][2])
                                    c[2][2][0] = 0;
                                    //alert(c[2][2])
                                    c[2][3][3] = 0;
                                    o = c[2][3][0] - 1;
                                } else { //console.log("else__")
                                    if (c[2][3][0] == c[2][3][3]) return void clearInterval(i);
                                    o = 0 == c[2][3][3] ? c[2][3][0] - 1 : c[2][3][0] - c[2][3][3] - 1
                                }
                            }

                            sIT(e, o * c[2][3][2], c[2][3][1], 1, 1, c[2][0], s2)
                        } else
                            sIT(e, c[2][3][0], c[2][3][1], 1, 1, c[2][0], s2);
                        // "∞" !== c[2][3][2] ? sIT(e,  o * c[2][3][2], c[2][3][1],1, 1, c[2][0]) : sIT(e,  c[2][3][2], c[2][3][1], 1,1, c[2][0])
                    } else e[0](e[1], e[2], e[e.length - 1]);
                var ll = false,
                    returnBo = true,
                    add, s2_ = s;
                if (1 === n) {

					if("set" === (e[0].toString().match(/^function\s*([^\s(]+)/) || [])[1] ) {p = e[1][1]; d = e[1][1][2], ll = "∞" === l; /*""+p[2][5]!==""+s2?(""+p[2][5].search("j")==-1 ?p[2][5]="j":s2):"m" ,*/
										   if(p[2][3][4] == s2 && p[2][0].length === s.length && p[2][0] === s) {
										   
									   p[2][3][5] > 0 && (p[2][3][5]--);
									   if("0" === p[2][0][p[2][0].length - 1] ) {/*console.log(".0 + " + p[2][0]),*/ p[2][0] = s = "0", p[2][3][3]++ /*, console.log("0 + " + p[2][0])*/ } else
									   { /*console.log(".1 - " + p[2][0]),*/ p[2][0] = s = "1", p[2][3][3]-- /*, console.log("1 - " + p[2][0])*/ };
									   if("function" == typeof p[2][4]) {
										   
										if((p[2][4].toString().match(/^function\s*([^\s(]+)/) || [])[1]=="ho2_"){a =p[2][4](e,p[2][1], d[2][0]);
											if(a[2] != undefined) {
												if(a[2]=="cancel") {

													return void clearInterval(i); 
												}
												a[2]!="∞"?g = a[2]-1:g = a[2]};
											add =  [p[1],p[2][3][1]]}
										else{a = p[2][4](p[2][1], d[2][0], p[1], d[3][1], e[1][0]), a[2] != undefined && (add = a[2])};
										p[2][3][0]==="∞"&&(p[2][3][3]=0), p[2][1] = a[0], d[2][0] = a[1]} 
									   else "+" === p[2][1] && (ll || d[2][0] < d[3][0] ) ? d[2][0]++ : (d[2][0]--, p[2][1] = "-", -1 === d[2][0] && (d[2][0] += 2, p[2][1] = "+"));
									   e[0](e[1][0], p[0], add != undefined ? add[0] : p[1], d[2])} else
									   {
										   p[2][3][5]--, clearInterval(i), returnBo = false
									   }} 
									   else e[0]("obj", e[1]);







//g=d[3][0];
                     //console.log(g)
                   /*
             if(!returnBo){
      if(true && g-1!=0)
         {
        // console.log("hhhhh")
          sIT(e,  g-1,r+10, 1,1, s);return;}else return; 
          }else return;*/

                    //console.log("hhhhh "+g+ " "+returnBo+" "+p[2][3][5]+" "+s+" "+p[2][3][4]+" "+s2+" "+(add!=undefined?add:r))
                    /*if(p[2][0]!==s){
                    /////////console.log("*************************");
                    clearInterval(i) ;	
                    //p[2][5]+="m";
                    }else*/
                    if (add != undefined /*&& add!="noAdd"*/ ) {
                        clearInterval(i);
                        if (returnBo ) { ////console.log("_____ "+g+ " "+returnBo)
                            //if(p[2][0][0]!=="a"/*p[2][0].length==1*/)
                            //	 p[2][0]="a"+p[2][0];
                            //p[2][0]=p[2][0].replace("a","b");
                            //if(p[2][3][4]==s2){//p[2][5]=s2=add!=undefined?add:r;
                            //if(p[2][3][4]!==s2)
                            //p[2][3][4]++;
							p[2][3][5]++;
							if(g != "∞" )
                            
                            {//g=d[3][0];
								if( g != 0)
								sIT(e, g - 1, /*add!=undefined?*/ add[1] /*:r*/ , 1, 1, p[2][0], p[2][3][4]);}else{
								sIT(e, g , /*add!=undefined?*/ add[1] /*:r*/ , 1, 1, p[2][0], p[2][3][4]);
							}
                            //}else console.log("..........")
                        }
                    }

                }

            } else { //alert(t)

                //  e();
                //clearInterval(i) ;
                //if(h==2)
                //bl(sIT(f,"∞",5000,1))
                //function f(){alert("hh")} 
                //if(s=="x"||h==0)
                if (false) {
                    e();
                    clearInterval(i);
                    if (g - 1 != 0)
                        sIT(e, g - 1, r + 1000, 1, "noObj", "x");
                    return;
                } else {
                    e()
                }

                /* if(s=="x") e()  
              else
																			 	  sIT(e, 0 , r+(3000*h), 1,"noObj","x");*/

            }

            if (t == 1) {
                h++;
                if ("∞" !== g && h > g)
                    clearInterval(i);

            } else {
                t = 1;
                f = r;
                g = l;
                clearInterval(i);
                if ("∞" === g) sIT(e, g, f, t, "noObj");
                else {

                    g != 0 && (sIT(e, g - 1, f, t, "noObj"))
                }
                // h++, "∞" !== g && (h > g || 1 !== t) && (clearInterval(i), 1 !== t && (t = 1, f = r, g = l, g!=0 && (sIT(e, g - 1, f, t,"noObj"))))
            }
            //  h++, "∞" !== g && (h > g || 1 !== t) && (clearInterval(i), 1 !== t && (t = 1, f = r, g = l, g!=0 && (sIT(e, g - 1, f, t,"noObj"))))
        }
        var i, a, c, p, d, h = 0,
            f = r,
            g = l;
        1 !== t && (f = t), i = setInterval(o, f)
    }
    if (typeof e == "function") {
        l = "number" == typeof l || l === "∞" ? l : 5;
        r = "number" == typeof r ? r : 1000;
        t = "number" == typeof t ? t : 0;
        if (n == "noObj")
            o();
        else
            return [sIT, [e, l, r, t]];
    } else if ("number" == typeof e) {

        var i = [].slice.call(arguments);
        i[1] = "number" == typeof i[1] ? i[1] : 0;
        i[2] = "number" == typeof i[2] ? i[2] : 1;
        //alert(i)
        return i[i.length] = "sit", i
    } else if ("object" == typeof e) {
        if ("number" == typeof e[1] || e[1] === "∞") {
            l = e[1];
            r = e[2];
            t = e[3];
            e = e[0];
        }
        //  console.log(arguments);
        o();
        return;
        // alert(arguments);
    }
    /*	t="number" == typeof t?t:1;
    						  return "after" === n ? o : void o()*/
}

function style(ele, prpT, val, aS) { //console.log("style")
    //ele=isO( ele);
    function style2(ele, prpT, val) {
        //console.log("style2")						   
        "obj" === ele ? eval("prpT[0].style.setProperty('" + prpT[1] + "','" + prpT[2] + "', null)") : eval("ele.style.setProperty('" + prpT + "',val, null)")
    }
    var _sit, val_ = [0],
        valF_, fois = 1,
        bolCent;
    if ("object" != typeof aS && "object" != typeof arguments[arguments.length - 1] || (_sit = copy(arguments[arguments.length - 1], !0)), "now" !== aS) {
        var prpT_, _val, vall, vall_bolAnmt = !1,
            ele = isO(ele);
        retu = [fOr, set, [ele, []], _sit];
        if ("string" == typeof prpT) {
            retu[2][2] = "noAnmt";
            var anm = anmt(prpT, val);
            prpT = [anm[0]], vall = [anm[1]]
                // retu = [fOr, set, [isO (ele), [[prpT,vall]]], _sit];
                //  return retu;
        } // else "string" == typeof val && (retu[2][2] = "noAnmt2", vall = [anmt("", val)[1]]);
        if ("string" == typeof val)
            val_ = val.split("|");

        for (var ev_ = -1, xx = [-1], x_Sum = ["0", "+", "p+10*X+s", 25, 1e3], x_Sum2 = [], set0, set1, prp, prp_, pG, prc, prc2 = [], prc3 = [], f0 = 0; f0 < ele.length; f0++) {
            retu[2][1][f0] = [];
            for (var pp = 0; pp < prpT[0].length; pp++) {
                prpT_ = prpT[0][pp], void 0 !== prpT[1] && (prc = prpT[1][pp][0].split(",")), void 0 !== vall && (vall_ = vall[0][pp]);
                valF_ = val_[pp] != undefined ? val_[pp] : val_[val_.length - 1]
                for (var p = 0; p < prpT_.length; p++) {
                    if (typeof valF_ == "string" && valF_.trim() !== "")
                        pG = [
                            [prpT_[p], valF_]
                        ];
                    else {
                        pG = prpT_[p].search("//") > -1 ? [
                            [prpT_[p].split("//")[0], ""]
                        ] : gS(ele[f0], prpT_[p].split("_"), retu[2][2]);
                    }
                    for (var i = 0; i < pG.length; i++)
                        if (_prp = pG[i][0], void 0 !== prpT[1]) {
                            if (set0 = pG[i][1], set1 = pG[i][1].match(/([+-]?\d+\.\d+|[+-]?\d+)/g), null !== set1) {
                                prc2 = [];
                                for (var prc3, s = 0; s < set1.length; s++) {
									set1[s] =Number(set1[s] );
                                    if (void 0 !== prc[s] && prc[s].search("%") > -1) {
                                        if (prc[s].search("%.") > -1)
                                            fois = prpT[2][0];
                                        else
                                            fois = 1;
                                        bolCent = true;
                                    } else bolCent = false;
                                    void 0 !== prc[s] ? (bolCent ? prc2[s] = prc[s].match(/([+-]?\d+\.\d+|[+-]?\d+)/g).map(Number)[0] * set1[s] / 100 / fois : prc2[s] = prc[s].match(/([+-]?\d+\.\d+|[+-]?\d+)/g).map(Number)[0], prc3 = prc2[s]) : prc2[s] = prc3;
                                }
                                //for (var m_ = 0; m_ < set1.length; m_++) set0 = set0.split(set1[m_]).join("ALlah");
                                set0 = set0.replace(/([+-]?\d+\.\d+|[+-]?\d+)/g, "ALlah")
                                var xs = [set0, set1, prc2];
                                if (prpT[1][pp][1].search(".p") > -1) {
                                    var prp2 = prpT[1][pp][1].split(".p")[0].split(".")[1],
                                        prp2res = gS(ele[f0], prp2.split("_"))[0][1];
                                    prp2res = prp2res.match(/([+-]?\d+\.\d+|[+-]?\d+)/g)[0], prpT[1][pp][1] = prpT[1][pp][1].replace("." + prp2 + ".p", prp2res)
                                }
                                if (typeof prpT[prpT.length - 1] === "function" && (prpT[prpT.length - 1].toString().match(/^function\s*([^\s(]+)/) || [])[1].search("x_") == 0) {
                                    // var ss=prpT[prpT.length-1](ele[f0],e_)
                                    x_Sum2 = copy(prpT[prpT.length - 1](ele[f0], ["0", "+", [0, prpT[1][pp][1]], prpT[2], prpT[3]]), !0)
                                } else
                                    x_Sum2 = copy(["0", "+", [0, prpT[1][pp][1]], prpT[2], prpT[3]], !0);
                                retu[2][1][f0][retu[2][1][f0].length] = [_prp, xs, x_Sum2]
                            }
                        } else retu[1] = style2, retu[2][1][f0][retu[2][1][f0].length] = [_prp, vall_]
                }
            }
        }
        return retu
    }

    style2(ele, prpT, val)
}

function iHtml(D, S, e1, e2, aS) {
    function iHtml2(D, S, exp) {
        "obj" === D ? "no" === S[1] ? eval("S[0].innerHTML" + S[2]) : eval("S[0].innerHTML" + S[2] + "S[1].innerHTML") : "no" === S ? eval("D.innerHTML" + exp) : eval("D.innerHTML" + exp + "S.innerHTML")
    }
    var e11 = "string" == typeof e1 && "sit2" !== e1 ? e1 : "+=",
        e22 = "string" == typeof e2 && "sit2" !== e2 ? e2 : "+=",
        srcc = 0 !== S ? S : ["no"],
        _sit = copy(arguments[arguments.length - 1], !0);
    return "object" == typeof _sit && "sit" === _sit[_sit.length - 1] ? [fOrI, iHtml2, [D, srcc, [e11, e22]], _sit] : [fOrI, iHtml2, [D, srcc, [e11, e22]], ""]
}

function oHtml(D, S, e1, e2, aS) {
    function oHtml2(D, S, exp) {
        "obj" === D ? "no" === S[1] ? eval("S[0].outerHTML" + S[2]) : eval("S[0].outerHTML" + S[2] + "S[1].outerHTML") : "no" === S ? eval("D.outerHTML" + exp) : eval("D.outerHTML" + exp + "S.outerHTML")
    }
    var e11 = "string" == typeof e1 && "sit2" !== e1 ? e1 : "+=",
        e22 = "string" == typeof e2 && "sit2" !== e2 ? e2 : "+=",
        srcc = 0 !== S ? S : ["no"],
        _sit = copy(arguments[arguments.length - 1], !0);
    return "object" == typeof _sit && "sit" === _sit[_sit.length - 1] ? [fOrI, oHtml2, [D, srcc, [e11, e22]], _sit] : [fOrI, oHtml2, [D, srcc, [e11, e22]], ""]
}

function fOr(e, t, l, r) {
    //alert(l)
    var b, c, j, jj = "",
        x, bolSit = false;
    //  cou++;
    //console.log("event "+r);
    for (var n, s, n, o = isO(t[0]), i = (isO(t[1]), t[2], 0), ii = o.length; i < ii; i++) {
        s = void 0 !== t[1][i] ? t[1][i] : t[1];
        for (var a = 0, aa = s.length; a < aa; a++) {
            //console.log("....")
            if ("object" == typeof l && "sit" === l[l.length - 1]) {
                bolSit = true;
                if (a == 0 && i == 0) {

                    //if(s[a][2]!==undefined)
                    //j=s[a][2][0]+=r;
                    c = l[2];
                    b = l[0] * c;
                } else {
                    c = 1; //bol=true;
                }
                /*alertt("a")*/
            }
            void 0 !== r && s[a][2] !== undefined && (j = s[a][2][0] += r, s[a][2][3][5] == 0 ? s[a][2][3][4] = 1 : s[a][2][3][4]++, jj = s[a][2][3][4], s[a][2][3][5]++ /*,jj=s[a][2][5]+=r[r.length-1]=="0"?"a":"b"*/ /*=j */ /*(r+"").search("1")==-1 && (s[a][2][0]+=r),  (r+"").search("0")==-1 && (s[a][2][0]+=r)*/ );
            n = void 0 !== s[a][1][i] ? s[a][1][i] : s[a][1][s[a][1].length - 1];
            //	"object" == typeof l && "sit" === l[l.length - 1] ? "noAnmt" === t[2] ? sIT([e, [o[i], s[a][0], n]], 0, i * l[0] + a * l[1]+b, c, 1) : (/*void 0 !== r && (  (r+"").search("1")==-1 && (s[a][2][0]+="0"),  (r+"").search("0")==-1 && (s[a][2][0]+="1")),*/ (r+"").search("1")==-1 ? (/*s[a][2][2][0] = 0, s[a][2][3][3] = 0,*/ sIT([e, [o[i], s[a], n]],  0, i * l[0] + a * l[1]+b, c, 0,j)) : sIT([e, [o[i], s[a], n]], 0, i * l[0] + a * l[1]+b, c, 0,j)) : "noAnmt" === t[2] ? e("obj", [o[i], s[a][0], n]) : sIT([e, [o[i], s[a], n]],0, 0, 1, 0)
            if (bolSit) {
                "noAnmt" === t[2] ? sIT([e, [o[i], s[a][0], n]], 0, i * l[0] + a * l[1] + b, c, 1) : sIT([e, [o[i], s[a], n]], 0, i * l[0] + a * l[1] + b, c, 0, j, jj);
            } else {
                "noAnmt" === t[2] ? e("obj", [o[i], s[a][0], n]) : sIT([e, [o[i], s[a], n]], 0, 0, 1, 0, j, jj)
            }
        }

    }
}

function fOrI(e, t, l) {
    // console.log("forI")
    var b;
    for (var r, n = isO(t[0]), s = isO(t[1]), o = t[2], i = 0; i < n.length; i++)
        for (var a = 0; a < s.length; a++) {
            if (l != undefined) {
                if (a == 0 && i == 0) b = l[0] * l[2];
                else l[2] = 1;
            }
            r = 0 === a ? o[0] : o[1], "object" == typeof l && "sit" === l[l.length - 1] ? sIT([e, [n[i], s[a], r]], 0, i * l[0] + a * l[1] + b, l[2], 1) : e("obj", [n[i], s[a], r])
        }
}

function fOrGs(f, tab, sit, mark) {
    function suN(e) {
        return e.length > 10 && (e = e.substring(0, 10), e += " ..."), e
    }
    for (var /*_tab2,*/ sit1, sit2, tab0 = isO(tab[0]), tab1 = isO(tab[1]), /*tab2 = _tab2 = tab[2],*/ tab2 = [], tab3 = [], f0 = 0; f0 < tab0.length; f0++) {
        tab2[tab2.length] = "The element : " + tab0[f0].nodeName + " ( " + suN(tab0[f0].textContent) + " )\n ", tab2[tab2.length] = [], tab3[tab3.length] = [];
        for (var f1 = 0; f1 < tab1.length; f1++) {
            if ("object" == typeof sit && "sit" === sit[sit.length - 1]) sIT([f, [tab0[f0], tab1[f1] /*, _tab2*/ ]], 0, f0 * sit[0] + f1 * sit[1], 1, 1);
            else var tabtmp = f("obj", [tab0[f0], tab1[f1] /*, _tab2*/ ]);
            tab2[tab2.length - 2] += "\n\n" + tabtmp[0], tab2[tab2.length - 1][tab2[tab2.length - 1].length] = tabtmp[1], tab3[tab3.length - 1][tab3[tab3.length - 1].length] = tabtmp[1]
        }
        void 0 === tab[2] && "" === tab[2] || eval("" + tab[2] + "(tab2[tab2.length-2])")
    }
    return tab3
}

function cib(e, t, l, r, n, s) {
    function o() {
        return void 0 !== t ? t(e[1], i, e[e.length - 1], s) : void e[1]("obj", i)
    }
    this.removeEventListener("click", cib);
    var i = isO(e[2]);
    if ("" !== l && e[2] != undefined)
        for (var a = 0; a < e[2].length; a++) "this" === e[2][a] ? i[a] = [l] : "those" === e[2][a] && (i[a] = r);
    return o
}

function eT(evt) {
    var EV = [],
        EV2 = [],
        EV3 = [],
        Ef = [];
    if ("string" == typeof evt && 0 === evt.search("e:"))
        if (EV = evt.split(":")[1].split("|"), void 0 !== EV[0]) {
            if (EV2 = EV[0].split("_"), void 0 !== EV[1]) {
                EV3 = EV[1].split("_");
                for (var ev = 0; ev < EV3.length; ev++) eval("EV3[ev]=" + EV3[ev])
            } else EV3[0] = !1;
            for (var event3, evv = 0; evv < EV2.length; evv++) void 0 !== EV3[evv] && (event3 = EV3[evv]), Ef[Ef.length] = [EV2[evv], event3]
        } else Ef[Ef.length] = ["click", !1];
    else Ef[Ef.length] = ["click", !1];
    return Ef
}

function getValue(t, l, r) {
    //  console.log("get")
    function n(e, t) {
        if ("obj" !== e) return s;
        var l = "",
            r = [],
            n = (window.getComputedStyle(t[0]), ""),
            s = gS(t[0], t[1].split("_"));
        if (l += n, true) {
            for (var o = 0; o < s.length; o++) l += s[o][0] + " : " + s[o][1] + " , ", r[r.length] = s[o];
            return l += "@_", l = l.replace(", @_", "").replace("@_", ""), [l, r, t[2]]
        }
    }
    return void 0 === l && (l = ""), void 0 === r && (r = ""), [fOrGs, n, [t, l.split("|"), r], ""]
}

function gS(el, p, _bb) {
    // console.log("gs")
    function bs(e, t, l) {
        return l ? e.trim() === t : e.search(t) >= 0
    }
    var sty = 0;
    var bolSt = false;
    var _b, pSV = p[0],
        pX = p[1],
        result = p[2],
        bolRes = (result != undefined && "number" == typeof Number(result)),
        condt = p[3],
        pSV2 = [],
        strPS = "",
        condt_ = void 0 !== condt ? condt : "==",
        condt_2;
    if (!el) return [];
    var win = document.defaultView || window,
        style, sN = [];
    var psv = 0;
    for (pSV2 = pSV.trim().split("."); void 0 !== pSV2[psv];) {
        if (_bb == "noAnmt" && pSV2[psv].match(/-/) != null) {
            sN.push([pSV2[psv], "noAnimate"]);
            psv++;
        } else
            stRepat();
    }

    function stRepat() {

        if (void 0 !== pSV) {

            if (sty == 0 && win.getComputedStyle) {
                style = win.getComputedStyle(el, "")
                    // for (pSV2 = pSV.trim().split("."); void 0 !== pSV2[psv];) {
                pSV2[psv].search("/") > -1 ? (pSV2[psv] = pSV2[psv].split("/")[0], _b = !1) : _b = !0;
                for (var i = 0; i < style.length; i++) {

                    bs(style[i], pSV2[psv].trim(), _b) && (bolSt = true, void 0 !== pX ? style.getPropertyValue(style[i]).search(pX) >= 0 && (bolRes ? (eval('condt_2=("1A"+style.getPropertyValue(style[i])).match(/[+-]?\\d+(\\.\\d+)?/g).map(Number)[1]' + condt_ + "result"), condt_2 && sN.push([style[i], style.getPropertyValue(style[i])])) : sN.push([style[i], style.getPropertyValue(style[i])])) : sN.push([style[i], style.getPropertyValue(style[i])]));
                }
                psv++
                //	 }

            } else if (sty == 1) {
                // style = el.currentStyle;
                /////9dim for (var name in style) sN.push(name + ":" + style[name])
                //	var psv = 0;
                //	for (pSV2 = pSV.trim().split("."); void 0 !== pSV2[psv];) {
                pSV2[psv].search("/") > -1 ? (pSV2[psv] = pSV2[psv].split("/")[0], _b = !1) : _b = !0;
                for (var name in style) {

                    bs(name, pSV2[psv].trim(), _b) && (bolSt = true, void 0 !== pX ? style[name].search(pX) >= 0 && (bolRes ? (eval('condt_2=("1A"+style[name]).match(/[+-]?\\d+(\\.\\d+)?/g).map(Number)[1]' + condt_ + "result"), condt_2 && sN.push([name, style[name]])) : sN.push([name, style[name]])) : sN.push([name, style[name]]));
                }
                psv++
                //}			 
            } // 9dim else
            // for (var i = 0; i < style.length; i++) sN.push([style[i], style.getPropertyValue(style[i])]); 
            else if (sty == 2 && el.currentStyle) {
                style = el.currentStyle;
                /////9dim for (var name in style) sN.push(name + ":" + style[name])
                // var psv = 0;
                // for (pSV2 = pSV.trim().split("."); void 0 !== pSV2[psv];) {
                pSV2[psv].search("/") > -1 ? (pSV2[psv] = pSV2[psv].split("/")[0], _b = !1) : _b = !0;
                for (var name in style) {

                    bs(name, pSV2[psv].trim(), _b) && (bolSt = true, void 0 !== pX ? style[name].search(pX) >= 0 && (bolRes ? (eval('condt_2=("1A"+style[name]).match(/[+-]?\\d+(\\.\\d+)?/g).map(Number)[1]' + condt_ + "result"), condt_2 && sN.push([name, style[name]])) : sN.push([name, style[name]])) : sN.push([name, style[name]]));
                }
                psv++
                //   }			 
            } else {
                style = el.style;
                /////9dim for (var i = 0; i < style.length; i++) sN.push(style[i] + ":" + style[style[i]])
                // for (pSV2 = pSV.trim().split("."); void 0 !== pSV2[psv];) {
                pSV2[psv].search("/") > -1 ? (pSV2[psv] = pSV2[psv].split("/")[0], _b = !1) : _b = !0;
                for (var i = 0; i < style.length; i++) {

                    bs(style[i], pSV2[psv].trim(), _b) && (bolSt = true, void 0 !== pX ? style[style[i]].search(pX) >= 0 && (bolRes ? (eval('condt_2=("1A"+style.getPropertyValue(style[i])).match(/[+-]?\\d+(\\.\\d+)?/g).map(Number)[1]' + condt_ + "result"), condt_2 && sN.push([style[i], style[style[i]]])) : sN.push([style[i], style[style[i]]])) : sN.push([style[i], style[style[i]]]));
                }
                psv++
                // }
            }
        }
        // console.log(sN)
        if (!bolSt)
            if (sty != 3) {
                psv--;
                sty++;
                stRepat();
            } else {
                /* if(_bb=="noAnmt" && pSV2[psv-1].match(/-/)!=null)
                	 sN.push([pSV2[psv-1], "no"]);*/

                sty = 0;
            } else
            bolSt = false;
    }

    // else
    //  console.log(sN)
    return sN
}

function set(ele, prp, zet, exp) {
    var zett = zet,
        X = exp[0],
        _exp, id;
    exp[1].search("ele.id") > -1 ? (id = ele.id.match(/([+-]?\d+\.\d+|[+-]?\d+)/g).map(Number)[0], _exp = exp[1].replace("p", "zett[1][z]").replace("ele.id", id)) : _exp = exp[1].replace("p", "zett[1][z]").replace("s", "zett[2][z]");
    var _set, _set2, _set3 = zet;
    if ("object" == typeof zett) {
        _set3 = zett[0];
        for (var z in zett[1]) zett[1][z] = Number(zett[1][z]), zett[2][z] = Number(zett[2][z]), eval("_set2=" + _exp), _set3.search("rgb") > -1 && (0 > _set2 || _set2 > 255) && (_set2 = 0 > _set2 ? 255 + Math.round(_set2) : Math.round(_set2) - 255), _set3 = _set3.replace("ALlah", _set2)
    }
    style(ele, prp, _set3, "now")
}

function anmt() {
    var bolF = false;
    for (var e, t = [, [
                ["5%", "p+X+s"]
            ],
            [10, 100, 1, 0]
        ], count = 0, r = 0; r < arguments.length; r++) {

        //console.log("zz")
        if ("string" == typeof arguments[r] && "∞" !== arguments[r]) {
            t[r] = [], e = arguments[r].split("|");
            for (var n = 0; n < e.length; n++) 0 === r ? t[r][t[r].length] = e[n].split(".") : t[r][t[r].length] = e[n].split("_")
        } else {
            // 1 === r &&( t[r] = [ ["5%", "p+X+s"] ]);
            if ("number" == typeof arguments[r] || "∞" == arguments[r]) {
                t[2][count] = arguments[r];
                count++;
            } else if ("function" == typeof arguments[r]) {
                bolF = true
            }
            /*else 
            					  { 	
            						  t[2][4] = arguments[r];}*/

            if (bolF)
                t[t.length] = arguments[r];
            // "function" == typeof arguments[r] ? (2 === l.length && (l[l.length] = 1), l[l.length] = 0, t[t.length] = l, t[t.length] = arguments[r]) : 1 === r ? t[r] = [ ["50%", "p+X+s"] ] : l[l.length] = arguments[r];
        }
    }
    t[2].push(0, 0);
    return t
}

function ho(e, t, z) {
    //alert(e);

    var n /*,fAdd*/ ; // =  typeof e!="function"  ? void 0 !== e?e : 10:(10,z=e);
    if (typeof e != "function") {
        n = void 0 !== e ? e : 10;
    } else {
        z = e;
        n = 10;
    }
    var s; // =  typeof t!="function"  ? void 0 !== t?t : -1:(-1,z=t);
    if (typeof t != "function") {
        s = void 0 !== t ? t : -1;
    } else {
        z = t;
        s = -1;
    }

    // if(typeof z!="function")
    //  zbol=true;
    function l(l, r, v, w,el) {
      // console.log("jadid "+r+" "+l)

        // s =  typeof t!="function"? void 0 !== t?t : -1;
        "+" === l && (n === true || n > r) ? r++ : (r--, l = "-", r == s && (r += 2, l = "+")); /*console.log("jadid2 "+r+" "+l), */
        if (typeof z == "function" /*&& (fAdd=z(Math.abs(r),w))!=undefined*/ ) {
            return [l, r, z(l,Math.abs(r), v, w,el)]
        } else return [l, r]
    }
    return l
}

function hofI(vall, diss, vall0_) {
    function ho2fI(di) {
        /*if((dis[1]==="none"||di==="none") && dis[0]!=="x#*@")
						  //if(dis[0]!=="x")
								  dis[0]="block";*/

        var dis = copy(diss, true);
        var vall0 = vall0_;
        if (di === "none") {
            if (dis[0] === "x#*@" || dis[0].trim() === "")
                dis[0] = "block";
            vall0 = 1;
            /*	 if(dis[1].trim()==="")
							  dis[1]="none";
						  else  if(dis[1]==="x#*@")
							  dis[1]="block";*/
            if (dis[1] === "x#*@" || dis[1].trim() === "")
                dis[1] = "none";

        } else {
            if (dis[0] === "x#*@" || dis[0].trim() === "")
                dis[0] = di;
            if (dis[1] === "x#*@" || dis[1].trim() === "")
                dis[1] = di;
            var d_ = dis[0];
            dis[0] = dis[1];
            dis[1] = d_;
        }

        function ho2fI2(a, x_, w, v, ele) {

           //console.log("jadid "+a+" "+x_)
            var vall_ = vall !== undefined ? vall : 10;
            var dis_ = dis !== undefined ? dis : "";

            if (a === "+" && x_ < vall_) {
                x_++;
            } else {
                x_--;
                a = "-";
                if (x_ === -1) {
                    x_++;
                    a = "+"
                }
            }
            if (dis_[0] !== "x#*@" /*&& x_===vall2*/ ) {
                if (x_ === vall0 && a === "+")
                    style(ele, "display", dis_[0], "now")
            }
            if (dis_[1] !== "x#*@" /*&& x_===vall2*/ ) {
                if (x_ === vall0 - 1 && a === "-")
                    style(ele, "display", dis_[1], "now")
            }
            //else 
            return [a, x_];
        }
        return ho2fI2;
    }
    return ho2fI;

}

function fade(ele) {
    var disp_ = ["x#*@", "x#*@"];
    var dsipT = [];
    var arguments = [].slice.call(arguments);
    var deSit_ = arguments[arguments.length - 1];
    if (typeof deSit_ == "object")
        arguments.splice(arguments.length - 1, 1);

    var n1 = 0,
        n2 = 0;
    var finN;
    var de_ /*=fio[1]!==undefined  && typeof fio[1]!=="string"?fio[1]:1000*/ ;
    var de2_ /*=fio[2]!==undefined?fio[2]:5*/ ;
    var deEle_ /*=fio[4]!==undefined?fio[4]:0*/ ;
    var j = 0;

    if (typeof arguments[1] === "string") {
        var di = arguments[1].split("_")
        di[1] = di[1] !== undefined ? di[1] : "x#*@";
        disp_ = [di[0], di[1]];
        j = 1
    }

    if (typeof arguments[1 + j] === "number" && arguments[2 + j] == undefined) {
        de_ = 300;
        de2_ = 10;

        n1 = arguments[1 + j];
        n2 = 0;
    } else

    {
        de_ = arguments[1 + j] !== undefined ? arguments[1 + j] : 300;
        de2_ = arguments[2 + j] !== undefined ? arguments[2 + j] : 5;

        n1 = arguments[3 + j] !== undefined ? arguments[3 + j] : 1;
        n2 = arguments[4 + j] !== undefined ? arguments[4 + j] : 0;
    }

    /*	var st="4_0+X*";
										 var tan=["opacity","4_0+X*"]
								  for (var i = 0,i2=ele.length; i < i2; i++)
								  {
								  var dis=getAllStyles(ele[i],"display".split("_"));
							  if (dis[0][1]==="none")
							  st="4_0+X*";
							  tab.push("Kiwi");
									  animate(ele,anmt("opacity","4_0+X*"+1/(de_/de2_),de_/de2_,de2_,hofI(de_/de2_,disp_,finN),hoSit00), "",deSit_,n1,n2)

								  }*/

    if (typeof deSit_ == "object")
        return animate(ele, anmt("opacity", "4_0+X*" + 1 / (de_ / de2_), de_ / de2_, de2_, hofI(de_ / de2_, disp_, de_ / de2_), x_fade), "", deSit_, n1, n2)
    else
        return animate(ele, anmt("opacity", "4_0+X*" + 1 / (de_ / de2_), de_ / de2_, de2_, hofI(de_ / de2_, disp_, de_ / de2_), x_fade), "", n1, n2)

}

function x_fade(el, tab) {
    // console.log("x")
    //prpT[prpT.length-1](ele[f0],[0, "+", [0, prpT[1][pp][1]], prpT[2], prpT[3]])
    // var tab=copy(tabb);
    var g = gS(el, "display".split("_"))[0][1];
    if (g !== "none" && gS(el, "opacity".split("_"))[0][1] !== "0") {
        tab[2][1] = tab[2][1].replace("0+", "1-")
        tab[1] = "-";

    }
    tab[4] = tab[4](g);

    return tab;

}

function hiSho(ele, str_, n) {
    //  var arguments = [].slice.call(arguments);

    // console.log("hs")
    var str;
    var n, n_ = 1;
    var bol = "no";
    if (typeof arguments[1] == "string") {
        str = arguments[1];
        n_ = 2
    } else
        str = "block";

    n = typeof arguments[n_] == "number" ? arguments[n_] : 1;
    if (n == 2) {
        n = 1;
        bol = "1";
    }
    var s, deSit_ = arguments[arguments.length - 1];
    if (typeof deSit_ == "object")
        s = style(ele, "display", "+++", deSit_)
    else
        s = style(ele, "display", "+++")
        //s[1]=hS;
    for (var i = 0, m = s[2][0], m2 = m.length; i < m2; i++) {
        var g = gS(m[i], "display".split("_"))[0][1];
        if (g == "none")
            s[2][1][i][0][1] = [str + "_none_1_" + n + n];
        else {
            if (typeof arguments[1] !== "string")
                str = g;
            s[2][1][i][0][1] = ["none_" + str + "_1_" + n + n];
        }

    }
    //return s;
    return hS_(s, bol);
}

function hS(a, b) {
    // console.log("arguments");
    //  console.log(b);
    style(b[0], b[1], b[2], "now");

}

function hS_(a, aa) {
    var an;

    function an2(x) {
        //console.log("an2")
        function an2_() {
            // var al=arg[arg.length-1];
            // console.log("an2_")
            if (aa !== "no") {
                if ("" + x != aa)
                    aa = aa == "0" ? "1" : "0";
                else
                    return;

            }
            var arg = copy(a, true);
            for (var i = 0, m = a[2][1], m2 = m.length; i < m2; i++) { //console.log(x+" .. "+m[i][0][1][0])  
                if (m[i][0][1][0].search("_22") == -1) {
                    var st = m[i][0][1][0].split("_");
                    var n = Number(st[2]) == 0 ? 1 : 0;
                    m[i][0][1][0] = m[i][0][1][0].replace("_" + st[2], "_" + n)
                        // b[2]+="......"

                    arg[2][1][i][0][1][0] = st[n];

                } else return;
                if (m[i][0][1][0].search("_00") != -1)
                    m[i][0][1][0] = m[i][0][1][0].replace("_00", "_22")
            }
            bl(arg);

        }
        return an2_;
    }
    eval("an=an2");
    if (aa !== "no")
        return an;
    else return an();
}

function animate() {
    var ss = "hhhh"
    var txtFun = "style(";

    var arguments = [].slice.call(arguments);
    var i;

    var j = 0,
        n = 0,
        n2 = 0;
    if (typeof arguments[arguments.length - 1] == "object")
        j = 1;
    // var n=arguments[arguments.length-2-j],n2=arguments[arguments.length-1-j];
    //  arguments.splice(arguments.length-2-j,2);

    if (typeof arguments[arguments.length - 2 - j] == "number") {
        n = arguments[arguments.length - 2 - j], n2 = arguments[arguments.length - 1 - j];
        arguments.splice(arguments.length - 2 - j, 2);
    } else if (typeof arguments[arguments.length - 1 - j] == "number") {
        n = arguments[arguments.length - 1 - j], n2 = 0;
        arguments.splice(arguments.length - 1 - j, 1);
    }

    /*if(typeof arguments[arguments.length-2]!=="object")
							  {if(typeof arguments[arguments.length-2]=="number")
								  n=arguments[arguments.length-2]
							  arguments.splice(arguments.length-2,1);}
									 if(typeof arguments[arguments.length-1]!=="object")
									 {if(typeof arguments[arguments.length-2]=="number")
										 n=arguments[arguments.length-2]
									 arguments.splice(arguments.length-2,1);}*/

    // console.log(arguments)
    arguments[0] = isO(arguments[0]);
    for (i = 0, ar = arguments.length; i < ar - 1; i++)
        txtFun += "arguments[" + i + "],"
        //var str=arguments[1].
    txtFun += "arguments[" + i + "])"

    var a;
    eval("a=" + txtFun);
    //  console.log(a);
    return an([a, "1"], n, "" + n2, ss);
}

function an(arg, n, n2, ss) {
    var ret_;

    //var arg3;
    //alert(n+" "+n2)
    //var arg2=copy(arg,true);

    function an0() {
 
        //  alert(this.outerHTML)
        if( arg[arg.length - 1]=="1")
     { arg[arg.length - 1] = arg[arg.length - 1] == n2 ?n2 + n2 :n2;
       // arg[1] +="_"+arg[1]
        //// arg[arg.length-1]=arg[arg.length-1]=="0"?"1":"0";
        //var arg2=copy(arg,true)
       
        bl(arg, "anmt");}else return

    }

    function an3() {
        //  alert(this.outerHTML)
        var al = arg[arg.length - 1];
        arg[arg.length - 1] = al == "." + n2 ? "." + n2 + n2 : "." + n2;
        //arg[arg.length-1]=arg[arg.length-1]=="0"?"1":"0";
        /*if(arg2!==undefined)*/
        //  console.log(arg)
        //arg=copy(arg,true)
        bl(arg, "anmt");
        // console.log(arg)
    }

    function an1(x, x2) {
        //   console.log("... "+n2);console.log(arg)
        // arg[arg.length-1]=arg[arg.length-1]=="0"?"00":"0";
        var al = arg[arg.length - 1];
        if (typeof x !== "string")

        {
            if (n2 == "0")
                arg[arg.length - 1] = al == "0" ? "1" : "0";
            else
                arg[arg.length - 1] = al == "1" ? "0" : "1";
        } else {
            if (al == "0") { //arg[arg.length-1]=al==x?x+x:x;
                arg[arg.length - 1] = al == "1" ? "0" : "1";
                if (typeof x2 == "function") {
                    x2();

                    for (var i = 2; i < arguments.length; i++) {
                        if (typeof arguments[i] == "function")
                            arguments[i]();
                    }
                }

            } else
                return;
        }
        // var arg2=copy(arg,true)
        bl(arg, "anmt");

    }

    function an4() {
        var al = arg[arg.length - 1];
        //  alert(this.outerHTML)
        // arg[arg.length-1]=arg[arg.length-1]=="0"?"00":"0";
        if (n2 == "0")
            arg[arg.length - 1] = al == ".0" ? ".1" : ".0";
        else
            arg[arg.length - 1] = al == ".1" ? ".0" : ".1";
        // var arg2=copy(arg,true)
        bl(arg, "anmt");

    }

    function an2(x) {
        // alert("....")                                          //  alert(this.outerHTML)
        function an4_() { //alert(ss)
            var al = arg[arg.length - 1];

            if ("" + x != al) // arg[arg.length-1]=arg[arg.length-1]=="0"?"00":"0";
            {
                if (n2 == "0")

                    arg[arg.length - 1] = al == "0" ? "1" : "0";
                else
                    arg[arg.length - 1] = al == "1" ? "0" : "1";
                // var arg2=copy(arg,true)
                bl(arg, "anmt");
            } else return;
        }
        return an4_;

    }

    eval("ret_=an" + n);
    return ret_;
}

function copy(e, t) {
    var l, r, n;
    l = Array.isArray(e) ? [] : {};
    for (n in e) r = e[n], t === !0 ? l[n] = Array.isArray(r) ? copy(r, t) : r : l[n] = "object" == typeof r ? copy(r) : r;
    return l
}

function isO(e) {
    return "object" != typeof e || Array.isArray(e) || null === e ? e : [e]
}


	function change(a,b,c,d,ch_,str){
		var x=-1,ele=bl(b),g=ele.getAttribute('class'),dd=2/*,dd=d!=undefined?d:1*/;
		bl(a,b,chE(g,ele));
		if(d=="i")
	dd=1
			var c= c.split("_");
		
			
var ch2;


eval('ch2=function ch(e){if(ele.getAttribute("class").search(" cHnG")!=-1){x++;x==c.length&&(x=0);'+ch_+'ele.setAttribute("class",g);return '+str+';}}')
		
		return ch2;
		}
	function chE(cl,el){
			function chE2(){
			if(el.getAttribute('class').search(" cHnG")==-1)
					el.setAttribute('class',cl+" cHnG");
				} return chE2;}

function changeP(a,b,c,d){
return change(a,b,c,d,"e[1][1][0]=c[x];","");

}


	function changeV(a,b,c,d){
return change(a,b,c,d,"var cx=c[x].match(/([+-]?\\d+\\.\\d+|[+-]?\\d+)/g);if(cx==null ||cx[0]==undefined){cx=['0']};if(cx[1]==undefined){cx[1]=cx[0]};if(cx[2]==undefined){cx[2]=cx[1]};var bb = e[1][1][1];for (var i = 0, ii = bb[dd].length; i < ii; i++) {bb[dd][i] = Number(cx[i])};","");


	
	}


	function changeE(a,b,c,d){

return change(a,b,c,d,"e[1][0]=bl(c[x]);","");

	
	}
	function changeNth(a,b,c,d){
return change(a,b,c,d,"var n=Number(c[x]);if(isNaN(n))e[1][1][2][3][0]='8';else e[1][1][2][3][0]=n;e[1][1][2][3][3]=0;","e[1][1][2][3][0];");

}
	function changeT(a,b,c,d){
return change(a,b,c,d,"e[1][1][2][3][1]=Number(c[x]);","");
	}

	function changeMx(a,b,c,d){

return change(a,b,c,d,"","['Mx',Number(c[x])]");
}
	function changeMn(a,b,c,d){
	
	return change(a,b,c,d,"","['Mn',Number(c[x])]");
	}
function ho2(e,t,z){
	//alert(e);
   
	   var n /*,fAdd*/ ; // =  typeof e!="function"  ? void 0 !== e?e : 10:(10,z=e);
	   if (typeof e != "function") {
		   n = void 0 !== e ? e : 10;
	   } else {
		   z = e;
		   n = 10;
	   }
	   var s; // =  typeof t!="function"  ? void 0 !== t?t : -1:(-1,z=t);
	   if (typeof t != "function") {
		   s = void 0 !== t ? t : -1;
	   } else {
		   z = t;
		   s = -1;
	   }
   
	   // if(typeof z!="function")
	   //  zbol=true;
	   function ho2_(e,l, r) {

		 // console.log("jadid "+r+" "+l)
   var k,kk;
		   // s =  typeof t!="function"? void 0 !== t?t : -1;
		 //  "+" === l && (n === true || n > r) ? r++ : (r--, e[1][1][2][1]=l = "-", (r == s||r < s) && (r += 2, e[1][1][2][1]=l = "+")); /*console.log("jadid2 "+r+" "+l), */
		 "+" === e[1][1][2][1] && (n === true || n > e[1][1][2][2][0]) ? e[1][1][2][2][0]++ : (e[1][1][2][2][0]--, e[1][1][2][1]= "-", (e[1][1][2][2][0] == s||e[1][1][2][2][0] < s) && (e[1][1][2][2][0] += 2, e[1][1][2][1] = "+")); /*console.log("jadid2 "+r+" "+l), */
		//  "+" === l && (n === true || n > r) ? r++ : (r--, e[1][1][2][1]=l = "-", (r == s||r < s) && (r += 2, e[1][1][2][1]=l = "+")); /*console.log("jadid2 "+r+" "+l), */
		 
		   
		   console.log("////nrs "+n+" "+r+" "+s);
			    
		   if (typeof z == "object" /*&& (fAdd=z(Math.abs(r),w))!=undefined*/ ) {
 		   for (var i = 0; i < z.length; i++)
		  { //z[i](e)
		 k= z[i](e,e[1][1][2][1],e[1][1][2][2][0])
k!=undefined &&(k!=""&&(typeof k=="object"?(k[0]=="Mx"?n=k[1]:s=k[1]):kk=k),i = z.length)
		  }		  }else if (typeof z == "function" /*&& (fAdd=z(Math.abs(r),w))!=undefined*/ ) {
if((z.toString().match(/^function\s*([^\s(]+)/) || [])[1]=="ch"){
	z(e)

}else
			   return [l, r, z(l,Math.abs(r), v, w,el)]
		   }  return [l, r,kk]
	   }
	   return ho2_;
}





function forCode(w_, h_) {
    var co, col_co, mi;

    function iDg(e, t) {
        function l(l) {
            startX = l.clientX, startY = l.clientY, g_P(e, "width"), startWidth = parseInt(g_P(e, "width"), 10), startHeight = parseInt(g_P(e, "height"), 10), document.documentElement.addEventListener("mousemove", t, !1), document.documentElement.addEventListener("mouseup", sD(t), !1)
        }
        return l
    }

    function dD(e) {
        if (startWidth + e.clientX - startX + 120 >= 780 || (startHeight + e.clientY - startY + 100 + 10 >= 400))
            return
            //console.log("____"+(startWidth + e.clientX - startX)) ;
        bl("#glob").style.width = startWidth + e.clientX - startX + "px", bl("#code").style.width = bl("#glob").offsetWidth - 55 + "px", bl("#glob").style.height = startHeight + e.clientY - startY + "px", bl("#code").style.height = startHeight + e.clientY - startY - 10 + "px", sMS(bl("#col_code"), bl("#code"), bl("#mir"), ".li1", "#code"), bl("#glob2").style.width = w_ - bl("#glob").offsetWidth + "px", bl("#glob2").style.height = bl("#glob").offsetHeight + "px", bl("#code2").style.width = bl("#glob2").offsetWidth - (bl("#code2").offsetWidth - parseFloat(g_P(bl("#code2"), "width"), 10)) + 8 + "px", bl("#code2").style.height = startHeight + e.clientY - startY - 10 + "px", sMS(bl("#col_code2"), bl("#code2"), bl("#mir2"), ".li2", "#code2"), bl("#glob3").style.height = h_ - bl("#glob").offsetHeight + "px", bl("#code3").style.height = bl("#glob3").offsetHeight - 10 + "px", sMS(bl("#col_code3"), bl("#code3"), bl("#mir3"), ".li3", "#code3"), bl("#glob4").style.height = bl("#glob3").offsetHeight - 9 + "px"
    }

    function dD3(e) {
        if ((startWidth + e.clientX - startX + 10 + 120) >= 780)
            return
            // console.log(" glob4.. "+(w_ - bl("#glob3").offsetWidth - 10 + "px"))
            //  console.log(" #code3.. "+(bl("#glob3").offsetWidth - 55 + "px"))
        bl("#glob3").style.width = startWidth + e.clientX - startX + "px", bl("#glob4").style.width = w_ - bl("#glob3").offsetWidth - 10 + "px", bl("#code3").style.width = bl("#glob3").offsetWidth - 55 + "px", sMS(bl("#col_code3"), bl("#code3"), bl("#mir3"), ".li3", "#code3")
    }

    function sD(e) {
        function t() {
            document.documentElement.removeEventListener("mousemove", e, !1), document.documentElement.removeEventListener("mouseup", t, !1)
        }
        return t
    }

    function kC(e) {
        13 === e.keyCode && (cc2 = 1)
    }

    function sMS(e, t, l, r, n) {
        var nn = bl(n + " " + r);
        void 0 !== nn && mE(nn, e, t, l), t.currentStyle ? e.style.height = t.currentStyle.height : window.getComputedStyle && (e.style.height = window.getComputedStyle(t, null).getPropertyValue("height"))
    }

    function g_P(ele, prp) {
        var prp2;
        return ele.currentStyle ? (eval("prp2=ele.currentStyle." + prp), prp2) : window.getComputedStyle ? window.getComputedStyle(ele, null).getPropertyValue(prp) : void 0
    }

    function rMC(rmc_) {
        if (rmc_ === "run") {
            run();
            return;
        }

        function e(e) {
            function t(e) {
                var t = e.replace(/&amp;/g, "&").replace(/&#47;/g, "/").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'");
                return t
            }

            function l(e) {
                if (0 === e.search(/!--/i)) return "-" == e[e.length - 2] && "-" == e[e.length - 1];
                var t, l = e.lastIndexOf("&apos;"),
                    r = e.lastIndexOf("&quot;");
                if (l === r) return !0;
                t = l > r ? "&apos;" : "&quot;";
                var n = e.split(t);
                if ((n.length - 1) % 2 !== 0) {
                    var s = n[n.length - 2].replace(/\s+=/, "=").split("=");
                    if (1 !== s.length)
                        if (2 !== n.length) {
                            if ("" !== s[s.length - 2].trim() && "" === s[s.length - 2][0].trim()) return !1
                        } else if (2 === s[s.length - 2].trim().split(/\s/).length) return !1
                }
                return !0
            }
            var r = !1,
                n = !1,
                s = "",
                o = "",
                i = "",
                a = e.replace(/&/g, "&amp;");
            a = a.replace(/\//g, "&#47;"), a = a.replace(/\</g, "&lt;"), a = a.replace(/\>/g, "&gt;"), a = a.replace(/"/g, "&quot;"), a = a.replace(/'/g, "&apos;");
            var c = !1;
            d = "";
            var p = !1;
            if (tab = a.split(/&lt;/), 1 !== tab.length) {
                for (var i = "", d = "", h = "", f = "", g = 0; g < tab.length; g++)
                    if (c && (f = "&lt;"), c || "" !== tab[g].trim() && 0 !== g && (0 === tab[g].search(/&#47;[a-zA-Z]/i) || 0 === tab[g].search(/[a-zA-Z]/i) || 0 === tab[g].search(/!--/i))) {
                        c = !0, p = !0;
                        var u = tab[g].split(/&gt;/);
                        if (1 !== u.length)
                            for (var b = !1, v = "&gt;", m = 0; m < u.length; m++)
                                if (m === u.length - 1) v = "", b ? "" !== u[m] && (r || n ? s += u[m] : o += '<span class="li" style="color:#040c3f;font-weight: 900;font-size: 18px;">' + u[m] + "</span>") : d += u[m] + "&lt;";
                                else if (b) h += u[m] + v;
                        else if (l(d + u[m])) {
                            if (c = !1, b = !0, i += "&lt;" + d + u[m], h = s_t(h, h.length - 4)[0], "" !== h && (r || n ? s += h : h = '<span class="li" style="color:#040c3f;font-weight: 900;font-size: 18px;">' + h + "</span>"), 0 === i.search(/&lt;!--/i)) o += '<span class="li" style="color:lightgrey;">' + i + v + "</span>";
                            else {
                                var y = i.search(" ");
                                if (y > -1) {
                                    var _ = s_t(i, y + 1);
                                    "" !== _[1].trim() && (i = _[0] + '<span class="li" style="color:#60E;font-size: 20px;">' + _[1] + "</span>")
                                }
                                i += v, i = i.replace(/(&quot;[\S\s]*?&quot;)/g, '<span class="li" style="color:red;">$1</span>'), i = i.replace(/(&apos;[\S\s]*?&apos;)/g, '<span class="li" style="color:red;">$1</span>'), r ? (h = '<span class="li" style="color:#040c3f;font-weight: 900;font-size: 18px;">' + jC(t(s), "haha")() + "</span>", s = "", r = !1) : n && (h = '<span class="li" style="color:#040c3f;font-weight: 900;font-size: 18px;">' + cS(t(s), "haha")() + "</span>", s = "", n = !1), 0 == i.search("&lt;script") ? r = !0 : 0 == i.search("&lt;style") && (n = !0), o += h + '<span class="li" style="color:green;font-size: x-large;font-style: oblique;">' + i + "</span>"
                            }
                            i = "", d = "", h = ""
                        } else d += u[m] + v;
                        else d += tab[g] + "&lt;"
                    } else p ? (h += "&lt;" + tab[g] + "&lt;", p = !1) : h += tab[g] + "&lt;";
                    ("" !== h || "" !== d) && (r || n ? s += h : (d != "" ? (h = /*h+*/ "&lt;" + s_t(d, d.length - 4)[0], o += '<span class="li" style="color:#a46367;font-weight: 900;font-size: 18px;">' + h + "</span>") : o += '<span class="li" style="color:#040c3f;font-weight: 900;font-size: 18px;">' + h + "</span>"))
            } else r || n ? s += a : o += '<span style="color:#040c3f;font-weight: 900;font-size: 18px;">' + a + "</span>";
            return a = o.replace(/(?:\r\n|\r|\n)/g, '<span class="li li1">\r</span>')
        }
        var n = '<li class="li1">',
            s = "</li>";
        /*var*/
        co = co != undefined ? co : "#code";
        /* var*/
        col_co = col_co != undefined ? col_co : "#col_code";
        /*var*/
        mi = mi != undefined ? mi : "#mir";
        //	var li=arguments[5]!=undefined?arguments[5]:"#li1";

        if (nonInput) {
            var l = window.getSelection().getRangeAt(0),
                r = gCOW(l, bl(co)) + cc2;
            cc2 = 0;
            bl(co).innerHTML = e(bl(co).innerText, n, s);
        }
        false && ("hocino" && run());
        //if(nonInput){
        var c = bl(co + " .li1");;
        void 0 !== c && mE(c, bl(col_co), bl(co), bl(mi)), sCCP(r, bl(co))
            // mE("#code", bl("#col_code"), bl("#code"), bl("#mir"), ".li1"), sCCP(r, bl("#code"))
        function run() {
            bl("#glob4").children[0] && bl("#glob4").removeChild(bl("#glob4").children[0]);
            var t = document.createElement("iframe");
            t.id = "fram", t.style = " height: 100%;width: 100%; border-width: 0px;", bl("#glob4").appendChild(t), doc = t.document, t.contentDocument ? doc = t.contentDocument : t.contentWindow && (doc = t.contentWindow.document);

            var o = document.createElement("script"),
                i = document.createElement("style"),
                a = document.createElement("script");
            o.id = "scrp", i.id = "styl", o.innerHTML = bl("#code2").innerText, i.innerHTML = bl("#code3").innerText, doc.open(), doc.writeln("<body></body>"), doc.writeln(bl("#code").innerText), void 0 !== doc.children[0] && ( /*doc.children[0].children[0].children[0].outerHTML = document.getElementById("ho_ho").outerHTML,*/ doc.children[0].children[0].appendChild(i), void 0 === doc.children[0].children[1] && doc.children[0].appendChild(doc.createElement("body"))), doc.close();

            /* insert strings into DOM
             */
            // console.log("allah")
            var htmlContent = ''
            htmlContent += '<script src="http://bl-js.com/bl_js/code2.js"><\/script>'
            htmlContent += '<script>' + bl("#code2").innerText + '<\/script>'

            // run the scripts inside the dom node
            //var $container = document.querySelector('.container')

            doc.children[0].children[0].innerHTML = htmlContent;
            // doc.children[0].children[0].innerHTML = '<script>'+bl("#code2").innerText+'<\/script>';		

            //function rs(){
            runScripts(doc)
                // alert("hhhh")
                /* helpers
                 */

            // runs an array of async functions in sequential order
            function seq(arr, callback, index) {
                // first call, without an index
                if (typeof index === 'undefined') {
                    index = 0
                }

                arr[index](function() {
                    index++
                    if (index === arr.length) {
                        callback()
                    } else {
                        seq(arr, callback, index)
                    }
                })
            }

            // trigger DOMContentLoaded
            function scriptsDone() {
                var DOMContentLoadedEvent = document.createEvent('Event')
                DOMContentLoadedEvent.initEvent('DOMContentLoaded', true, true)
                document.dispatchEvent(DOMContentLoadedEvent)
            }

            /* script runner
             */

            function insertScript(x_, d, $script, callback) {
                var s = d.createElement('script')
                s.type = 'text/javascript'
                if ($script.src) {
                    s.onload = callback
                    s.onerror = callback
                    s.src = $script.src
                } else {
                    s.textContent = $script.innerText
                }

                // re-insert the script tag so it executes.
                if (x_ == 0)
                    d.head.appendChild(s)
                else
                    d.body.appendChild(s)
                    // clean-up
                $script.parentNode.removeChild($script)

                // run the callback immediately for inline scripts
                if (!$script.src) {
                    callback()
                }
            }

            // https://html.spec.whatwg.org/multipage/scripting.html
            var runScriptTypes = [
                'application/javascript',
                'application/ecmascript',
                'application/x-ecmascript',
                'application/x-javascript',
                'text/ecmascript',
                'text/javascript',
                'text/javascript1.0',
                'text/javascript1.1',
                'text/javascript1.2',
                'text/javascript1.3',
                'text/javascript1.4',
                'text/javascript1.5',
                'text/jscript',
                'text/livescript',
                'text/x-ecmascript',
                'text/x-javascript'
            ]

            function runScripts($container) {
                var x = 0;
                // get scripts tags from a node
                var $scripts = $container.querySelectorAll('script')
                var runList = []
                var typeAttr

                    [].forEach.call($scripts, function($script) {
                    typeAttr = $script.getAttribute('type')

                    // only run script tags without the type attribute
                    // or with a javascript mime attribute value
                    if (!typeAttr || runScriptTypes.indexOf(typeAttr) !== -1) {
                        runList.push(function(callback) {
                            insertScript(x, $container, $script, callback);
                            x++;
                        })
                    }
                })

                // insert the script tags sequentially
                // to preserve execution order
                seq(runList, scriptsDone)
            }
            //}

        }
    }

    function s_t(e, t) {
        return [e.substring(0, t), e.substring(t)]
    }

    function gO(e) {
        return e.getBoundingClientRect().top + window.scrollY
    }

    function gCOW(e, t) {
        for (var l = document.createTreeWalker(t, NodeFilter.SHOW_TEXT, function(t) {
                var l = document.createRange();
                return l.selectNode(t), l.compareBoundaryPoints(Range.END_TO_END, e) < 1 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
            }, !1), r = 0; l.nextNode();) r += l.currentNode.length;
        return 3 == e.startContainer.nodeType && (r += e.startOffset), r
    }

    function createRange(e, t, l) {
        if (l || (l = document.createRange(), l.selectNode(e), l.setStart(e, 0)), 0 === t.count) l.setEnd(e, t.count);
        else if (e && t.count > 0)
            if (e.nodeType === Node.TEXT_NODE) e.textContent.length < t.count ? t.count -= e.textContent.length : (l.setEnd(e, t.count), t.count = 0);
            else
                for (var r = 0; r < e.childNodes.length && (l = createRange(e.childNodes[r], t, l), 0 !== t.count); r++);
        return l
    }

    function sCCP(e, t) {
        if (e >= 0) {
            var l = window.getSelection();
            range = createRange(t, {
                count: e
            }), range && (range.collapse(!1), l.removeAllRanges(), l.addRange(range))
        }
    }

    function cS(c, col, m) {

        var co, col_co, mi;
        if (col == "haha") {
            var e = c,
                t = "haha"
        } else {
            co = arguments[0] != undefined ? arguments[0] : "#code2";
            col_co = arguments[1] != undefined ? arguments[1] : "#col_code2";
            mi = arguments[2] != undefined ? arguments[2] : "#mir2";
        }

        function cS_() {
            function l(e) {
                for (var t = "", l = 0; l < e.length; l++) {
                    if (0 !== e[l].trim().length) {
                        var r = e[l].split(";");
                        t += n(r)
                    } else t += e[l];
                    t += "{"
                }
                return t = t.substring(0, t.length - 1)
            }

            function r(e) {
                for (var t = i, l = "", r = 0; r < e.length; r++) r == e.length - 1 && (t = ""), l += 0 !== e[r].trim().length ? '<span class="lia" style="color:#040c3f;font-weight: 900;font-size: 18px;">' + e[r] + "</span>" + t : e[r] + t;
                return l
            }

            function n(e) {
                for (var t = "", l = 0; l < e.length; l++) {
                    if (0 !== e[l].trim().length)
                        if (e[l].search(",") > -1) {
                            var n = e[l].split(",");
                            t += r(n)
                        } else {
                            var o = s(e[l], e[l].indexOf(":"));
                            0 !== o[0].trim().length && 0 !== o[1].trim().length ? (t += '<span class="lia" style="color:#ff0c3f;font-weight: 900;font-size: 18px;">' + o[0] + "</span>" + c, t += '<span class="verg_2" style="color:#aa0c3f;font-weight: 900;font-size: 18px;">' + o[1] + "</span>") : t += '<span class="verg_2" style="color:blue;font-weight: 900;font-size: 18px;">' + e[l] + "</span>"
                        } else t += e[l];
                    l !== e.length - 1 && (t += a)
                }
                return t
            }

            function s(e, t) {
                return [e.substring(0, t), e.substring(t + 1)]
            }
            var o, i = '<span class="verg" style="color:#2988e2;font-weight: 900;font-size: 18px;">,</span>',
                a = '<span class="verg" style="color:#607D8B;font-weight: 900;font-size: 18px;">;</span>',
                c = '<span class="verg" style="color:#a41fee;font-weight: 900;font-size: 18px;">:</span>';
            var co = arguments[2] != undefined ? arguments[2] : "#code3";
            var col_co = arguments[3] != undefined ? arguments[3] : "#col_code3";
            var mi = arguments[4] != undefined ? arguments[4] : "#mir3";
            // var li=arguments[5]!=undefined?arguments[5]:"#li3";

            if ( /*"string" != typeof e*/ t != "haha") {
                var p = window.getSelection().getRangeAt(0),
                    d = gCOW(p, bl(co)) + cc2;
                cc2 = 0, o = bl(co).innerText
            } else o = e;
            var h = "";
            cmt = [], cmt2 = [], qu = [], qu2 = [], resg = [], equa = [], dot = [], verg = [], o = comp(o, ["'", '"', "/", "/*"], "css").split("}");
            for (var f = 0; f < o.length; f++) {
                var g = o[f].split("{");
                h += l(g) + "}"
            }
            if (h = h.substring(0, h.length - 1), h = replC(h, "css"), h = h.replace(/(?:\r\n|\r|\n)/g, '<span class="li li3">\r</span>'), void 0 != t) return h;
            bl(co).innerHTML = h;
            var u = bl(co + " .li3");
            void 0 !== u && mE(u, bl(col_co), bl(co), bl(mi)), sCCP(d, bl(co)) + cc2
        }

        return cS_
    }

    function jC(c, col, m) {

        var co, col_co, mi, str, bS;
        if (col == "haha") {
            str = c;
            bS = "haha"
        } else {
            co = arguments[0] != undefined ? arguments[0] : "#code2";
            col_co = arguments[1] != undefined ? arguments[1] : "#col_code2";
            mi = arguments[2] != undefined ? arguments[2] : "#mir2";
        }

        function jC_() {
            function fEr(str) {
                for (var mch; null != (mch = /([a-zA-Z_]([a-zA-Z])+\b(?!\W+\µ£@§££@#))/g.exec(str));) try {
                    "eval" !== mch[0] ? (eval("var " + mch[0] + " = 1"), fE2[fE2.length] = mch[0], str = str.replace(/([a-zA-Z_]([a-zA-Z])+\b(?!\W+\µ£@§££@#))/, " µ£@§££@#"), eval(mch[0] + "=(function(){}())")) : (fE2[fE2.length] = "eval", str = str.replace(/([a-zA-Z_]([a-zA-Z])+\b(?!\W+\µ£@§££@#))/, " µ£@§££@#"))
                } catch (err) {
                    fE[fE.length] = mch[0], str = str.replace(/([a-zA-Z_]([a-zA-Z])+\b(?!\W+\µ£@§££@#))/, "µ§£@££@#")
                }
                return str
            }

            function jC2(e) {
                function t(e) {
                    function t(e) {
                        return e.replace(/([a-zA-Z_]([a-zA-Z_0-9]?)+\b(?!\W+\µ§£§@#))/g, '<span class="lia" style="color:#aa0c3f;font-weight: 900;font-size: 18px;">$1</span>').replace(/(µ§@#\s*?((\+|-)?\d+(?:\.\d+)?))/g, '<span class="li" style="color:red;">$1</span>')
                    }

                    function l(e) {
                        return e
                    }
                    for (var r, n = "", s = "", o = 0; o < e.length; o++)
                        if (0 !== o && (s = ";"), e[o].indexOf("var ") > -1) {
                            r = s_t3(e[o], e[o].indexOf("var "), 4);
                            var i = !1;
                            e[o].indexOf(" var ") > -1 || (i = "" === r[0].trim()) || "(" === r[0].trim()[r[0].trim().length - 1] ? (r[1] = t(r[1]), n += s + r[0] + '<span class="li" style="color:red;">var </span>' + l(r[1].replace(/,/g, '<span class="li" style="color:white;">,</span>')), r = void 0) : n += s + l(t(e[o]))
                        } else n += s + l(t(e[o]));
                    return n;
                }
                for (var l = e.split(/(?:\r\n|\r|\n)/g), r = "", n = "", s = 0; s < l.length; s++) {
                    0 !== s && (n = "\n");
                    var o = (s_t3(l[s], l[s].search(/((\(\/)[\S ]*?([^\\]\/))/) + 1), l[s].split(/;/g));
                    r += n + t(o)
                }
                return r
            }

            function s_t3(e, t, l) {
                return [e.substring(0, t), e.substring(t + l)]
            }

            function dx2(e) {
                var t, l = e.lastIndexOf("&apos;"),
                    r = e.lastIndexOf("&quot;");
                if (l === r) return !0;
                t = l > r ? "&apos;" : "&quot;";
                var n = e.split(t);
                return (n.length - 1) % 2 === 0
            }

            if ( /*"string" != typeof str*/ bS != "haha") {
                var rangee = window.getSelection().getRangeAt(0),
                    charcnt1 = gCOW(rangee, bl(co)) + cc2;
                cc2 = 0, str = bl(co).innerText
            }
            var tCF = "";
            cmt = [], cmt2 = [], qu = [], qu2 = [], resg = [], equa = [], dot = [], dot2 = [];
            var verg = [];
            if (str = comp(str, ["'", '"', "/", "/*"]), equa = str.match(/(==|=|\-|\+|\*|%|&&|\/|!=|<|>)(=)?(=)?/g), str = str.replace(/(==|=|\-|\+|\*|%|&&|\/|!=|<|>)(=)?(=)?/g, "µ§@#"), dot = str.match(/\.(([a-zA-Z_]+([.a-zA-Z_0-9\[\]\(\)]+)?))+/g), str = str.replace(/\.(([a-zA-Z_]+([.a-zA-Z_0-9\[\]\(\)]+)?))+/g, " µ§£§@#"), dot2 = str.match(/([a-zA-Z_][a-zA-Z_0-9]*?\ µ§£§@#)/g), str = str.replace(/([a-zA-Z_][a-zA-Z_0-9]*?\ µ§£§@#)/g, "µ§§§@#"), fE = [], fE2 = [], str = fEr(str), null != fE2 && void 0 !== fE2[0])
                for (var er2 = 0; er2 < fE2.length; er2++) str = str.replace(" µ£@§££@#", fE2[er2]);
            verg = str.match(/(\,|\;)/g), str = str.replace(/(\,|\;)/g, "µ§£§@§£§#");
            var stri3 = str;
            if (tCF += jC2(stri3), tCF = replC(tCF), tCF = tCF.replace(/(?:\r\n|\r|\n)/g, '<span class="li li2">\r</span>'), null != verg && void 0 !== verg[0])
                for (var ve = 0; ve < verg.length; ve++) tCF = tCF.replace("µ§£§@§£§#", '<span class="verg" style="color:#2988e2;font-weight: 900;font-size: 18px;">' + verg[ve] + "</span>");
            if (void 0 != bS) return tCF;
            bl(co).innerHTML = tCF;
            var spanLi_ = bl(co + " .li2");
            void 0 !== spanLi_ && mE(spanLi_, bl(col_co), bl(co), bl(mi)), sCCP(charcnt1, bl(co)) + cc2
        }
        return jC_;
    }

    function sIN(e) {
        var t = e.replace(/&/g, "&amp;").replace(/\//g, "&#47;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
        return t
    }

    function replC(e, t) {
        var l = e;
        if (void 0 !== cmt[0])
            for (var r = 0; r < cmt.length; r++) l = l.replace("µ§£@@#", '<span class="li" style="color:lightgrey;">' + sIN(cmt[r]) + "</span>");
        if (void 0 !== cmt2[0])
            for (var n = 0; n < cmt2.length; n++) l = l.replace("µ@@§@@#", '<span class="li" style="color:lightgrey;">' + sIN(cmt2[n]) + "</span>");
        if (void 0 !== qu[0])
            for (var s = 0; s < qu.length; s++) l = l.replace("µ§@@#", '<span class="li" style="color:#0f9803;">' + sIN(qu[s]) + "</span>");
        if (void 0 !== qu2[0])
            for (var o = 0; o < qu2.length; o++) l = l.replace("µ@§@@#", '<span class="li" style="color:#0f9803;">' + sIN(qu2[o]) + "</span>");
        if ("css" !== t) {
            if (void 0 !== resg[0])
                for (var i = 0; i < resg.length; i++) l = l.replace("µ£§@@#", '<span class="li" style="color:lightblue;">' + sIN(resg[i]) + "</span>");
            if (null != equa)
                for (var a = 0; a < equa.length; a++) l = l.replace("µ§@#", sIN(equa[a]));
            if (null != dot2)
                for (var c = 0; c < dot2.length; c++) l = l.replace("µ§§§@#", '<span class="li" style="color:green;">' + sIN(dot2[c]) + "</span>");
            if (null != dot)
                for (var p = 0; p < dot.length; p++) l = l.replace(" µ§£§@#", '<span class="li" style="color:black;">' + sIN(dot[p]) + "</span>");
            if (null != fE)
                for (var d = 0; d < fE.length; d++) l = l.replace("µ§£@££@#", '<span class="li" style="color:#a151d2;">' + fE[d] + "</span>")
        }
        return l
    }

    function comp(e, t, l) {
        var r, n = e,
            s = -1,
            o = -1;
        s = n.indexOf(t[0]);
        for (var i = 1; i < t.length; i++)
            if (o = n.indexOf(t[i]), o > -1 && (s = -1 !== s && o > s ? s : o), i == t.length - 1) {
                if (-1 === s) return n = n.replace(/?§§@£?/g, "/");
                if ("'" === n.charAt(s)) {
                    for (var a = /(\'\'|('[\S\s]*?[^\\]'))/g; 0 == a.lastIndex && null != (r = a.exec(n));) qu[qu.length] = r[0];
                    n = n.replace(/(\'\'|('[\S\s]*?[^\\]'))/, "µ§@@#")
                } else if ('"' === n.charAt(s)) {
                    for (var c = /(\"\"|("[\S\s]*?[^\\]"))/g; 0 == c.lastIndex && null != (r = c.exec(n));) qu2[qu2.length] = r[0];
                    n = n.replace(/(\"\"|("[\S\s]*?[^\\]"))/, "µ@§@@#")
                } else if ("/" === n.charAt(s))
                    if ("/" === n.charAt(s + 1)) {
                        for (var p = /(\/\/[\S\s]*?(?:\r\n|\r|\n))/g; 0 == p.lastIndex && null != (r = p.exec(n));) cmt2[cmt2.length] = r[0];
                        n = n.replace(/(\/\/[\S\s]*?(?:\r\n|\r|\n))/, "µ@@§@@#")
                    } else if ("*" === n.charAt(s + 1)) {
                    for (var d = /(\/\*[\S\s]*?\*\/)/g; 0 == d.lastIndex && null != (r = d.exec(n));) cmt[cmt.length] = r[0];
                    n = n.replace(/(\/\*[\S\s]*?\*\/)/, "µ§£@@#")
                } else if ("css" !== l) {
                    var hh = n.substring(0, s);
                    var h = hh.trim();
                    if ("(" === h[h.length - 1] || "=" === h[h.length - 1]) {
                        for (var f = /(\/)[\S ]*?([^\\]\/)/g; 0 == f.lastIndex && null != (r = f.exec(n));) resg[resg.length] = r[0];
                        n = n.replace(/(\/)[\S ]*?([^\\]\/)/, "µ£§@@#")
                    } else n = hh + "?§§@£?" + n.substring(s + 1)
                } else r = null;
                if (i = 0, z = s, s = n.indexOf(t[0]), null == r) return n = n.replace(/?§§@£?/g, "/")
            }
    }
    var cc2 = 0,
        cmt, cmt2, qu, qu2, resg, equa, dot, dot2, fE, fE2, doc, nonInput = true;

    if (arguments[0] !== undefined && arguments[0] !== "run") {
        if (arguments[0] == "color") {

            co = arguments[2] //!=undefined?arguments[2]:"#code";
            col_co = arguments[3] //!=undefined?arguments[3]:"#col_code";
            mi = arguments[4] //!=undefined?arguments[4]:"#mir";

            bl(co).addEventListener("scroll", sMSc(bl(col_co), bl(co)));

            bl(co).addEventListener("keydown", kC)
                //bl("#code").addEventListener("keydown", kC)
            if (arguments[1] == "h")

                bl(co).addEventListener("input", rMC)
            else if (arguments[1] == "j")

                bl(co).addEventListener("input", jC(co, col_co, mi)) //jC(co,col_co,mi)
            else
                bl(co).addEventListener("input", cS(co, col_co, mi))

            // rMC();

        } else {
            bl("#glob").addEventListener("click", function e() {
                bl("#glob").removeEventListener("click", e, !1), bl("#resiz").addEventListener("mousedown", iDg(bl("#glob"), dD), !1), bl("#resiz3").addEventListener("mousedown", iDg(bl("#glob3"), dD3), !1)
            }, !1);
            var startX, startY, startWidth, startHeight;
            bl("#code3").addEventListener("scroll", sMSc(bl("#col_code3"), bl("#code3"))), bl("#code2").addEventListener("scroll", sMSc(bl("#col_code2"), bl("#code2"))), bl("#code").addEventListener("scroll", sMSc(bl("#col_code"), bl("#code"))), bl("#code").addEventListener("keydown", kC), bl("#code2").addEventListener("keydown", kC), bl("#code3").addEventListener("keydown", kC), bl("#code").addEventListener("input", rMC), bl("#code2").addEventListener("input", jC("#code2", "#col_code2", "#mir2")), bl("#code3").addEventListener("input", cS("#code3", "#col_code3", "#mir3"))

        }

    } else {
        if (arguments[0] !== "run") {
            nonInput = false;
            rMC();
        } else
            rMC("run");
    }
}

function sMSc(e, t) {
    function l() {
        e.scrollTop = t.scrollTop
    }
    return l
}

function mE(e, t, l, r) {

    // var s, o;
    /*  o = bl(n, 0).getBoundingClientRect().top + window.scrollY,*/
    r.innerHTML = '  <span class="li0" style="top:0px;">1</span>';
    // var 	el=bl(e+" "+n);
    for (var i = 0; i < e.length; i++) /*s = e[i].getBoundingClientRect().top + window.scrollY,*/ r.innerHTML += '<span class="li0" style="top:' + ( /*s - o*/ e[i].offsetTop + 19) + 'px;">' + (i + 2) + "</span>";
    sMSc(t, l)()

}





