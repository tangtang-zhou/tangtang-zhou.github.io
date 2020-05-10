// 179000548 汤州
//全部广告能正常显示，正常关闭，能一直固定到页头页尾
var ad_width = "100px";
var ad_height = "250px";
var ad_img = "img/ad1.jpg";
var close_img = "img/close.png";

var ad_left = document.createElement("div");
ad_left.style.width = ad_width;
ad_left.style.height = ad_height;
ad_left.style.padding = "0px";
ad_left.style.position = "absolute";
ad_left.style.left = "30px";
ad_left.style.top = "20px";

var adimg = document.createElement("img");
adimg.src = ad_img;
ad_left.appendChild(adimg);

var closeimg = document.createElement("img");
closeimg.src = close_img;
closeimg.style.width = "50px";
closeimg.style.position = "relative";
closeimg.style.left = "50px";
closeimg.style.top = "-20px";
closeimg.style.cursor = "pointer";
ad_left.appendChild(closeimg);

document.documentElement.appendChild(ad_left);

closeimg.addEventListener("click",function () {
    ad_left.style.display = "none"
});

var ad_right = ad_left.cloneNode(true);
console.log(ad_right);
ad_right.style.left = "";
ad_right.style.right = "30px";
ad_right.style.top = "20px";
document.documentElement.appendChild(ad_right);

var ad_right_img = ad_right.childNodes[1];
ad_right_img.addEventListener("click",function () {
    ad_right.style.display = "none"
});

var ad_bottom = document.createElement("div");
ad_bottom.style.width = "300px";
ad_bottom.style.height = "250px";
ad_bottom.style.padding = "0px";
ad_bottom.style.position = "absolute";
ad_bottom.style.right = "0px";
ad_bottom.style.bottom = "0px";

var ad_b_img = document.createElement("img");
ad_b_img.src = "img/ad2.jpg";
ad_bottom.appendChild(ad_b_img);

var close_b_img = document.createElement("img");
close_b_img.src = close_img;
close_b_img.style.width = "50px";
close_b_img.style.position = "relative";
close_b_img.style.right = "-250px";
close_b_img.style.top = "-255px";
close_b_img.style.cursor = "pointer";
ad_bottom.appendChild(close_b_img);

document.documentElement.appendChild(ad_bottom);

window.addEventListener("scroll",()=>{
    var st1 = document.documentElement.scrollTop || document.body.scrollTop;
    ad_left.style.top = (st1 + 20 ) + "px";
    ad_right.style.top = (st1 + 20 ) + "px";
    ad_bottom.style.bottom = -st1 + "px"
});
close_b_img.addEventListener("click",function () {
    ad_bottom.style.display = "none"
});
