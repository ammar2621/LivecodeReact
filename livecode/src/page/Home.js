import React from "react";
import Header from "../component/header";
import "../assets/main.css";
import Romance from "../assets/img/romance.jpg";
import Action from "../assets/img/action.jpg";
import Fiction from "../assets/img/fiction.jpg";
import Comedy from "../assets/img/comdey.jpg";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="body">
      <Header />
      <br />
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-md-2">
            <div class="cardHome">
              <div class="card-body">
                <h5 class="card-title">Romance</h5>
              </div>
              <img src={Romance} class="card-img-top" alt="..." />
              <div class="card-body">
                <Link to="/movies">
                  <a href="#" class="btn btn-primary">
                    See Movies
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div class="cardHome">
              <div class="card-body">
                <h5 class="card-title">Action</h5>
              </div>
              <img src={Action} class="card-img-top" alt="..." />
              <div class="card-body">
                <Link to="/movies">
                  <a href="#" class="btn btn-primary">
                    See Movies
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div class="cardHome">
              <div class="card-body">
                <h5 class="card-title">Fiction</h5>
              </div>
              <img src={Fiction} class="card-img-top" alt="..." />
              <div class="card-body">
                <Link to="/movies">
                  <a href="#" class="btn btn-primary">
                    See Movies
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div class="cardHome">
              <div class="card-body">
                <h5 class="card-title">Comedy</h5>
              </div>
              <img src={Comedy} class="card-img-top" alt="..." />
              <div class="card-body">
                <Link to="/movies">
                  <a href="#" class="btn btn-primary">
                    See Movies
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
