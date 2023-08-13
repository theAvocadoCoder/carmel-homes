import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function VideoPlayer(props) {
  const { width, heigth } = props;
  const cloudinaryRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    if (cloudinaryRef.current) return;

    cloudinaryRef.current = window.cloudinary;
    cloudinaryRef.current.videoPlayer(videoRef.current, {
      cloud_name: "theavocadocoder",
      showLogo: false
    })
  }, []);
  

  return (
    <video 
      ref={videoRef}
      data-cld-public-id="carmel-exports/what-is-rent-to-own/Rent-to-own_p5ytnn"
      width={width}
      height={heigth}
      controls
      {...props}
    />
  )
}

VideoPlayer.propTypes = {
  width: PropTypes.number,
  heigth: PropTypes.number
}

export default VideoPlayer