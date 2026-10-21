// Gameplay clips, written as <video data-src="..." muted loop playsinline preload="none">. A clip
// is fetched when it comes near the screen, plays while it is on it, and pauses when it leaves, so
// a page of dozens of clips downloads and decodes the few being looked at. A click pauses a clip
// and it stays paused until clicked again.
(function () {
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function play(video) {
    video.play().catch(function (error) {
      // the browser refused to start it on its own, so the reader can start it
      if (error.name === "NotAllowedError") {
        video.controls = true;
      }
    });
  }

  function load(video) {
    if (!video.getAttribute("src")) {
      video.preload = "auto";
      video.src = video.dataset.src;
    }
  }

  var near = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        load(entry.target);
        near.unobserve(entry.target);
      }
    });
  }, {rootMargin: "300px 0px"});

  var onScreen = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var video = entry.target;
      if (!entry.isIntersecting) {
        video.pause();
      } else {
        load(video);
        if (!("pausedByHand" in video.dataset) && !video.controls) {
          play(video);
        }
      }
    });
  });

  function toggle(event) {
    var video = event.currentTarget;
    // with controls showing, the browser's own click handling already does this
    if (video.controls) {
      return;
    }
    if (video.paused) {
      delete video.dataset.pausedByHand;
      play(video);
    } else {
      video.dataset.pausedByHand = "";
      video.pause();
    }
  }

  window.watchClips = function (root) {
    (root || document).querySelectorAll("video[data-src]:not([data-watched])").forEach(function (video) {
      video.dataset.watched = "";
      video.controls = reducedMotion;
      video.addEventListener("click", toggle);
      near.observe(video);
      onScreen.observe(video);
    });
  };
})();
