import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onClick }) {
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
