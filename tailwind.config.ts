import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        muted: "#333333",
        bgSecondary: "#f4f4f4",
        stroke: "#c1c1c1",
        grayed: "#acacac",
      },
    },
  },
  plugins: [],
} satisfies Config;
