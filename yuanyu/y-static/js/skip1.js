(function(){

//点击跳转首页
    $(".h-tb1 td").eq(0).on("click",function(){
        location="./index.html";
    })
//点击跳转酷玩页面
    $(".h-tb1 td").eq(1).on("click",function(){
    location="./kuwan/foundkuwan-new.html";
    })
    $("#find-kw > span:last-of-type").on("click",function(){
        location="./kuwan/foundkuwan-new.html"; 
    })
//点击跳转导购页面
$(".h-tb1 td").eq(2).on("click",function(){
    location="./daogou/daogoulist-new.html";
    })
$("#body-daogou > span:last-of-type").on("click",function(){
    location="./daogou/daogoulist-new.html";
})
//点击跳转试用页面
$(".h-tb1 td").eq(3).on("click",function(){
    location="./shiyong/publicTrial-all.html";
    })
//点击跳转报告页面
$(".h-tb1 td").eq(4).on("click",function(){
    location="./baogao/newbaogao.html";
    })
    
$("#body-jingxuan > span:last-of-type").on("click",function(){
    location="./baogao/newbaogao.html";
        })
//点击跳转关于极果页面
$(".hezuo li").eq(0).on("click",function(){
    location="hezuo.html";
})

//点击跳转详情页
$(".shiyong li").eq(0).on("click",function(){
    location="./shiyong/publicTrial-details.html";
})
//点击跳转
$(".shiyong li").eq(1).on("click",function(){
    location="./shiyong/freeshiyong.html";
})









})()
