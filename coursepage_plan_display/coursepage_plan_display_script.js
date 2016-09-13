// $(function () {
//     $("link[href='style2.css']").remove(); //remove remove default css file

//     // $('body').load(chrome.extension.getURL("stud_login/stud_login.html")); //Content inside body tag will be replaced by content in stud_login.html
//     // $('table').contents().unwrap();
//     // $('tbody').contents().unwrap();
//     // $('tr').contents().unwrap();
//     // $('td').contents().unwrap();
//     // $('th').contents().unwrap();

//     // Removing inline css
//     $('font').contents().unwrap();
//     $('u').contents().unwrap();
//     $('*[style]').removeAttr('style');
//     $('*').removeAttr('cellspacing');
//     $('*').removeAttr('cellpadding');
//     $('*').removeAttr('width');
//     $('*').removeAttr('height');
//     $('*').removeAttr('bordercolor');
//     $('*').removeAttr('bgcolor');
//     $('*').removeAttr('border');
//     $('*').removeAttr('align');
//     $('*').removeAttr('valign');
//     $('*').removeAttr('colspan');
//     $('*').removeAttr('color');

//     // $('table').replaceWith('<div>' + $('table').html() +'</div>');
//     // $('tbody').replaceWith('<div>' + $('tbody').html() +'</div>');
//     // $('tr').replaceWith('<div>' + $('tr').html() +'</div>');
//     // $('td').replaceWith('<div>' + $('td').html() +'</div>');

//     // Replace table and its childrens with div or appropriate tag
//     $('table').eq(0).replaceWith('<div class="container">' + $('table').eq(0).html() + '</div>');
//     $('tr').eq(0).remove();
//     $('table').eq(1).replaceWith('<div class="card-panel">' + $('table').eq(1).html() + '</div>');

//     // $('form').eq(0).replaceWith('<div class="container">' + $('table').eq(0).html() + '</div>');
//     var x = $('form').length;
//     for (var i=x-1; i >= 0; --i) {
//         $('form').eq(i).replaceWith("<form method='post' action='syllabus_file.asp'>" + $('form').eq(i).html() + "</form>");
//     }
//     // $('form').addClass("card-panel");
//     // $("form").before("<div class='formCardPanel'>");
//     // $(".submit5").after("</div>");
//     // $('.formCardPanel').addClass('card-panel');

//     // while ($('th').length > 0) {
//     //     $('th').eq(0).replaceWith('<h6>' + $('th').eq(0).html() + '</h6>');
//     // }
//     // while ($('tbody').length > 0) {
//     //     $('tbody').eq(0).replaceWith('<div>' + $('tbody').eq(0).html() + '</div>');
//     // }
//     // $('br').remove();
//     while ($('b').length > 0) {
//         $('b').eq(0).replaceWith("<h6>" + $('b').eq(0).html() + "</h6>");
//     }
//     while ($('font').length > 0) {
//         $('font').eq(0).replaceWith('<div class="flow-text">' + $('font').eq(0).html() + '</div>');
//     }
//     // $('tr').eq(0).remove();
//     // while ($('td').length > 0) {
//     //     $('td').eq(0).replaceWith('<div class="col"><td>' + $('td').eq(0).html() + '</td></div>');
//     // }
//     // while ($('tr').length > 0) {
//     //     $('tr').eq(0).replaceWith('<div class="card-panel"><div class="row">' + $('tr').eq(0).html() + '</div></div>');
//     // }
//     // while ($('table').length > 0) {
//     //     $('table').eq(0).replaceWith('<div>' + $('table').eq(0).html() + '</div>');
//     //     // $('table').eq(0).replaceWith('<div class="card-panel">' + $('table').eq(0).html() + '</div>');
//     // }

//     $('.submit5').addClass('btn');
//     $('.btn').removeClass('submit5');

//     $('#GOOGLE_INPUT_CHEXT_FLAG').remove();
//     $('iframe').remove();

//     $('.card-panel').addClass('hoverable');
// });