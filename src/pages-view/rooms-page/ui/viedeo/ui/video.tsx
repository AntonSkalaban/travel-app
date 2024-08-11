"use client";
import { FC, useRef } from "react";

import { VideoControl } from "features/video-control/ui";

import { videoPoster, videoSrc } from "../model";
import styles from "./styles.module.scss";

export const Video: FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <section className={styles["video-section"]}>
      <VideoControl videoRef={videoRef} />

      <video
        className={styles.video}
        ref={videoRef}
        src={videoSrc}
        controls={false}
        poster={videoPoster}
      />
    </section>
  );
};
