
AOS.init({
    duration: 1000,  // Animation duration in milliseconds
    easing: 'ease-in-out', // Type of animation easing
    once: true, // Animation occurs once when scrolling
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
const Projectswiper = new Swiper('.project-swipercontainer', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 20, 
    loop: true,
    speed: 3000, // Speed of the transition (in ms)
    autoplay: {
        delay: 0, // No delay between transitions
        disableOnInteraction: false, // Keep autoplay active after user interaction
    },
    navigation: {
        nextEl: ".project-swipercontainer .swiper-button-next",
        prevEl: " .project-swipercontainer .swiper-button-prev",
    },
    breakpoints: {
        0: { // Below 768px
          slidesPerView: 1,
        },
        768: { // Between 768px and 992px
          slidesPerView: 2,
        },
        992: { // 992px and above
          slidesPerView: 3,
        }
      },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
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
        document.querySelectorAll(".aboutus-number").forEach((el) => {
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

if (window.matchMedia('(min-width: 768px)').matches) {

    const overyear = new Swiper(".journey-swiper", {
        slidesPerView: 3,
        loop: false,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // autoplay: {
        //     delay: 5000,
        // },
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
    document.addEventListener("DOMContentLoaded", () => {
        // Select all div elements
        const items = document.querySelectorAll(".journey--item");

        // Arrays to hold even and odd indexed div heights
        let evenHeights = [];
        let oddHeights = [];

        // Loop through each div to calculate its height
        items.forEach((item, index) => {
            const height = item.offsetHeight; // Get the height of the div

            // Separate into even and odd indexed arrays
            if ((index + 1) % 2 === 0) {
                evenHeights.push(height);
            } else {
                oddHeights.push(height);
            }
        });

        // Find the largest height in even and odd arrays
        const maxEvenHeight = Math.max(...evenHeights);
        const maxOddHeight = Math.max(...oddHeights);
        const totalHeight = maxEvenHeight + maxOddHeight;

        // Set the largest heights as CSS variables
        let slectStyle = document.documentElement.style;
        slectStyle.setProperty("--max-even-height", `${maxEvenHeight}px`);
        slectStyle.setProperty("--max-odd-height", `${maxOddHeight}px`);
        slectStyle.setProperty("--total-height", `${totalHeight}px`);
    });

}

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