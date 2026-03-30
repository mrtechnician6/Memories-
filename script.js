function checkAnswer() {
  let ans = document.getElementById("answer").value.toLowerCase();

  if(ans === "cricket") {
    sessionStorage.setItem("access", "yes");
    document.getElementById("lock").style.display = "none";
    document.getElementById("albums").style.display = "block";
  } else {
    alert("Wrong answer!");
  }
}

// If already unlocked
if(sessionStorage.getItem("access") === "yes") {
  document.getElementById("lock").style.display = "none";
  document.getElementById("albums").style.display = "block";
}

// LOAD PHOTOS
function loadPhotos() {
  fetch("files.json")
    .then(res => res.json())
    .then(data => {
      let gallery = document.getElementById("gallery");
      gallery.innerHTML = "";

      data.photos.forEach(name => {
        let img = document.createElement("img");
        img.src = "media/photos/" + name;
        gallery.appendChild(img);
      });
    });
}

// LOAD VIDEOS
function loadVideos() {
  fetch("files.json")
    .then(res => res.json())
    .then(data => {
      let gallery = document.getElementById("gallery");
      gallery.innerHTML = "";

      data.videos.forEach(name => {
        let video = document.createElement("video");
        video.src = "media/videos/" + name;
        video.controls = true;
        gallery.appendChild(video);
      });
    });
}
