/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image":
          "url('src/assets/graphic-designer-looking-camera-while-colleague-working-ba.png')",
        "seo-image": "url('src/assets/seo.png')",
        "ui-image": "url('src/assets/ui.png')",
        "dev-image": "url('src/assets/dev.png')",
        "app-image": "url('src/assets/app.png')",
        "server-image": "url('src/assets/Rectangle 18495.png')",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};

