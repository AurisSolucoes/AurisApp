  


var usersActives = [{
  name : 'Caio Tavares',
  email : 'caiotav.lima21@gmail.com',
  uid : 'ADLYWIIzpsC9qfz'
},{
 name : 'Igor Ribeiro',
 email : 'igorr2244@outlook.com',
 uid : 'WGiEwBXPqUoGkb'
},{
  name : 'Isadora Candido',
  email : 'amor',
  uid : 'WGiEwCEIqUoGkb'
 }]

  function loginTest(){
    var email = document.getElementById("user-email");          
    for(i in usersActives){
      if(usersActives[i].email == email.value){
        window.location.href = './web/main-page.html?' + usersActives[i].uid;
      }
    }
  }



  function loadHome(){
    var welcome = document.getElementById("welcome")
    var uid = window.location.search.substring(1);
    for(i in usersActives){
      if(usersActives[i].uid == uid)
        welcome.innerHTML = "Olá, " + usersActives[i].name;
    }
  }