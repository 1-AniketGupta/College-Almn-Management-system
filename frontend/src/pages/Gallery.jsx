import React from "react";

const images = [
  { id: 1, src: "https://via.placeholder.com/300", alt: "Alumni Event 1" },
  { id: 2, src: "https://via.placeholder.com/300", alt: "Alumni Event 2" },
  { id: 3, src: "https://via.placeholder.com/300", alt: "Alumni Event 3" },
  { id: 4, src: "https://via.placeholder.com/300", alt: "Alumni Event 4" },
];

const Gallery = () => {
  return (
    <section className="bg-gray-100 py-16 mt-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-6">
          Browse through our collection of memorable moments captured at alumni events and gatherings.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
