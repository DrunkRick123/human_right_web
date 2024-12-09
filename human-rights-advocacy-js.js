function toggleNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
    this.reset();
});

// Add animation to campaign items
const campaignItems = document.querySelectorAll('.campaign-item');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

campaignItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(item);
});

// 瀏覽次數計數
function updateViewCount() {
    // 使用 LocalStorage 模擬
    let count = parseInt(localStorage.getItem('viewCount') || '0', 10);
    count++;
    localStorage.setItem('viewCount', count);
    document.getElementById('view-count').innerText = `目前瀏覽次數：${count}`;
}

// 初始化瀏覽次數
document.addEventListener('DOMContentLoaded', updateViewCount);
