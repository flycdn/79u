var wxArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var wx_index = Math.floor((Math.random() * wxArr.length));
var stxlwx = wxArr[wx_index];
$(".wx_html").html(stxlwx);
$(".copy").attr("data-clipboard-text", stxlwx);
$(".wx_img").attr('src', 'wechat/' + stxlwx + '.jpg');