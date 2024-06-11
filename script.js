let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slider-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slider-container').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});


        function openTab(evt, tabName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        }

        document.addEventListener("DOMContentLoaded", function() {
            document.querySelector(".tablinks").click();
        });


        window.onscroll = function() {
            scrollFunction();
        };

 document.addEventListener("DOMContentLoaded", function () {
            const header = document.getElementById("header");
            const navContainer = document.querySelector(".nav-container");
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
        });


    // Function to copy email to clipboard
    function copyEmail() {
        var email = 'khuranakaran18@gmail.com'; // Change this to your email
        navigator.clipboard.writeText(email).then(function() {
            alert('Email copied to clipboard');
        }, function(err) {
            console.error('Could not copy email: ', err);
        });
    }

    function copyPhone() {
        var phone = '+918860914345'; // Change this to your email
        navigator.clipboard.writeText(phone).then(function() {
            alert('Phone number copied to clipboard');
        }, function(err) {
            console.error('Could not copy phone: ', err);
        });
    }

    // Function to call phone number
    function callPhoneNumber() {
        var phone = document.querySelector('.phone').innerText;
        window.location.href = 'tel:' + phone;
    }

    function openLinkedIn() {
    window.open('https://www.linkedin.com/in/kkhuranaa/', '_blank');
}

        function openTab(evt, tabName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        }

        document.addEventListener("DOMContentLoaded", function() {
            document.querySelector(".tablinks").click();
        });


        window.onscroll = function() {
    scrollFunction();
};

document.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('collapsed');
    } else {
        header.classList.remove('collapsed');
    }
});



function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("main-header").classList.add("collapsed");
    } else {
        document.getElementById("main-header").classList.remove("collapsed");
    }
}
