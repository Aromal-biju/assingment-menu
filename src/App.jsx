import React from "react";
import MenuItem from "./components/MenuItem";
import { mainCourses, desserts } from "./data/menuData";

export default function App() {
  const allItems = [...mainCourses, ...desserts];
  const totalItems = allItems.length;
  const currentYear = new Date().getFullYear();

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Delicioso</h1>
        <p className="tagline">Delicious Food, Made Fresh Daily</p>
      </header>

      <main>
        <section className="menu-section">
          <h2>Main Courses</h2>
          <div className="menu-grid">
            {mainCourses.map((item) => (
              <MenuItem key={item.id} {...item} />
            ))}
          </div>
        </section>

        <section className="menu-section">
          <h2>Desserts</h2>
          <div className="menu-grid">
            {desserts.map((item) => (
              <MenuItem key={item.id} {...item} />
            ))}
          </div>
        </section>

        <aside className="restaurant-info card">
          <h3>Restaurant Info</h3>
          <p>Total items on menu: <strong>{totalItems}</strong></p>
          <p>Open Daily: 11 AM - 10 PM</p>
          <p>Contact: +91 98765 43210</p>
          <p>Address: 123 Food Street, Culinary City</p>
        </aside>
      </main>

      <footer className="footer">
        <div>
          <strong>Delicioso</strong>
        </div>
        <div>
          <a href="mailto:hello@delicioso.example">hello@delicioso.example</a> |{" "}
          <a href="https://example.com" target="_blank" rel="noreferrer">website</a>
        </div>
        <div>© {currentYear} Delicioso</div>
      </footer>
    </div>
  );
}
