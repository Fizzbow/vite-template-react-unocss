import { useTranslation } from "react-i18next";

const Home = () => {
  const { i18n, t } = useTranslation();
  return (
    <main className="full " flex="~ col items-center  gap-5 ">
      <nav className="h-10 w-full  backdrop-blur-2xl"></nav>
      <div flex="~ row gap-10">
        <div className="i-logos:vitejs text-7xl" />
        <div className="i-logos:react text-7xl" />
      </div>
      <div>
        <span className="text-red">{t("Home.test")}</span>
        <br />
        <span>{i18n.language}</span>
      </div>
    </main>
  );
};

export default Home;
