import React from "react";
import imagenEvento from "../../assets/img/eventPhoto.png";

import { Entradas } from "../../components/Entradas/Entradas";

export const EventPage = () => {
  return (
    <div className="container mt-4 vh-100">
      <h1 className="text-center">BEACH PLEASE</h1>
      <h1 className="text-left">BEACH PLEASE</h1>

      <div className="row mt-4">
        <div className="col-md-4 position-relative">
          <img
            src={imagenEvento}
            className="img-fluid"
            alt="Imagen del evento"
          />
        </div>

        <Entradas />
      </div>

      <div className="row mt-5">
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            laoreet, orci sit amet porta lobortis, velit felis mattis purus, at
            gravida urna nulla non ligula. Sed pretium placerat accumsan. Sed
            urna felis, sodales vitae bibendum a, sodales at est. Quisque
            rhoncus ultrices ipsum, in blandit nibh convallis sed. Suspendisse
            vitae velit vitae mi pulvinar varius at vitae augue. Etiam finibus
            eu leo a tempus. Proin dictum odio eu pharetra porttitor.
          </p>
        </div>
        <div className="d-flex justify-content-around mt-5">
          <button
            className="border rounded p-3"
            style={{ backgroundColor: "white", border: "2px solid black" }}
          >
            Go back
          </button>
          <button
            className="border rounded p-3 text-white"
            style={{ backgroundColor: "#4d194d" }}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
