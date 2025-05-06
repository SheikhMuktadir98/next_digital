function equalizeTopnotchHeightsTwo(e = ".testimonial-card") {
  let t = 0;
  $(e).css("height", "auto"),
    $(e).each(function () {
      t = Math.max(t, $(this).outerHeight());
    }),
    $(e).css("height", t + "px");
}
function initCounters() {
  const e = document.querySelectorAll(".counter");
  let t = !1;
  function o(e, t) {
    return t
      ? Math.floor(e) + "%"
      : e >= 1e6
      ? Math.floor(e / 1e6) + "M+"
      : e >= 1e3
      ? Math.floor(e / 1e3) + "K+"
      : e + "+";
  }
  const n = new IntersectionObserver(
      (n) => {
        n.forEach((n) => {
          n.isIntersecting &&
            !t &&
            ((t = !0),
            e.forEach((e) => {
              const t = +e.getAttribute("data-target"),
                n = "percent" === e.dataset.type;
              let a = 0;
              const s = t / 180,
                i = () => {
                  (a += s),
                    a < t
                      ? ((e.innerText = o(Math.floor(a), n)),
                        requestAnimationFrame(i))
                      : (e.innerText = o(t, n));
                };
              i();
            }));
        });
      },
      { threshold: 0.3 }
    ),
    a = document.querySelector(".hero-section");
  a && n.observe(a);
}
function showPopup() {
  document.getElementById("popup").classList.add("show"),
    document.body.classList.add("noscroll");
}
function closePopup() {
  const e = document.getElementById("popup");
  e.classList.remove("show"),
    document.body.classList.remove("noscroll"),
    setTimeout(() => {
      e.style.display = "none";
    }, 400);
}
document.addEventListener("DOMContentLoaded", function () {
  const e = document.getElementById("navbarButton"),
    t = document.getElementById("leadUIMainNav"),
    o = document.getElementById("toggle"),
    n = document.getElementById("closeButton");
  function a() {
    t.classList.remove("show"), o.classList.remove("on");
  }
  e.addEventListener("click", function () {
    t.classList.add("show"), o.classList.add("on");
  }),
    n.addEventListener("click", a),
    t.addEventListener("click", function (e) {
      e.stopPropagation();
    }),
    document.addEventListener("click", function (o) {
      e.contains(o.target) || t.contains(o.target) || a();
    }),
    document.querySelectorAll(".tab, .servicesContent").forEach((e) => {
      e.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    }),
    document.querySelectorAll(".nav-link").forEach((e) => {
      e.addEventListener("click", a);
    });
}),
  document.addEventListener("DOMContentLoaded", () => {
    const e = document.querySelectorAll(".tab"),
      t = document.querySelectorAll(".servicesContent");
    let o;
    function n(o) {
      e.forEach((e) => e.classList.remove("active")),
        t.forEach((e) => {
          (e.style.display = "none"),
            (e.style.opacity = 0),
            (e.style.transform = "translateY(20px)"),
            e.classList.remove("active");
        });
      const n = document.querySelector(`.tab[data-tab="${o}"]`);
      n && n.classList.add("active");
      document
        .querySelectorAll(`.servicesContent[data-tab-content="${o}"]`)
        .forEach((e) => {
          e.classList.add("active"),
            (function (e) {
              let t = 0,
                o = 40;
              (e.style.opacity = t),
                (e.style.display = "grid"),
                (e.style.transform = `translateY(${o}px)`),
                (function n() {
                  (t += 0.05),
                    (o -= 2),
                    (e.style.opacity = t),
                    (e.style.transform = `translateY(${o}px)`),
                    t < 1
                      ? requestAnimationFrame(n)
                      : (e.style.transform = "translateY(0)");
                })();
            })(e);
        });
    }
    let a = 0;
    const s = e.length;
    function i() {
      a = (a + 1) % s;
      n(e[a].getAttribute("data-tab"));
    }
    e.forEach((e, t) => {
      e.addEventListener("mouseover", () => {
        n(e.getAttribute("data-tab")),
          (a = t),
          clearInterval(o),
          (o = setInterval(i, 5e3));
      });
    }),
      n("1"),
      setTimeout(() => {
        o = setInterval(i, 5e3);
      }, 5e3);
  }),
  document.addEventListener("DOMContentLoaded", function () {
    $(".team-slide").owlCarousel({
      loop: !0,
      margin: 20,
      nav: !1,
      dots: !1,
      autoplay: !0,
      autoplayTimeout: 5e3,
      autoplaySpeed: 1e3,
      smartSpeed: 1e3,
      mouseDrag: !0,
      center: !0,
      touchDrag: !0,
      autoplayHoverPause: !1,
      responsive: {
        0: { items: 1 },
        576: { items: 1.2 },
        768: { items: 2 },
        1e3: { items: 3 },
      },
    });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    $(".testslider").owlCarousel({
      loop: !0,
      margin: 0,
      nav: !1,
      dots: !1,
      autoplay: !0,
      slideTransition: "linear",
      autoplayTimeout: 7e3,
      autoplaySpeed: 7e3,
      mouseDrag: !0,
      center: !0,
      touchDrag: !0,
      autoplayHoverPause: !1,
      responsive: {
        0: { items: 2 },
        576: { items: 3 },
        768: { items: 3 },
        1e3: { items: 3.2 },
        1400: { items: 3.2 },
        1700: { items: 4.2 },
      },
    });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    $(".testslider2").owlCarousel({
      loop: !0,
      margin: 0,
      nav: !1,
      dots: !1,
      autoplay: !0,
      slideTransition: "linear",
      autoplayTimeout: 7e3,
      autoplaySpeed: 7e3,
      rtl: !0,
      mouseDrag: !0,
      center: !0,
      touchDrag: !0,
      autoplayHoverPause: !1,
      responsive: {
        0: { items: 2.8 },
        576: { items: 3.5 },
        768: { items: 4 },
        1e3: { items: 5 },
        1400: { items: 7 },
        1700: { items: 9 },
      },
    });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    $(".testimonial_slide").owlCarousel({
      loop: !0,
      autoplay: !0,
      autoplayTimeout: 6e3,
      touchDrag: !0,
      autoplayHoverPause: !1,
      nav: !0,
      dots: !1,
      margin: 40,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      smartSpeed: 800,
      autoplaySpeed: 1e3,
      responsive: {
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 1.5 },
        1e3: { items: 2 },
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
    }),
      $(".owl-carousel .owl-nav button.owl-prev").html(
        '<span class="custom-btn prev-btn"><i class="fa-solid fa-arrow-left me-2"></i>Prev</span>'
      ),
      $(".owl-carousel .owl-nav button.owl-next").html(
        '<span class="custom-btn next-btn">Next<i class="fa-solid fa-arrow-right ms-2"></i></span>'
      );
  }),
  window.addEventListener("resize", function () {
    equalizeTopnotchHeightsTwo(".testimonial-card");
  }),
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a.nav-link[href^="#"]').forEach((e) => {
      e.addEventListener("click", function (e) {
        e.preventDefault();
        const t = document.querySelector(this.getAttribute("href"));
        t && window.scrollTo({ top: t.offsetTop, behavior: "smooth" });
      });
    }),
      document.querySelectorAll("a.nav-link").forEach((e) => {
        e.addEventListener("click", () => {
          document.getElementById("leadUIMainNav").classList.remove("show");
        });
      });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("noscroll");
    let e = 0;
    const t = document.getElementById("loader-percent"),
      o = document.getElementById("fullscreen-loader"),
      n = setInterval(() => {
        e < 100
          ? (e++, (t.textContent = `${e}%`))
          : (clearInterval(n),
            (t.textContent = "100%"),
            setTimeout(() => {
              (o.style.display = "none"),
                document.body.classList.remove("noscroll"),
                initCounters();
            }, 500));
      }, 10);
  }),
  document.addEventListener("DOMContentLoaded", function () {
    const e = document.querySelectorAll(".project-card");
    e[1].classList.add("expanded"),
      e.forEach((t) => {
        t.addEventListener("mouseenter", () => {
          e.forEach((e) => e.classList.remove("expanded")),
            t.classList.add("expanded");
        });
      });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    const e = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          const t = e.target,
            o = t.getAttribute("data-delay") || 0;
          e.isIntersecting
            ? setTimeout(() => {
                t.classList.add("in-view");
              }, o)
            : t.classList.remove("in-view");
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((t) => {
      const o = t.getAttribute("data-effect");
      o && t.classList.add(o), e.observe(t);
    });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    const e = document.querySelector(".hero-LargeTxt"),
      t = e.textContent.split("");
    (e.textContent = ""),
      setTimeout(() => {
        t.forEach((t, o) => {
          const n = document.createElement("span");
          (n.textContent = t), (n.style.display = "inline-block");
          const a = Math.floor(200 * Math.random()) - 100,
            s = Math.floor(200 * Math.random()) - 100;
          n.style.setProperty("--x", `${a}px`),
            n.style.setProperty("--y", `${s}px`),
            (n.style.animationDelay = 0.4 * o + "s"),
            e.appendChild(n);
        });
      }, 1e3);
  }),
  document.addEventListener("DOMContentLoaded", () => {
    const e = document.querySelectorAll(".very-large-heading");
    e.forEach((e) => {
      const t = e.textContent;
      (e.textContent = ""),
        t.split("").forEach((t, o) => {
          const n = document.createElement("span");
          (n.textContent = t),
            (n.style.animationDelay = 0.2 * o + "s"),
            " " === t &&
              ((n.style.width = "0.2em"), (n.style.display = "inline-block")),
            e.appendChild(n);
        });
    });
    const t = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll("span").forEach((e) => {
              e.style.animationPlayState = "running";
            }),
              t.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    e.forEach((e) => {
      t.observe(e);
    });
  }),
  (window.onload = function () {
    setTimeout(() => {
      (document.getElementById("popup").style.display = "flex"),
        setTimeout(showPopup, 10);
    }, 1e4);
  });
