import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
  presetMini,
} from "unocss";

export default defineConfig({
  shortcuts: [
    ["switch-animation", "transition duration-300"],
    ["bg-base", "bg-[#fff] dark:bg-[#282C33]"],
    ["text-base", "text-[#3C3C43] dark:text-[#FFFFF5D8]"],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({}),
    presetIcons(),
    presetMini(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    breakpoints: {
      xs: "320px",
      sm: "640px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1900px",
    },
  },
});
