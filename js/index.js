$(document).ready(function(){

  $(".menu").hover(function(){ //주메뉴영역전체에 오버시
    $(this).find(".mainMenu .subMenu").stop().slideDown();
  },function(){
    $(this).find(".mainMenu .subMenu").stop().slideUp();
  });

  });


  $(document).ready(function () {

    let $img = $(".changeimg ul li");
    let $btn = $(".btn ul li");
    let $lbtn = $(".side_btn .lbtn");
    let $rbtn = $(".side_btn .rbtn");
    let oldidx=0; 
    let idx=0; 
    let img_n = $img.length; 

    //이미지와 버튼이 바뀌는 함수
    function changeImg(idx){ 

      if(oldidx != idx){ 
  
        $btn.eq(oldidx).removeClass("active");
        $btn.eq(idx).addClass("active"); 
        $img.eq(oldidx).stop().fadeOut("300"); 
        $img.eq(idx).stop().fadeIn("300"); 
      }
  
      oldidx = idx; 

    };
  
    //자동함수 생성
    function changeAuto(){

      idx++;
      if(idx>img_n-1){
        idx=0;
      };

      changeImg(idx);

    };

    timer=setInterval(changeAuto,4000); 

    //하단버튼 클릭시......
    $btn.click(function(){

      clearInterval(timer); 
      idx=$(this).index(); 
      changeImg(idx);
      timer=setInterval(changeAuto,4000);

    });

    //좌우버튼 클릭시......
    $rbtn.click(function(){

      clearInterval(timer);
      idx++;
      if(idx>img_n-1){ 
        idx=0;
      }
      changeImg(idx);
      timer=setInterval(changeAuto,4000);
    });

    $lbtn.click(function(){
      
      clearInterval(timer);
      idx--;
      if(idx<0){
        idx=img_n-1; 
      }
      changeImg(idx);
      timer=setInterval(changeAuto,4000);
    });

  });


  $(document).ready(function (){

    let $simg=$(".slide ul");
    let $simgli=$(".slide ul li");
    let $sbtn=$(".slide_btn ul li");
    let $snext=$(".slide_side_btn .nex");
    let $spre=$(".slide_side_btn .pre");
    let simg_w=$simgli.width(); 
    let simg_n=$simgli.length; 
    let soldidx=0; 
    let sindex=0; 

    //index번째 비주얼이미지 이동하는 함수생성
    function slideImg(sindex){

      targetX=-(sindex*simg_w) 

      $simg.animate({left:targetX},600); 
      $sbtn.eq(soldidx).removeClass("active"); 
      $sbtn.eq(sindex).addClass("active"); 
      soldidx=sindex;

    };

    //슬라이드 자동함수 생성
    function slideAuto(){

      sindex++;
      if(sindex==simg_n){ 
        sindex=0;
      }
      slideImg(sindex);
    };

    auto=setInterval(slideAuto,4000);

    //하단버튼.....
    $sbtn.click(function(){

      clearInterval(auto); 
      sindex=$(this).index();
      slideImg(sindex);
      auto=setInterval(slideAuto,4000); 

    });

  $spre.click(function(){

      clearInterval(auto);
      sindex--;
      if(sindex<0){ 
        sindex=simg_n-1; 
      }
      slideImg(sindex);
      auto=setInterval(slideAuto,4000);
    });

  });


  $(document).ready(function(){

    let goldidx=0;
    let gidx=0;
  
    function galleryImg(gidx){
  
      if(goldidx!=gidx){
  
        $(".thumbs li").eq(goldidx).css({"opacity":0.3}); //기존의 썸네일 흐리게
        $(".thumbs li").eq(gidx).css({"opacity":1}); //선택된 썸네일 선명하게
        $(".largeImg li").eq(goldidx).stop().fadeOut(300); //기존의 이미지 사라짐
        $(".largeImg li").eq(gidx).stop().fadeIn(300); //선택된 이미지 나타남
        $(".imgText li").eq(goldidx).stop().fadeOut(300);//기존의 텍스트 사라짐
        $(".imgText li").eq(gidx).stop().fadeIn(300); //선택된 텍스트 나타남

      };
      goldidx=gidx;

    };

    //썸네일버튼 클릭시.......
    $(".thumbs li").click(function(){
      gidx=$(this).index();
      galleryImg(gidx)
    });

    //이전버튼 클릭시.........
    $(".left_btn").click(function(){
      gidx--;
      if(gidx<0){
        gidx=10;
      }
    galleryImg(gidx);
  });

    //다음버튼 클릭시..........
    $(".right_btn").click(function(){
      gidx++;
      if(gidx>10){
        gidx=0;
      }
      galleryImg(gidx);
  });

  });


  $(document).ready(function(){

    $(".title").click(function(){
  
      $(this).siblings(".title").removeClass("active");
      $(this).toggleClass("active"); 
  
      let dataImage = $(this).attr("data-image");
      $(".image img").attr("src",dataImage).hide().fadeIn();

  });

  });


  $(document).ready(function(){

    $("dl dt").click(function(){
      
      $(this).siblings("dd").hide("slow");
      $(this).next().show("slow");
      $(this).siblings("dt").removeClass("selected");
      $(this).addClass("selected");
    
      let dataImage= $(this).attr("data-background");
      $(".imagee img").attr('src', dataImage).hide().fadeIn();

    });

    });
