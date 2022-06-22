import { useEffect, useState } from "react"
import axios from "axios"

const List = props => {
    //Inicializamos el State con un objeto que incluya todos los datos que queremos mostrar en el component
    let [movies, setMovie] = useState({
        pelis: [],
        show: [],
        isLoading: false
    })
    
    //UseEffect gestiona todos los eventos del ciclo de vida del componente
    useEffect(() => {
        movies.isLoading = true

        //estructura básica de axios
        axios.get('https://imdb-api.com/en/API/Search/k_plv2orl0/matrix')
        .then((resp) => {
            //siempre cambiamos el state con el set que hemos definido
            setMovie({
                //usamos ... (spread) para coger todos los atributos del objeto, en este caso, para no pisarlos
                ...movies,
                pelis: resp.data
            })
            movies.isLoading = false
        })
    },[])

    return (
        <section className="List">
            <h1>Listado películas</h1>
            {movies.isLoading &&
             <span>Cargando...</span> 
            }
            {movies.pelis.expression}

        </section>
    )
}

export default List
