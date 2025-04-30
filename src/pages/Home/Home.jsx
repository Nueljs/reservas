import React from "react";
import './Home.css';
import { useNavigate } from "react-router-dom";
import firstSmallPhoto from "../../assets/img/firstSmallPhoto.png";
import secondSmallPhoto from "../../assets/img/secondSmallPhoto.png";
import bigPhotoHome from "../../assets/img/bigPhotoHome.png";
import fotoEvento from "../../assets/img/eventPhoto.png"


function HomePage() {
  const nav = useNavigate();

  return (
    <div className="d-flex flex-column">
      <div className="container d-flex flex-column align-items-center mt-5">
        <section className="row d-flex justify-content-center gap-3 g-2 mb-4">
          <div className="col-lg-4 d-flex flex-column align-items-lg-start align-items-center justify-content-center gap-3 contentHome">
            <h1 className="text-lg-start">FIND MORE OF THE RANDOM EVENTS</h1>
            <p className="text-start">
              Incredible live shows. Upfront pricing. Relevant recommendations.
              We make going out easy.
            </p>
            <button className="browse-btn" onClick={() => nav("/events")}>
              Browse events
            </button>
          </div>
          <div className="row col-lg-7 d-flex justify-content-center">
            <div className="row col-6 gap-3">
              <img className="img-fluid" src={firstSmallPhoto} alt="photo" />
              <img className="img-fluid" src={secondSmallPhoto} alt="photo" />
            </div>
            <img className="img-fluid col-5" src={bigPhotoHome} alt="photo" />
          </div>
        </section>

        <section className="row d-flex flex-column align-items-center mt-5 w-100">
          <div className="w-100 text-center">
            <h1 className="titleRandom">RANDOM SELECTION</h1>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center gap-4">
        <div className="row d-flex flex-row justify-content-center flex-wrap w-100 gap-3 mt-5">
          
          
          <div className="col-lg-2 col-md-4 col-6">
            <img
              className="img-fluid"
              src={fotoEvento}
              alt="Random 1"
              style={{ aspectRatio: "1/1", objectFit: "cover" }}
            />
          </div>

          
          <div className="col-lg-2 col-md-4 col-6">
            <img
              className="img-fluid"
              src={fotoEvento}
              alt="Random 2"
              style={{ aspectRatio: "1/1", objectFit: "cover" }}
            />
          </div>

          
          <div className="col-lg-2 col-md-4 col-6">
            <img
              className="img-fluid"
              src={fotoEvento}
              alt="Random 3"
              style={{ aspectRatio: "1/1", objectFit: "cover" }}
            />
          </div>

          
          <div className="col-lg-2 col-md-4 col-6">
            <img
              className="img-fluid"
              src={fotoEvento}
              alt="Random 4"
              style={{ aspectRatio: "1/1", objectFit: "cover" }}
              onClick={()=>{nav('/eventpage')}}
            />
          </div>

          
          <div className="col-lg-2 col-md-4 col-6">
            <img
              className="img-fluid"
              src={fotoEvento}
              alt="Random 5"
              style={{ aspectRatio: "1/1", objectFit: "cover" }}
            />
          </div>

        </div>
      </div>
        </section>
      </div>

      <section className="aboutUs mt-5">
        <div className="container d-flex flex-column justify-content-center align-items-center text-center gap-3">
          <h3>RANDOM EVENTS OFFERS BEST EXPERIENCE OF CREATING</h3>
          <h2>YOUR EVENT RESERVATION EASY</h2>
          <p>
            We’ve always believed that random can change lives. So we created a
            platform for fans to experience more of the shows they love in the
            most hassle-free way possible.
          </p>
          <a className="aboutUs-btn" onClick={()=>{nav('/aboutus')} }>About us</a>
        </div>
      </section>
    </div>
  );
}

export default HomePage