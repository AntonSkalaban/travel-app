"use client";
import { FC, useRef } from "react";

import { VideoControl } from "features/video-control/ui";

import { VideoProps } from "../model";
import styles from "./styles.module.scss";

export const Video: FC<VideoProps> = ({ src, poster }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <section className={styles["video-section"]}>
      <VideoControl videoRef={videoRef} />

      <video
        className={styles.video}
        ref={videoRef}
        src={src}
        controls={false}
        poster={poster}
        data-testid="video"
      />
    </section>
  );
};
