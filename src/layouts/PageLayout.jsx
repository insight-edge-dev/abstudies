import Footer from '../components/Footer/Footer.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import PageHeader from '../components/PageHeader/PageHeader.jsx';
import SEO from '../components/SEO/SEO.jsx';

function PageLayout({
  title,
  children,
  headerClassName = '',
  mainClassName = '',
  showBreadcrumb = true,
  seoTitle = `${title} | AB Studies`,
  seoPath = '/',
  seoNoIndex = false,
  seoIncludeCanonical = true,
}) {
  return (
    <>
      <SEO
        title={seoTitle}
        pathname={seoPath}
        noIndex={seoNoIndex}
        includeCanonical={seoIncludeCanonical}
      />
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
