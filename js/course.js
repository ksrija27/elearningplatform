const courses = JSON.parse(localStorage.getItem("coursesData")) || [
  {
    id: 1,
    title: "HTML & CSS",
    video: "https://www.youtube.com/embed/mU6anWqZJcc",
    pdf: "https://www.w3schools.com/html/",
    topics: ["HTML", "CSS", "Webpages"],
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    video: "https://www.youtube.com/embed/hdI2bqOjy3c",
    pdf: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    topics: ["JS basics", "DOM", "Events"],
  },
  {
    id: 3,
    title: "Responsive Design",
    video: "https://www.youtube.com/embed/srvUrASNj0s",
    pdf: "https://web.dev/learn/css/responsive-design/",
    topics: ["Flexbox", "Grid", "Media Queries"],
  },
  {
    id: 4,
    title: "React for Beginners",
    video: "https://www.youtube.com/embed/bMknfKXIFA8",
    pdf: "https://react.dev/learn",
    topics: ["JSX", "State", "Hooks"],
  },
  {
    id: 5,
    title: "Git & GitHub",
    video: "https://www.youtube.com/embed/RGOj5yH7evk",
    pdf: "https://www.atlassian.com/git/tutorials",
    topics: ["Version Control", "Repos", "Collaboration"],
  },
  {
    id: 6,
    title: "Node.js & Express",
    video: "https://www.youtube.com/embed/Oe421EPjeBE",
    pdf: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
    topics: ["APIs", "Middleware", "Routing"],
  },
  {
    id: 7,
    title: "Python for Beginners",
    video: "https://www.youtube.com/embed/_uQrJ0TkZlc",
    pdf: "https://docs.python.org/3/tutorial/",
    topics: ["Variables", "Functions", "Loops"],
  },
  {
    id: 8,
    title: "SQL & Databases",
    video: "https://www.youtube.com/embed/7S_tz1z_5bA",
    pdf: "https://www.w3schools.com/sql/",
    topics: ["Queries", "Joins", "Normalization"],
  },
  {
    id: 9,
    title: "Data Structures & Algorithms",
    video: "https://www.youtube.com/embed/8hly31xKli0",
    pdf: "https://www.geeksforgeeks.org/data-structures/",
    topics: ["Stacks", "Trees", "Sorting"],
  },
  {
    id: 10,
    title: "AI with Python",
    video: "https://www.youtube.com/embed/aircAruvnKk",
    pdf: "https://www.tutorialspoint.com/artificial_intelligence/index.htm",
    topics: ["ML Basics", "Neural Networks", "NLP"],
  },
];

const courseId = parseInt(localStorage.getItem("courseId"));
const studentName = localStorage.getItem("studentName");

document.getElementById("studentName").textContent = studentName || "Guest";

const course = courses.find((c) => c.id === courseId);
if (course) {
  document.getElementById("courseTitle").textContent = course.title;
  document.getElementById("videoFrame").src = course.video;
  document.getElementById("pdfLink").href = course.pdf;

  const topicsList = document.getElementById("topicsList");
  course.topics.forEach((topic) => {
    const li = document.createElement("li");
    li.textContent = topic;
    topicsList.appendChild(li);
  });
}

const progressBar = document.getElementById("courseProgress");
progressBar.value = parseInt(localStorage.getItem(`progress_${courseId}`)) || 0;

function increaseProgress() {
  let current = parseInt(localStorage.getItem(`progress_${courseId}`)) || 0;
  if (current < 100) {
    current += 20;
    if (current > 100) current = 100;
    progressBar.value = current;
    localStorage.setItem(`progress_${courseId}`, current);
  }
}

function checkCertificate() {
  const progress = parseInt(localStorage.getItem(`progress_${courseId}`));
  if (progress >= 100) {
    window.location.href = "certificate.html";
  } else {
    alert("Please complete the course to get your certificate.");
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

