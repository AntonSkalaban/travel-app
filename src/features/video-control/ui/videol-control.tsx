import { FC, useState } from "react";

import Pause from "./images/pause.svg";
import Play from "./images/play.svg";
import { VideoControlProps } from "../model";
import styles from "./styles.module.scss";

export const VideoControl: FC<VideoControlProps> = ({ videoRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
    } else {
      videoRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <button
      className={styles.btn}
      onClick={handleClick}
      data-testid="video-btn"
    >
      {isPlaying ? (
        <Pause data-testid="pause-image" />
      ) : (
        <Play className={styles["play-icon"]} data-testid="play-image" />
      )}
    </button>
  );
};
