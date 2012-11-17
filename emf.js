var journey = {
    2009:{
        event:{
            title:"",
            image:[
                "img/poster/EMF_final_crash_mansion_small.jpg",
                "img/press/emf2_world_journal.jpeg",
                "img/press/emf2_world_journal2.jpeg",
                "http://sphotos-b.xx.fbcdn.net/hphotos-ash3/44885_437495435875_5209589_n.jpg",
                "http://sphotos-b.xx.fbcdn.net/hphotos-prn1/66651_452800284733_3448640_n.jpg",
                "http://sphotos-a.xx.fbcdn.net/hphotos-prn1/33738_452800164733_1757714_n.jpg",
                "http://sphotos-b.xx.fbcdn.net/hphotos-prn1/66370_452799939733_5286931_n.jpg",
                "http://sphotos-a.xx.fbcdn.net/hphotos-prn1/47001_452915219733_7346339_n.jpg",
                "http://sphotos-a.xx.fbcdn.net/hphotos-ash3/68553_453239464733_7616237_n.jpg",
                "http://sphotos-a.xx.fbcdn.net/hphotos-prn1/47001_452915219733_7346339_n.jpg",
                "http://sphotos-b.xx.fbcdn.net/hphotos-prn1/69828_10150313811140585_1839995_n.jpg"
            ]
        }
    }
};

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
        items:'#page_slides'
        // use the navigator plugin
    }).navigator({navi:".main_menu"}).data("scrollable");

    var theSize = [1300, 1400, 2100, 1400];

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
});

