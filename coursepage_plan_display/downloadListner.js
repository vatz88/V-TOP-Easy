// var folder_name = "";
// var file_name = "";

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     // console.log(sender.tab ?
//     //     "from a content script:" + sender.tab.url :
//     //     "from the extension");
//     // if (request.greeting == "hello")
//     //     sendResponse({ farewell: "goodbye" });
//     folder_name = request.passFolderName;
//     // file_name = request.passFileName;
// });

// chrome.downloads.onDeterminingFilename.addListener(function (item, suggest) {
//     suggest({ filename: folder_name + "/" + item.filename });
// });

chrome.downloads.onDeterminingFilename.addListener(function (item, suggest) {

    var file_extension = item.filename.substring(item.filename.lastIndexOf(".") + 1);
    var temp = item.filename.substring(0, item.filename.lastIndexOf("."));
    temp = temp.split("_");
    var templen = temp[1].length;
    if (templen == 6) {
        // Format: FALLSEM2016-17_ITE314_TH_8012_09-AUG-2016_RM001_File programs.pdf
        file_name = temp[4] + "_" + temp[temp.length - 1];
        folder_name = temp[1] + "_" + temp[2];
        suggest({ filename: folder_name + "/" + file_name + "." + file_extension });
    } else if (templen == 4) {
        // FALLSEM2016-17_1847_RM001_11-JUL-2016_ITE302_ETH
        file_name = temp[3];
        folder_name = temp[temp.length - 2] + "_" + temp[temp.length - 1];
        suggest({ filename: folder_name + "/" + file_name + "." + file_extension });
    } else {
        suggest({ filename: "VIT downloads/" + item.filename });
    }
});