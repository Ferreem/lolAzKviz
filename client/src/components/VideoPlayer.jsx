import videoSource from '../styles/videos/videoTutorial.mp4'
function VideoPlayer() {
  return (
    <div className="video-container">
      <video controls width="100%">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;