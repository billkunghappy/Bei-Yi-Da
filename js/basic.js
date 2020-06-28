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
var car_run_timer = set_gif(72,"#map_item_car > img",'img/gif/car_run/carsmokeone_000',2);
var moon_timer = set_gif(72,"#map_item_moon > img",'img/gif/moon/moon_000',2);