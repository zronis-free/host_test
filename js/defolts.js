let iconmenu=document.querySelector(".icon-menu");iconmenu.addEventListener("click",(function(e){iconmenu.classList.toggle("-active"),document.querySelector(".menu__body").classList.toggle("-active")})),document.addEventListener("click",(function(e){if(!e.target.closest(".menu")){let e=document.querySelector(".menu__body"),o=document.querySelector(".icon-menu");e.classList.remove("-active"),o.classList.remove("-active")}})),$(document).ready((function(){$(".slider-main__slider").slick({arrows:!0,dots:!0,adaptiveHeight:!1,slidesToShow:5,slidesToScroll:1,initalSlide:0,infinite:!0,centerMode:!1,speed:300,easing:"linear",autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1500,settings:{slidesToShow:3}},{breakpoint:930,settings:{slidesToShow:1}}]})}));const popupLinks=document.querySelectorAll(".-popup-link"),body=document.querySelector("body"),lockPadding=document.querySelectorAll(".-lock-padding");let unlock=!0;const timeout=500;if(popupLinks.length>0)for(let e=0;e<popupLinks.length;e++){const o=popupLinks[e];o.addEventListener("click",(function(e){const t=o.getAttribute("href").replace("#","");popupOpen(document.getElementById(t)),e.preventDefault()}))}const popupCloseIcon=document.querySelectorAll(".-colse-popup");if(popupCloseIcon.length>0)for(let e=0;e<popupCloseIcon.length;e++){const o=popupCloseIcon[e];o.addEventListener("click",(function(e){popupClose(o.closest(".popup")),e.preventDefault()}))}function popupOpen(e){if(e&&unlock){const o=document.querySelector(".popup.-open");o?popupClose(o,!1):bodyLock(),e.classList.add("-open"),e.addEventListener("click",(function(e){e.target.closest(".popup__body")||popupClose(e.target.closest(".popup"))}))}}function popupClose(e,o=!0){unlock&&(e.classList.remove("-open"),o&&bodyUnlock())}function bodyLock(){const e=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px";if(lockPadding.length>0){for(let o=0;o<lockPadding.length;o++){lockPadding[o].style.paddingRight=e}body.style.paddingRight=e,body.classList.add("-lock"),unlock=!1,setTimeout((function(){unlock=!0}),500)}}function bodyUnlock(){setTimeout((function(){for(let e=0;e<lockPadding.length;e++){lockPadding[e].style.paddingRight="0"}body.style.paddingRight="0",body.classList.remove("-lock")}),500),unlock=!1,setTimeout((function(){unlock=!0}),500)}document.addEventListener("kaydown",(function(e){if(27===e.wich){popupClose(document.querySelector(".popup.-open"))}})),Element.prototype.closest||(Element.prototype.closest=function(e){for(var o=this;o;){if(o.matches(e))return o;o=o.parentElement}return null}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);