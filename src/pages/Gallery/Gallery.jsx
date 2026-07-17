import Gallery from '../../components/Gallery/Gallery.jsx';
import PageLayout from '../../layouts/PageLayout.jsx';

function GalleryPage() {
  return (
    <PageLayout
      title="Gallery"
      seoTitle="Gallery | AB Studies"
      seoPath="/gallery"
    >
      <Gallery />
    </PageLayout>
  );
}

export default GalleryPage;
