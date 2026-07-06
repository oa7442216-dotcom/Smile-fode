// رسالة ترحيب عند فتح الموقع
window.onload = function () {
    console.log("مرحباً بك في سمايل فود");
};

// تأثير بسيط عند الضغط على زر "تسوق الآن"
const btn = document.querySelector(".btn");

if(btn){
    btn.addEventListener("click", function(){
        btn.innerText = "جاري التحويل...";
    });
}
