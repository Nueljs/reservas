import React from 'react'
import { Entrada } from '../Entrada/Entrada'

export const Entradas = () => {
  return (
    <div className="col-md-8" style={{ maxWidth: "600px" }}>
              {[
                {
                  type: "Class Normal",
                  price: "100$",
                  color: "#4d194d",
                },
                {
                  type: "Class VIP",
                  price: "160$",
                  color: "#b44cb4",
                },
                {
                  type: "Class All Inclusive",
                  price: "200$",
                  color: "#f5a6f5",
                },
              ].map((entry, idx) => (
              <Entrada idx={idx} color={entry.color} price={entry.price} type={entry.type} />))}
            </div>
  )
}
