function GalleryItem({ image, alt = '' }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <img className="gallery-item__image w-100" src={image} alt={alt} />
    </div>
  );
}

export default GalleryItem;
