import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import IconsSvg from '../../components/icons-svg/icons-svg';
import { AppRoute } from '../../consts';

export default function PageNotFound(): JSX.Element {
  return (
    <>
      <IconsSvg />
      <div className="wrapper">
        <Header />
        <main>
          <div className="page-content">
            <p>PAGE NOT FOUND</p>
            <Link to={AppRoute.CATALOG}>Return to main</Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
