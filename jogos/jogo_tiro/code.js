$(document).ready(function(){

    var Objeto = '#nave';
    var ObjetoB = '#nave2';
    var Tiro   = '.tiro';
    var TiroB   = '.tiroB';
    var AlvosNum   = 1;

    var Tiro_H = $(Tiro).height();
    var Tiro_W = $(Tiro).width();

    var Tiro_H_B = $(TiroB).height();
    var Tiro_W_B = $(TiroB).width();

    var Municao = 6;
    $('#Municao').text(Municao);

    var doc_H = $(document).height();
    var doc_W = $(document).width();


    var tempo = 30;



    //Move a nave
    $(document).mousemove(function(e){
       
        
        $(Objeto).css({
          left:  e.pageX,
          //top:   e.pageY
        });


        $(ObjetoB).css({
          //left:  e.pageX,
          top:   e.pageY
        });

        inf_H = $(Objeto).height();
        inf_W = $(Objeto).width();
        inf_X = $(Objeto).offset().left;
        inf_Y = $(Objeto).offset().top;

        inf_H_B = $(ObjetoB).height();
        inf_W_B = $(ObjetoB).width();
        inf_X_B = $(ObjetoB).offset().left;
        inf_Y_B = $(ObjetoB).offset().top;

        posY = ((inf_Y + (inf_H/2))-(Tiro_H/2));
        posX = ((inf_X + (inf_W/2))-(Tiro_W/2));


        posY_B = ((inf_Y_B + (inf_H_B/2))-(Tiro_H_B/2));
        posX_B = ((inf_X_B + (inf_W_B/2))-(Tiro_W_B/2));

        $(Tiro).css({'top':posY+'px','left':posX+'px'});

        $(TiroB).css({'top':posY_B+'px','left':posX_B+'px'});

    });


    //Atira
    $(document).click(function(){
        $("#"+Municao).animate({'left':posX+'px','top':'-100px'},500);
        $("#"+Municao+"B").animate({'left':'-100px','top':posY_B+'px'},500);
        if(Municao>0){
          Municao = Municao-1;
          $('#Municao').text(Municao + " recarregar (R)");
        }
    });


    //Recarrega
    $(document).keypress(function( event ) {
        if(event.which==114){
          Municao = 6;
          $('#Municao').text(Municao + " recarregar (R)");
        }
    });


    //cria o alvo
    function Alvos(e) {
        $('body').append('<div class="alvos" id="eita'+e+'" style="left:'+(Math.floor((Math.random()*(doc_W-200))+100))+'px"></div>');
        $("#eita"+e).animate({'top':(doc_H+150)+'px'},5000);

        setInterval(function() {
                            cordA  = Math.round($("#eita"+e).offset().top);
                            cordAB = Math.round($("#eita"+e).offset().top+50);
                            cordC  = $("#eita"+e).offset().left;
                            cordCD = $("#eita"+e).offset().left+50; 


                                             ////////////TIROS BOTTOM

                                            idCordA1  = Math.round(  ($("#1").offset().top) + ($("#1").width()/2) );
                                            idCordB1  = Math.round(  ($("#1").offset().left) + ($("#1").height()/2) );
                                            if(idCordB1>=cordC && idCordB1<=cordCD && idCordA1>=cordA && idCordA1<=cordAB){
                                                $("#eita"+e).remove();
                                            }

                                            idCordA2  = Math.round(  ($("#2").offset().top) + ($("#2").width()/2) );
                                            idCordB2  = Math.round(  ($("#2").offset().left) + ($("#2").height()/2) );
                                            if(idCordB2>=cordC && idCordB2<=cordCD && idCordA2>=cordA && idCordA2<=cordAB){
                                                $("#eita"+e).remove();
                                            }

                                            idCordA3  = Math.round(  ($("#3").offset().top) + ($("#3").width()/2) );
                                            idCordB3  = Math.round(  ($("#3").offset().left) + ($("#3").height()/2) );
                                            if(idCordB3>=cordC && idCordB3<=cordCD && idCordA3>=cordA && idCordA3<=cordAB){
                                                $("#eita"+e).remove();
                                            }

                                            idCordA4  = Math.round(  ($("#4").offset().top) + ($("#4").width()/2) );
                                            idCordB4  = Math.round(  ($("#4").offset().left) + ($("#4").height()/2) );
                                            if(idCordB4>=cordC && idCordB4<=cordCD && idCordA4>=cordA && idCordA4<=cordAB){
                                                $("#eita"+e).remove();
                                            }

                                            idCordA5  = Math.round(  ($("#5").offset().top) + ($("#5").width()/2) );
                                            idCordB5  = Math.round(  ($("#5").offset().left) + ($("#5").height()/2) );
                                            if(idCordB5>=cordC && idCordB5<=cordCD && idCordA5>=cordA && idCordA5<=cordAB){
                                                $("#eita"+e).remove();
                                            }

                                            idCordA6  = Math.round(  ($("#6").offset().top) + ($("#6").width()/2) );
                                            idCordB6  = Math.round(  ($("#6").offset().left) + ($("#6").height()/2) );
                                            if(idCordB6>=cordC && idCordB6<=cordCD && idCordA6>=cordA && idCordA6<=cordAB){
                                                $("#eita"+e).remove();
                                            }



                                            ////////////TIROS RIGHT



                                            idCordA1B  = Math.round(  ($("#1B").offset().top) + ($("#1B").width()/2) );
                                            idCordB1B  = Math.round(  ($("#1B").offset().left) + ($("#1B").height()/2) );
                                            if(idCordB1B>=cordC && idCordB1B<=cordCD && idCordA1B>=cordA && idCordA1B<=cordAB){
                                                $("#eita"+e).remove();
                                            }

                                            idCordA2B  = Math.round(  ($("#2B").offset().top) + ($("#2B").width()/2) );
                                            idCordB2B  = Math.round(  ($("#2B").offset().left) + ($("#2B").height()/2) );
                                            if(idCordB2B>=cordC && idCordB2B<=cordCD && idCordA2B>=cordA && idCordA2B<=cordAB){
                                                $("#eita"+e).remove();
                                            }

                                            idCordA3B  = Math.round(  ($("#3B").offset().top) + ($("#3B").width()/2) );
                                            idCordB3B  = Math.round(  ($("#3B").offset().left) + ($("#3B").height()/2) );
                                            if(idCordB3B>=cordC && idCordB3B<=cordCD && idCordA3B>=cordA && idCordA3B<=cordAB){
                                                $("#eita"+e).remove();
                                            }

                                            idCordA4B  = Math.round(  ($("#4B").offset().top) + ($("#4B").width()/2) );
                                            idCordB4B  = Math.round(  ($("#4B").offset().left) + ($("#4B").height()/2) );
                                            if(idCordB4B>=cordC && idCordB4B<=cordCD && idCordA4B>=cordA && idCordA4B<=cordAB){
                                                $("#eita"+e).remove();
                                            }

                                            idCordA5B  = Math.round(  ($("#5B").offset().top) + ($("#5B").width()/2) );
                                            idCordB5B  = Math.round(  ($("#5B").offset().left) + ($("#5B").height()/2) );
                                            if(idCordB5B>=cordC && idCordB5B<=cordCD && idCordA5B>=cordA && idCordA5B<=cordAB){
                                                $("#eita"+e).remove();
                                            }

                                            idCordA6B  = Math.round(  ($("#6B").offset().top) + ($("#6B").width()/2) );
                                            idCordB6B  = Math.round(  ($("#6B").offset().left) + ($("#6B").height()/2) );
                                            if(idCordB6B>=cordC && idCordB6B<=cordCD && idCordA6B>=cordA && idCordA6B<=cordAB){
                                                $("#eita"+e).remove();
                                            }

        }, 1);
    }


    //alvos
    var iniAlvo = setInterval(function() {
        Alvos(AlvosNum++);
    }, 800);


    //para os alvos
    setTimeout(function() {
        clearInterval(iniAlvo);
        $(".alvos").remove();
    }, (tempo*1000));


    //cronometro
    var cronometro = setInterval(function() {
        $('#cronometro').html(tempo--);
            if(tempo<0){
                clearInterval(cronometro);
            }
    }, 1000);



});

