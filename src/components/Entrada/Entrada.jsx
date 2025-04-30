import React from "react";
import { BiMapAlt } from "react-icons/bi";
import { FaTicketAlt } from "react-icons/fa";

export const Entrada = ({idx, color, price, type}) => {
  return (
    <div className="d-flex align-items-stretch border rounded my-3" key={idx}>
      <div
        className="text-white text-center px-3 py-4 d-flex flex-column justify-content-center rounded-start"
        style={{ backgroundColor: `${color}` }}
      >
        <p className="mb-2 fw-bold">03 June</p>
        <p className="mb-2">SUN</p>
        <p className="mb-0">08:00 PM</p>
      </div>
      <div className="ms-3 w-100 d-flex flex-column justify-content-around">
        <div className="d-flex flex-column gap-2">
          <p className="fw-bold mb-1">Beach Please Festival 4 days pass</p>
          <p className="mb-1">Madrid - Plaza de Sol</p>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column gap-2">
            <div className="d-flex gap-2">
              <BiMapAlt />
              <p className="mb-1 text-primary fw-bold">Plaza Sol</p>
            </div>
            <div className="d-flex gap-2">
              <FaTicketAlt />
              <p className="mb-1 text-primary fw-bold">{type}</p>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center gap-2 mx-2">
            <p className="mb-0">From {price} / person</p>
            <div
              className="d-flex align-items-center justify-content-between rounded-pill px-3 py-1"
              style={{ backgroundColor: color, width: "120px" }}
            >
              <button
                className="btn p-0 border-0 text-white d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "transparent",
                  width: "30px",
                  height: "30px",
                  fontSize: "18px",
                }}
              >
                -
              </button>
              <span className="text-white fs-6">0</span>
              <button
                className="btn p-0 border-0 text-white d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "transparent",
                  width: "30px",
                  height: "30px",
                  fontSize: "18px",
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
