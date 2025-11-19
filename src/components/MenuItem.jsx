import React from "react";

export default function MenuItem({ id, name, category, price, description, isVegetarian }) {
  return (
    <article className="menu-card card" aria-labelledby={`dish-${id}`}>
      <div className="menu-card-head">
        <h3 id={`dish-${id}`}>{name}</h3>
        <div className="price">₹{price.toFixed(2)}</div>
      </div>

      <p className="category">{category}</p>
      <p className="description">{description}</p>

      <div className="card-footer">
        {isVegetarian ? <span className="veg-badge">Vegetarian</span> : <span className="nonveg-badge">Non-Veg</span>}
      </div>
    </article>
  );
}
