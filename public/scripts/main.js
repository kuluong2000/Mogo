"use strict";function menuToggle(){var t=document.querySelector(".header-menuToggle"),o=document.querySelector(".header-menu");t.classList.toggle("active"),o.classList.toggle("active"),window.addEventListener("click",function(e){o.contains(e.target)||e.target.matches(".header-menuToggle")||(o.classList.remove("active"),t.classList.remove("active"))})}function wedo_click(){var e=document.querySelector(".wedo-item-header"),t=document.querySelector(".open"),o=document.querySelector(".wedo-item-content");document.querySelector(".wedo-item-header-arrow");e.classList.toggle("open"),o.style.display="none",t.classList.toggle("close"),o.style.display="block",t.classList.remove("close"),t.classList.remove("open")}$(document).ready(function(){$(".quote-container").slick({prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",responsive:[{breakpoint:767,settings:{arrows:!1}}]})});