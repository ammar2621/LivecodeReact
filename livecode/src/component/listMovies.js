import React from "react";
import "../assets/main.css";

class ListMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div>
        {this.props.data.map((value, index) => {
          if (index < 10) {
            return (
              <div class="media borderMov img-thumbnail">
                <img
                  src="{value.Poster"
                  class="align-self-start mr-3"
                  alt="..."
                />
                <div class="media-body">
                  <h5 class="mt-0">{value.Title}</h5>
                  <p>{value.Year}</p>
                  <p>{value.Synopsis}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default ListMovies;
