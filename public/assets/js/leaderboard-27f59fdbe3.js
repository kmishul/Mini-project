const UserTeamRankingPoints=document.querySelectorAll(".other-user-standing");for(let e=0;e<UserTeamRankingPoints.length;e++)UserTeamRankingPoints[e].addEventListener("click",(function(){const t=UserTeamRankingPoints[e].getAttribute("data-team-count");console.log(t);const n=document.querySelectorAll(".user-team");for(let e=0;e<n.length;e++)n[e].style.display="none";n[t].style.display="block"}));const closeTeam=document.querySelectorAll(".close-team");for(let e=0;e<closeTeam.length;e++)closeTeam[e].addEventListener("click",(function(){const e=document.querySelectorAll(".user-team");for(let t=0;t<e.length;t++)e[t].style.display="none"}));const user=document.getElementById("userId");user&&user.addEventListener("click",(function(e){e.stopPropagation()}));const chatButton=document.getElementById("chat-button");chatButton.addEventListener("click",(function(){document.getElementById("user-chat-box").style.display="block"}));const closeChat=document.getElementsByClassName("close-chat")[0];closeChat.addEventListener("click",(function(){document.getElementById("user-chat-box").style.display="none"}));var chatMessageInput=document.getElementById("chat-message-input");chatMessageInput.addEventListener("keyup",(function(e){13===e.keyCode&&(e.preventDefault(),document.getElementById("send-message").click(),chatMessageInput.value="")}));