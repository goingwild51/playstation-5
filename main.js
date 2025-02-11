var NAME, EMAIL, REGION, VERSION, MOBILE;

var ERRORS = [
    "<strong>530 SMTP Error</strong> - Bad Authentication",
    "<strong>500 SMTP Error</strong> - Syntax Error",
    "<strong>554 SMTP Error</strong> - Transaction has failed",
    "<strong>550 SMTP Error</strong> - Command rejected for policy reasons",
    "<strong>523 SMTP Error</strong> - Encryption is required before the requested authentication",
]

var AM1, AM2;

AM1 = Math.floor(Math.random() * 20) + 5;

AM2 = Math.floor(Math.random() * 20) + 5;

CERROR = ERRORS[Math.floor(Math.random() * ERRORS.length)];

function SS1() {
    $(".STEP-1").fadeOut(1000, function() {
        $(".STEP-2").fadeIn(1000);
    });
}

$(function() {

    var BWIDTH = $("body").width();

    if (BWIDTH < 768) {
        MOBILE = true;
    } else {
        MOBILE = false;
    }

})

$("#PSVERSIONS").on("show.bs.collapse", function(e) {

    if (e.target.id == "NORMALPS5") {
        $(".SS3").html("I choose <strong>Standard</strong> version");
        VERSION = "Standard";
    } else {
        $(".SS3").html("I choose <strong>Digital</strong> version");
        VERSION = "Digital";
    }

    $(".SS3").fadeIn(1000).css("display", "block");

})

function SS2() {

    NAME = $("#NAME").val();

    EMAIL = $("#EMAIL").val();

    REGION = $("#REGION").val();

    $(".AM1").text(AM1);

    $(".AM2").text(AM2);

    if (NAME && EMAIL && REGION) {

        $("#NAME").removeClass("RB");

        $("#EMAIL").removeClass("RB");

        $("#REGION").removeClass("RB");

        $(".STEP-2").fadeOut(1000, function() {
            $(".STEP-3").fadeIn(1000);
    
            var TO1 = {
                strings: [
                    "Checking if there are any <strong>PlayStation 5 test kits</strong> left in <strong>" + REGION + "</strong>...^2000",
                    "Showing available <strong>PlayStation 5 consoles</strong> for <strong>" + REGION + "</strong> region...^1000",
                    "Choose your <strong>PlayStation</strong>...^1000"
                ],
                typeSpeed: 50,
                backSpeed: 40,
                startDelay: 500,
                backDelay: 500,
                smartBackspace: true,
                showCursor: false,
                contentType: "html",
                onComplete: function() {
                //$(".TYPED").fadeOut(1000)
                  $(".LOADING-1").fadeOut(1000, function() {
            
                     if (MOBILE) {
                        $("body").attr("style", "background-image: none; padding-bottom: 0 !important;");
                     }
                      $("#PSVERSIONS").fadeIn(1000);
                      //$(".SS3").fadeIn(1000).css("display", "block");
            
                  })
                }
              }
            
              var T1 = new Typed('.TYPED', TO1);
    
        })

    } else {
        
        if (NAME) {
            $("#NAME").removeClass("RB");
        } else {
            $("#NAME").addClass("RB");
        }

        if (EMAIL) {
            $("#EMAIL").removeClass("RB");
        } else {
            $("#EMAIL").addClass("RB");
        }

        if (REGION) {
            $("#REGION").removeClass("RB");
        } else {
            $("#REGION").addClass("RB");
        }

    }
}

function SS3() {
    $(".S_NAME").html('<strong class="MED">Name:</strong> ' + NAME);
    $(".S_EMAIL").html('<strong class="MED">Email:</strong> ' + EMAIL);
    $(".S_REGION").html('<strong class="MED">Region:</strong> ' + REGION);
    $(".STEP-3").fadeOut(1000, function() {
        
        if (MOBILE) {
            $("body").attr("style", "background-image: url(bg-mobile-1.jpg); padding-bottom: 25% !important;");
        }

        $(".STEP-4").fadeIn(1000);

        var TO2 = {
            strings: [
                "Reserving your <strong>PlayStation 5 " + VERSION + "</strong>...^3000",
                "Connecting with <strong>Sony shipment servers</strong>...^1500",
                "Emailing you <strong>shipping form</strong>...^3000",
                "<span id='PSRED'>" + CERROR + ", reason: user was detected as a bot and needs to pass <strong>human verification</strong>...</span>^1500"
            ],
            typeSpeed: 50,
            backSpeed: 40,
            startDelay: 500,
            backDelay: 500,
            smartBackspace: true,
            showCursor: false,
            contentType: "html",
            onComplete: function() {

                $(".SS4").fadeIn(1000).css("display", "block");

            }
          }
        
          var T2 = new Typed('.LAST', TO2);

    })
}
