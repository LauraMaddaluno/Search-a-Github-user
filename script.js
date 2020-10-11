// github user finder example
$(document).ready(function() {
    $(document).on('keypress', '#username', function(event) {//event, element, call back function
      if (event.which === 13) { // check the key was <enter>
        var input = $(this);
        var username = input.val();
       let a =  getGithubInfo(username);
        showUser(a); 
        console.log('username was: ' + username);
      }
    });
  });
    

  function getGithubInfo(username) {
    var url = 'https://api.github.com/users/' + username;
  
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url, false);
    xmlhttp.send();
  
    return xmlhttp;
  
    
  }


  function showUser(xmlhttp){
      if (xmlhttp.status === 200){
   let  json = xmlhttp.responseText; 
   let  user =  JSON.parse(json);
   console.log(user);
   document.querySelector("#profile h2").innerHTML = user.login + " is GitHub user # " + user.id;
     document.querySelector("#profile .information").innerHTML = "<a href='" + user.html_url + "' class='profile'>visit  profile</a>"
     document.querySelector("#profile .avatar").innerHTML = "<img src='" + user.avatar_url + "' /> "
    }else { 
        document.querySelector("#profile h2").innerHTML = "User doesn't exist";
    }
  } 