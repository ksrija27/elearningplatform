## E-LEARNING PLATFORM UI

#  CodTech Learn – E-Learning Platform

A modern, fully responsive **E-Learning Platform** built with **HTML, CSS, and JavaScript**. This project allows students to enroll in courses, track progress, and download a personalized certificate of completion. It also includes an admin panel to monitor enrolled users and their progress.

---

##  Features

###  Student Dashboard
-  Login with name, email, and optional profile image
-  Browse and explore interactive course cards
-  Watch embedded YouTube videos per course
-  Access recommended reading resources (e.g., MDN, W3Schools, GFG)
-  Track course progress visually (in 20% increments)
-  Generate a PDF certificate on 100% completion

### Admin Dashboard
-  View logged-in users
-  See completed course for each student
-  Displays profile images with names and progress

---

##  Project Structure
project-root/
├── index.html # Home with course cards
├── login.html # User login
├── course.html # Course detail page
├── certificate.html # Downloadable certificate
├── admin.html # Admin panel
│
├── css/
│ └── styles.css # All global + responsive styles
│
├── js/
│ ├── main.js # Course list and homepage logic
│ ├── login.js # User login and localStorage
│ ├── course.js # Progress, video, and actions
│ └── certificate.js # Dynamic certificate and PDF generation
|  |___ admin.js 
│
├── images/ # Course thumbnails (e.g., python.png, html.png, etc.)


---

##  Sample Courses Included

| # | Course Title            | Video Link                                               | Resource Link                                   |
|---|-------------------------|-----------------------------------------------------------|-------------------------------------------------|
| 1 | HTML & CSS              | [YouTube](https://www.youtube.com/embed/mU6anWqZJcc)     | [W3Schools](https://www.w3schools.com/html/)   |
| 2 | JavaScript Essentials   | [YouTube](https://www.youtube.com/embed/hdI2bqOjy3c)     | [MDN Docs](https://developer.mozilla.org/)     |
| 3 | Responsive Design       | [YouTube](https://www.youtube.com/embed/srvUrASNj0s)     | [web.dev](https://web.dev/learn/css/)          |
| 4 | React for Beginners     | [YouTube](https://www.youtube.com/embed/bMknfKXIFA8)     | [React](https://react.dev/learn)               |
| 5 | Git & GitHub            | [YouTube](https://www.youtube.com/embed/RGOj5yH7evk)     | [Atlassian Git](https://www.atlassian.com/git) |
| 6 | Node.js & Express       | [YouTube](https://www.youtube.com/embed/Oe421EPjeBE)     | [MDN Node](https://developer.mozilla.org/)     |
| 7 | Python for Beginners    | [YouTube](https://www.youtube.com/embed/_uQrJ0TkZlc)     | [Python Docs](https://docs.python.org/3/)      |
| 8 | SQL & Databases         | [YouTube](https://www.youtube.com/embed/7S_tz1z_5bA)     | [W3Schools SQL](https://www.w3schools.com/sql) |
| 9 | Data Structures & Algo  | [YouTube](https://www.youtube.com/embed/8hly31xKli0)     | [GFG DSA](https://www.geeksforgeeks.org/data-structures/) |
|10 | AI with Python          | [YouTube](https://www.youtube.com/embed/aircAruvnKk)     | [AI Tutorial](https://www.tutorialspoint.com/artificial_intelligence/index.htm) |

---

## How It Works

1. User logs in from `login.html` and data is stored using `localStorage`.
2. On `index.html`, courses are displayed using JavaScript DOM rendering.
3. On clicking "Explore", the user goes to `course.html`, watches the video, marks progress.
4. On reaching 100%, a certificate is available on `certificate.html`.
5. Admin can open `admin.html` to see user name, course title, and profile picture.

---

##  Tech Stack

-  HTML5
-  CSS3 (including flexbox, grid, media queries, and animation)
-  JavaScript (ES6+)
-  [html2pdf.js](https://github.com/eKoopmans/html2pdf) for downloadable certificate

---

## OUTPUT

![Image](https://github.com/user-attachments/assets/18306431-61bd-466a-ae7a-46ac60c81426)

## LIVE DEMO
https://ksrija27.github.io/elearningplatform/
 






