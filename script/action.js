function bar(){
    let scrT = $(window).scrollTop();
    let winW = $(window).width();
    let winH = $(window).height();
    let docH = $(document).height();
    let ratio = winW / (docH-winH);
    $('.bar').width(scrT * ratio)    
}
function bar2(){
    let scrT = $(window).scrollTop();
    let prog2 = $('.page_progress2').height();
    let winH = $(window).height();
    let docH = $(document).height();
    let ratio = prog2 / (docH-winH);
    $('.bar2').height(scrT * ratio);
}


$(window).scroll(function(){
    bar()
    bar2()
})

$(window).resize(function(){
    bar()
    bar2()
})

$('#section2 .review_box li .ex').each(function(){
    let exText = $(this).text()
    let exTextVal = exText.substring(0,100)

    if(exText.length > 100){
        $(this).text(exTextVal + '...') 
    }
    
})