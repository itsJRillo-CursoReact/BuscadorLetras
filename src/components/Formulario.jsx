import {useState} from 'react'
import useLetras from '../hooks/useLetras'

const Formulario = () => {

    const {setAlerta, busquedaLetra} = useLetras()

    const [busqueda, setBusqueda] = useState({
        artista:"",
        cancion:""
    })

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes("")){
            setAlerta("Todos los campos son obligatorios")
            return;
        }

        busquedaLetra(busqueda)
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <legend>Busca por Artista y Canción</legend>
        <div className='form-grid'>
            <div>
                <label>Artista</label>
                <input
                    type="text"
                    name="artista"
                    placeholder="Nombre del Artista"
                    value={busqueda.artista}
                    onChange={e => setBusqueda({
                        ...busqueda,
                        [e.target.name]:e.target.value
                    })}
                />
            </div>
            <div>
                <label>Canción</label>
                <input
                    type="text"
                    name="cancion"
                    placeholder="Nombre de la Canción"
                    value={busqueda.cancion}
                    onChange={e => setBusqueda({
                        ...busqueda,
                        [e.target.name]:e.target.value
                    })}
                />
            </div>
            <input type="submit" value="Buscar"/>
        </div>
    </form>
  )
}

export default Formulario