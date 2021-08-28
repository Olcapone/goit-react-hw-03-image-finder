import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";

export default function ImageGallery({ images }) {
  return (
    <>
      <ul className={s.ImageGallery}>
        {images.hits.map((image) => (
          <ImageGalleryItem
            key={image.id}
            imageURL={image.userImageURL || image.webformatURL}
            tags={image.tags}
          />
        ))}
      </ul>
    </>
  );
}
