export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`w-full bg-slate-100 p-5 text-slate-500 ${
        className ? className : ''
      }`}
    >
      <p>Canada</p>
    </footer>
  );
};

export default Footer;
