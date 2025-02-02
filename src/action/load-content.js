

export const loadContent = async (path, name) => {
    try {
        const response = await fetch(
            `http://localhost:5000/load?path=${path}&name=${name}`
        );
        return await response.json();
    } catch (error) {
        console.error(path, error)
    }
}