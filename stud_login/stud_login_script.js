$(function () {
    $("link[href='style.css']").remove(); //remove remove default css file
    $("link[href='style2.css']").remove();
    $("body").addClass("container");
    $('body').load(chrome.extension.getURL("stud_login/stud_login.html")); //Content inside body tag will be replaced by content in stud_login.html
});