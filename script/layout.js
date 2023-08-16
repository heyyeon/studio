// layout.js

$(document).ready(function(){

//세로스크롤 값 구하기
$(window).scroll(function(){
  let sPos = $(this).scrollTop();
  console.log(sPos);

  if(sPos>=800){
    $('header').addClass('act');//1.배경색변경
    // 2. 로고변경
    $('header h1 img').attr('src','./images/logo_b.png');
    // 3.메뉴색상변경, 로그인, 알림아이콘색상변경하기
    $('header .gnb > li > a, header i.fas').css('color','#333');

  }else{
    $('header').removeClass('act');//1. 배경 원래대로
    // 2. 로고변경
    $('header h1 img').attr('src','./images/gnb_logo_std@2x.png');
    // 3.메뉴색상변경, 로그인, 알림아이콘색상변경하기
    $('header .gnb > li > a, header i.fas').css('color','#fff');
  }

 
  if(sPos>=200){
    $('.p01 p').eq(0).fadeIn(1000);
    $('.p01 p').eq(1).delay(500).fadeIn(1000);
  }
  if(sPos>=4400){
    $('#contact .loc_box').fadeIn(1000);
    $('#contact .send').fadeIn(1000);

  }


 //비지니스 날아오기
  // if(sPos>=700){
  //   $('.b_txt').animate({'left':'0px'},500);
  //   $('.esg_img').animate({'right':'0px'},500);
  // }
});

// Scroll Animation (sa, 스크롤 애니메이션)
const saTriggerMargin = 300;
const saElementList = document.querySelectorAll('.sa');

const saFunc = function() {
  for (const element of saElementList) {
    if (!element.classList.contains('show')) {
      if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
        element.classList.add('show');
      }
    }
  }
}

window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);


//화면 스크롤 내리지 않고 헤더에 마우스 오버 시 색상변경
$('header').hover(function(){
  /*let sPos = $(window).scrollTop();    */
  // if(sPos < 1100){
  $('header').addClass('act');//1.배경색변경
  // 2. 로고변경
  $('header h1 img').attr('src','./images/logo_b.png');
  // 3.메뉴색상변경,로그인, 알림아이콘색상변경하기
  $('header .gnb > li > a, header i.fas').css('color','#333');
  
}, function(){
  let sPos = $(window).scrollTop();
  if(sPos < 800){
  $('header').removeClass('act');//1. 배경 원래대로
  // 2. 로고변경
  $('header h1 img').attr('src','./images/gnb_logo_std@2x.png');
  // 3.메뉴색상변경, 로그인, 알림아이콘색상변경하기
  $('header .gnb > li > a, header i.fas').css('color','#fff');
  }
});




// 내비게이션 변수선언
let gnb = $('.gnb li');
gnb.click(function(){
  let i = $(this).index()+1;
  console.log(i);

  $('html, body').animate({scrollTop:$('#company, #business, #port, #news, #contact').eq(i-1).offset().top-110},400, 'easeOutCubic');
  return false;
})

let next_btn = $('.next_btn');
next_btn.click(function(){
  // console.log(i);
  $('html, body').animate({scrollTop:$('#company').offset().top-110},50,'easeOutCubic');
  return false;
})



//배너 새로고침
img_num = Math.floor(Math.random()*5+1);
document.getElementById('banner').src="./images/banner0"+img_num+".png";

// 메인 company 효과
$(window).scroll(function(){

  let title1 = $(this).scrollTop();
  console.log(title1);

  // if(title1>=200){
  //   $('.find_map_txt').animate({'opacity':'1','top':'0'},500)
  // }
  // if(title1>=900){
  //   $('.guide_caption').animate({'opacity':'1','top':'0'},500)
  // }
  // if(title1>=1700){
  //   $('.store_txt').animate({'opacity':'1','top':'250px'},500)
  // }
});

// 메인 portfolio 상영, 종영 탭

let total_m=$('.g_nav li:first-child a');
let ing_m=$('.g_nav li:nth-child(2) a');
let end_m=$('.g_nav li:last-child a');

total_m.click(function(){
$('.total').fadeOut();
$('.total').fadeIn();
});

ing_m.click(function(){
  $('.total').fadeOut();
  $('.ing').fadeIn();
});

end_m.click(function(){
  $('.total').fadeOut();
  $('.end').fadeIn();
});

$('.g_nav ul li a').click(function(){
  $(this).addClass('act02').parent().siblings().find('a').
  removeClass('act02');

  return false;
});


});




//contact 창 닫기









//모달창
$(document).ready(function(){
  const modal=`
  <div class="modal">
    <div class="inner">
      <a href="#" title=""><img src="./images/modal.jpg" alt=""></a>
      <p>
        <input type="checkbox" id="ch">
        <label for="ch">오늘 하루 열지 않음</label>
        <input type="button" value="닫기" id="c_btn">
        </p>

      </div>
    </div>
  `;

  $('body').append(modal);

  let ch=$('.modal #ch'); //체크박스 변수
  if($.cookie('popup')=='none'){
    $('.modal').hide();
  }

  function closeModal(){
    if(ch.is(':checked')){
      //쿠키생성하기
      $.cookie('popup','none', {expire:1, path:'/'});
    }
    //체크박스에 체크 안한 경우 모달 숨기기
    $('.modal').hide();
  }

  //닫기버튼을 클릭하면 closeModal함수 실행하여 쿠키생성하고 모달 숨기기
  $('.modal #c_btn').click(function(){
    closeModal();
  });
  
});