import { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import View from "./components/View/View";

export default class App extends Component {
  state = {
    pictureName: "",
  };

  handleFormSubmit = (imageName) => {
    if (imageName.trim() === "") {
      alert("enter name");
      return;
    } else {
      this.setState({ pictureName: imageName });
    }
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <View pictureName={this.state.pictureName} />
      </>
    );
  }
}
