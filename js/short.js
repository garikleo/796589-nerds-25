var popup_link=document.querySelector(".button-write-to-us"),popup=document.querySelector(".write-us-popup"),popup_close=document.querySelector(".modal-content-close-button"),popup_form=popup.querySelector("form"),popup_name=popup.querySelector("[name=Name]"),popup_email=popup.querySelector("[name=E-mail]"),popup_text=popup.querySelector("textarea"),storage_name=localStorage.getItem("user_name"),storage_email=localStorage.getItem("user_email");popup_link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("write-us-popup-show"),storage_name&&storage_email?(popup_name.value=storage_name,popup_email.value=storage_email,popup_text.focus()):popup_name.focus()}),popup_form.addEventListener("submit",function(e){popup_name.value&&popup_email.value&&popup_text.value?(localStorage.setItem("user_name",popup_name.value),localStorage.setItem("user_email",popup_email.value)):(e.preventDefault(),popup.classList.remove("modal_error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal_error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("write-us-popup-show")&&(popup.classList.remove("write-us-popup-show"),popup.classList.remove("modal_error"))}),popup_close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("write-us-popup-show"),popup.classList.remove("modal_error")});
