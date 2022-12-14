import Cookies from 'universal-cookie';



export const checkJwt = () => {
    const cookies = new  Cookies();
    const currentToken = cookies.get('jwt-token');
    if (!currentToken)
        window.location.href = "/";
} 