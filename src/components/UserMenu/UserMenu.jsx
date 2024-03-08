import { useAuth } from '../../hooks/useAuth';
import LogOut from '../LogOut/LogOut';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <LogOut />
    </div>
  );
};

export default UserMenu