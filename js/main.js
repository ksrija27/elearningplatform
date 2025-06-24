// Sample course data with image placeholders
const courses = [
  {
    id: 1,
    title: "HTML & CSS",
    image: "images/coding.png",
    video: "https://www.youtube.com/embed/mU6anWqZJcc",
    pdf: "https://www.w3schools.com/html/",
    topics: ["HTML", "CSS", "Webpages"],
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    image: "images/js.png",
    video: "https://www.youtube.com/embed/hdI2bqOjy3c",
    pdf: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    topics: ["JS basics", "DOM", "Events"],
  },
  {
    id: 3,
    title: "Responsive Design",
    image: "images/responsive-design.png",
    video: "https://www.youtube.com/embed/srvUrASNj0s",
    pdf: "https://web.dev/learn/css/responsive-design/",
    topics: ["Flexbox", "Grid", "Media Queries"],
  },
  {
    id: 4,
    title: "React for Beginners",
    image: "images/react.png",
    video: "https://www.youtube.com/embed/bMknfKXIFA8",
    pdf: "https://react.dev/learn",
    topics: ["JSX", "State", "Hooks"],
  },
  {
    id: 5,
    title: "Git & GitHub",
    image: "images/github.png",
    video: "https://www.youtube.com/embed/RGOj5yH7evk",
    pdf: "https://www.atlassian.com/git/tutorials",
    topics: ["Version Control", "Repos", "Collaboration"],
  },
  {
    id: 6,
    title: "Node.js & Express",
    image: "images/nodejs.png",
    video: "https://www.youtube.com/embed/Oe421EPjeBE",
    pdf: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
    topics: ["APIs", "Middleware", "Routing"],
  },
  {
    id: 7,
    title: "Python for Beginners",
    image: "images/python.png",
    video: "https://www.youtube.com/embed/_uQrJ0TkZlc",
    pdf: "https://docs.python.org/3/tutorial/",
    topics: ["Variables", "Functions", "Loops"],
  },
  {
    id: 8,
    title: "SQL & Databases",
    image: "images/sql.png",
    video: "https://www.youtube.com/embed/7S_tz1z_5bA",
    pdf: "https://www.w3schools.com/sql/",
    topics: ["Queries", "Joins", "Normalization"],
  },
  {
    id: 9,
    title: "Data Structures & Algorithms",
    image: "images/dsa.jpeg",
    video: "https://www.youtube.com/embed/8hly31xKli0",
    pdf: "https://www.geeksforgeeks.org/data-structures/",
    topics: ["Stacks", "Trees", "Sorting"],
  },
  {
    id: 10,
    title: "AI with Python",
    image: "images/aipython.jpeg",
    video: "https://www.youtube.com/embed/aircAruvnKk",
    pdf: "https://www.tutorialspoint.com/artificial_intelligence/index.htm",
    topics: ["ML Basics", "Neural Networks", "NLP"],
  },
];

// Save to localStorage for use across pages
localStorage.setItem("coursesData", JSON.stringify(courses));

// Render course cards dynamically
function renderCourseList() {
  const container = document.getElementById("courseList");
  container.innerHTML = "";

  courses.forEach((course) => {
    const card = document.createElement("div");
    card.className = "course-card animate-fade";

    card.innerHTML = `
      <div class="card-image-wrapper">
        <img src="${course.image}" alt="${course.title}">
        <div class="card-title-overlay">${course.title}</div>
      </div>
      <div class="card-body">
        <button class="btn" onclick="exploreCourse(${course.id})">Explore</button>
      </div>
    `;

    container.appendChild(card);
  });
}

// Navigate to course.html with courseId saved
function exploreCourse(courseId) {
  const studentName = localStorage.getItem("studentName");

  if (!studentName) {
    alert("Please log in first to explore this course.");
    window.location.href = "login.html";
    return;
  }

  localStorage.setItem("courseId", courseId);
  window.location.href = "course.html";
}

// Display user info in header (optional)
function showUserInfo() {
  const name = localStorage.getItem("studentName") || "Guest";
  const email = localStorage.getItem("studentEmail") || "";
  document.getElementById("userName").textContent = name;
  document.getElementById("userEmail").textContent = email;
}

// Logout user
function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

// On page load
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("courseList")) renderCourseList();
  if (document.getElementById("userName")) showUserInfo();
});
