window.onload=function (){
    var img=["img/Carousel4.webp","img/Carousel3.webp","img/Carousel2.webp",
        "img/Carousel1.jpg", "img/Carousel5.jpg","img/Carousel6.jpg"];
    var oImg=document.getElementById("img_ad");
    var oFir=document.getElementById("first_img");
    var oSec=document.getElementById("sec");
    /*alert(oFir);*/
    var oDiv1=document.getElementById("fir_div");
    var oDiv2=document.getElementById("sec_div");
    oImg.style.background="url(img/Carousel4.webp)";
    var i=0;
    setInterval(function (){
        i++;
        i=i%img.length;
        oImg.style.background="url("+img[i]+")";
       /* alert(i%img.length==3);*/
        if(i==1){
            oFir.src="img/book.webp";
            oSec.src="img/clothes.webp";
        }else if(i==3){
            oFir.src="img/clothes_s.webp";
            oSec.src="img/watch.webp";
        }else if(i==5){
            oFir.src="img/man.webp";
            oSec.src="img/decorations.webp";
        }else if(i==0){
            oFir.src="img/Carousel5_2.webp";
            oSec.src="img/Carousel4_1.webp";
        }else {
            oDiv1.style.display="none";
            oDiv2.style.display="none";
        }
    },5000)
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