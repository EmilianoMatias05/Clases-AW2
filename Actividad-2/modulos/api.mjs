export async function obtenerUsuarios() {
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/users');
        const datos = await response.json();

        const usuarios = datos.map(user => ({
            id: user.id,
            email: user.email,
            name: user.name
        }));

        return usuarios;

    } catch (error) {
        console.error("Error en API:", error);
    }
}