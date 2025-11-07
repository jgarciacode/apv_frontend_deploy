import usePacientes from "../hooks/usePacientes"

const Paciente = ({ paciente }) => {

    const { setEdicion, eliminarPaciente } = usePacientes()

    const { nombre, email, fecha, propietario, sintomas, _id } = paciente

    const formatearFecha = (fecha) => {
        const nuevaFecha = new Date(fecha)
        return new Intl.DateTimeFormat('es-ES', { dateStyle: 'long' }).format(nuevaFecha)
    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold uppercase text-indigo-800">Nombre: {''}
                <span className="font-normal normal-case text-black">{nombre}</span>
            </p>
            <p className="font-bold uppercase text-indigo-800">Propietario: {''}
                <span className="font-normal normal-case text-black">{propietario}</span>
            </p>
            <p className="font-bold uppercase text-indigo-800">Email: {''}
                <span className="font-normal normal-case text-black">{email}</span>
            </p>
            <p className="font-bold uppercase text-indigo-800">Fecha Alta: {''}
                <span className="font-normal normal-case text-black">{formatearFecha(fecha)}</span>
            </p>
            <p className="font-bold uppercase text-indigo-800">Síntomas: {''}
                <span className="font-normal normal-case text-black">{sintomas}</span>
            </p>

            <div className="flex justify-between my-5">
                <button 
                    onClick={() => setEdicion(paciente)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-10 rounded-lg">
                    Editar
                </button>
                <button 
                    onClick={() => eliminarPaciente(_id)}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-10 rounded-lg">
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente