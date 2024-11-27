'use client';
import ImageCarousel from "./ImageCarousel";
import AnimalList from "./AnimalList";
import Library from "./Library";
export default function Home() {
  //los br son para hacer un poco de espacio entre los ejercicios
  return (
    <div>
      <AnimalList/>
      <br/>
      <br/>
      <br/>
      <ImageCarousel datos={datos}/>
      <br/>
      <br/>
      <br/>
      <Library/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

//Datos para el carrusel de imagenes
const datos = [ 
  { frase: "Menos mal", url: "https://i.imgur.com/Q8TPuKq.jpeg"}, 
  { frase: "Que soy un tio",url: "https://i.imgur.com/DoP8q0E.jpeg"}, 
  { frase: "Chill de cojones", url:"https://i.imgur.com/Q8TPuKq.jpeg"} 
];