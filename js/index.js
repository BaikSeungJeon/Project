// 구현한 기능들은 소스코드 위에 주석으로 표시했습니다.

// 1. 메인 슬라이드 배너 버튼 클릭 시, 팝업 창 띄웁니다. 
// 버튼 3개에, 품절을 알리는 팝업창을 띄웠습니다.
$(function(){
    $("#content .main_btn>li").click(function(){ // 
        $("#popup").css("display", "block");
    });
    $("#content .modal_close").click(function(){
        $("#popup").css("display", "none");
    });
// 2. 팝업 창 안에 '닫기' 버튼 말고, 바깥 창을 눌렀을 때도 닫히게끔 하기
    $(document).click(function(e){
        if ($("#popup").is(e.target)) {
            $("#popup").css("display", "none");
        }
    });
});


// 3. 카테고리에 서브메뉴를 slideDown과 slideUp으로 구현했습니다.
// 카슬라이드 함수를 이용했고, css로 호버로 주는 것보다 더 자연스러운 애니메이션 구현이 가능합니다.
$(function(){
    $(".main_menu>.slider>a").on({ 
        mouseenter : function(){ 
            $(this).next("ul").stop().slideDown(); 
        }, 
        mouseleave : function(){ 
            $(this).next("ul").stop().slideUp();
        }
    });
    $(".main_menu>.slider>ul").on({ 
        mouseenter : function(){ 
            $(this).stop().slideDown(); 
        }, 
        mouseleave : function(){ 
            $(this).stop().slideUp();
        }
    });
});

// 4. visual img 메인 슬라이드 베너를 jquery로 구현했습니다.
// 가로로 배열 후, clone과 insertAfter를 이용해 이미지에 무한 루프를 줬습니다.
$(function(){
    let now = 0;
    let width = $(".visual_img li").outerWidth();

    $(".visual_img>li:first").clone(true).insertAfter(".visual_img>li:last");

    setInterval(function(){
        now++;
        let leftNum = width * -now;

        $(".visual_img").animate({left : leftNum}, 2000, function(){

            if (now == 2) {
                now = 0;
                $(".visual_img").css("left", "0");
            }
        });
    }, 4000);
});

// 5. on 클래스를 줘서 메뉴에 under bar 주기
$(function(){
    $(".main_menu>.slider").on({
        mouseenter: function(){
            $(this).addClass("on").children("ul").stop(true).slideDown();
        },
        mouseleave: function(){
            $(this).removeClass("on").children("ul").stop(true).slideUp();
        }
    });
});