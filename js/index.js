// login btn functionality
document.getElementById("login-btn").addEventListener("click", (e) => {
  const inputUsername = document.getElementById("username").value.trim();
  const inputPassword = document.getElementById("password").value;
  if (inputUsername === "admin" && inputPassword === "admin123") {
    window.location.href = "home.html";
  } else {
    const alert = document.getElementById("alert");
    alert.innerHTML = "";
    const alertText = document.createElement("p");
    alertText.innerText = "Wrong Credentials!";
    alertText.classList.add("text-[red]", "font-semibold");
    alert.appendChild(alertText);
  }
});
