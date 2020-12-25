window.onload=function (){
    var img=["img/Carousel4.webp","img/Carousel3.webp","img/Carousel2.webp",
        "img/Carousel1.jpg", "img/Carousel5.jpg","img/Carousel6.jpg"];
    var oImg=document.getElementById("img_ad");
    oImg.style.background="url(img/Carousel4.webp)";
    var i=0;
    setInterval(function (){
        i++;
        i=i%img.length;
        oImg.style.background="url("+img[i]+")";
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