$(function () {

    
    $('body').prepend('<div class="container"><div class="row card-panel hoverable switch"><label class="col right">Full menu<input id="menuSwitch" type="checkbox" checked><span class="lever"></span>Quick menu</label></div></div>');
    $('body').append('<div id="customMenu"></div>');
    $('table').hide();
    $('#customMenu').load(chrome.extension.getURL("stud_menu/customMenu.html"));
    // $('img').remove();
    // $('a').addClass('btn btn-flat');
    // $('a[href="#"]').removeAttr('href');

    $('#menuSwitch').on('change', function () {
        $('#customMenu').toggle(400);
        $('table').toggle();
    });
});