import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";
import shortid from "shortid";

export default function ImageGallery({ images }) {
  return (
    <>
      <ul className={s.ImageGallery}>
        {images.map((image) => (
          <ImageGalleryItem
            key={shortid.generate()}
            keyID={image.id}
            largeImg={image.largeImageURL}
            imageURL={image.previewURL || image.webformatURL}
            tags={image.tags}
          />
        ))}
      </ul>
    </>
  );
}
