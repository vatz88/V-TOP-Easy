$(function () {
    $("link[href='style2.css']").remove(); //remove remove default css file

    // $('body').load(chrome.extension.getURL("stud_login/stud_login.html")); //Content inside body tag will be replaced by content in stud_login.html
    // $('table').contents().unwrap();
    // $('tbody').contents().unwrap();
    // $('tr').contents().unwrap();
    // $('td').contents().unwrap();
    // $('th').contents().unwrap();

    // Removing inline css
    $('font').contents().unwrap();
    $('u').contents().unwrap();
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
    $('*').removeAttr('colspan');
    $('*').removeAttr('color');

    $('center').eq(0).replaceWith('<h5 class="center-align">' + $('center').eq(0).html() + '</h5>');

    // First table with course info
    $('table').eq(0).replaceWith('<div class="container">' + $('table').eq(0).html() + '</div>');
    var temp = $('tr').eq(1).children();
    var templen = temp.length;
    while(templen>=0){
        temp.eq(templen-1).replaceWith('<div class="col s2">' + temp.eq(templen-1).text() + '</div>');
        templen--;
    }
    $('tr').eq(1).replaceWith('<div class="row">' + $('tr').eq(1).html() + '</div>');
    $('.col').last().remove();//remove 'ALL'
    $('tr').eq(0).remove();
    $('table').eq(0).replaceWith('<div class="card-panel">' + $('table').eq(0).html() + '</div>');
    // End of first table

    // $('td').replaceWith('<div class="col">' + $('td').html() +'</div>');
    // $('tr').replaceWith('<div class="row">' + $('tr').html() +'</div>');
    // $('table').replaceWith('<div class="card-panel">' + $('table').html() +'</div>');
    // $('tbody').replaceWith('<div>' + $('tbody').html() +'</div>');

    // $('tr').eq(0).remove();
    // $('table').eq(1).replaceWith('<div class="card-panel">' + $('table').eq(1).html() + '</div>');

    // convert tr to .row and td to .col
    while ($('th').length > 0) {
        $('th').eq(0).replaceWith('<h6>' + $('th').eq(0).html() + '</h6>');
    }
    while ($('td').length > 0) {
        $('td').eq(0).replaceWith('<div class="col">' + $('td').eq(0).html() + '</div>');
    }
    // while ($('font').length > 0) {
    //     $('font').eq(0).replaceWith('<div class="col">' + $('font').eq(0).html() + '</div>');
    // }
    while ($('tr').length > 0) {
        $('tr').eq(0).replaceWith('<div class="row">' + $('tr').eq(0).html() + '</div>');
    }
    while ($('table').length > 0) {
        $('table').eq(0).replaceWith('<div class="card-panel">' + $('table').eq(0).html() + '</div>');
    }
    // // $('br').remove();
    // while ($('b').length > 0) {
    //     $('b').eq(0).replaceWith("<h6>" + $('b').eq(0).html() + "</h6>");
    // }
    // while ($('font').length > 0) {
    //     $('font').eq(0).replaceWith('<div class="flow-text">' + $('font').eq(0).html() + '</div>');
    // }
    // $('tr').eq(0).remove();

    $('.submit5').addClass('btn');
    // $('form').eq(0).addClass(function(){
    //     $('form').eq(0).children('.col').addClass('right');
    //     return "col";
    // });
    $('.col:has(input)').eq(0).replaceWith('<form action="syllabus_file.asp" method="post" class="col right">' + $('.col:has(input)').eq(0).html() + '</form>')
    // $('.btn').removeClass('submit5');

    $('.card-panel').addClass('hoverable');
    $('.col:has(a)').addClass('right');
    $('a').addClass(function(){
        return "waves-effect waves-teal btn-flat";
    });
    $('.row').eq(1).remove();
    $('.row:gt(0)').before('<div class="divider"></div>');

    // remove unnecessary elements
    $('#GOOGLE_INPUT_CHEXT_FLAG').remove();
    $('iframe').remove();
});