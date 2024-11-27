import { useState } from 'react';

export default function Library() {
    //Creamos el array de libros con el id y el titulo
    const [libros, setLibros] = useState([
        { id: 1, title: 'Libro 1' },
        { id: 2, title: 'Libro 2' },
        { id: 3, title: 'Libro 3' }
    ]);

    return (
        <div>
            <h1>Ejercicio 3</h1>
            {libros.map(libro =>
                <Libro key={libro.id} libro={libro} setLibros={setLibros} libros={libros} />
            )}
        </div>
    );
}

//Componente que muestra los datos de los libros y permite editarlos
function Libro({ libro, setLibros, libros }) {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(libro.title);

    //Función que al cambiar el valor del input actualiza el estado del titulo
    function HandleChange(event) {
        setTitle(event.target.value);
    }

    //Función que actualiza el titulo del libro y cambia el estado de isEditing a false
    function handleUpdate() {
        setLibros(libros.map(l => l.id === libro.id ? { ...l, title } : l));
        setIsEditing(false);
    }
    
    //dependiendo de si estamos en modo edición o no muestra una cosa u otra.
    let mostrarLibro;
    if (isEditing) {
        mostrarLibro = (
            <div>
                <input value={title} onChange={HandleChange} />
                <button onClick={handleUpdate}>Actualizar</button>
            </div>
        );
    } else {
        mostrarLibro = (
            <div>
                <p>{libro.title}</p>
                <button onClick={() => setIsEditing(true)}>Editar</button>
            </div>
        );
    }
    return mostrarLibro;
}