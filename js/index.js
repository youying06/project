//左侧导航栏
$("#list_ul").children().hover(function () {
    $(this).css("background","#ff6700");
    $(this).children(".list_menu").css("border","1px solid #f0f0f0").show();
},function () {
    $(this).css("background","none");
    $(this).children(".list_menu").css("border","0 solid #f0f0f0").hide();
});


//图片轮播
$(function(){
    var i=0;
    var list2_ul = $("#list2_ul");
    var allimg=$("#list2_ul li").length;
    function img_change(){
        var img_i=i*-1200+"px";
        list2_ul.animate({opacity:".3"},100,function(){
            list2_ul.css("left",img_i );
            list2_ul.animate({
                opacity: "1"
            }, 100);
        })
    }
    function automatic(){
        i+=1;
        if(i>=allimg){
            i=0;
        }
        img_change();
    }
    var change_self_time = setInterval(automatic, 3000);
    //上一张
    $("#prev").click(function(){
        i += 1;
        if (i >= allimg) {
            i = 0;
        }
        img_change();
    });
    //下一张
    $("#next").click(function(){
        i -= 1;
        if (i <= 0) {
            i = allimg - 1;
        }
        img_change();
    })
});