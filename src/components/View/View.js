import { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../../utils/Loader/Loader";

export default class View extends Component {
  state = {
    pictures: null,
    status: "idle",
    error: null,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, PrevState) {
    let nextName = this.props.pictureName;

    if (prevProps.pictureName !== nextName) {
      this.setState({ status: "pending" });
      toast.info(" Waiting... ");
      fetch(
        `https://pixabay.com/api/?q=${nextName}&page=1&key=22421278-3374a5bf35dcd0f85e00cdc81&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`Image not found ${nextName}`));
        })
        .then((pictures) => {
          this.setState({ pictures, status: "resolved" });
          pictures.total === 0 && toast.error(`Image ${nextName} not found`);
        })
        .catch((error) => {
          this.setState({ error, status: "reject" });
          toast.error(`Image ${nextName} not found`);
        });
    }
  }

  render() {
    const { pictures, status } = this.state;

    if (status === "idle") {
      return <></>;
    }

    if (status === "pending") {
      return <Loader />;
    }

    if (status === "resolved") {
      return <></>;
    }

    if (status === "resolved" && pictures.total !== 0) {
      return <ImageGallery images={pictures} />;
    }
  }
}
