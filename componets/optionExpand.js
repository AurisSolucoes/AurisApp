
   
   let optionsGroup = {
  perfil: [document.getElementById("optionPerfil"), false],
  ajustes: document.getElementById("optionAjustes"),
  historico: document.getElementById("optionHistorico"),
  pagamento: [document.getElementById("optionPagamento"), false],
  mais: [document.getElementById("optionMais"), false]
}
   
   
   
    function optionExpandLayout(option){      
      
      
      switch (option) {
        case 'perfil':
            
            if(optionsGroup.perfil[1] == true){
              optionsGroup.perfil[0].style.height = "150px"
              optionsGroup.perfil[1] = false;
            } else if(!optionsGroup.perfil[1]) {
              optionsGroup.perfil[0].style.height = "400px"
              optionsGroup.perfil[1] = true;
            }
            
          break;
          case 'ajuste':
            optionsGroup.ajustes.style.height = "400px"
            optionsGroup.ajustes.style.width = "100%"
          break;
          case 'pagamento':

          if (optionsGroup.pagamento[1] == true) {
               optionsGroup.pagamento[0].style.height = "150px"
               optionsGroup.pagamento[1] = false;
          } else if (!optionsGroup.pagamento[1]) {
               optionsGroup.pagamento[0].style.height = "400px"
               optionsGroup.pagamento[1] = true;
          }
          break;
          case 'mais':

          if (optionsGroup.mais[1] == true) {
              optionsGroup.mais[0].style.height = "150px"
              optionsGroup.mais[1] = false;
          } else if (!optionsGroup.mais[1]) {
              optionsGroup.mais[0].style.height = "400px"
              optionsGroup.mais[1] = true;
          }
          break;
        default:
          // Tab to edit
      }
      
      console.log(optionsGroup.perfil[1])
    }        