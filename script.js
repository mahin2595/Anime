document.querySelectorAll('.video-link').forEach(function(link) {
  link.addEventListener('click', function() {
    var videoSrc = this.getAttribute('data-video-src');
    document.getElementById('videoFrame').setAttribute('src', videoSrc);
    document.getElementById('videoPopup').style.display = "block";
  });
});

document.getElementById('closeVideo').addEventListener('click', function() {
  document.getElementById('videoFrame').setAttribute('src', '');
  document.getElementById('videoPopup').style.display = "none";
});