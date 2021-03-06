$(document).ready(()=>{
    $('.tooltipped').tooltip();
    $(".map-wrapper").on("click",".Sbtn",function(){
        $(".spawn-wrapper").addClass("disabled");
        $(".spawn-box .spawn-name").text($(this).data("info"))
        $(".spawnBtn").data("spawn-name",$(this).data("location"))
        $(".spawn-box").fadeIn(100);
    })

    window.addEventListener("message",(e)=>{
        if(e.data.action == "display"){
            $("body").css("background","rgba(0,0,0,0.7)");
            $(".spawn-wrapper").removeClass("disabled");
            $(".spawn-wrapper").fadeIn(500); 
        }
    })
})

function Spawn(){

  var location = $(".spawnBtn").data("spawn-name");
  $.post("http://spawnselector/spawn",JSON.stringify({
      location:location
  }))
  $("body").css("background","transparent");
  $(".spawn-box").fadeOut(100);
  $(".spawn-wrapper").fadeOut(300);
}

function GoBack(){
    $(".spawn-box").fadeOut(350);
    $(".spawn-wrapper").removeClass("disabled");
}