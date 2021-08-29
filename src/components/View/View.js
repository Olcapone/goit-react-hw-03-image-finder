import { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageGallery from "../ImageGallery/ImageGallery";
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

    if (prevProps.pictureName !== nextName || PrevState.page !== nextPage) {
      this.setState({ status: "pending" });
      toast.info(" Waiting... ");
      fetch(
        `https://pixabay.com/api/?q=${nextName}&page=${nextPage}&key=22421278-3374a5bf35dcd0f85e00cdc81&image_type=photo&orientation=horizontal&per_page=12`
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
          let prevPicture = this.state.pictures;
          let nextPicture = pictures.hits;

          if (prevPicture === null) {
            return this.setState({ pictures: nextPicture, status: "resolved" });
          } else {
            this.setState(({ pictures }) => ({
              pictures: [...prevPicture, ...nextPicture],
              status: "resolved",
            }));
            return;
          }
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
    this.setState((state) => ({ page: state.page + 1 }));

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
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
          <ImageGallery images={pictures} />
          <Button name={"Load more"} onLoadMore={this.clickOnLoad} />
        </>
      );
    }
  }
}
