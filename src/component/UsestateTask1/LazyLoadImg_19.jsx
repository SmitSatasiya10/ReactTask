import React, { useState, useEffect, useRef } from 'react';

const LazyLoadImg_19 = () => {
  const [images, setImages] = useState([]); 
  const [loadedImages, setLoadedImages] = useState([]); 
  const observerRef = useRef(); 

  useEffect(() => {
    const imageUrls = Array.from({ length: 20 }, (_, index) => `https://picsum.photos/400/300?random=${index + 1}`);
    setImages(imageUrls); 
  }, []);

  useEffect(() => {
    const handleImageLoad = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.onload = () => {
            setLoadedImages((prev) => [...prev, img.src]); 
          };
          observer.unobserve(img); 
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleImageLoad);

    const imagesElements = document.querySelectorAll('.lazy-load');
    imagesElements.forEach((img) => {
      observerRef.current.observe(img);
    });

    return () => {
      observerRef.current.disconnect();
    };
  }, [images]); 

  return (
    <div className="container mt-5 text-center">
      <h2>Lazy Load Images on Scroll</h2>
      <div className="row">
        {images.map((src, index) => (
          <div className="col-6 mb-4" key={index}>
            <img
              className="lazy-load img-fluid"
              data-src={src} 
              src="" 
              alt={`Random ${index + 1}`}
              style={{ minHeight: '300px', backgroundColor: '#f0f0f0' }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LazyLoadImg_19;
