let ism = prompt("Ismingizni kiriting:");
let yosh = prompt("Yoshingizni kiriting:");

let userInfoDiv = document.createElement("div");
userInfoDiv.id = "userInfo";
userInfoDiv.innerHTML = `Ismingiz: ${ism}<br>Yoshingiz: ${yosh}`;


document.body.appendChild(userInfoDiv);