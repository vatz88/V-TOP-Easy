$(function () {
    //remove remove default css file
    $('link[href="style.css"]').remove();
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

    $('center').eq(0).replaceWith('<h5>' + $('center').eq(0).text() + '</h5>');

    // attendance date range form
    while ($('form table').length > 0) {
        $('form table').eq(0).replaceWith('<div>' + $('form table').html() + '</div>');
    }
    $('form').eq(0).addClass('card-panel hoverable');
    $('form b').remove();
    $('form').eq(0).find('a').remove();
    $('form img').remove();
    //from date 32 ; to date 33
    $('#demo32').attr('type', 'date');
    $('#demo32').removeAttr('readonly');
    $('#demo32').addClass('datepicker');
    $('#demo33').attr('type', 'date');
    $('#demo33').removeAttr('readonly');
    $('#demo33').addClass('datepicker');
    $('#demo32').attr('placeholder','Select from date');
    $('#demo33').attr('placeholder','Select to date');
    $('#demo32').attr('value','11-07-2015');
    $('#demo33').attr('value','11-11-2018');

    $('form').eq(0).prepend('<b>CGPA<b>');

    // 
    // $('table').eq(0).replaceWith('<div class="card-panel">' + $('table').eq(0).html() + '</div>');
    // $('tr').eq(0).remove();
    while ($('table').eq(2).find('td').length > 0) {
        $('table').eq(2).find('td').eq(0).replaceWith('<div class="col s1 center-align"><td>' + $('table').eq(2).find('td').eq(0).html() + '</td></div>');
    }
    while ($('table').eq(2).find('tr').length > 0) {
        $('table').eq(2).find('tr').eq(0).replaceWith('<div class="card-panel hoverable"><div class="row">' + $('table').eq(2).find('tr').eq(0).html() + '</div></div>');
    }
    while ($('table').length > 2) {
        $('table').eq(2).replaceWith('<div>' + $('table').eq(2).html() + '</div>');
    }
    $('.col:first-child').remove(); //Sr. no.
    // $('.col:last-child').addClass('right');
    $('.col:nth-child(2)').addClass('s2 boldCol');
    $('.col:nth-child(8)').append('%');
    $('.col:nth-child(8)').addClass('boldCol');

    $("input[type='submit']").addClass('btn');
    var i = $(".btn").parent().length - 1;
    while (i >= 0) {
        i--;
        $(".btn").parent().eq(i).replaceWith('<form method="post" action="attn_report_details.asp">' + $(".btn").parent().eq(i).html() + '</form>');
    }
    $(".submit3").addClass('btn');

    // remove useless elements
    $('iframe').remove();

    $('table').addClass(function () {
        return 'centered hoverable highlight z-depth-1';
    });

    // datepicker initialization
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 5 // Creates a dropdown of 15 years to control year
    });
});