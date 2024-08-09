import { MutableRefObject } from "react";

export interface VideoControlProps {
  videoRef: MutableRefObject<HTMLVideoElement | null>;
}
