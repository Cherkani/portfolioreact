import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [t, i18n] = useTranslation("translation");
  console.log(t("body.body"));

  return (
    <div>
      <p>{t("body.body")}</p>
    </div>
  );
};

export default Home;
