$(function () {
    $("link[href='style2.css']").remove(); //remove remove default css file
    $('head').text('');
    $("body").addClass("container");
    // $('body').load(chrome.extension.getURL("stud_login/stud_login.html")); //Content inside body tag will be replaced by content in stud_login.html
    // $('table').contents().unwrap();
    // $('tbody').contents().unwrap();
    // $('tr').contents().unwrap();
    // $('td').contents().unwrap();
    // $('th').contents().unwrap();

    // Removing inline css
    $('font').contents().unwrap();
    $('u').contents().unwrap();
    $('br').remove();
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
    $('*').removeAttr('background');
    $('*').removeAttr('marginheight');
    $('*').removeAttr('topmargin');
    $('*').removeAttr('leftmargin');

    // remove unnecessary elements
    $('table:last').remove();
    $('img').remove();
    $('table').eq(0).remove();

    // $('table').replaceWith('<div>' + $('table').html() +'</div>');
    // $('tbody').replaceWith('<div>' + $('tbody').html() +'</div>');
    // $('tr').replaceWith('<div>' + $('tr').html() +'</div>');
    // $('td').replaceWith('<div>' + $('td').html() +'</div>');

    // Replace table and its childrens with div or appropriate tag
    while ($('table').length > 0) {
        $('table').eq(0).replaceWith('<div>' + $('table').eq(0).html() + '</div>');
    }
    while ($('tr').length > 0) {
        $('tr').eq(0).replaceWith('<div class="row card-panel">' + $('tr').eq(0).html() + '</div>');
    }
    while ($('td').length > 0) {
        $('td').eq(0).replaceWith('<div class="col">' + $('td').eq(0).html() + '</div>');
    }
    while ($('tbody').length > 0) {
        $('tbody').eq(0).replaceWith('<div>' + $('tbody').eq(0).html() + '</div>');
    }
    while ($('th').length > 0) {
        $('th').eq(0).replaceWith('<h6>' + $('th').eq(0).html() + '</h6>');
    }
    // $('b').remove();
    while ($('b').length > 0) {
        $('b').eq(0).replaceWith("<h6>" + $('b').eq(0).html() + "</h6>");
    }

    // if($("marquee body").text() == ''){
    //     $(this).clostest("marquee").remove();
    // }
    $('marquee').addClass('card-panel');
    // $("marquee:not(div)").remove();
    $('body').prepend("<div class='card-panel center-align'><div class='row'><h2>V-TOP Easy</h2></div></div><div class='row center-align flow-text'><div class='col s6'><a href='http://vtop.vit.ac.in/student/stud_login.asp' class='btn'>Student Login</a></div><div class='col s6'><a href='http://vtop.vit.ac.in/parent/parent_login.asp' class='btn'>Parent Login</a></div></div>");

    $('.card-panel').addClass('hoverable');
});