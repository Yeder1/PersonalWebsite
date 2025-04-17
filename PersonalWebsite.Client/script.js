// API URL - cần thay đổi dựa trên nơi bạn host API
const API_URL = 'https://localhost:7100/api/profile';

// Lấy dữ liệu profile từ API
async function fetchProfile() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayProfile(data);
    } catch (error) {
        console.error('Error fetching profile data:', error);
        // Hiển thị dữ liệu mẫu nếu không thể kết nối tới API
        displaySampleProfile();
    }
}

// Hiển thị dữ liệu profile trên trang
function displayProfile(profile) {
    // Hero section
    document.getElementById('name').textContent = profile.name;
    document.getElementById('title').textContent = profile.title;
    
    // About section
    document.getElementById('bio').textContent = profile.bio;
    
    // Skills section
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = '';
    profile.skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });
    
    // Experience section
    const experienceList = document.getElementById('experience-list');
    experienceList.innerHTML = '';
    profile.experiences.forEach((exp, index) => {
        const expItem = document.createElement('div');
        expItem.className = 'timeline-item';
        expItem.innerHTML = `
            <div class="timeline-content">
                <h3>${exp.title}</h3>
                <h4>${exp.company}</h4>
                <div class="date">${exp.period}</div>
                <p>${exp.description}</p>
            </div>
        `;
        experienceList.appendChild(expItem);
    });
    
    // Projects section
    const projectsList = document.getElementById('projects-list');
    projectsList.innerHTML = '';
    profile.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        let techTags = '';
        project.technologies.forEach(tech => {
            techTags += `<span class="tech-tag">${tech}</span>`;
        });
        
        projectCard.innerHTML = `
            <div class="project-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${techTags}
                </div>
            </div>
        `;
        projectsList.appendChild(projectCard);
    });
    
    // Contact section
    const contactInfo = document.getElementById('contact-info');
    contactInfo.innerHTML = `
        <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <a href="mailto:${profile.contact.email}">${profile.contact.email}</a>
        </div>
        <div class="contact-item">
            <i class="fas fa-phone"></i>
            <a href="tel:${profile.contact.phone}">${profile.contact.phone}</a>
        </div>
        <div class="contact-item">
            <i class="fab fa-linkedin"></i>
            <a href="${profile.contact.linkedIn}" target="_blank">LinkedIn</a>
        </div>
        <div class="contact-item">
            <i class="fab fa-github"></i>
            <a href="${profile.contact.gitHub}" target="_blank">GitHub</a>
        </div>
    `;
}

// Hiển thị dữ liệu mẫu khi không thể kết nối tới API
function displaySampleProfile() {
    const sampleProfile = {
        name: "Trịnh Hữu Hoàng Anh",
        title: "Lập Trình Viên .NET",
        bio: "Tôi là một lập trình viên đam mê công nghệ với kinh nghiệm phát triển các ứng dụng web. Tôi thích học hỏi những công nghệ mới và áp dụng chúng vào các dự án thực tế.",
        skills: ["C#", ".NET Core", "ASP.NET", "SQL Server", "JavaScript", "HTML/CSS", "React", "Angular"],
        experiences: [
            {
                title: "InternShip",
                company: "Công ty ECOTECH 2A",
                period: "2025 - Hiện tại",
                description: "Phát triển và duy trì các ứng dụng web sử dụng .NET Core và Angular."
            },
            {
                title: "IT Engineer",
                company: "Trường đại học Công nghệ TP.HCM - HUTECH",
                period: "2021 - 2025",
                description: "Học tập và áp dụng vào các đồ án môn học"
            }
        ],
        projects: [
            {
                name: "Hệ thống quản lý sinh viên",
                description: "Phát triển hệ thống quản lý sinh viên.",
                technologies: ["C#", ".NET Core", "SQL Server", "Angular"]
            },
            {
                name: "Website thương mại điện tử",
                description: "Xây dựng platform thương mại điện tử với đầy đủ tính năng.",
                technologies: ["ASP.NET MVC", "Entity Framework", "JavaScript", "Bootstrap", "Angular"]
            }
        ],
        contact: {
            email: "yeder265@gmail.com",
            phone: "0837033868",
            linkedIn: "https://facebook.com/chongthaoly0702",
            gitHub: "https://github.com/Yeder1"
        }
    };
    
    displayProfile(sampleProfile);
}

// Xử lý form liên hệ
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Cảm ơn bạn đã gửi tin nhắn! Chúng tôi sẽ liên hệ lại sớm nhất có thể.');
    this.reset();
});

// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth scrolling cho các liên kết
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Đóng menu nếu đang mở trên mobile
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Khởi tạo trang
document.addEventListener('DOMContentLoaded', fetchProfile);