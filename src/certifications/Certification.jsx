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
import image8 from "../assets/c13.png";

import { useTranslation } from "react-i18next";

const Certification = () => {
  const images = [
    { original: image6 },
    { original: image7 },
    { original: image1 },
    { original: image2 },
    { original: image3 },
    { original: image8 },
    { original: image4 },
    { original: image5 },
  ];
  const {t} = useTranslation("translation");
  return (

    <div className="certification-container">
      <section id="certification">
        <h5>{t("certification.h5")}</h5>
        <h2>{t("certification.h2")}</h2>
        <ImageGallery items={images} autoPlay={true} slideInterval={3000} />
      </section>
    </div>
  );
};

export default Certification;
