import Footer from '../components/Footer/Footer.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import PageHeader from '../components/PageHeader/PageHeader.jsx';

function PageLayout({
  title,
  children,
  headerClassName = '',
  mainClassName = '',
  showBreadcrumb = true,
}) {
  return (
    <>
      <Navbar />
      <PageHeader
        title={title}
        showBreadcrumb={showBreadcrumb}
        className={headerClassName}
      />
      <main className={mainClassName}>{children}</main>
      <Footer />
    </>
  );
}

export default PageLayout;
