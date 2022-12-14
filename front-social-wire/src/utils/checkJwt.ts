import Cookies from 'universal-cookie';

export const checkJwt = () => {
    const cookies = new  Cookies();
    const currentToken = cookies.get('jwt-token');
    const userId = cookies.get('id');
    const usarName = cookies.get('username');
    if (!currentToken)
        window.location.href = "/";
    return {currentToken, userId, usarName};
} 