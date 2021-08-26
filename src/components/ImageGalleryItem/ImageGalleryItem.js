import s from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ imageURL, tags }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img src={imageURL} alt={tags} className={s.ImageGalleryItemImage} />
    </li>
  );
}
