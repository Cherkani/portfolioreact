// export default Certification;
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import

import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/scss/image-gallery.scss";

// Images for certifications
import image1 from "../assets/c2.png";
import image2 from "../assets/c3.png";
import image3 from "../assets/c4.png";
import image4 from "../assets/c5.jpeg";
import image5 from "../assets/c6.png";
import image6 from "../assets/c11.png";
import image7 from "../assets/c12.png";
// const images = [
//   {  original: image1, thumbnail: image1 },
//     { original: image2, thumbnail: image2 },
//     {  original: image3, thumbnail: image3 },
//     {  original: image4, thumbnail: image4 },
//     { original: image5, thumbnail: image5 },
//     { original: image6, thumbnail: image6 },
//     {  original: image7, thumbnail: image7 },
// ];
const images = [
  { original: image6 },
  {  original: image7},
  {  original: image1 },
    { original: image2},
    {  original: image3},
    {  original: image4},
    { original: image5 },
   
    
];
const Certification = () => {
  

  // Customize the component or add additional settings
 

  return (
    <div className="certification-container">
      <section id="certification">
        <h5>Explore my Professional Credentials</h5>
        <h2>Certification</h2>
        <ImageGallery items={images} />;
      </section>
     
    </div>
  );
};


export default Certification;