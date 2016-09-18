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
    // $('*').removeAttr('colspan');
    // $('*').removeAttr('rowspan');
    $('font').contents().unwrap();
    $('u').contents().unwrap();
    $('br').remove();

    $('table').eq(0).replaceWith('<div class="container">' + $('table').eq(0).html() + '</div>');

    $('table').eq(0).replaceWith('<table>' + $('table').eq(0).html() + '</table>');

    $('table').eq(1).replaceWith('<table>' + $('table').eq(1).html() + '</table>');

    $('table').addClass(function(){
        return 'centered highlight z-depth-1';
    });

    // for(var i=$('td').length-1; i>=0; i--){
    //     if($('td').eq(i).text() == ''){
    //         $('td').eq(i).remove();
    //     }
    // }

    while($('b').length > 0){
        $('b').eq(0).replaceWith('<h5>' + $('b').eq(0).text() + '</h5>');
    }
    $('center').eq(0).replaceWith('<h4>' + $('center').eq(0).text() + '</h4>');

    // remove useless elements
    $('#GOOGLE_INPUT_CHEXT_FLAG').remove();
    $('iframe').remove();
});