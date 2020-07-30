var carousel_img_num=[6,6,6];
var carousel_now=[0,0,0];
for (var i = 0; i <3 ; i++) {
	$('#carousel-title-'+i.toString()).html(history_names[i]+"學年")
}


function carousel_move(event){
	history_index = event.data.history_index;
	direction = event.data.direction;
	// remove old active
	old_index=carousel_now[history_index].toString();
	$("#history_"+history_index+" .dot-"+old_index).removeClass("active");
    carousel_now[history_index] = (carousel_now[history_index]+direction)%carousel_img_num[history_index];
    now_index=carousel_now[history_index].toString();
    $("#history_"+history_index+" .img-"+old_index).animate({"opacity":"0"},{ duration: 400, queue: false});
    $("#history_"+history_index+" .img-"+now_index).animate({"opacity":"1"},{ duration: 400, queue: false});
    $("#history_"+history_index+" .dot-"+now_index).addClass("active");
}


for (var i = 0; i < 3; i++) {
	$("#history_"+i.toString()+" .img-0").attr("src","content/"+history_names[i]+"/pic_0.jpg");
	$("#history_"+i.toString()+" .course_list").attr("src","content/"+history_names[i]+"/course_list.png");
	for (var j = 1; j < carousel_img_num[i]; j++) {
		// init dot
		new_dot = $("#history_"+i.toString()+" .dot-0").clone();
		new_dot.removeClass("dot-0");
		new_dot.addClass("dot-"+j.toString());
		new_dot.appendTo("#history_"+i.toString()+" .custom-carousel-footer");
		// init img
		new_img = $("#history_"+i.toString()+" .img-0").clone();
		new_img.removeClass("img-0");
		new_img.addClass("img-"+j.toString());
		new_img.attr("src","content/"+history_names[i]+"/pic_"+j+".jpg")
		new_img.css("opacity","0");
		new_img.appendTo("#history_"+i.toString()+" .custom-carousel");
		
	}
	$("#history_"+i.toString()+" .dot-0").addClass("active");
	//init arrow
	$("#history_"+i.toString()+" .arrow.left").click({history_index: i.toString(), direction: -1},carousel_move);
	$("#history_"+i.toString()+" .arrow.right").click({history_index: i.toString(), direction: 1},carousel_move);
}
