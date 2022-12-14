$(function(){

    $('.fazerLogin').click(function(){
        $('.active-cadastro, .contact-boader').fadeOut(1)
        $('.bg').fadeIn() 
        onOff()
    })

    $('.fazerCadastro').click(function(){
        $('.bg, .contact-boader').fadeOut(1)
        $('.active-cadastro').fadeIn() 
        onOff()
    })

    function onOff(){
        $('.fazerLogin').fadeOut(0) 
        $('.fazerCadastro').fadeOut(0) 
    }

    // Botão na tela de Fazer Login para fechar
    botaoDeFecharClose();
    function botaoDeFecharClose(){
        $('.btn-close').click(function(){
            $('.bg').fadeOut(1)
            $('input[type=button], .contact-boader').fadeIn()
        })
    }

    // Botão na tela de Fazer Cadastro para voltar
    voltarClose();
    function voltarClose(){
        $('.vlt').click(function(){
            $('.active-cadastro').fadeOut(1)
            $('input[type=button]').fadeIn()
            $('.contact-boader').fadeIn()
        })
    }

    cadastrar();
    function cadastrar(){
        $('.cad').click(function(){
            $('.bg').fadeOut(0);
            $('.active-cadastro').fadeIn(1000);

        })
    }

    var cliked;
    btnDarkmode()
    function btnDarkmode(){
        cliked = false;
        $('.button').click(function(){
            if(cliked == false){
                $('.cicle').css('margin-left','35px');
                $('.cicle').css('transition','0.5s');
                $('body').css('background','#a67df5');
                $('.button').css('background','white');
                
                cliked = true;  
            }else{
                cliked = false;
                $('.cicle').css('margin-left','4px');
                $('body').css('background','#eeeef8');
                $('.button').css('background','#ccc');
            }
                
        })
    }
});