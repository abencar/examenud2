import React, { useState } from 'react';

export default function TextCarousel({ datos }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    //Estas dos constantes hacen que sea un carrusel y pueda cambiar de imagen volviendo a la primera en caso de ser la ultima y viceversa.
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % datos.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + datos.length) % datos.length);
    };

    return (
        <div>
            <h1>Ejercicio2</h1>
            <div>
                <p>{datos[currentIndex].frase}</p>
                <img src={datos[currentIndex].url} alt="Imagen" />
            </div>
            <button onClick={handlePrev}>Anterior</button>
            <button onClick={handleNext}>Siguiente</button>
        </div>
    );
};




