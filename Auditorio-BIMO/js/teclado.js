$(document).ready(function(){
    var lastCaller ;
  
     $('#card-year,#card-month,#card-number,#number-card1,#number-card2,#number-card3,#number-card4,#card-cvc,#numBox').on('click',function(evt){
        
        var kb = $("#kb_keypad");
        var offset = $(this).offset();
        var boxHeight = $(this).height();
        var boxWidth = $(this).width();
        kb.css("left", offset.left + (boxWidth-kb.width())/2);        
        //kb.css();    
        var that = $(this);


        var kbDisplay = function() {
            kb.css("top", $(window).height())
            kb.css("display", "block");
            kb.animate({
                "top": offset.top + boxHeight + 10
            }, 100);
        }

        var kbHide = function() {
            kb.animate({
                "top": $(window).height()
            },100, function() {
                kb.css("display", "none");
            })
        }


        var clickHandler = function () {
            console.log("click")
            var keyVal = this.innerHTML;
            //if (that.val().length<4){
            if(evt.currentTarget.maxLength) {
                if(that.val().length < evt.currentTarget.maxLength)
                    that.val(that.val() + keyVal); 
            } else {    
                that.val(that.val() + keyVal); 
            }
            //}
        };
        var closeEvtHandler = function() {
            kbHide();
            $("#kb_keypad .kb_key, #kb_keypad .kb_btn").unbind("click")
        }

        var deleteEvtHandler = function() {
           that.val( 
                that.val().substring(0, that.val().length > 0?that.val().length-1:0)
            );
        }


        var addListeners = function() {
            $("#kb_keypad .kb_key").click(clickHandler);
            $(".kb_btn_ok").click(closeEvtHandler);
            $(".kb_btn_delete").click(deleteEvtHandler);
        }

       if(kb.is(":visible")) { 
            
            if(lastCaller == evt.currentTarget.id){
                $("#kb_keypad .kb_key, #kb_keypad .kb_btn").unbind("click");
                kbHide();
            } else {
                $("#kb_keypad .kb_key, #kb_keypad .kb_btn").unbind("click");
                addListeners();
            }
            
        } else { 
            kbDisplay();
            addListeners()
        }
        lastCaller = evt.currentTarget.id;

    });
});