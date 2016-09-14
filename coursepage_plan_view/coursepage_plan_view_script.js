$(function () {
    $("link[href='style2.css']").remove(); //remove remove default css file
    $("link[href='style.css']").remove();

    // $("body").addClass("container");
    // $('body').load(chrome.extension.getURL("stud_login/stud_login.html")); //Content inside body tag will be replaced by content in stud_login.html
    // $('table').contents().unwrap();
    // $('tbody').contents().unwrap();
    // $('tr').contents().unwrap();
    // $('td').contents().unwrap();
    // $('th').contents().unwrap();
    $('center').eq(0).replaceWith('<h5 class="center-align">' + $('center').eq(0).html() + '</h5>');

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

    // $('table').replaceWith('<div>' + $('table').html() +'</div>');
    // $('tbody').replaceWith('<div>' + $('tbody').html() +'</div>');
    // $('tr').replaceWith('<div>' + $('tr').html() +'</div>');
    // $('td').replaceWith('<div>' + $('td').html() +'</div>');

    // Replace table and its childrens with div or appropriate tag

    // $('form').eq(0).replaceWith('<div class="container">' + $('table').eq(0).html() + '</div>');
    // var x = $('form').length;
    // for (var i=x-1; i > 0; --i) {
    //     $('form').eq(i).replaceWith("<div class='card-panel'><form method='post' action='coursepage_plan_display.asp'>" + $('form').eq(i).html() + "</form></div>");
    // }
    // $('form').addClass("card-panel");
    // $("form").before("<div class='formCardPanel'>");
    // $(".submit5").after("</div>");
    // $('.formCardPanel').addClass('card-panel');

    // while ($('th').length > 0) {
    //     $('th').eq(0).replaceWith('<h6>' + $('th').eq(0).html() + '</h6>');
    // }
    // while ($('tbody').length > 0) {
    //     $('tbody').eq(0).replaceWith('<div>' + $('tbody').eq(0).html() + '</div>');
    // }
    // $('b').remove();
    while ($('b').length > 0) {
        $('b').eq(0).replaceWith("<p>" + $('b').eq(0).html() + "</p>");
    }
    while ($('font').length > 0) {
        $('font').eq(0).replaceWith('<div>' + $('font').eq(0).html() + '</div>');
    }
    $('table').eq(0).replaceWith('<div class="container">' + $('table').eq(0).html() + '</div>');
    $('table').eq(0).replaceWith('<div class="card-panel">' + $('table').eq(0).html() + '</div>');
    $('tr').eq(0).remove();
    while ($('td').length > 0) {
        var x = $('td').eq(0).text()
        if (x == 'ALL' || x == 'Lab Only' || x == 'Theory Only' || x == 'Embedded Theory' || x == 'Embedded Lab') {
            $('td').eq(0).remove();
        }
        $('td').eq(0).replaceWith('<div class="col"><td>' + $('td').eq(0).html() + '</td></div>');
    }
    while ($('tr').length > 0) {
        $('tr').eq(0).replaceWith('<div class="card-panel"><div class="row">' + $('tr').eq(0).html() + '</div></div>');
    }
    while ($('table').length > 0) {
        $('table').eq(0).replaceWith('<div>' + $('table').eq(0).html() + '</div>');
        // $('table').eq(0).replaceWith('<div class="card-panel">' + $('table').eq(0).html() + '</div>');
    }

    $("input[type='submit']").addClass('btn');
    var i = $(".btn").parent().length - 1;
    while (i >= 0) {
        i--;
        $(".btn").parent().eq(i).replaceWith('<form method="post" action="coursepage_plan_display.asp">' + $(".btn").parent().eq(i).html() + '</form>');
    }
    // $(".btn").parent().css('float', 'right');
    $(".btn").parent().addClass('right');

    // while ($('table').length > 0) {
    //     $('table').eq(0).replaceWith('<div class="container-fluid">' + $('table').eq(0).html() + '</div>');
    //     $('select').eq(0).replaceWith("<div class='input-field'>" + $('select').eq(0).html() + "</div>");
    // }
    $('select').parent().addClass('input-field');
    $('select').addClass('browser-default');
    $('select').material_select();

    // Remove unnecessary elements
    var temp = $('form').length;
    while (temp > 0) {
        temp--;
        if ($('form').eq(temp).html() == '') {
            $('form').eq(temp).remove();
        }
    }

    $('#GOOGLE_INPUT_CHEXT_FLAG').remove();
    $('iframe').remove();

    $('.card-panel').addClass('hoverable');
});