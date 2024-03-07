import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';



const LogOut = () => {
    const dispatch = useDispatch();

    const handleLogOut = () => {
    dispatch(logOut());
    };
    
    return (
        <button onClick={handleLogOut} >Log out</button>
    );
  };
  export default LogOut;