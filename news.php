<!DOCTYPE html>
<html>
<head>
	<title>最新消息</title>
	<meta charset="UTF-8">
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/style_rwd.css">
	<link rel="stylesheet" type="text/css" href="css/news.css">
</head>
<body>
	<input id="current_pos" style="display: none;" value="3">
	<!-- Information -->
	<div id="information">
        <div class="main-title">
            <div class="bird"></div>
            <div class="custom-title">最新消息</div>
        </div>
		<div class="main-content">
            <div class="context top" style="padding-top: 4vh;">
                為協助學校新鮮人瞭解學校概況、教學行政
                資源與熟悉校園環境等，特於108年9月2日
                (星期一)至9月4日(星期三)辦理108學年度
                新生入學始業教育活動，課程安排精精采有
                趣，希望學校新鮮人能不吝展現自己的熱情
                參與喔！
                <br>
                參加人員：大學部新生、轉學生暨舞蹈七年
                一貫制新生（含先修一及一貫制四年級新生)
            </div>
            <div class="title">新生始業教育課程時間</div>
            <div class="context list" style="padding-bottom: 4vh;">
                （1）報到時間：108年9月2日(星期一)<br>
                <span style="visibility: hidden; margin-left: -0.5vw; padding: 0px;">（2）課程時間：</span>
                <span style="color: #969696; display: inline;">上午8時30分至下午17時</span><br>
                <p class="p_br"></p>
                （2）課程時間：108年9月2-4日<br>
                 <span style="visibility: hidden; margin-left: -0.5vw; padding: 0px;">（2）課程時間：</span>
                 <span style="color: #969696; display: inline;">上午8時50分至17時</span><br>
                 <p class="p_br"></p>
                （3）課程地點：本校展演中心音樂廳<br>
                <p class="p_br"></p>
                （4）下載本校<a id="news_course_list"href="#" style="color: #eb9387; display: inline;">109學年度新生始業教育課程表</a><br>
                <!-- <p style="width: 100%; height: 1vh; margin: 0px;"></p> -->
            </div>
        </div>
        <div class="sub-content">
            <div class="title" style="color:#ba3f46;">注意事項：</div>
            <div class="context" style="color:#5a6268; padding-bottom: 1em;">
                1. 新生請務必準時報到，因故無法參加者，請務
                必事先或於7日內依照請假程序完成請假，無故缺
                席者，予以登記曠課。【學生請假單】
            </div>
            <div class="context" style="color:#5a6268; padding-bottom: 1em;">
                2. 當日服裝以整齊端莊為原則，並應注意劇場禮
                儀，進入音樂廳時不可飲食及穿著拖鞋，室外課
                程請攜帶陽傘、便帽，以便防曬，室內課程請攜
                帶薄外套，以禦冷氣。
            </div>
            <div class="context" style="color:#e2dad5; padding-bottom: 0px; margin-bottom: 0px;">
                新生相關資訊可上學校網頁新生入口網查詢：
            </div>
            <a class="context" href="http://freshartist.tnua.edu.tw/freshman/main" style="color:#e2dad5; padding-top: 0em;">
                http://freshartist.tnua.edu.tw/freshman/main
            </a>
        </div>
	</div>


	
	<img src="img/map_icon.png" id="open_index" class="map_icon">
	<!-- Catalog -->
	<div id="catalog">
		<img src="img/close.png" id="close_index_catalog" class="map_icon">
		<div class="catalog_item"  id="catalog_item_0">
			<img src="img/catalog_0.png" class="catalog_item_img">
			<span>生活輔導<br>及校園安全</span>
		</div>
		<div class="catalog_item"  id="catalog_item_1">
			<img src="img/catalog_1.png" class="catalog_item_img">
			<span>109學年新生<br>始業教育課程</span>
		</div>
		<div class="catalog_item middle"  id="catalog_item_2">
			<img src="img/catalog_2.png" class="catalog_item_img">
			<span>歷年成果</span>
		</div>
		<div class="catalog_item middle"  id="catalog_item_3">
			<img src="img/catalog_3.png">
			<span>最新消息</span>
		</div>
		<div class="catalog_item middle"  id="catalog_item_4">
			<img src="img/catalog_4.png" class="catalog_item_img" data-toggle="modal" data-target="#StudentManual">
			<span>學生手冊</span>
		</div>
		<div class="catalog_item"  id="catalog_item_5">
			<img src="img/catalog_5.png" class="catalog_item_img">
			<span>北藝大校歌</span>
		</div>
		<div class="catalog_item"  id="catalog_item_6">
			<img src="img/catalog_6.png" class="catalog_item_img" data-toggle="modal" data-target="#Course">
			<span>選課須知</span>
		</div>
	</div>
	<!-- Map -->
	<div id="map_bg">
		<img src="img/close.png" id="close_index_map" class="map_icon">
	    <div id="map_body">
	    	<img src="img/map_road.png">
			<div class="map_item under"  id="map_item_0">
				<a href="#" id="map_route_6">
				<img src="img/catalog_0.png" class="map_item_img">
				<span>生活輔導<br>及校園安全</span>
				</a>
			</div>
			<div class="map_item"  id="map_item_1">
				<a href="#" id="map_route_4">
				<img src="img/catalog_1.png" class="map_item_img">
				<span>109學年新生<br>始業教育課程</span>
				</a>
			</div>
			<div class="map_item middle"  id="map_item_2">
				<a href="#" id="map_route_1">
				<img src="img/catalog_2.png" class="map_item_img">
				<span>歷年成果</span>
				</a>
			</div>
			<div class="map_item middle under"  id="map_item_3">
				<a href="#" id="map_route_3">
				<img src="img/catalog_3_rev.png" >
				<span>最新消息</span>
				</a>
			</div>
			<div class="map_item middle"  id="map_item_4">
				<a href="#" id="map_route_5">
				<img src="img/catalog_4.png" class="map_item_img" data-toggle="modal" data-target="#StudentManual">
				<span>學生手冊</span>
				</a>
			</div>
			<div class="map_item"  id="map_item_5">
				<a href="#" id="map_route_2">
				<img src="img/catalog_5.png" class="map_item_img">
				<span>北藝大校歌</span>
				</a>
			</div>
			<div class="map_item under"  id="map_item_6">
				<a href="#" id="map_route_7">
				<img src="img/catalog_6.png" class="map_item_img" data-toggle="modal" data-target="#Course">
				<span>選課須知</span>
				</a>
			</div>
			<div class="map_item-special"  id="map_item_7">
				<img src="img/map_fork.png" class="map_item_img">
			</div>
			<div class="map_item-special"  id="map_item_8">
				<img src="img/map_ok.png" class="map_item_img">
			</div>
			<div class="map_item-special"  id="map_item_car">
				<img src="img/homepage_car.png" class="map_item_img">
			</div>
			<div class="map_item"  id="map_item_moon">
				<a href="#" id="map_route_0">
				<img src="img/homepage_enter.png" class="map_item_img">
				</a>
			</div>
	    </div>
	</div>
	<!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#StudentManual">
	  Launch demo modal
	</button> -->

	<!-- Modal -->
	<div class="modal fade" id="StudentManual" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" role="document">
	    	<div class="modal-content pop-up-modal two">
	    		<div class="modal-body">
	    			<img src="img/close.png" class="modal_close" data-dismiss="modal">
					<a class="modal-img left" href="#" download>
						<img src="img/book.png">
						<span>108學生手冊</span>
					</a>
					<a class="modal-img right" href="http://student.tnua.edu.tw/student/activity/c2.php">
						<img src="img/club.png">
						<span>社團</span>
					</a>
	    		</div>
	    	</div>
		</div>
	</div>
	<div class="modal fade" id="Course" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" role="document">
	    	<div class="modal-content pop-up-modal">
	    		<div class="modal-body">
	    			<img src="img/close.png" class="modal_close" data-dismiss="modal">
					<a class="modal-img only" href="http://freshartist.tnua.edu.tw/freshman/main/course.php">
						<img src="img/course.png">
						<span>選課資訊</span>
					</a>
	    		</div>
	    	</div>
		</div>
	</div>

	


	<div id="footer">
		<span>國立臺北藝術大學 學務處</span>
		<span>02-28961000 分機 1312</span>
		<span>地址 臺北市北投區學園路一號</span>

	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/egjs-jquery-transform/2.0.0/transform.min.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
	<script src="js/basic.js"></script>
	<script src="js/content.js"></script>
	
</body>
</html>