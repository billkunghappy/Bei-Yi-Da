// $("#map_icon").click();
function set_gif(frames,target,img_prefix,cnt_frame_dig, frame_speed=30){
    var cnt_frame=0;
    var timer = setInterval(function() {
        cnt_frame+=1;
        cnt_frame%=frames;
        cnt_frame_str = ("0" + cnt_frame).slice(-cnt_frame_dig);
        $(target).attr('src',img_prefix+cnt_frame_str.toString()+'.png');
    }, frame_speed );
    return timer;
}
//car move
var pos={   0:[48,75],
            1:[40,67],
            2:[35,58],
            3:[25,50],
            4:[16,32],
            5:[24,22],
            6:[24,13],
            7:[40,3]
};
var index_to_pos_index={
    0:6,
    1:4,
    2:1,
    3:3,
    4:5,
    5:2,
    6:7,
    7:0
};
var current_pos=0;
console.log($("#current_pos").val());
if (typeof $("#current_pos").val() !== 'undefined')
    current_pos=parseInt($("#current_pos").val());


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
// $(".map_item > a").click(function(){
//     clicled=parseInt($(this).attr("id")[10]);
//     car_move(clicled);

// });

// map item


var map_car_run_timer=null;
var map_moon_timer=null;
$("#open_index").click(async function(){
    if ($( window ).width()<700){//show map
        set_car();//sett car to right pos
        map_car_run_timer = set_gif(72,"#map_item_car > img",'img/gif/car_run_square/carsmokeone_000',2);
        map_moon_timer = set_gif(72,"#map_item_moon img",'img/gif/moon/moon_000',2);
    }
    $("#map_bg").animate({transform: 'translateX(0%)'},{ duration: 900, queue: false });
    $("#catalog").animate({transform: 'translateX(0%)'},{ duration: 1200, queue: false });
});
$("#close_index_catalog").click(async function(){
    if (map_car_run_timer!=null && map_moon_timer!=null) {
        clearInterval(map_car_run_timer);
        clearInterval(map_moon_timer);
    }
    $("#map_bg").animate({transform: 'translateX(100%)'},{ duration: 900, queue: false });
    $("#catalog").animate({transform: 'translateX(100%)'},{ duration: 1200, queue: false });
});
$("#close_index_map").click(async function(){
    setTimeout(function() {
        clearInterval(map_car_run_timer);
        clearInterval(map_moon_timer);
    }, 1200 );
    $("#map_bg").animate({transform: 'translateX(100%)'},{ duration: 900, queue: false });
    $("#catalog").animate({transform: 'translateX(100%)'},{ duration: 1200, queue: false });
});




// Link
var link_redirect=["school_safety.html","freshman.html","achievement.html","news.html","#","song.html","#","index.html"];
function all_links(event){
    // move car
    now_pos_index=index_to_pos_index[event.data.index];
    if (now_pos_index==current_pos)//nothing changed
        return;
    if ($( window ).width()<=700){//show map
        pos_dis = now_pos_index > current_pos?now_pos_index - current_pos:current_pos - now_pos_index;
        car_move(now_pos_index);
        if (link_redirect[event.data.index]!="#") {//need redirect
            setTimeout(function() {//redirect
                window.location.href = link_redirect[event.data.index];
            }, 400*pos_dis+300 );
        }
    }
    else{//set current pos
        current_pos = i;
        window.location.href = link_redirect[event.data.index];
    }

}
for (var i = 0; i < 7; i++) {
    $('#catalog_item_'+i.toString()+', #map_item_'+i.toString()).click({index: i}, all_links);
}
// set moon
$('#map_item_moon').click({index: 7}, all_links);
