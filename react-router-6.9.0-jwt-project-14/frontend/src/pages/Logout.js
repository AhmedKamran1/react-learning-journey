import { redirect } from "react-router-dom";

const logoutAction = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    return redirect('/')
}

export default logoutAction;