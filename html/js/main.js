$(function(){
    $(document).scroll(function() {
        let windowWidth = $( window ).outerWidth();
        if (windowWidth < 768) {
            $('body').removeClass('openedMenu');
        }
        let cutoff = $(window).scrollTop();
        $('section').each(function(){
            let currentSection = $(this).attr('id');
            
            if($(this).offset().top + $(this).height() > cutoff){
                $('#mainHeader li').removeClass('active');
                $(`#mainHeader li.${currentSection}`).addClass(' active');
                return false;
            }
            
        });
        if(cutoff > 100){
            $('#mainHeader').addClass(' small');
            $('footer .ancla').addClass(' active');

        }else{
            $('#mainHeader').removeClass('small');
            $('footer .ancla').removeClass(' active');
        }
    });

    $('.ancla').click(function(e){
        let jump = $(this).attr('href');
        let new_position = $(jump).offset();
        $('html, body').stop().animate({ scrollTop: (new_position.top + -60) }, 500);
        e.preventDefault();
    });
    
    $("#hamburguerButton").click(function(){
        $('body').toggleClass('openedMenu');
    });
    $("#mainHeader .slider").click(function(){
        $('body').toggleClass('openedMenu');
    });

    // TEAM - Desplegables
    $(".user").click(function(){
        if ($(this).hasClass('active')) {
            $('.user.active + div').removeClass('active');
            $(this).removeClass('active');
            $('#team').removeClass('active');
        }else{
            $('.user').removeClass('active');
            $('.userContent').removeClass('active');
            $(this).addClass('active');
            $('.user.active + div').addClass('active');
            $('#team').addClass('active');
        }
    });
})
