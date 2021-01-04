window.onload=function (){
    var img=["img/Carousel4.webp","img/Carousel3.webp","img/Carousel2.webp",
        "img/Carousel1.jpg", "img/Carousel5.jpg","img/Carousel6.jpg"];
    var oImg=document.getElementById("img_ad");
    var oFir=document.getElementById("first_img");
    var oSec=document.getElementById("sec");
    var oDiv1=document.getElementById("fir_div");
    var oDiv2=document.getElementById("sec_div");
    var oNav=document.getElementById("nav_inner");
    var aNavLi=oNav.getElementsByTagName("li");
    oImg.style.background="url(img/Carousel4.webp)";
    var timer=null;
    var i=0;
    timer=setInterval(doMove ,5000);
    function doMove (){
        i++;
        i=i%img.length;
        oImg.style.background="url("+img[i]+")";
        for(var j=0;j<aNavLi.length;j++){
            aNavLi[j].className="";
        }
        if(i===0){
            oFir.src="img/Carousel5_2.webp";
            oSec.src="img/Carousel4_1.webp";
            aNavLi[0].className="selected";
        }else if(i===1){
            oFir.src="img/decorations.webp";
            oSec.src="img/book.webp";
            aNavLi[1].className="selected";
        }else if(i===2){
            oFir.src="img/man.webp";
            oSec.src="img/clothes.webp";
            aNavLi[2].className="selected";
        }else if(i===3) {
            oFir.src = "img/clothes_s.webp";
            oSec.src = "img/watch.webp";
            aNavLi[3].className = "selected";
        }else {
            oDiv1.style.display="none";
            oDiv2.style.display="none";
            aNavLi[i].className="selected";
        }
    }
   /* oImg.onmouseover=function (){
        clearInterval(timer);
    }*/
   /* oImg.onmouseout=function (){
        clearInterval(timer);
        setInterval(doMove ,5000);
    }*/



    /*顶部导航栏的隐藏显现*/
    var topDiv=document.getElementById("hidden_title");
    window.onscroll=function (){
        if (document.documentElement.scrollTop >= 800){
            topDiv.style.display="block";
            topDiv.style.zIndex="999";
        }else {
            topDiv.style.display="none";
        }
    }







    var oUl= document.getElementById("back");
    var aLi=oUl.getElementsByTagName("li");
    for(var j=0;j<aLi.length;j++){
        var oldColor=aLi[j].style.color;
        aLi[j].onmouseover=function (){
            this.style.color=randomColor();
        }
        aLi[j].onmouseout=function (){
            this.style.color=oldColor;
        }
    }
    /*随机生成颜色*/
    function randomColor (){
        var str='#';
        for(var i=0;i<6;i++){
            str+=Math.floor(Math.random()*16).toString(16);
        }
        return str;
    }
}


/*function addMenu(){
     var oDiv=document.getElementById("menu");
     var aUl_text={"当季流行":["女装新品","商场同款","仙女连衣裙","T恤","衬衫","时髦外套","休闲裤","牛仔裤","无痕文胸","运动文胸","潮流家居服","百搭船袜"],"精选上装":["浪漫裙装","女士下装","特色女装","文胸塑身","家居服","内裤背心"]};
     /!*var aLi_text=["女装新品","商场同款","仙女连衣裙","T恤","衬衫","时髦外套","休闲裤","牛仔裤","无痕文胸","运动文胸","潮流家居服","百搭船袜","精选上装","浪漫裙装","女士下装","特色女装","文胸塑身","家居服","内裤背心"];*!/
    var n = -1;
    for(var i in aUl_text){.
        n++;
        oDiv.innerHTML += '<ul>'+i+'</ul>';
        var ul = document.getElementsByTagName('ul');
        for (var j = 0; j < aUl_text[i].length; j++) {
            ul[n].innerHTML += '<li>'+aUl_text[i][j]+'</li>';
        };
    }
 }*/