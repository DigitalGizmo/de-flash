// focus used by all popups
function openFocus() {
    window.focus();
}

// called by project pages for replacing large image with thumbnails
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function popupWindow(theURL,width,height) {
	if (width==null) width=500;
	if (height==null) height=400;
  window.open(theURL,'','scrollbars=yes,resizable=yes,width='+width+',height='+height);
}

function ohbio(shortName) {
	var width=500;
	var height=600;
    var theURL = "/activities/oralhistory/"+ shortName + "/bio.html";
  window.open(theURL,'bio','scrollbars=yes,resizable=yes,width='+width+',height='+height);
}

function ohlarge(shortName) {
	var width=650;
	var height=600;
    var theURL = "/centapp/oh/view_large.do?shortName="+ shortName;
  window.open(theURL,'large','scrollbars=yes,resizable=yes,width='+width+',height='+height);
}

/**
 * writePopupNav
 *   Writes a link to either close the browser window or return to the home page,
 *   depending on whether the window is a popup or the main window.
 */
function writePopupNav() {
	if (opener != null) {
	  document.write('<a href="#" onClick="window.close()">close this window</a> when done.');
	} else {
	  document.write('<a href="/home.html">home</a>');
  }
}

function MM_goToURL() { //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}
//code to make dropdown menus on home page work in I.E.
sfHover = function() {
	var sfEls = document.getElementById("homenav").getElementsByTagName("LI");
	for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
			this.className+=" sfhover";
		}
		sfEls[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
		}
	}
}
if (window.attachEvent) window.attachEvent("onload", sfHover);