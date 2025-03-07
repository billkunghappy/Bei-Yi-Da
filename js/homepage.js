// when start
$("#slide_bg").animate({"background-position-x":"0%"},{ duration: 15000, queue: false });
$("#slide_front").animate({"background-position-x":"0%"},{ duration: 15000, queue: false });
//click
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var car_run_timer = set_gif(72,"#car",'img/gif/car_run/carsmoke_000',2);
var moon_timer = set_gif(72,"#enter",'img/gif/moon/moon_000',2);
var car_leave=null;
$("#enter").click(async function(){
    if ($( window ).width()<700){
        map_car_run_timer = set_gif(72,"#map_item_car > img",'img/gif/car_run_square/carsmokeone_000',2);
        map_moon_timer = set_gif(72,"#map_item_moon img",'img/gif/moon/moon_000',2);
    }
    clearInterval(car_run_timer);
    clearInterval(moon_timer);
    $('#car').hide();
    $('#car').attr('src','img/gif/car_speedup/forwardone_00000.png');
    $('#car').show();
    var car_speedup = set_gif(38,"#car",'img/gif/car_speedup/forwardone_000',2);
    setTimeout(function() {
        clearInterval(car_speedup);
        $('#car').attr('src','img/gif/car_leave/forwardtwo_00000.png');
        car_leave = set_gif(48,"#car",'img/gif/car_leave/forwardtwo_000',2);
    }, 520 );
    
    // await sleep(2000);
    setTimeout(function() {
        if ($( window ).width()<$( window ).height())
            $("#car").animate({transform: 'translateY(64%) translateX(-80%)'},{ duration: 1800, queue: false });  
        else
            $("#car").animate({transform: 'translateY(15%) translateX(-80%)'},{ duration: 1800, queue: false });
    }, 500 );
    setTimeout(function() {
       clearInterval(car_leave);
    }, 2300 );
	setTimeout(function() {
        // $("#catalog").animate({transform: 'translateX(-100%)'},{ duration: 1800, queue: true });
        $("#map_bg").animate({transform: 'translateX(0%)'},{ duration: 900, queue: false });
        $("#catalog").animate({transform: 'translateX(0%)'},{ duration: 1200, queue: false });
        $("#slide_bg").animate({"opacity": '0.5', "display":"none"},{ duration: 1800, queue: true });
        $("#slide_front").animate({"opacity": '0.5', "display":"none"},{ duration: 1800, queue: true });
    }, 1200 );
    setTimeout(function() {
    	$("#slide_bg").stop();
    	$("#slide_front").stop();
    }, 3600 );
});


