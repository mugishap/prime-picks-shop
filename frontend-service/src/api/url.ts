const apiUrl: string = import.meta.env.DEV
    ? "http://localhost:5000/api/v1"
    : "https://primepicks.up.railway.app/api/v1";

export {
    apiUrl
}