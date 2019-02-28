$(function() {
    let isScrolled = false;
    var yoga = $(".yoga").offset().top;
    var fitness = $(".fitness").offset().top;
    var gym = $(".gym").offset().top;
    var wallClimbing = $(".wall-climbing").offset().top;
    var pricing = $(".pricing").offset().top;
    var gallery = $(".gallery").offset().top;
    var contact = $(".contact").offset().top;
    $(".heading-info h1").animate({
        "left": "0%"
    }, function() {
        $(".heading-info p").animate({
            "left": "0%"
        }, function(){
            $(".heading-info a").animate({
                "top": "25px"
            });
        });
    });
    $(".menu-button").click(function() {
        $(".menu-container").css({
            "display": "block"
        });
        $(".menu-container").animate({
            "right": "0px"
        }, 700);
        $(".menu-button").css({
            "display": "none"
        });
    });
    $(".close").click(function() {
        $(".menu-container").animate({
            "right": "-250px"
        }, 700, function() {
            $(".menu-container").css({
                "display": "none"
            });
        });
        $(".menu-button").css({
            "display": "block"
        });
    });
    $("#home").click(function() {
        document.documentElement.scrollTop = 0;
    });
    $("#services").click(function() {
        document.documentElement.scrollTop = yoga - 100;
    });
    $("#price").click(function() {
        document.documentElement.scrollTop = pricing;
    });
    $("#gallery").click(function() {
        document.documentElement.scrollTop = gallery;
    });
    $("#contact").click(function() {
        document.documentElement.scrollTop = contact;
    });
    window.onscroll = function() {
        if(document.body.scrollTop > 260 || document.documentElement.scrollTop > 260) {
            if(!isScrolled) {
                $(".goToTop").animate({
                    "right": "3%"
                }, 300);
                isScrolled =  true;
            }
        } else {
            if(isScrolled) {
                $(".goToTop").animate({
                    "right": "-3%"
                }, 300);
                isScrolled = false;
            }
        }
        if(fitness < document.documentElement.scrollTop + 450) {
            $(".fitness .fitness-img").animate({
                "right": "0%"
            }, 1000);
            $(".fitness .fitness-info h2").animate({
                "left": "0%"
            }, function() {
                $(".fitness .fitness-info p").animate({
                    "left": "0%"
                }, function() {
                });
            });
        } 
        else if(yoga < document.documentElement.scrollTop + 450) {
            $(".yoga .yoga-img").animate({
                "left": "0%"
            }, 1000);
            $(".yoga .yoga-info h2").animate({
                "right": "0%"
            }, function() {
                $(".yoga .yoga-info p").animate({
                    "right": "0%"
                });
            });
        } 
        if(gym < document.documentElement.scrollTop + 450) {
            $(".gym .gym-img").animate({
                "left": "0%"
            }, 1000);
            $(".gym .gym-info h2").animate({
                "right": "0%"
            }, function() {
                $(".gym .gym-info p").animate({
                    "right": "0%"
                });
            });
        } 
        if(wallClimbing < document.documentElement.scrollTop + 450) {
            $(".wall-climbing .wall-climbing-img").animate({
                "right": "0%"
            }, 1000);
            $(".wall-climbing .wall-climbing-info h2").animate({
                "left": "0%"
            }, function() {
                $(".wall-climbing .wall-climbing-info p").animate({
                    "left": "0%"
                });
            });
        }
    }
});