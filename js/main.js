
$(function (){
    for(let work=0;work<=14;work++){
        $("#project"+work).click(function(){
            $(".index").hide();
            $(".project"+work).show();
            $(".project"+work).addClass("fade-in-bottom");
            $("html,body").animate({scrollTop: 0,},0);
            /* 讓出現的頁面可以從最頂端開始瀏覽，第一個0是位置，第二個是秒數*/
        });

        $(".back"+work).click(function(){
            $(".index").show();
            $(".project"+work).hide();
        });

    }


    $(".gototop").click(function(){
        $("html,body").animate({scrollTop: 0,},600);
        /* 讓出現的頁面可以從最頂端開始瀏覽，第一個0是位置，第二個是秒數*/
    });





});