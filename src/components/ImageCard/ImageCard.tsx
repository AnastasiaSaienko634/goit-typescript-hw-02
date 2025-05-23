import css from "../ImageCard/ImageCard.module.css";
import { Photo } from "../../types.ts/images";

type Props = {
  image: Photo;
};

export default function ImageCard({ image }: Props) {
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
