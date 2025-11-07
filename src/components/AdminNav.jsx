import { Link } from "react-router-dom"

const AdminNav = () => {
    return (
        <nav className="flex gap-3 justify-center mt-5 mb-10">
            <Link
                to="/admin/perfil"
                className="text-gray-500 text-sm uppercase font-bold">
                Perfil
            </Link>

            <Link
                to="/admin/cambiar-password"
                className="text-gray-500 text-sm uppercase font-bold">
                Cambiar Password
            </Link>

        </nav>
    )
}

export default AdminNav