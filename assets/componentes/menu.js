
    var menuAberto = true;

    function abrirMenu(){
       var linhaUm = document.querySelector('.menu-linha-um') 
       var linhaDois = document.querySelector('.menu-linha-dois') 
       var linhaTres = document.querySelector('.menu-linha-tres') 
        if(!menuAberto){
            linhaUm.classList.add("girarLinhaUm")
            linhaDois.classList.add("girarLinhaDois")
            linhaTres.classList.add("desativarLinhaTres")
            menuAberto = true;
        } else if(menuAberto){
            linhaUm.classList.remove("girarLinhaUm")
            linhaDois.classList.remove("girarLinhaDois")
            linhaTres.classList.remove("desativarLinhaTres")
            menuAberto = false;
        }

        //menuLabel

        var menuLabel = document.getElementById("menu_navegador")
        if(menuAberto){
            menuLabel.style.left = "0vw"
        } else {
            menuLabel.style.left = "-100vw"
        }
        
        
        

    }

    

    
   

   function animacaoTagOn(){
    var tag = document.querySelector(".tag")
    tag.classList.add("ativo")
   }

    function animacaoTagOff(){
        var tag = document.querySelector(".tag")
        var caixaDeBusca = document.querySelector(".caixa-de-busca")
        if(caixaDeBusca.value == ""){
            tag.classList.remove("ativo")
        }

    }



