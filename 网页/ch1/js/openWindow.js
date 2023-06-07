function openWindow(left,top,width,height,srcoll,url){
var strParam="toolbar=no,location=no,directionires=no,status=no,menubar=no,resizable=no";

strParam=strParam+",left=" +left +",top=" +top ;
strParam=strParam+",width=" + width  +",height=" + height ;
strParam=strParam+",scrollbar="+scroll;
var mywin=window.open(url,"", strParam);
mywin.focus();
return false;


}