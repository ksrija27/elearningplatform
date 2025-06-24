function handleLogin(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const image = document.getElementById("image").files[0];

  if (!name || !email) {
    alert("Please fill in your name and email.");
    return;
  }

  // Store in localStorage
  localStorage.setItem("studentName", name);
  localStorage.setItem("studentEmail", email);

  if (image) {
    const reader = new FileReader();
    reader.onload = function (event) {
      localStorage.setItem("studentImage", event.target.result);
      window.location.href = "index.html";
    };
    reader.readAsDataURL(image);
  } else {
    window.location.href = "index.html";
  }
}
