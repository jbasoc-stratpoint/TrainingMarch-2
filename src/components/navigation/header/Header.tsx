import Link from 'next/link';
import AuthButton from '~/components/buttons/auth-button/AuthButton';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`flex w-full flex-row justify-between ${
        className ? className : ''
      }`}
    >
      <div className="m-5 space-x-5">
        <Link className="hover:underline" href="/">
          Home
        </Link>
        <Link className="hover:underline" href="/">
          Store
        </Link>
      </div>
      <div className="m-5 space-x-5">
        <Link className="hidden hover:underline sm:inline" href="/">
          Gmail
        </Link>
        <Link className="hidden hover:underline sm:inline" href="/">
          Images
        </Link>
        <AuthButton />
      </div>
    </header>
  );
};

export default Header;
