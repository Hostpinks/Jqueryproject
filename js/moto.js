/**
 *
 * Created by shaoyang on 2017/6/14.
 */
//------------------------------------------

$(function () {
    //顶部下拉菜单效果
    //注册导航列表鼠标移入移出事件
    $(".top .have-dropdown").mouseenter(function () {
        //下拉菜单向下滑动
        $(this).children(".dropdown").stop().slideDown("fast");
    }).mouseleave(function () {
        //下拉菜单向上滑动
        $(this).children(".dropdown").stop().slideUp("fast");
    });
    //--------------------------------------------------
    //轮播图
    //侧边栏
    //注册侧边栏的鼠标移入移出事件
    $("#siderBar").mouseenter(function () {
        //鼠标移入改变宽度
        $(this).stop().animate({"width": 350});
    }).mouseleave(function () {
        //鼠标移入还原
        $(this).stop().animate({"width": 65});
    });

    //注册圆点按钮鼠标点击事件
    $("#dotList li").click(function () {
        console.log($(this).index());
        //轮播图切换 图片索引与圆点索引对应
        $("#imgList li")
            .eq($(this).index())
            .stop().fadeIn()
            .siblings()
            .stop().fadeOut();

        $(this).addClass("current").siblings().removeClass("current");
    });

    //设置轮播图自动切换
    var timer = null;
    var num = 0;
    //轮播图自动切换函数
    function turnImg() {
        timer = setInterval(function () {
            if (num == 3) {
                num = -1;
            }
            num++;
            $("#imgList li").eq(num)
                .stop().fadeIn()
                .siblings().stop().fadeOut();

            $("#dotList li").eq(num)
                .addClass("current")
                .siblings().removeClass("current");
        }, 2000);
    }

    turnImg();

    //输入移入y轮播图区域停止滚切换 移出后继续切换

    $(".lbt").mouseenter(function () {
        clearInterval(timer);
    }).mouseleave(function () {
        turnImg();
    });

    //产品区特效

    $("#productItem .product-img").click(function () {
        $(this).animate({top: -600})
            .next().animate({top: 0});

    });
    $("#productItem .info").click(function () {
        $(this).animate({top: 600})
            .prev().animate({top:100});
    });

});
