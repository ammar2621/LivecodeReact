import React from "react";
import axios from "axios";
import "../assets/main.css";
import Header from "../component/header";
import ListMovies from "../component/listMovies";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const self = this;
    axios
      .get("https://api-todofancy.herokuapp.com/api/movies")
      .then(function(response) {
        self.setState({ data: response.data.movies });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <br />
        <ListMovies data={this.state.data} />
      </div>
    );
  }
}

export default Movies;
