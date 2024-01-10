import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  shortcuts: [
    ["full", "w-full h-full"],
    ["flex-center", "flex items-center justify-center"],
    ["w-limited-1", "w-full max-w-900px px8 mx-auto"],
    ["image-contain", "bg-contain bg-no-repeat bg-center"],
    ["image-cover", "bg-cover bg-no-repeat bg-center"],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({}),
    presetIcons(),
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
    limit: {},
    colors: {
      greyer: "#76797D",
      linearGray: "rgba(var(--linear-gray), %alpha)",
    },
  },
});
