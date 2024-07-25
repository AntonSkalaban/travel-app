"use client";
import { FC, useRef } from "react";

import { VideoControl } from "features/video-control/ui";

import { videoPoster, videoSrc } from "../model/constants";
import styles from "./styles.module.scss";

export const Video: FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleClick = (isPlaying: boolean) => {
    if (isPlaying) {
      videoRef?.current?.pause();
    } else {
      videoRef.current?.play();
    }
  };

  return (
    <section className={styles["video-section"]}>
      <VideoControl onClick={handleClick} />

      <video
        ref={videoRef}
        className={styles.video}
        src={videoSrc}
        controls={false}
        poster={videoPoster}
      />
    </section>
  );
};
