

export const isLoggedIn = () => {
    return !!localStorage.getItem('movies4U');
};

export const getToken = () => {
    return localStorage.getItem('movies4U');
}