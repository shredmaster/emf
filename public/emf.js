$(document).ready(function () {
    // put all your jQuery goodness in here.
    $(".accordion").tabs(
            ".accordion div.band_info",
            {tabs:'h2',
             effect:'slide',
             initialIndex:0}
    );

    // home page scrollable
    var api = $("#page_scroll").scrollable({
        items:'#page_slides',
        keyboard: false,
        touch: false
        // use the navigator plugin
    }).navigator({navi:".main_menu"}).data("scrollable");

    var theSize = [1100, 1400, 2100, 1900];

    // this callback does the special handling of our "intro page"
    api.onBeforeSeek(function (e, i) {
        // when on the first item: hide the intro
        if (i) {
            $("#home_page").fadeOut("slow");
            // dirty hack for IE7-. cannot explain
            if ($.browser.msie && $.browser.version < 8) {
                $("#home_page").hide();
            }
            // otherwise show the intro
        } else {
            $("#home_page").fadeIn(1000);
        }
        $("#page_scroll").height(theSize[i]);
    });

    // band scrollable
    var api = $("#scroll").scrollable({
        items:'#slides'
        // use the navigator plugin
    }).navigator().data("scrollable");


    // this callback does the special handling of our "intro page"
    api.onBeforeSeek(function (e, i) {
        // when on the first item: hide the intro
        if (i) {
            $("#intro").fadeOut("slow");

            // dirty hack for IE7-. cannot explain
            if ($.browser.msie && $.browser.version < 8) {
                $("#intro").hide();
            }

            // otherwise show the intro
        } else {
            $("#intro").fadeIn(1000);
        }

        // toggle activity for the intro thumbnail
//        $("#t0").toggleClass("active", i == 0);

    });

    // a dedicated click event for the intro thumbnail
    /*$("#t0").click(function () {
        // seek to the beginning (the hidden first item)
        $("#scroll").scrollable().begin();
    });*/

    // event page scroller
    $(".circular_scroll").scrollable({ circular:true }).click(function (e) {
        var offset = $(this).offset();
        var theLeft =  offset.left + $(this).width()/2;
        if(e.pageX > theLeft) {
            $(this).data("scrollable").next();
        } else {
            $(this).data("scrollable").prev();
        }
    });

    $("#chinese_btn").click(function(){
        $("#english_btn").show();
        $(this).hide();
    });
    $("#english_btn").click(function(){
        $("#chinese_btn").show();
        $(this).hide();
    });

    $("#back_btn").click(function(){
        $("#more_btn").show();
        $(this).hide();
    });
    $("#more_btn").click(function(){
        $("#back_btn").show();
        $(this).hide();
    });

});

