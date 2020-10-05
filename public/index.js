function addimage(Keyword, index) {
  //สร้าง link img
  const image = document.createElement("img");

  image.src = `https://source.unsplash.com/400x225?${Keyword}&sig=${index}`;
  const gallery = document.querySelector(".gallery");
  gallery.appendChild(image);
}

function removeAllPhoto() {
  //ลบรูป
  const galleryElement = document.querySelector(".gallery");
  galleryElement.innerHTML = "";
}

function searchPhoto(event) {
  const keyword = event.target.value;
  if (event.key === "Enter" && keyword !== "") {
    removeAllPhoto();
    for (let i = 0; i < 9; i++) {
      addimage(keyword, i);
    }
  }
}

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

function main() {
  const inputcontrol = document.querySelectorAll(".controls input");
  inputcontrol.forEach((input) => {
    input.addEventListener("change", handleUpdate);
  });
  inputcontrol.forEach((input) => {
    input.addEventListener("mousemove", handleUpdate);
  });

  //ฟังชั่นเปลี่ยน ui ต่างๆ

  const inputElement = document.querySelector(".search");
  inputElement.addEventListener("keydown", searchPhoto);
  //เสริชรูป
}

main();
// Wrap every letter in a span
var textWrapper = document.querySelector(".ml1 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml1 .letter",
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i + 1),
  })
  .add({
    targets: ".ml1 .line",
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
    offset: "-=875",
    delay: (el, i, l) => 80 * (l - i),
  })
  .add({
    targets: ".ml1",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
