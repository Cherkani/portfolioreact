import React from 'react';
import CV from '../../assets/cherkani_aymen_cv_en_compressed.pdf';

const CTA = (  { dowload,talk } )  => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        {dowload}
      </a>
      <a href="#contact" className="btn btn-primary">
      {talk}
      </a>
    </div>
  );
};

export default CTA;
