import React from 'react';
import './About.css'; // Asegúrate de tener un archivo CSS asociado

export default function About() {
    return (
        <div className="about-container">
            <h2 className="header">Mi Perfil</h2>
            <h3>Acerca de Mí:</h3>
            <p>
                Soy Agustin Perez, estudiante de SoyHenry, con 22 años y residencia en Salta, Argentina.
                Mi formación inicial fue en Ingeniería en la Universidad Catolica de Salta, pero mi verdadera pasión siempre ha sido la tecnología.
                Esto me llevó a explorar áreas como JavaScript, Astro, NodeJS, React, Redux, SQL, Sequelize y CSS.
            </p>

            <h3>Habilidades y Certificaciones:</h3>
            <p>Mis conocimientos incluyen JavaScript, Astro, NodeJS, React, Redux, SQL, Sequelize, CSS.</p>

            <h3>Experiencia y Proyectos en SoyHenry:</h3>
            <p>
                En SoyHenry, he participado en proyectos desafiantes que han mejorado mis habilidades técnicas y mi capacidad para trabajar en equipo.
                Además, he tenido un espacio para practicar habilidades blandas.
            </p>

            <h3>Adaptabilidad y Deseo de Aprendizaje Constante:</h3>
            <p>
                Estoy ansioso por comenzar a trabajar en un entorno desafiante donde pueda seguir aprendiendo y aplicando mis habilidades de manera efectiva.
                Mi adaptabilidad me permite enfrentar nuevos desafíos con entusiasmo.
            </p>

            <p>
                Agradezco su atención y estoy emocionado por la oportunidad de contribuir en el mundo de la tecnología.
            </p>
            <p>Saludos, Agustin Perez.</p>

            <img src={"/my_photo.jpg"} alt="Mi Foto" className="profile-photo" />
        </div>
    );
}
