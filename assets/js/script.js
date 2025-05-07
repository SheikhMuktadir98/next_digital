// tog *****************************************************************************
document.addEventListener("DOMContentLoaded", function () {
  const navbarButton = document.getElementById("navbarButton");
  const navMenu = document.getElementById("leadUIMainNav");
  const toggleIcon = document.getElementById("toggle");
  const closeButton = document.getElementById("closeButton");

  function openMenu() {
    navMenu.classList.add("show");
    toggleIcon.classList.add("on");
  }

  function closeMenu() {
    navMenu.classList.remove("show");
    toggleIcon.classList.remove("on");
  }

  navbarButton.addEventListener("click", openMenu);

  closeButton.addEventListener("click", closeMenu);

  // Stop propagation for clicks inside the navMenu
  navMenu.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event from bubbling up and triggering document click handler
  });

  // Close the menu if the user clicks outside of the nav menu
  document.addEventListener("click", function (event) {
    if (
      !navbarButton.contains(event.target) &&
      !navMenu.contains(event.target) // Close only if the click is outside the menu
    ) {
      closeMenu();
    }
  });

  // Prevent menu from closing if a tab or tab content is clicked
  document.querySelectorAll(".tab, .servicesContent").forEach((element) => {
    element.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent the click event from closing the menu
    });
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});

// auto tabs **************************************************************************
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".servicesContent");
  let autoPlayInterval;

  function fadeIn(element) {
    let opacity = 0;
    let translateY = 40;
    element.style.opacity = opacity;
    element.style.display = "grid";
    element.style.transform = `translateY(${translateY}px)`;

    function increase() {
      opacity += 0.05;
      translateY -= 2;
      element.style.opacity = opacity;
      element.style.transform = `translateY(${translateY}px)`;

      if (opacity < 1) {
        requestAnimationFrame(increase);
      } else {
        element.style.transform = "translateY(0)";
      }
    }
    increase();
  }

  function showTabContent(tabId) {
    // Remove active class and hide all content
    tabs.forEach((tab) => tab.classList.remove("active"));
    contents.forEach((content) => {
      content.style.display = "none";
      content.style.opacity = 0;
      content.style.transform = "translateY(20px)";
      content.classList.remove("active");
    });

    // Activate selected tab
    const activeTab = document.querySelector(`.tab[data-tab="${tabId}"]`);
    if (activeTab) {
      activeTab.classList.add("active");
    }

    // Show and animate all matching contents (left and right images)
    const activeContents = document.querySelectorAll(
      `.servicesContent[data-tab-content="${tabId}"]`
    );
    activeContents.forEach((content) => {
      content.classList.add("active");
      fadeIn(content);
    });
  }

  let currentTab = 0;
  const totalTabs = tabs.length;

  function autoPlay() {
    currentTab = (currentTab + 1) % totalTabs;
    const tabId = tabs[currentTab].getAttribute("data-tab");
    showTabContent(tabId);
  }

  function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(autoPlay, 5000);
  }

  // Add event listeners to each tab
  tabs.forEach((tab, index) => {
    tab.addEventListener("mouseover", () => {
      const tabId = tab.getAttribute("data-tab");
      showTabContent(tabId);
      currentTab = index;
      resetAutoPlay();
    });
  });

  // Show the first tab on load
  showTabContent("1");

  // Start autoplay after a short delay
  setTimeout(() => {
    autoPlayInterval = setInterval(autoPlay, 5000);
  }, 5000);
});

//  slider *******************************************************************************************

document.addEventListener("DOMContentLoaded", function () {
  $(".team-slide").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    smartSpeed: 1000,
    mouseDrag: true,
    center: true,
    touchDrag: true,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1.2,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  $(".testslider").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 7000,
    autoplaySpeed: 7000,
    mouseDrag: true,
    center: true,
    touchDrag: true,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 3.2,
      },
      1400: {
        items: 3.2,
      },
      1700: {
        items: 4.2,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  $(".testslider2").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 7000,
    autoplaySpeed: 7000,
    rtl: true,
    mouseDrag: true,
    center: true,
    touchDrag: true,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 2.8,
      },
      576: {
        items: 3.5,
      },
      768: {
        items: 4,
      },
      1000: {
        items: 5,
      },
      1400: {
        items: 7,
      },
      1700: {
        items: 9,
      },
    },
  });
});

function equalizeTopnotchHeightsTwo(selector = ".testimonial-card") {
  let maxHeight = 0;

  // Reset all heights
  $(selector).css("height", "auto");

  // Find max height
  $(selector).each(function () {
    maxHeight = Math.max(maxHeight, $(this).outerHeight());
  });

  // Apply max height
  $(selector).css("height", maxHeight + "px");
}

document.addEventListener("DOMContentLoaded", function () {
  $(".testimonial_slide").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    touchDrag: true,
    autoplayHoverPause: false,
    nav: true,
    dots: false,
    margin: 40,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    smartSpeed: 800,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1.5,
      },
      1000: {
        items: 2,
      },
    },
    onInitialized: function () {
      equalizeTopnotchHeightsTwo(".testimonial-card");
    },
    onResized: function () {
      equalizeTopnotchHeightsTwo(".testimonial-card");
    },
    onRefreshed: function () {
      equalizeTopnotchHeightsTwo(".testimonial-card");
    },
  });

  $(".owl-carousel .owl-nav button.owl-prev").html(
    '<span class="custom-btn prev-btn"><i class="fa-solid fa-arrow-left me-2"></i>Prev</span>'
  );
  $(".owl-carousel .owl-nav button.owl-next").html(
    '<span class="custom-btn next-btn">Next<i class="fa-solid fa-arrow-right ms-2"></i></span>'
  );
});

