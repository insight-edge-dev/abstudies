import GalleryItem from './GalleryItem.jsx';
import galleryItems from './galleryData.js';
import './Gallery.css';

function Gallery({ items = galleryItems }) {
  return (
    <section className="container-fluid py-5">
      <div className="container py-5">
        <div className="section-title text-center mb-5">
          <h6 className="gallery__eyebrow text-secondary text-uppercase d-inline-block position-relative">
            Our Gallery
            <span className="gallery__eyebrow-accent"></span>
          </h6>

          <h1 className="display-4">Moments That Define AB Studies</h1>
          <p className="gallery__description mx-auto">
            A glimpse into our classrooms, activities, creativity, and joyful
            learning environment.
          </p>
        </div>

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
