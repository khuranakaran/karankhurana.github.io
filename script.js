let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slider-item');
    const sliderContainer = document.querySelector('.slider-container');
    
    if (!sliderContainer || slides.length === 0) {
        console.error('Slider container or slides not found');
        return;
    }
    
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    sliderContainer.style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
    const firstTab = document.querySelector(".tablinks");
    if (firstTab) {
        firstTab.click();
    }
});

window.onscroll = function() {
    scrollFunction();
};

document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const navContainer = document.querySelector(".nav-container");
    if (header && navContainer) {
        const initialHeaderHeight = header.offsetHeight;
        const collapsedHeaderHeight = 60; // Adjust this based on the actual collapsed height

        navContainer.style.top = `${initialHeaderHeight}px`;

        window.addEventListener("scroll", function () {
            if (window.scrollY > initialHeaderHeight) {
                header.classList.add("collapsed");
                navContainer.style.top = `${collapsedHeaderHeight}px`;
            } else {
                header.classList.remove("collapsed");
                navContainer.style.top = `${initialHeaderHeight}px`;
            }
        });
    }
});

function copyEmail() {
    const email = 'khuranakaran18@gmail.com'; // Change this to your email
    navigator.clipboard.writeText(email).then(function() {
        alert('Email copied to clipboard');
    }, function(err) {
        console.error('Could not copy email: ', err);
    });
}

function copyPhone() {
    const phone = '+918860914345'; // Change this to your phone number
    navigator.clipboard.writeText(phone).then(function() {
        alert('Phone number copied to clipboard');
    }, function(err) {
        console.error('Could not copy phone: ', err);
    });
}

function callPhoneNumber() {
    const phoneElement = document.querySelector('.phone');
    if (phoneElement) {
        const phone = phoneElement.innerText;
        window.location.href = 'tel:' + phone;
    }
}

function openLinkedIn() {
    window.open('https://www.linkedin.com/in/kkhuranaa/', '_blank');
}

$(document).ready(function() {
    // Function to check if an element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle animations
    function handleAnimations() {
        $('.timeline-item, .skill-item').each(function() {
            if (isElementInViewport(this)) {
                $(this).addClass('animate');
            } else {
                $(this).removeClass('animate'); // Optional: Remove class when out of view
            }
        });
    }

    // Initial check on page load
    handleAnimations();

    // Check on scroll and resize
    $(window).on('scroll resize', function() {
        handleAnimations();
    });
});

function scrollFunction() {
    const header = document.getElementById("main-header");
    if (header) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add("collapsed");
        } else {
            header.classList.remove("collapsed");
        }
    }
}
