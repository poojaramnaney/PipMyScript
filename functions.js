document.addEventListener("DOMContentLoaded", function() {
    // Replace 'video_filename.mp4' with the path to your generated video file
    const videoFile = 'video_filename.mp4';

    const video = document.getElementById('myVideo');
    const source = document.createElement('source');

    source.setAttribute('src', videoFile);
    source.setAttribute('type', 'video/mp4');

    video.appendChild(source);
    video.load();
});
