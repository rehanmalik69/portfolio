// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Update icon
    themeIcon.classList.toggle('fa-moon');
    themeIcon.classList.toggle('fa-sun');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Projects Data
const projects = [
    {
        title: 'Database Management System for Travel Agency',
        description: 'Designed and implemented a comprehensive database system to efficiently manage bookings, customer details, and travel packages. The system streamlines travel agency operations and improves customer service delivery.',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        technologies: ['SQL', 'Database Design', 'ERD', 'MySQL', 'Data Modeling'],
        link: 'https://github.com/rehanmalik69'
    },
    {
        title: 'Online Music Streaming Service',
        description: 'Built an interactive front-end interface for a music streaming platform, featuring music discovery, playlist creation, and seamless streaming capabilities. Focus on user experience and responsive design.',
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'API Integration'],
        link: 'https://github.com/rehanmalik69'
    },
    {
        title: 'Sales Insights Dashboard',
        description: 'Developed a comprehensive dashboard for visualizing sales trends and monitoring performance metrics. Enables data-driven decision making through interactive visualizations and real-time analytics.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        technologies: ['Data Visualization', 'Python', 'SQL', 'Analytics'],
        link: 'https://github.com/rehanmalik69'
    },
    {
        title: 'Firmware Security Analysis',
        description: 'Conducted comprehensive security assessments using Kali Linux, including vulnerability scanning for SQL injection, identifying vulnerable cameras, subdomain discovery, and NMAP port scanning for security analysis.',
        image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        technologies: ['Kali Linux', 'NMAP', 'Security Testing', 'Vulnerability Assessment'],
        link: 'https://github.com/rehanmalik69'
    }
];

// Populate Projects
const projectGrid = document.querySelector('.project-grid');
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'card project-card';
    projectCard.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-overlay">
                <a href="${project.link}" target="_blank" class="btn primary">View Project</a>
            </div>
        </div>
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;
    projectGrid.appendChild(projectCard);
});

// Skills Data
const skills = [
    { name: 'SQL & Database Management', level: 90 },
    { name: 'Data Analysis & Visualization', level: 85 },
    { name: 'Python', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'Power BI', level: 80 },
    { name: 'Front-end Development (HTML/CSS/JS)', level: 75 },
    { name: 'Cybersecurity & Kali Linux', level: 75 },
    { name: 'Data Modeling & ERD', level: 85 }
];

// Populate Skills
const skillsContainer = document.querySelector('.skills-container');
skillsContainer.innerHTML = '';
skills.forEach(skill => {
    const skillBar = document.createElement('div');
    skillBar.className = 'skill-bar';
    skillBar.innerHTML = `
        <div class="skill-info">
            <span>${skill.name}</span>
            <span>${skill.level}%</span>
        </div>
        <div class="progress-bar">
            <div class="progress" style="width: 0%"></div>
        </div>
    `;
    skillsContainer.appendChild(skillBar);
});

// Animate skill bars on scroll
const animateSkills = () => {
    const skillBars = document.querySelectorAll('.progress');
    skillBars.forEach((bar, index) => {
        bar.style.width = `${skills[index].level}%`;
    });
};

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('skills-container')) {
                animateSkills();
            } else {
                entry.target.classList.add('slide-in');
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
observer.observe(skillsContainer);

// Contact Form
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});
