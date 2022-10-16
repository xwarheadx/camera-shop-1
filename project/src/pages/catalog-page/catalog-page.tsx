import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Catalog from '../../components/catalog/catalog';
import Banner from '../../components/banner/banner';
import IconsSvg from '../../components/icons-svg/icons-svg';

export default function CatalogPage(): JSX.Element {
  return (
    <>
      <IconsSvg/>
      <div className="wrapper">

        <Header/>

        <main>
          <Banner />
          <Catalog />
        </main>

        <Footer/>

      </div>
    </>
  );
}
