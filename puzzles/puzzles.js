// The solution is only fetched when someone asks for the answer, so landing on a page of thirty
// puzzles downloads thirty small stills rather than thirty megabytes of solution. The site's
// clips.js plays it while it is on screen and pauses it on a click.
document.addEventListener("click", function (event) {
  var button = event.target.closest(".reveal");
  if (!button) {
    return;
  }
  var figure = button.closest(".puzzle");
  var image = figure.querySelector("img");
  var video = figure.querySelector("video");
  var playing = figure.classList.toggle("playing");
  if (playing && !video) {
    // it carries twice the still's pixels, so shown at the still's size a high density screen
    // gets it pixel for pixel
    video = document.createElement("video");
    video.dataset.src = figure.dataset.anim;
    video.poster = figure.dataset.still;
    video.width = image.width;
    video.height = image.height;
    video.muted = video.loop = video.playsInline = true;
    video.preload = "none";
    image.after(video);
    watchClips(figure);
  }
  if (video) {
    video.hidden = !playing;
  }
  image.hidden = playing;
  button.textContent = playing ? "Show the board again" : "Show me the solution";
});
