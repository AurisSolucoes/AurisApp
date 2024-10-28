


        const usuarios = [
            {
                nome : "Caio",
                email : "caiotav.lima21@gmail.com",
                senha : "CFtl0507",
                foto_perfil : "url('../images/perfil/perfil.png')",
                uid: "OIDN9HDoafas"
            },
            {
                nome : "Igor",
                email : "igorr2244@outlook.com",
                senha : "igor1234",
                foto_perfil : "url('../assets/images/perfil/igor.png')",
                uid: "OIDN9HDoafas"
            },
            {
                nome : "Isadora",
                email : "isaah.candido.27@gmail.com",
                senha : "isa#2356",
                foto_perfil : 'url("../images/perfil/isadora.png")',
                uid: "OIDN9HDoafas"
            }
        ]




        function autenticarLogin(){
            var emailDoUsuario = document.getElementById("caixa-email")
            var senhaDoUsuario = document.getElementById("caixa-senha")
           
            
           for(i in usuarios){
              if(usuarios[i].email == emailDoUsuario.value && usuarios[i].senha == senhaDoUsuario.value){
                window.location.href  = '#home';

                var usuarioCaixa = document.querySelector("#usuario-caixa");

               
                usuarioCaixa.innerHTML = "Ola, " + usuarios[i].nome
                console.log(usuarios[i].foto_perfil)
              }
           }
            

        }




        (function(){






            
        })()