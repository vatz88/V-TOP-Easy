$(function () {
    $("link[href='style2.css']").remove(); //remove remove default css file

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
    while (templen >= 0) {
        temp.eq(templen - 1).replaceWith('<div class="col s2">' + temp.eq(templen - 1).text() + '</div>');
        templen--;
    }
    $('tr').eq(1).replaceWith('<div class="row">' + $('tr').eq(1).html() + '</div>');
    $('.col').last().remove();//remove 'ALL'
    $('tr').eq(0).remove();
    $('table').eq(0).replaceWith('<div class="card-panel">' + $('table').eq(0).html() + '</div>');
    // End of first table

    // convert tr to .row and td to .col
    while ($('th').length > 0) {
        $('th').eq(0).replaceWith('<h6>' + $('th').eq(0).html() + '</h6>');
    }
    while ($('td').length > 0) {
        $('td').eq(0).replaceWith('<div class="col">' + $('td').eq(0).html() + '</div>');
    }
    while ($('tr').length > 0) {
        $('tr').eq(0).replaceWith('<div class="row">' + $('tr').eq(0).html() + '</div>');
    }
    while ($('table').length > 0) {
        $('table').eq(0).replaceWith('<div class="card-panel">' + $('table').eq(0).html() + '</div>');
    }

    $('.submit5').addClass('btn');

    $('.col:has(input)').eq(0).replaceWith('<form action="syllabus_file.asp" method="post" class="col right">' + $('.col:has(input)').eq(0).html() + '</form>');

    $('.col:has(a)').addClass('right');
    $('a').addClass(function () {
        return "waves-effect waves-teal btn-flat";
    });
    $('.row').eq(1).remove();
    $('.row:gt(0)').before('<div class="divider"></div>');

    // Download check box
    for (var i = $('.btn-flat').length - 1; i >= 0; i--) {
        $('.btn-flat').eq(i).before('<span><input type="checkbox" id="' + i + '"/><label for="' + i + '"></label></span>');
    }

    // Download button
    $('.card-panel').eq(1).before('<div class="row center-align card-panel"><div class="col s6"><button class="btn" id="downloadAll">Download all</button></div><div class="col s6 right"><button class="btn" id="downloadSelected">Download selected</button></div></div>');
    $('.card-panel').addClass('hoverable');

    // Multiple Download
    // Download selected
    $("#downloadSelected").click(function () {
        for (var i = $('.btn-flat').length - 1; i >= 0; i--) {
            if ($('input[type="checkbox"]').eq(i).prop('checked')) {
                $('a').get(i).click();
                sleep(4000);
            }
        }
    });
    // Download all
    $("#downloadAll").click(function () {
        var totalFiles = $('a').length;
        while (totalFiles > 0) {
            $("a").get(totalFiles - 1).click();
            totalFiles--;
            sleep(4000);
        }
    });

    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }
});