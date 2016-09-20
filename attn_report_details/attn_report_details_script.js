$(function () {
    //removing existing css file
    $('link[href="style2.css"]').remove();

    // remove existing inline attributes
    $('*[style]').removeAttr('style');
    $('*').removeAttr('cellspacing');
    $('*').removeAttr('cellpadding');
    $('*').removeAttr('width');
    $('*').removeAttr('height');
    $('*').removeAttr('bordercolor');
    $('*').removeAttr('bgcolor');
    $('*').removeAttr('border');
    $('*').removeAttr('align');
    $('*').removeAttr('valign');
    $('font').contents().unwrap();
    $('u').contents().unwrap();
    $('br').remove();


    //defining
    $('table').eq(0).replaceWith('<div class="container">' + $('table').eq(0).html() + '</div>');

    $('table').addClass(function(){
        return 'centered hoverable highlight z-depth-1';
    });

    while($('b').length > 0){
        $('b').eq(0).replaceWith('<div style="font-weight:bold;">' + $('b').eq(0).text() + '</div>');
    }
    $('center').eq(0).replaceWith('<h5>' + $('center').eq(0).text() + '</h5>');
     
    $("input[type='submit']").addClass('btn');
    var k = $(".btn").parent().length - 1;
    for(;k>=0;k--){    
        $(".btn").parent().eq(k).replaceWith('<form method="post" action="attn_report_details.asp">' + $(".btn").parent().eq(k).html() + '</form>');
    }
    $(".submit3").addClass('btn');
    
    //color for absent yet to be changed

    // removing useless elements
    $('iframe').remove();
});