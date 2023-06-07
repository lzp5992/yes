
(function () {

    //根据id获取对象

      function _$(param) {

          if(param.substring(0,1)== "#"){

             return document.getElementById(param.substring(1));

          }else if(param.substring(0,1)== "."){


             return document.getElementsByClassName(param.substring(1))[0];

          }else if(param.substring(0,5)== "name:"){

             return document.getElementsByName(param.substring(5));

          }else{

             return document.getElementsByTagName(param);

          }

      }

        function openWindow(left,top,width,height,srcoll,url){
            var strParam="toolbar=no,location=no,directionires=no,status=no,menubar=no,resizable=no";
            
            strParam=strParam+",left=" +left +",top=" +top ;
            strParam=strParam+",width=" + width  +",height=" + height ;
            strParam=strParam+",scrollbar="+scroll;
            var mywin=window.open(url,"", strParam);
            mywin.focus();
            return false;

            }
      window.MyTools = {};
      window.MyTools.$ = _$;
      window.MyTools.openWindow=openWindow;

 })();

