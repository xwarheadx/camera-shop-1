import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import IconsSvg from '../icons-svg/icons-svg';

export default function Main(): JSX.Element {

  return (
    <>
      <IconsSvg/>
      <div className="wrapper">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  );
}
