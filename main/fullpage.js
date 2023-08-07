const allBtn = document.querySelector(".all-btn");
const designBtn = document.querySelector(".design-btn");
const webBtn = document.querySelector(".web-btn");

allBtn.addEventListener("click", function (){
    $(".patterns > li").show()
})
designBtn.addEventListener("click", function (){
    $(".patterns > li").hide()
    $(".design-filter").show()
})
webBtn.addEventListener("click", function (){
    $(".patterns > li").show()
    $(".design-filter").hide()
})

$(document).ready(function(){
    $(".right").css("visibility", "hidden");
    $(".right > div").hide();
    new fullpage('#fullpage', {
        
        navigation:true,
        navigationPosition: 'right',
       
        afterLoad: function(origin, destination, direction){
            // console.log(destination)
            if(destination.index == 1) {
                // console.log("hi!")
                // $('.right').fadeIn();
                $(".right").css("visibility", "visible");
                $(".right > div").fadeIn(1000)
            }
         },
       

        
    });
    $('.main').mousemove(function(e){
        var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
        var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
        $('.main').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
      });
})
