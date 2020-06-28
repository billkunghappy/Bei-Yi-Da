// $("#map_icon").click();
function set_gif(frames,target,img_prefix,cnt_frame_dig){
    var cnt_frame=0;
    var timer = setInterval(function() {
        cnt_frame+=1;
        cnt_frame%=frames;
        cnt_frame_str = ("0" + cnt_frame).slice(-cnt_frame_dig);
        $(target).attr('src',img_prefix+cnt_frame_str.toString()+'.png');
    }, 30 );
    return timer;
}


$("#map_icon").click(async function(){
	var car_run_timer = set_gif(72,"#map_item_car > img",'img/gif/car_run_square/carsmokeone_000',2);
	var moon_timer = set_gif(72,"#map_item_moon > img",'img/gif/moon/moon_000',2);
	$("#map_bg").animate({"margin-left": '0px'},{ duration: 900, queue: false });
    $("#catalog").animate({"left": '0px'},{ duration: 900, queue: false });
});
$("#map_icon").click();
// car move(left,right)
var pos={   0:[48,75],
            1:[40,67],
            2:[35,58],
            3:[25,50],
            4:[16,32],
            5:[24,22],
            6:[24,13],
            7:[40,3]
};
var current_pos=7;
function set_car(){
    $("#map_item_car").css({"left": pos[current_pos][0].toString()+'%',"top": pos[current_pos][1].toString()+'%'});
}
set_car();
function car_move(end_index, move_speed=400){
    if ((current_pos<4 && end_index>current_pos) || (current_pos>=4 && end_index<current_pos))
        $('#map_item_car').css({"transform":"scaleX(1) scale(1.35)"});
    else
        $('#map_item_car').css({"transform":"scaleX(-1) scale(1.35)"});
    if (end_index > current_pos) {
        for (var i = current_pos; i <end_index; i++) {
            if (i==3){
                setTimeout(function() {
                    $('#map_item_car').css({"transform":"scaleX(-1) scale(1.35)"});
                }, (i-current_pos+0.5)*move_speed );

            }
            $("#map_item_car").animate({"left": pos[i+1][0].toString()+'%',"top": pos[i+1][1].toString()+'%'},{ duration: move_speed, queue: true , easing: "linear" });
        }
    }
    else if(end_index < current_pos){
        for (var i = current_pos; i >end_index; i--) {
            if (i==4){
                setTimeout(function() {
                    $('#map_item_car').css({"transform":"scaleX(-1) scale(1.35)"});
                }, (current_pos-i+0.5)*move_speed );

            }
            $("#map_item_car").animate({"left": pos[i-1][0].toString()+'%',"top": pos[i-1][1].toString()+'%'},{ duration: move_speed, queue: true , easing: "linear" });
        }
    }
    current_pos = end_index;
}

$(".map_item > a").click(function(){
    clicled=parseInt($(this).attr("id")[10]);
    car_move(clicled);

});

