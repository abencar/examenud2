import { useState } from "react";

export default function AnimalList() {
    const [animals, setAnimals] = useState([]);
    const [nuevoNombre, setNuevoNombre] = useState('');
    const [nuevaEspecie, setNuevaEspecie] = useState('');
    const [nuevaEdad, setNuevaEdad] = useState('');
    const [nuevoSexo, setNuevoSexo] = useState('');

    //Función que se ejecuta al hacer submit en el formulario y añade los animales
    function addAnimal(e) {
        e.preventDefault();
        if (nuevoNombre.trim() !== "" && nuevaEspecie.trim() !== "") {
            setAnimals([...animals, {
                name: nuevoNombre,
                species: nuevaEspecie,
                age: nuevaEdad,
                sex: nuevoSexo
            }]);
            setNuevoNombre('');
            setNuevaEspecie('');
            setNuevaEdad('');
            setNuevoSexo('');
        }

    };

    //Devuelve el formulario y los animales
    return (
        <div>
            <h1>Ejercicio1</h1>
            <form onSubmit={addAnimal}>
                <label>Nombre:<input type="text" value={nuevoNombre} onChange={(e) => setNuevoNombre(e.target.value)}></input></label>
                <label>Especie:<input type="text" value={nuevaEspecie} onChange={(e) => setNuevaEspecie(e.target.value)}></input></label>
                <label>Edad:<input type="number" value={nuevaEdad} onChange={(e) => setNuevaEdad(e.target.value)}></input></label>
                <label>Sexo:
                    <select value={nuevoSexo} onChange={(e) => setNuevoSexo(e.target.value)}>
                        <option value="macho">Macho</option>
                        <option value="hembra">Hembra</option>
                    </select></label>
                <p>Importante elegir la opcion de sexo</p>
                <input type="submit" value="Añadir"></input>
            </form>
            <div>
                {animals.map((animal, index) => (
                    <div key={index}>
                        <Animal animal={animal} />
                    </div>
                ))}
            </div>
        </div>
    );
}

//Componente que muestra los datos de los animales 
function Animal({ animal }) {
    return (
        <div>
            <h2>{animal.name}</h2>
            <p>Especie: {animal.species}</p>
            <p>Edad: {animal.age}</p>
            <p>Sexo: {animal.sex}</p>
        </div>
    );
}