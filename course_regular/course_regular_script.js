$(function () {
    //remove remove default css file
    $('link[href="style2.css"]').remove();

    // remove inline attributes
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

    $('table').eq(0).replaceWith('<div class="container">' + $('table').eq(0).html() + '</div>');
    
    while($('table b').length > 0){
        $('table b').eq(0).replaceWith($('table b').eq(0).text());
    }
    $('center').eq(0).replaceWith('<h5>' + $('center').eq(0).text() + '</h5>');

    // table 1 courses registered
    $('table').eq(0).find('tr:not(:nth-last-child(2))').find('td:first-child').remove(); // table 1 remove useless rows and column
    $('table').eq(0).find('td:last').attr('colspan','14');

    // table 2 timetable
    var t2col = $('table').eq(1).find('td');
    for(var i=t2col.length-1; i>=0; i--){
        if(t2col.eq(i).text().indexOf('-') > -1){
            t2col.eq(i).addClass('colorCol');
        }
    }

    $('table').addClass(function(){
        return 'centered hoverable highlight z-depth-1';
    });

    // remove useless elements
    $('iframe').remove();
});