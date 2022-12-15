import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

export default function PageNotFound(): JSX.Element {
  return (
    <main>
      <div className="page-content">
        <p>PAGE NOT FOUND</p>
        <Link to={AppRoute.CATALOG}>Return to main</Link>
      </div>
    </main>
  );
}
