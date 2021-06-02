const isAuthenticated = () => Boolean(localStorage.getItem("token"));

export default isAuthenticated;
