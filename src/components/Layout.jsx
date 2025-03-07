import HeaderTitle from './HeaderTitle';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <div className="App">
      <HeaderTitle />
      {children}
      <Navigation />
    </div>
  );
};

export default Layout;
