import { FC, useState } from "react";
import Image from "next/image";

import { RoomImagesViewerProps } from "../model";
import styles from "./styles.module.scss";

export const RoomImagesViewer: FC<RoomImagesViewerProps> = ({ images }) => {
  const [openImage, setOpenImage] = useState(images[0]);

  const handleClick = (img: string) => () => {
    setOpenImage(img);
  };

  return (
    <div className={styles.container}>
      <div className={styles["small-images-container"]}>
        {images.map((img) => (
          <div
            className={styles["small-image-container"]}
            key={img}
            onClick={handleClick(img)}
            data-testid="big-img-container"
          >
            <Image
              className={styles["small-image"]}
              alt="room-image"
              src={img}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
      <div
        className={styles["big-image-container"]}
        data-testid="small-img-container"
      >
        <Image
          className={styles["big-image"]}
          alt="room-image"
          src={openImage}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};
