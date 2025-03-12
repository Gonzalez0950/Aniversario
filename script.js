$(Document).ready(function(){
    $(".container").mouseenter(function(){
        $(".card").stop().animate({
            top:"-150px"
        }, "slow");
        $(".hearts").stop().animate({
            top:"-170px"
        }, "slow");
    }).mouseleave(function(){
         $(".card").stop().animate({
            top:0
         }, "slow"); 
         $(".hearts").stop().animate({
            top:0
         }, "slow"); 
    });
});