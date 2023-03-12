import { useContext } from 'react';
import AuthContext from '../../../context/auth/AuthContext';

export interface IAuthButton extends React.ComponentPropsWithoutRef<'button'> {}

const AuthButton: React.FC<IAuthButton> = ({ className, ...buttonProps }) => {
  const { authenticated, login, logOut } = useContext(AuthContext);

  return (
    <button
      onClick={authenticated ? logOut : login}
      className={`${
        className ? className : ''
      } border-1 sm-px-6 w-28 rounded bg-blue-500 p-2 px-2 text-white`}
      {...buttonProps}
    >
      {authenticated ? 'Sign Out' : 'Sign in'}
    </button>
  );
};

export default AuthButton;
