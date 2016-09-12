$(function () {
    $('link[href="style.css"]').remove(); //remove remove default css file
    $('link[href="style2.css"]').remove();
    // $("body").addClass("container");
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

    // marquee title
    var x_marquee = $('marquee');
    var x_title = $("a[onclick]");
    for(var i=0; i<x_marquee.length; ++i){
        var title = x_marquee.eq(i).find('title').text();
        var title_onclick = x_title.eq(i).attr('onclick');
        x_marquee.eq(i).before('<hr><a class="flow-text" href="#" onclick="' + title_onclick + '">' + title + '</a><div class="divider"></div>');
    }
    x_title.remove();

    $('marquee').addClass('card-panel');
    // $('table').replaceWith('<div>' + $('table').html() +'</div>');
    // $('tbody').replaceWith('<div>' + $('tbody').html() +'</div>');
    // $('tr').replaceWith('<div>' + $('tr').html() +'</div>');
    // $('td').replaceWith('<div>' + $('td').html() +'</div>');

    // Remove unnecessary elements
    $('#GOOGLE_INPUT_CHEXT_FLAG').remove();
    $('iframe').remove();
    $('br').remove();

    // Replace table and its childrens with div or appropriate tag
    while ($('table').length > 0) {
        $('table').eq(0).replaceWith('<div class="container-fluid">' + $('table').eq(0).html() + '</div>');
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
        $('b').eq(0).replaceWith("<p class='flow-text'>" + $('b').eq(0).html() + "</p>");
    }

    //Attendence
    $("<div class='card-panel'><div class='row' id='attendenceCard'></div></div>").insertBefore(".main_content");
    while ($("img[src='HTMLGraph/images/1x1_83C4FE.gif']").length > 0) {
        var imgTitle = $("img[src='HTMLGraph/images/1x1_83C4FE.gif']").eq(0).attr('title');
        imgTitle = imgTitle.split(":");
        if (imgTitle[1] > 75) {
            $("#attendenceCard").append("<div class='col'>" + imgTitle[0] + " " + "<b>" + imgTitle[1] + "%</b>" + "<div class='progress'><div class='determinate' style='width: " + imgTitle[1] + "%'></div></div></div>");
        } else if (imgTitle[1] == 75) {
            $("#attendenceCard").append("<div class='col' style='color:orange'>" + imgTitle[0] + " " + "<b>" + imgTitle[1] + "%</b>" + "<div class='progress'><div class='determinate' style='width: " + imgTitle[1] + "%'></div></div></div>");
        } else {
            $("#attendenceCard").append("<div class='col' style='color:red'>" + imgTitle[0] + " " + "<b>" + imgTitle[1] + "%</b>" + "<div class='progress'><div class='determinate' style='width: " + imgTitle[1] + "%'></div></div></div>");
        }
        $("img[src='HTMLGraph/images/1x1_83C4FE.gif']").eq(0).remove();
    }
    $(".main_content").remove();

    $('.card-panel').addClass('hoverable');
});