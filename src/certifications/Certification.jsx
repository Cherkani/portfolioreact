import React from 'react';
import { Galleria } from 'primereact/galleria';
import image1 from "../assets/c2.png";
import image2 from "../assets/c3.png";
import image3 from "../assets/c4.png";
import image4 from "../assets/c5.jpeg";
import image5 from "../assets/c6.png";
import image6 from "../assets/c11.png";
import image7 from "../assets/c12.png";



const Certification = () => {
  const certifications = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6 },
    { id: 7, image: image7 },
  ];

  const responsiveOptions = [
    // Define your responsive options here
    // Example: { breakpoint: '768px', numVisible: 3 },
  ];

  const itemTemplate = (item) => {
    return (
        
      <div className="certification-image">
        <img src={item.image} alt={`Certification ${item.id}`} />
      </div>
    );
  };

  return (
    <section id="certification">
   <h5>Explore my Professional Credentials</h5>
    <h2>Certification</h2>
   
     
  
   
      <Galleria
      className="container testimonials__container"
        value={certifications}
        responsiveOptions={responsiveOptions}
        numVisible={1}
        circular
        style={{ maxWidth: '700px', width: '100%' }}
        showItemNavigators
        item={itemTemplate}
      />
   </section>
  );
};

export default Certification;
