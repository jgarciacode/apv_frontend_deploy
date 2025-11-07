import { useState } from "react"
import Formulario from "../components/Formulario"
import ListadoPacientes from "../components/ListadoPacientes"

const AdministrarPacientes = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  return (
    <div className="w-full">
      {/* Botón solo visible en móviles */}
      <div className="md:hidden flex justify-center">
        <button
          type="button"
          className="bg-indigo-600 text-white font-bold uppercase px-6 py-3 rounded-md mb-6"
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >
          {mostrarFormulario ? 'Ocultar Formulario' : 'Mostrar Formulario'}
        </button>
      </div>

      {/* Estructura principal */}
      <div className="flex flex-col md:flex-row">
        {/* Formulario */}
        <div className={`${mostrarFormulario ? 'block' : 'hidden'} md:block md:w-1/2 lg:w-2/5`}>
          <Formulario />
        </div>

        {/* Listado */}
        <div className="md:w-1/2 lg:w-3/5">
          <ListadoPacientes />
        </div>
      </div>
    </div>
  )
}

export default AdministrarPacientes
