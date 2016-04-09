$(document).ready(function() {
    //更多产品下拉
    $('.outer').hover(function() { //头部更多产品列表
            $(".more").toggle();
        })
        //设置下拉
    $('.set').hover(function() { //设置列表
            $(".setHover").toggle();
        })
        //新闻导航跳转
    $(".section-nav li").each(function(index) { //遍历导航下的li
            var liNode = $(this); //当前的li
            liNode.click(function() {
                $(".sectionClick").removeClass("sectionClick"); //之前显示的li去除样式
                liNode.addClass("sectionClick"); //点击的li显示样式

                $(".sectionShow").removeClass("sectionShow"); //之前显示的div移除样式
                $(".section").eq(index).addClass("sectionShow"); //点击后对应的div显示样式
            })

        })

        //点击换肤
    $(".s-skin").click(function() {
            $("#changeSkinCon").slideDown("slow");
        })

        //点击不使用皮肤
    $(".no-skin").click(function() { //不使用皮肤
            $("#logo_pc").attr("src", "./img/百度首页.gif"); //logo变换
            $("#con_pc").css("background-image", "none"); //背景变白  
            $(".submit").css({ //搜索条样式改变
                "background-color": "#38f",
                "color": "#fff",
            });
            //记录localstorage为空
            setSkin.saveSkin("noskin");
        })

        //收起换肤
    $(".up-skin").click(function() {
            $("#changeSkinCon").slideUp("slow");
        })

        //出现、消失小火箭
    $(window).scroll(function() {
            if ($(window).scrollTop() >= 120) { //向下滚动像素大于这个值时，即出现小火箭~
                $('#goTop').fadeIn(100); //火箭淡入的时间，越小出现的越快~
                $('#topSearchCon').fadeIn(100);
            } else {
                $('#goTop').fadeOut(100); //火箭淡出的时间，越小消失的越快~
                $('#topSearchCon').fadeOut(100);
            }
        })

        //点击小火箭
    $('#goTop').click(function() {
            $('html,body').animate({ scrollTop: '0px' }, 300);
        })

        //划过小火箭
    $("#goTop").hover(function() {
            $("#goTopText").toggle();
        })

        //皮肤预览图片划过
    $(".imgBig,.imgSmall").hover(function() {
            var img = $(this);
            img.find(".img-shadow").toggle();
            var imgSrc = img.find("img").attr("src");
            $(".skinPreview img").attr("src", imgSrc);
        })

        //点击皮肤图片
    $(".imgBig,.imgSmall").click(function() {
            var imgSrc = $(this).find("img").attr("src");
            $("#con_pc").css("background-image", "url(" + imgSrc + ")");

            $("#logo_pc").attr("src", "./img/logo_white.png"); //logo变换

            $(".submit").css({ //搜索条样式改变
                "background-color": "#ccc",
                "color": "#000",
            });
            //记录localstorage
            setSkin.saveSkin(imgSrc);
        })

        //换肤列表切换
    $(".skinHead li").click(function() {
            var skinDown = $(this);
            skinDown.addClass("skinNavBlue").siblings("li").removeClass("skinNavBlue");

            $(".skinBoxShow").removeClass("skinBoxShow");
            $(".skinBox").eq(skinDown.index()).addClass("skinBoxShow");
        })

        //我的关注显示/隐藏
    $(".myFocusIco").click(function() {
            $(this).toggleClass("myFocusClickIco");
            $(this).siblings("h2").toggle();
        })

        //显示天气
    $(".s_weather").hover(function() {
        setTimeout(function() {
            $("#weatherOuter").toggle();
        }, 1000)
        clearTimeout();
    })

    //保存背景图片
    var setSkin = {

        skinPath:"",

        init: function() {

                if (localStorage.getItem("imgPath") == null){
                    setSkin.skinPath == "noskin";
                }else{
                    setSkin.skinPath = localStorage.getItem("imgPath");
                }
               
                if (setSkin.skinPath=="noskin") { //如果havaSkin为空，则显示noSkin样式

                    $("#logo_pc").attr("src", "./img/百度首页.gif"); //logo变换
                    $("#con_pc").css("background-image", "none"); //背景变白  
                    $(".submit").css({ //搜索条样式改变
                        "background-color": "#38f",
                        "color": "#fff",
                    });

                } else { //显示上次的背景图片,并设置有皮肤的样式
                    $("#con_pc").css("background-image", "url(" + setSkin.skinPath + ")");

                    $("#logo_pc").attr("src", "./img/logo_white.png"); //logo变换

                    $(".submit").css({ //搜索条样式改变
                        "background-color": "#ccc",
                        "color": "#000",
                    });
                }
            },

            saveSkin: function(imgPath) { //保存信息

                localStorage.setItem("imgPath", imgPath);
            }

    }

    setSkin.init(); //设置当前皮肤

})
