// when start
$("#slide_bg").animate({"background-position-x":"0%"},{ duration: 15000, queue: false });
$("#slide_front").animate({"background-position-x":"0%"},{ duration: 15000, queue: false });
//click
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


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
var car_run_timer = set_gif(72,"#car",'img/gif/car_run/carsmoke_000',2);
var moon_timer = set_gif(72,"#enter",'img/gif/moon/moon_000',2);

$("#enter").click(async function(){
    clearInterval(car_run_timer);
    $('#car').hide();
    $('#car').attr('src','img/gif/car_speedup/forwardone_00000.png');
    $('#car').show();
    var car_speedup = set_gif(38,"#car",'img/gif/car_speedup/forwardone_000',2,15);
    setTimeout(function() {
        clearInterval(car_speedup);
        $('#car').attr('src','img/gif/car_leave/forwardtwo_00000.png');
        var car_leave = set_gif(48,"#car",'img/gif/car_leave/forwardtwo_000',2);
    }, 520 );
    
    // await sleep(2000);
    setTimeout(function() {
	   $("#car").animate({transform: 'translateY(15%) translateX(-80%)'},{ duration: 1800, queue: false });
    }, 500 );
    setTimeout(function() {
       clearInterval(car_leave);
    }, 2300 );
	setTimeout(function() {
        // $("#catalog").animate({transform: 'translateX(-100%)'},{ duration: 1800, queue: true });
        $("#catalog").animate({"left": '0px'},{ duration: 1800, queue: true });
        $("#map_bg").animate({"margin-left": '0px'},{ duration: 900, queue: false });
        $("#slide_bg").animate({"opacity": '0.5', "display":"none"},{ duration: 1800, queue: true });
        $("#slide_front").animate({"opacity": '0.5', "display":"none"},{ duration: 1800, queue: true });
    }, 1200 );
    setTimeout(function() {
    	$("#slide_bg").stop();
    	$("#slide_front").stop();
    }, 3600 );
});


