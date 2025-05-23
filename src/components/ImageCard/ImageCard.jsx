import css from "../ImageCard/ImageCard.module.css";

export default function ImageCard({ image }) {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.urls.small}
        className={css.image}
      />
    </div>
  );
}
