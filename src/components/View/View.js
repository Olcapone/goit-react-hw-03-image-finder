import { Component } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";

export default class View extends Component {
  state = {
    pictures: null,
    loading: false,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, PrevState) {
    if (prevProps.pictureName !== this.props.pictureName) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.props.pictureName}&page=1&key=22421278-3374a5bf35dcd0f85e00cdc81&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((r) => r.json())
        .then((pictures) => this.setState({ pictures }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { pictures, loading } = this.state;
    return (
      <>
        {loading && <h1>Loading...</h1>}

        {pictures && <ImageGallery images={pictures} />}
      </>
    );
  }
}
