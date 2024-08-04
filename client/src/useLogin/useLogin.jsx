import { useContext } from "react"
import AuthContext from "../Auth/AuthContext"
import axios from "axios";
export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);
    const loginHandler = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            changeAuthState(response)
        }
        catch (err) {
            console.log(err.message);

        }
    } // sas axios

    return loginHandler


}

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);
    const registerHandler = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', { email, password });
            changeAuthState(response)
        }
        catch (err) {
            console.log(err.message);

        }

    }
    return registerHandler;
}