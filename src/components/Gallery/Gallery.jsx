import SectionHeading from '../SectionHeading/SectionHeading.jsx';
import GalleryItem from './GalleryItem.jsx';
import galleryItems from './galleryData.js';
import './Gallery.css';

function Gallery({ items = galleryItems }) {
  return (
    <section className="container-fluid py-5">
      <div className="container py-5">
        <SectionHeading
          eyebrow={
            <>
              Our Gallery
              <span className="gallery__eyebrow-accent"></span>
            </>
          }
          title="Moments That Define AB Studies"
          description="A glimpse into our classrooms, activities, creativity, and joyful learning environment."
          className="text-center mb-5"
          eyebrowClassName="gallery__eyebrow text-secondary text-uppercase d-inline-block position-relative"
          descriptionClassName="gallery__description mx-auto"
        />

        <div className="row">
          {items.map((item) => (
            <GalleryItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
