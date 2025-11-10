import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img
            src="https://caprendizaje.sena.edu.co/sgva/Images/logoSena1.png"
            alt="Logo SENA"
          />
          <h1>CGMLTI</h1>
        </div>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#propuesta">Propuesta</a>
          <a href="#acerca">Acerca</a>
          <a href="#contacto">Contáctanos</a>
        </nav>
      </header>

      {/* HERO / INICIO */}
      <section id="inicio" className="hero">
        <h2>
          Centro de Gestión de Mercados, Logística y Tecnologías de la
          Información
        </h2>
        <p>
          Formación para el trabajo con calidad, innovación y tecnología. ¡Sé
          parte del cambio!
        </p>
      </section>

      {/* PROGRAMAS */}
      <section id="propuesta" className="programas">
        <h2>Programas Destacados</h2>
        <div className="cards">
          <div className="card">
            <h3>ADSO</h3>
            <p>Análisis y Desarrollo de Software.</p>
          </div>
          <div className="card">
            <h3>Logística Empresarial</h3>
            <p>Gestión eficiente de recursos y distribución.</p>
          </div>
          <div className="card">
            <h3>Análisis de Datos</h3>
            <p>Transforma datos en decisiones estratégicas.</p>
          </div>
          <div className="card">
            <h3>Gestión de Mercados</h3>
            <p>Desarrolla estrategias comerciales efectivas.</p>
          </div>
        </div>
      </section>

      {/* ACERCA */}
      <section id="acerca" className="acerca">
        <h2>Acerca del Centro</h2>
        <p>
          El CGMLTI es un centro de formación del SENA enfocado en fortalecer las
          competencias del talento humano en áreas de mercados, logística y
          tecnología, aportando al desarrollo económico y social del país.
        </p>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="contacto">
        <h2>Contáctanos</h2>
        <form>
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo electrónico" required />
          <textarea placeholder="Mensaje" rows="4" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          © 2025 SENA | Centro de Gestión de Mercados, Logística y Tecnologías
          de la Información (CGMLTI)
        </p>
      </footer>
    </div>
  );
}

export default App;
