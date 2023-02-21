$(document).ready(function(){
    $("#dropitem").click(function(){
        $("#dropmenu").toggle("slow");
        $("#dropmenu").css("border","none");
    });
});

$(document).ready(function(){
    $("#burgermenu").click(function(){
        $("#mynavbar").toggle("slow");
    });
});

$(document).ready(function(){
    $("#animate").click(function(){
        $("#animate").css("background","rgba(0,255,242,1)");
        $("#animate").css("color","black");
        $("#animate").css("padding","15px 50px");
        $("#animate").css("border","none");
        $("#col-area").css("background-image","linear-gradient(to right, rgba(255,0,0,0), rgba(0,255,242,1))").toggle("slow");
        $("p").css("font-size","20px");
        $("p").css("font-family","system-ui");

        // for reload the page
        // setTimeout(function () {
           
        //     // history.go(0);
        //   location.reload(true);
        //   }, 1000);
        
    })
});

$(document).ready(function(){
   
    $("#para").css("color","#fff");
    $("#btn-para").css("padding-top","8%");
    $("#content-txt").css("overflow","hidden");
    $("#content-txt").css("height","320px");
    $("#content-txt").css("background-repeat","no-repeat");
    $("#content-txt").css("background-size","cover");
    $("#content-txt").css("background-image","url('./img/sunflowers.jpg')");
});

function createLink(){
    $("<a/>",{
      html: "<p>Hurry Up</p>",
      class: "link",
      width: "auto",
      href: "https://www.google.com",
      target: "blank"
    }).appendTo("#repeat-txt").toggle();
}

$(document).ready(function(){

    $("#animate").on({
        mouseenter: function(){
          $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
          $(this).css("background-color", "rgba(0,255,242,1)");
        },
        click: function(){
          $(this).css("background-color", "yellow");
        }
      });
 
      var clone = $("#content-txt").clone();
      clone.find("div");
      $("#content-txt").before(clone).css({"margin-top":"50px","opacity":"0.7"});

});