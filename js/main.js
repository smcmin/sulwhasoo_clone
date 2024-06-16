document.querySelector("h1").addEventListener("click", function () {
  {
    alert("안녕하세요!");
  }
});

//  header hover
// document.querySelector(".header-product").addEventListener("mouseover", function(){
//   {
//     console.log('허버됨');
//     document.querySelector(".depth-2").style.display = "block"
//   }
// })


$(document).ready(function () {
  $(".depth-1-item").hover(
    function () {
      $(this).children().next().addClass('hover');
    },
    function () {
      $(this).children().next().removeClass('hover');
    }
  );

  // $('.swiper-slide.swiper-slide-visible').children().next().addClass('fadeup-ani');

  // console.log($('.swiper-slide.swiper-slide-visible').children().next())

 
}


);

