window.addEventListener("load", () => {
  console.log("page is fully loaded");
  let sounds = document.querySelectorAll(".sound");
  let pads = document.querySelectorAll(".pads div");

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubble(index);
    });
  });
});
