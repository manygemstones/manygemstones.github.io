const birthdayData = {
  "อาทิตย์": {
    title: "เกิดวันอาทิตย์",
    stones: "ไหมทอง (Rutilated Quartz), ทับทิม (Ruby), เรด แจสเปอร์ (Red Jasper)",
    label: "พลังที่ช่วยเสริม:",
    text: "เสริมบารมี พลังอำนาจ และดึงดูดโชคลาภทรัพย์สิน",
    colors: ["#a64f3b", "#c45d37", "#c08b3f", "#f0d8a4"],
  },
  "จันทร์": {
    title: "เกิดวันจันทร์",
    stones: "มุกดาหาร (Moonstone), ซิทริน (Citrine), ไหมห้าสี (Rutilated Quartz)",
    label: "พลังที่ช่วยเสริม:",
    text: "เสริมเสน่ห์ เมตตามหานิยม การเจรจาราบรื่น และความราบรื่นในชีวิต",
    colors: ["#f7f1df", "#e7d8a9", "#c08b3f", "#ffffff"],
  },
  "อังคาร": {
    title: "เกิดวันอังคาร",
    stones: "โรสควอตซ์ (Rose Quartz), โรสกาล่า (Rhodonite), เรด ไทเกอร์อาย (Red Tiger's Eye)",
    label: "พลังที่ช่วยเสริม:",
    text: "เสริมความรัก ความเห็นอกเห็นใจ และเพิ่มความเด็ดขาดในการตัดสินใจ",
    colors: ["#f2b7c7", "#b86f75", "#8b3d48", "#d196a0"],
  },
  "พุธกลางวัน": {
    title: "เกิดวันพุธ (กลางวัน)",
    stones: "หยก (Jade), มรกต (Emerald), กรีน อเวนจูรีน (Green Aventurine)",
    label: "พลังที่ช่วยเสริม:",
    text: "เสริมความเจริญรุ่งเรือง ความอุดมสมบูรณ์ และสุขภาพที่แข็งแรง",
    colors: ["#466b55", "#1f7a52", "#7cae79", "#c3cab8"],
  },
  "พุธกลางคืน": {
    title: "เกิดวันพุธ (กลางคืน)",
    stones: "ออบซิเดียน (Obsidian), ลาบราโดไรต์ (Labradorite), นิลดำ (Onyx)",
    label: "พลังที่ใช่สำหรับคุณ:",
    text: "ป้องกันพลังงานลบ เสริมไหวพริบ และเปิดทางสู่โอกาสใหม่ๆ",
    colors: ["#171717", "#38424c", "#65747d", "#9b9490"],
  },
  "พฤหัส": {
    title: "เกิดวันพฤหัสบดี",
    stones: "ไทเกอร์อาย (Tiger's Eye), คาร์เนเลียน (Carnelian), ซิทริน (Citrine)",
    label: "พลังที่ช่วยเสริม:",
    text: "เสริมสติปัญญา ความก้าวหน้าในหน้าที่การงาน และความโชคดี",
    colors: ["#c08b3f", "#9a6a3a", "#d2b06f", "#f0d8a4"],
  },
  "ศุกร์": {
    title: "เกิดวันศุกร์",
    stones: "ลาพิส ลาซูลี (Lapis Lazuli), อะความารีน (Aquamarine), บลู เลซ อาเกต (Blue Lace Agate)",
    label: "พลังที่ช่วยเสริม:",
    text: "เสริมความคิดสร้างสรรค์ ความสงบภายในจิตใจ และความสุขสมหวัง",
    colors: ["#486f8c", "#78a4b8", "#c8dde4", "#ffffff"],
  },
  "เสาร์": {
    title: "เกิดวันเสาร์",
    stones: "อเมทิสต์ (Amethyst), ซูเปอร์เซเว่น (Super Seven), ลาเวนเดอร์ ควอตซ์ (Lavender Quartz)",
    label: "พลังที่ช่วยเสริม:",
    text: "เสริมความหนักแน่น ปกป้องคุ้มครอง และช่วยลดความเครียดสร้างสมาธิ",
    colors: ["#6d5b7b", "#7d4f7a", "#bda3d7", "#9b9490"],
  },
};

const buttons = document.querySelectorAll(".day-button");
const dayTitle = document.querySelector("#dayTitle");
const dayStones = document.querySelector("#dayStones");
const dayText = document.querySelector("#dayText");
const energyLabel = document.querySelector("#energyLabel");
const palettePreview = document.querySelector("#palettePreview");

function renderPalette(day) {
  const data = birthdayData[day];
  dayTitle.textContent = data.title;
  dayStones.textContent = data.stones;
  energyLabel.textContent = data.label;
  dayText.textContent = data.text;
  palettePreview.innerHTML = data.colors
    .map((color) => `<span style="background:${color}"></span>`)
    .join("");
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderPalette(button.dataset.day);
  });
});

renderPalette("อาทิตย์");

const galleryTrack = document.querySelector("[data-gallery-track]");
const galleryPrev = document.querySelector("[data-gallery-prev]");
const galleryNext = document.querySelector("[data-gallery-next]");
const galleryDots = document.querySelector("[data-gallery-dots]");

if (galleryTrack && galleryPrev && galleryNext && galleryDots) {
  const slides = [...galleryTrack.querySelectorAll(".gallery-card")];
  let activeSlide = 0;

  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "slider-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `ดูสไลด์ที่ ${index + 1}`);
    dot.addEventListener("click", () => scrollToSlide(index));
    galleryDots.appendChild(dot);
  });

  const dots = [...galleryDots.querySelectorAll(".slider-dot")];

  function setActiveSlide(index) {
    activeSlide = Math.max(0, Math.min(index, slides.length - 1));
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === activeSlide);
    });
  }

  function scrollToSlide(index) {
    setActiveSlide(index);
    slides[activeSlide].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }

  galleryPrev.addEventListener("click", () => {
    scrollToSlide(activeSlide === 0 ? slides.length - 1 : activeSlide - 1);
  });

  galleryNext.addEventListener("click", () => {
    scrollToSlide(activeSlide === slides.length - 1 ? 0 : activeSlide + 1);
  });

  galleryTrack.addEventListener("scroll", () => {
    const trackLeft = galleryTrack.getBoundingClientRect().left;
    const nearest = slides.reduce(
      (best, slide, index) => {
        const distance = Math.abs(slide.getBoundingClientRect().left - trackLeft);
        return distance < best.distance ? { index, distance } : best;
      },
      { index: activeSlide, distance: Infinity },
    );
    setActiveSlide(nearest.index);
  });

  setActiveSlide(0);
}
