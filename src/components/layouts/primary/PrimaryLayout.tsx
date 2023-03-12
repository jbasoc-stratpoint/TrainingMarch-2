import Head from 'next/head';
import Footer from '../../navigation/footer/Footer';
import Header from '../../navigation/header/Header';

export interface IPrimaryLayout {
  justify?: 'items-center' | 'items-start';
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
}) => {
  return (
    <>
      <Head>
        <title> Primary Layout Example</title>
      </Head>
      <div className={`flex min-h-screen flex-col ${justify}`}>
        <Header />
        <main className="p-5">{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
