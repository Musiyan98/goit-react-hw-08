import { Helmet } from 'react-helmet-async';

const PageTitle = ({ children }) => {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
}

export default PageTitle