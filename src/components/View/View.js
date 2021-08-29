import { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import ImageGallery from "../ImageGallery/ImageGallery";
import s from "../ImageGallery/ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Loader from "../../utils/Loader/Loader";
import Button from "../Button/Button";

export default class View extends Component {
  state = {
    pictures: null,
    page: 1,
    status: "idle",
    error: null,
  };

  componentDidUpdate(prevProps, PrevState) {
    let nextName = this.props.pictureName;
    let nextPage = this.state.page;
    let myKey = "22421278-3374a5bf35dcd0f85e00cdc81";

    if (prevProps.pictureName !== nextName) {
      this.setState({ status: "pending" });
      toast.info(" Waiting... ");
      fetch(
        `https://pixabay.com/api/?q=${nextName}&page=1&key=${myKey}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`Image not found ${nextName}`));
        })
        .then((pictures) => {
          if (pictures.total === 0) {
            toast.error(`Image ${nextName} not found`);
            return pictures;
          }

          this.setState((prevState) => ({
            pictures: pictures.hits,
            status: "resolved",
            page: prevState.page + 1,
          }));
        })
        .catch((error) =>
          this.setState({
            error: `Image not found ${nextName}`,
            status: "reject",
          })
        );
    }
  }

  clickOnLoad = () => {
    fetch(
      `https://pixabay.com/api/?q=${this.props.pictureName}&page=${this.state.page}&key=22421278-3374a5bf35dcd0f85e00cdc81&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          new Error(`Image not found ${this.props.pictureName}`)
        );
      })
      .then((pictures) => {
        let nextPicture = pictures.hits;

        this.setState((prevState) => ({
          pictures: [...prevState.pictures, ...nextPicture],
          status: "resolved",
          page: prevState.page + 1,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      });
  };

  render() {
    const { pictures, status } = this.state;

    if (status === "idle") {
      return <></>;
    }

    if (status === "pending") {
      return <Loader />;
    }

    if (status === "reject") {
      return <></>;
    }

    if (status === "resolved") {
      return (
        <>
          <ul className={s.ImageGallery}>
            {pictures.map((image) => (
              <ImageGalleryItem
                key={image.id}
                largeImg={image.largeImageURL}
                imageURL={image.previewURL || image.webformatURL}
                tags={image.tags}
              />
            ))}
          </ul>
          <Button name={"Load more"} onLoadMore={this.clickOnLoad} />
        </>
      );
    }
  }
}