window.addEventListener("resize", function () {
  equalizeTopnotchHeightsTwo(".testimonial-card");
});

// nav route *************************************************************************************************

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a.nav-link[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Close menu after clicking a nav link (optional)
  document.querySelectorAll("a.nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("leadUIMainNav").classList.remove("show"); // or add logic to hide it
    });
  });
});

//  loader and counter **************************************************************

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("noscroll");

  let percent = 0;
  const percentElement = document.getElementById("loader-percent");
  const loaderScreen = document.getElementById("fullscreen-loader");

  const duration = 1000; // total 2 seconds
  const steps = 100;
  const intervalTime = duration / steps; // 2000ms / 100 steps = 20ms
  const interval = setInterval(() => {
    if (percent < 100) {
      percent++;
      percentElement.textContent = `${percent}%`;
    } else {
      clearInterval(interval);
      percentElement.textContent = "100%";

      setTimeout(() => {
        loaderScreen.style.display = "none";
        document.body.classList.remove("noscroll");

        // Start counters after loader disappears
        initCounters();
      }, 500); // Small delay after 100% is reached
    }
  }, intervalTime);
});

function initCounters() {
  const counters = document.querySelectorAll(".counter");
  let hasStarted = false;

  function formatNumber(num, isPercentage) {
    if (isPercentage) return Math.floor(num) + "%";
    if (num >= 1000000) return Math.floor(num / 1000000) + "M+";
    if (num >= 1000) return Math.floor(num / 1000) + "K+";
    return num + "+";
  }

  function startCounter() {
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const isPercentage = counter.dataset.type === "percent";
      let count = 0;
      const duration = 3000;
      const frameRate = 60;
      const totalFrames = (duration / 1000) * frameRate;
      const increment = target / totalFrames;

      const updateCounter = () => {
        count += increment;
        if (count < target) {
          counter.innerText = formatNumber(Math.floor(count), isPercentage);
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = formatNumber(target, isPercentage);
        }
      };

      updateCounter();
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasStarted) {
          hasStarted = true;
          startCounter();
        }
      });
    },
    { threshold: 0.3 }
  );

  const targetSection = document.querySelector(".hero-section");
  if (targetSection) {
    observer.observe(targetSection);
  }
}

// project card *************************************

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".project-card");

  // Expand second card by default
  cards[1].classList.add("expanded");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      // Remove expanded class from all cards
      cards.forEach((c) => c.classList.remove("expanded"));

      // Add expanded class to the hovered card
      card.classList.add("expanded");
    });
  });
});

// animations *********************************************************************

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const element = entry.target;
        const delay = element.getAttribute("data-delay") || 0;
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.classList.add("in-view"); // changed "active" to "in-view"
          }, delay);
        } else {
          // Reset animation when element goes out of view
          element.classList.remove("in-view"); // changed "active" to "in-view"
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    const effect = el.getAttribute("data-effect");
    if (effect) {
      el.classList.add(effect);
    }
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelector(".hero-LargeTxt");
  const strText = text.textContent;
  const splitText = strText.split("");
  text.textContent = "";

  // Add 1-second delay before starting the animation
  setTimeout(() => {
    splitText.forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";

      const randomX = Math.floor(Math.random() * 200) - 100; // -100px to +100px
      const randomY = Math.floor(Math.random() * 200) - 100; // -100px to +100px

      span.style.setProperty("--x", `${randomX}px`);
      span.style.setProperty("--y", `${randomY}px`);
      span.style.animationDelay = `${i * 0.4}s`;

      text.appendChild(span);
    });
  }, 1000); // Start after 1 second
});

document.addEventListener("DOMContentLoaded", () => {
  const headings = document.querySelectorAll(".very-large-heading");

  headings.forEach((heading) => {
    const text = heading.textContent;
    heading.textContent = "";

    text.split("").forEach((char, idx) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.animationDelay = `${idx * 0.2}s`;

      if (char === " ") {
        span.style.width = "0.2em"; /* Give a gap for spaces */
        span.style.display = "inline-block";
      }

      heading.appendChild(span);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const spans = entry.target.querySelectorAll("span");
          spans.forEach((span) => {
            span.style.animationPlayState = "running";
          });
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  headings.forEach((heading) => {
    observer.observe(heading);
  });
});

// popup page load ************************************************************

function showPopup() {
  const popup = document.getElementById("popup");
  popup.classList.add("show");
  document.body.classList.add("noscroll");
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.classList.remove("show");
  document.body.classList.remove("noscroll");

  // Wait for the transition to end before hiding completely
  setTimeout(() => {
    popup.style.display = "none";
  }, 400); // match this duration to your CSS transition (400ms)
}

window.onload = function () {
  setTimeout(() => {
    const popup = document.getElementById("popup");
    popup.style.display = "flex"; // make it visible first
    // slight delay to allow CSS to apply display before animating
    setTimeout(showPopup, 10); // tiny delay
  }, 10000);
};
