$(function(){

    // カルーセル
    $('.carousel').slick({
        autoplay: true,
      dots: true,
      infinite: true,
      arrows:false,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });

    // リンクのホバー時設定
    $('.midashi').on('mouseover',function(){
       $(this).animate({
        opacity:0.5,
       },100); 
    });
    $('.midashi').on('mouseout',function(){
       $(this).animate({
        opacity:1.0,
       },100); 
    });

    $('.nav1').on('mouseover',function(){
       $(this).animate({
        opacity:0.5,
       },100); 
    });
    $('.nav1').on('mouseout',function(){
       $(this).animate({
        opacity:1.0,
       },100); 
    });

    $('.nav2').on('mouseover',function(){
       $(this).animate({
        opacity:0.5,
       },100); 
    });
    $('.nav2').on('mouseout',function(){
       $(this).animate({
        opacity:1.0,
       },100); 
    });

    // トップに戻るボタン
    $(window).on('scroll',function(){
      if($(this).scrollTop() > 100){
         $('#back-btn').fadeIn();
      } else{
         $('#back-btn').fadeOut();
      }
    });
   //  スクロールを滑らかにする
    $('a[href^="#"]').on('click',function(event){
      event.preventDefault();
      var href =$(this).attr('href');
      var $target = href ==='#'?$('html'):$(href);

      if($target.length){
         var position = $target.offset().top;
         $('html,body').animate({scrollTop:position},1000);
      }
    });
    
   //  スクロールでセクションをフェードインさせる
  $(window).on('scroll',function(){
   $('.fade-section').each(function(){
      var elemTop = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeght = $(window).height();
      if(scroll > elemTop-windowHeght + 100){
         $(this).addClass('fadeIn');
      }
   });
  });

   //   モーダルの準備
   var $modal = $('#myModal');
   var $modalImg = $('#js-modal-img');
   var $captionText = $('#caption');

   //   サムネイル画像をクリックした時の処理
  $('.modal img').on('click',function(){
   var imgSrc = $(this).attr('src');
   var imgAlt = $(this).attr('alt');

   $modalImg.attr('src',imgSrc);
   $captionText.text(imgAlt);
   $modal.fadeIn();
  });

   //閉じるボタンでモーダルを閉じる
   $('.close').on('click',function(){
      $modal.fadeOut();
   });   

});
