
// 헤더 스크롤시 고정
$(window).scroll(function(){            
    $("header").addClass('open');
    if($(window).scrollTop()==0){       
        $("header").removeClass('open');
    }
});

//프로젝트 배경 고정
$(window).scroll(function(){
    var 높이 = $(window).scrollTop();
    console.log(높이);
    if($(window).scrollTop() > 992 && $(window).scrollTop() < 1700 ){       
        $(".bg_proj").addClass('sticky');
    } else {
        $(".bg_proj").removeClass('sticky');
    };
    if($(window).scrollTop() > 1700 ){
        $(".bg_proj").addClass('done');
    } else {
        $(".bg_proj").removeClass('done');
    }
});

$(document).ready(function(){
    // 서브 메뉴 등장
    $('.depth1 > li > a').mouseenter(function(){
        $(this).siblings('.depth2').stop().fadeIn(100);
    });
    
    $(".depth1 > li, .sub").mouseleave(function(){
        $('.depth2').stop().fadeOut(100);
    });
    
    //모바일 메뉴 열기
    $('.m_hambuger').on('click', function(){
        $('.m_hambuger').toggleClass('open');
        if($(this).hasClass('open')){
            $('.mo_menu').animate({right:0},300);
            $('.dim').show();
            $('body').addClass('lock')
        }else {
            $('.mo_menu').animate({right:'-80%'},300);
            $('.dim').hide();
            $('body').removeClass('lock')
        }
    });
    
    //모바일 메뉴 depth2
    $(".mo_depth1 > li > a").on('click', function(){
        $(".mo_depth2").slideUp();
        $(".mo_depth1 > li > a").removeClass("active");
        if(!$(this).next().is(":visible")) 
        {
            $(this).next().slideDown();
            $(this).addClass("active");
        }
    });

    //패밀리사이트 열기
    $('.family_site > button').on('click', function() {
        $('.family_site').toggleClass('open');
    });
});