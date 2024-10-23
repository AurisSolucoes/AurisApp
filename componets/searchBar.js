    
    
    var searchBox = document.getElementById("searchApp");           
    var subtitleBox = document.getElementById("subtitleSearch");
    
    searchBox.addEventListener("focus", () => {
      subtitleBox.style.fontSize = "0.8em"
      subtitleBox.style.transition = "all .3s"
      subtitleBox.style.marginTop = "-15px"
    })
    searchBox.addEventListener("blur", () => {
      if(searchBox.value == ""){
      subtitleBox.style.fontSize = "1em"
      subtitleBox.style.marginTop = "0px"
      }
    })