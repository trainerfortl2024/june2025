function displayWelcomeMessage() {
   let name = document.getElementById("name").value;
   let color = document.getElementById("color").value;
    document.getElementById("result").style.color = color;

  document.getElementById("result").value = "Welcome, <b>" + name + "</b>!";
}