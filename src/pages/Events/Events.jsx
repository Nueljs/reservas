import React from "react";
import "./Events.css";
import fotoEvento from "../../assets/img/eventPhoto.png";

export const Events = () => {
  return (
    <main className="min-vh-100">
      {/* Filtros */}
      <div className="container mt-5">
        <div className="row">
          <div className="col" id="all-filters">
            <div className="container mt-4 d-flex c-e-container-filters">
              <form className="c-e-form-filters">
                {/* Filtro Ciudad */}
                <select
                  name="city"
                  id="city"
                  className="c-e-filter-element c-e-location"
                >
                  <option value="">City</option>
                  <option value="New York">New York</option>
                  <option value="London">London</option>
                  <option value="Paris">Paris</option>
                </select>

                {/* Filtro Estilo */}
                <select
                  name="style"
                  id="style"
                  className="c-e-filter-element c-e-style"
                >
                  <option value="">Style</option>
                  <option value="Rock">Rock</option>
                  <option value="Pop">Pop</option>
                  <option value="Jazz">Jazz</option>
                </select>

                {/* Filtro Fecha */}
                <div className="c-e-filter-element c-e-filter-date">
                  <button
                    type="button"
                    className="c-e-btn"
                    onClick={() => console.log("Toggle date")}
                  >
                    Date
                  </button>
                  <input type="date" className="c-e-input-date" hidden />
                </div>

                {/* Filtro Precio */}
                <div className="c-e-filter-element c-e-price-container">
                  <button
                    type="button"
                    className="c-e-btn"
                    onClick={() => console.log("Toggle price")}
                  >
                    Price
                  </button>
                  <input type="range" className="c-e-range-price" hidden />
                </div>

                {/* Botón de filtrar */}
                <button
                  type="submit"
                  className="c-e-btn-aceptar-filtros text-white"
                >
                  Filter
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Catalog Section */}
      <div className="container mt-4 mt-md-5">
        <h2 className="fw-bold text-uppercase">Catalog</h2>

        {/* Eventos */}
        <div className="row g-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="c-e-card shadow-sm h-100">
                <img
                  src={fotoEvento}
                  alt="evento"
                  className="card-img-top c-e-img-catalog"
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <div className="c-e-card-body text-center py-3">
                  <h6 className="fw-bold fs-6">Event Name</h6>
                  <p className="text-muted mb-1">2023-10-15</p>
                  <p className="text-muted mb-2">City - Style</p>
                  <button className="c-e-btn-card btn btn-primary w-100 custom py-2">
                    <a href="#" className="text-white text-decoration-none">
                      Book Now
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
