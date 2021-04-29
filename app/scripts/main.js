// Slick slider
// $(document).ready(function () {
//   $(".quote-container").slick({
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// });
//sroll 
// //slick slider

$(document).ready(function(){
    $('.quote-container').slick({
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
              breakpoint: 767,
              settings: {
                arrows:false
              }
            }
            
        ]
    })
  });





//window.addEventListener('scroll', function(){
//      const header= document.querySelector('.header-top');
//      header.classList.toggle("sticky", window.scrollY >0);
// })
function menuToggle(){
    const menuToggle= document.querySelector('.header-menuToggle');
    const menuHeader=document.querySelector('.header-menu');
    menuToggle.classList.toggle('active');
    menuHeader.classList.toggle('active')
    window.addEventListener('click', function(e){
        if (!menuHeader.contains(e.target) && !e.target.matches('.header-menuToggle')){
            menuHeader.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}