// 新的年份(目錄頁、學生手冊等的標題年份)
var new_year = "109";
// 歷年成果頁面年份，年份由大到小排列
var history_names=["108","107","106"];
// 新生始業輔導網站的下載檔案
var freshman_manual = "108學年度新生研習手冊.pdf";
// 目錄頁的學生手冊檔案
var student_manual = "108學生手冊.pdf";
// 最新消息頁面的課表連結
var news_course_list = "109課表.pdf"






var catalog_1_html = new_year+"學年新生<br>始業教育課程";
$("#catalog_item_1 span").html(catalog_1_html);
$("#map_item_1 span").html(catalog_1_html);
$("#freshman-title span").html(new_year+"學年度新生")
$("#freshman-title .sub").html(new_year+"學年度新生研習手冊")

$(".modal-img.left span").html(new_year+"學生手冊")
$("#freshman-title a").attr("href", "content/"+freshman_manual)
$(".modal-img.left").attr("href", "content/"+student_manual)
$("#news_course_list").attr("href", "content/"+news_course_list)