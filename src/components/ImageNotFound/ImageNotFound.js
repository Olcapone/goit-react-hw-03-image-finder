import sadCat from "./sadCat.jpg";
import s from "./ImageNotFound.module.css";

export default function ImageNotFound() {
  return (
    <div class={s.wrap}>
      <img src={sadCat} alt="sad cat" width="450" />
    </div>
  );
}
