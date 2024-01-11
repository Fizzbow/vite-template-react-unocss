import { useState } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

const Home = () => {
  const { t } = useTranslation();
  const [mode, setMode] = useState<"light" | "dark">("light");
  return (
    <div className={` w-full h-full ${mode}`}>
      <main
        className={`w-full h-full bg-base text-base`}
        flex="~ col items-center gap-5"
      >
        <div flex="~ row gap-10" className="max-w-4xl mt-40">
          <div className="i-logos:vitejs text-7xl" />
          <div className="i-logos:react text-7xl hover:rotate-50 transition-transform" />
        </div>

        <div className="border-1 border-solid cursor-pointer rounded-1 px-5 py-2 my-12">
          <div
            className="i-carbon-sun dark:i-carbon-moon  text-xl"
            onClick={() =>
              setMode((prev) => (prev === "dark" ? "light" : "dark"))
            }
          />
        </div>

        <div className="font-600 text-[20px] flex flex-row gap-2 mb-4">
          <span>CURRENT LANGUAGE :</span>
          <select
            name="lang"
            className="text-[19px] border-none rounded-1"
            onChange={(event) => changeLanguage(event.target.value)}
          >
            <option value="en">en</option>
            <option value="cn">cn</option>
          </select>
        </div>

        <div
          flex="~ col items-center gap-1"
          className="max-w-xl shadow-xl bg-white/10 rounded-2 p-6"
        >
          <span className="font-600 text-[20px]">{t("Home.title")}</span>
          <span>{t("Home.section")}</span>
        </div>
      </main>
    </div>
  );
};

export default Home;
