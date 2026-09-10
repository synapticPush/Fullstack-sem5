const username = document.querySelector("#username");
const fetchBtn = document.querySelector("#fetchBtn");
const profile = document.querySelector("#profile");

fetchBtn.addEventListener('click', () => {
  document.getElementById("status").innerHTML = "Fetching user data...";
  getUser(username.value);
  
})


async function getUser(username){
  try{
    username = username.toLowerCase().trim();
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    const data = await response.json();
    displayUser(data);
    document.getElementById("status").innerHTML = "";
  }
  catch(error){
  
    console.log("Error fetching user data:", error);
    document.getElementById("status").innerHTML = "User not found.";
  }
}

function displayUser(data){
  profile.innerHTML = `
    <div class="card">
      <img src="${data.avatar_url}" alt="${data.login}" class="avatar">
      <h2>${data.name}</h2>
      <p>${data.bio}</p>
      <p>Followers: ${data.followers} | Following: ${data.following}</p>
      <a href="${data.html_url}" target="_blank">View Profile</a>
    </div>
  `;
}