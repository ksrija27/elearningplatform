window.onload = function () {
  const table = document.getElementById("userTable").querySelector("tbody");

  const studentName = localStorage.getItem("studentName");
  const profilePic =
    localStorage.getItem("profilePic") || "https://via.placeholder.com/32";
  const completedCourse =
    localStorage.getItem("completedCourse") || "Not Completed";

  if (studentName) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td><img src="${profilePic}" alt="profile" /></td>
        <td>${studentName}</td>
        <td>${completedCourse}</td>
      `;
    table.appendChild(row);
  } else {
    table.innerHTML = `
        <tr>
          <td colspan="3">No user data found. Please log in first.</td>
        </tr>
      `;
  }
};
