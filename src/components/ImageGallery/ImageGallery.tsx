import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Photo } from "../../types.ts/images";

type Props = {
  images: Photo[];
  onClick: (image: Photo) => void;
};

export default function ImageGallery({ images, onClick }: Props) {
  return (
    <>
      <ul className={css.galley}>
        {images.map((image) => (
          <li
            key={image.id}
            onClick={() => {
              onClick(image);
            }}
          >
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
    </>
  );
}
