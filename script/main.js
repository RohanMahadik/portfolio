
// Js for AOS Library
AOS.init({
    duration: 1000, 
    easing: 'ease-in-out', 
    once: true, 
  });
// designation swiper
const swiper = new Swiper('.banner-degswiper', {
    // Optional parameters
    slidesPerView: 1,
    direction: 'vertical',
    loop: true,
    // Autoplay configuration
    autoplay: {
        delay: 0, // No delay between transitions
        disableOnInteraction: false, // Keep autoplay active after user interaction
    },

    speed: 3000, // Speed of the transition (in ms)
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
// project swiper
const Projectswiper = new Swiper('.project-swipercontainer', {
    slidesPerView: 3,
    spaceBetween: 20, 
    loop: true,
    speed: 3000, 
    autoplay: {
        delay:3000, 
        disableOnInteraction: false, 
    },
    navigation: {
        nextEl: ".project-swipercontainer .swiper-button-next",
        prevEl: " .project-swipercontainer .swiper-button-prev",
    },
    breakpoints: {
        0: { 
          slidesPerView: 1,
        },
        768: { 
          slidesPerView: 2,
        },
        992: { 
          slidesPerView: 3,
        }
      },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
// Js for Resume Download
document.addEventListener("DOMContentLoaded", function () {
    function animateCounter(element, start, end, duration) {
        let startTime = null;

        function updateCounter(currentTime) {
            if (!startTime) startTime = currentTime;
            let progress = Math.min((currentTime - startTime) / duration, 1);
            let value = Math.floor(progress * (end - start) + start);
            element.innerText = value;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }

        requestAnimationFrame(updateCounter);
    }

    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    function handleScroll() {
        document.querySelectorAll(".aboutus-number,.project-counter").forEach((el) => {
            if (isElementInViewport(el) && !el.dataset.animated) {
                el.dataset.animated = "true";
                let endValue = parseInt(el.dataset.number, 10);
                animateCounter(el, 0, endValue, 2000); 
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
});
// Get the download button and count display
const downloadBtn = document.getElementById("downloadResume");
const downloadCount = document.getElementById("downloadCount");

// Retrieve count from localStorage or initialize it
let count = localStorage.getItem("resumeDownloadCount") || 0;
downloadCount.textContent = count;

// Add event listener to update count on click
downloadBtn.addEventListener("click", () => {
    count++;
    localStorage.setItem("resumeDownloadCount", count);
    downloadCount.textContent = count;
});
var player = videojs('my-video', {
    fluid: true
});

// JS For Video Watch
document.addEventListener("DOMContentLoaded", function () {
    var video = videojs('my-video'); // Initialize Video.js player
    var viewCountElement = document.getElementById("viewCount");
    var viewCountKey = "videoViewCount"; // Unique key for localStorage

    // Get existing view count from localStorage (or set it to 0)
    var viewCount = localStorage.getItem(viewCountKey) || 0;
    viewCountElement.textContent = viewCount; // Show initial count

    // Check if user has already watched to prevent duplicate counts
    var videoWatchedKey = "videoWatched"; 
    if (!localStorage.getItem(videoWatchedKey)) {
        video.on("play", function () {
            console.log("Video started - Count as a view");

            // Increase view count
            viewCount++;
            localStorage.setItem(viewCountKey, viewCount);
            viewCountElement.textContent = viewCount; // Update HTML

            // Mark video as watched (to prevent multiple counts)
            localStorage.setItem(videoWatchedKey, "true");

            // Reset 'videoWatched' when the page reloads after some time
            setTimeout(() => {
                localStorage.removeItem(videoWatchedKey);
            }, 60000); // Reset after 1 minute (adjust as needed)
        });
    }
});

// Js swiper for Work
if (window.matchMedia('(min-width: 768px)').matches) {

    const overyear = new Swiper(".journey-swiper", {
        slidesPerView: 3,
        loop: false,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 100,
            },
            1200: {
                slidesPerView: 2.6,
                spaceBetween: 100,

            }
        }
    });
}

// Js for showmore or less
function toggleContent() {
    var list = document.querySelector(".journey-list");
    var btnText = document.getElementById("btn");

    list.classList.toggle("open"); // Toggle 'open' class to control height

    if (list.classList.contains("open")) {
      btnText.textContent = "Show Less";
    } else {
      btnText.textContent = "Show More";
    }
  }