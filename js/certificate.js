const user = localStorage.getItem("studentName") || "Student";
const courseId = parseInt(localStorage.getItem("courseId"));

const courses = [
  { id: 1, title: "HTML & CSS" },
  { id: 2, title: "JavaScript Essentials" },
  { id: 3, title: "Responsive Design" },
  { id: 4, title: "React for Beginners" },
  { id: 5, title: "Git & GitHub" },
  { id: 6, title: "Node.js & Express" },
  { id: 7, title: "Python for Beginners" },
  { id: 8, title: "SQL & Databases" },
  { id: 9, title: "Data Structures & Algorithms" },
  { id: 10, title: "AI with Python" },
];

const course = courses.find((c) => c.id === courseId);

document.getElementById("certName").textContent = user;
document.getElementById("certCourse").textContent = course
  ? course.title
  : "Selected Course";

const date = new Date();
document.getElementById(
  "issueDate"
).textContent = `${date.toLocaleDateString()}`;

function downloadCertificate() {
  const element = document.getElementById("certificate");
  const opt = {
    margin: 0.5,
    filename: "certificate.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().set(opt).from(element).save();
}

function goHome() {
  window.location.href = "index.html";
}
