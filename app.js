const symphonies = [
  "L",
  "U",
  "D",
  "W",
  "I",
  "G",
  "V",
  "A",
  "N"
]

symphonies.forEach((symphony) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = symphony;

  btn.addEventListener("click", () => {
    stopTrack();
    document.getElementById(symphony).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

const stopTrack = () => {
  symphonies.forEach((symphony) => {
    const track = document.getElementById(symphony);

    track.pause();
    track.currentTime = 0;
  });
}