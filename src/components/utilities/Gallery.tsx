interface GalleryProps {
  images: string[];
  alt: string;
}

function Gallery({ images, alt }: GalleryProps) {
    
  return (
    images.map((image) => (
    <img src={image} alt={alt}/>
    ))
  )
}

export default Gallery;
