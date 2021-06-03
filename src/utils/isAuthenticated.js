const isAuthenticated = () => Boolean(localStorage.getItem("session-token"));

export default isAuthenticated;
