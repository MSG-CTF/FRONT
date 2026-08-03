/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "auth-text": "#613d15",
        "auth-bg": "#f9eeee",
      },
      fontFamily: {
        "auth-label": ['"IM Fell English"', "ui-serif", "serif"],
      },
      fontSize: {
        // 36px label size on a 1920px-wide design, expressed as a
        // container-query width unit so it scales with the screen.
        "auth-label": ["1.875cqw", { lineHeight: "normal" }],
      },
      // Figma px coordinates (1920x1080 canvas) converted to % of the
      // viewport so the layout is fluid. Keys map to Tailwind's
      // inset/width/height scales -> classes like `top-card-top`,
      // `left-card-left`, `w-card`, `h-card`.
      inset: {
        "card-left": "19.948%",
        "card-top": "0.926%",
        // Vertical midpoint between the card's top edge (card-top 0.926%)
        // and the username input (username-top 42.130%) — the empty
        // header margin above the input fields. Paired with Logo.jsx's
        // left-1/2 + -translate-x-1/2 -translate-y-1/2 so the logo stays
        // centered in that margin regardless of its actual rendered size.
        "logo-top": "21.528%",
        "username-left": "32.396%",
        "username-top": "42.130%",
        "password-left": "32.604%",
        "password-top": "52.593%",
        "login-button-left": "27.656%",
        "login-button-top": "69.167%",
      },
      width: {
        card: "60.729%",
        // Visible-content width of logo.png (313px, after trimming the
        // asset's transparent padding) as a % of viewport width — height
        // is "auto" + a fixed aspect-ratio token below so the element
        // scales uniformly (no stretch) as the screen resizes.
        logo: "16.302%",
        "auth-input": "22.396%",
        "login-button": "44.531%",
      },
      height: {
        card: "95%",
        logo: "auto",
        "auth-input": "8.148%",
        // % of viewport height, same basis as `card`'s height (95%) — so
        // the button always tracks the card artwork's own vertical
        // stretch and stays inside the frame drawn on the card, instead
        // of drifting out of it at non-16:9 aspect ratios.
        "login-button": "9.815%",
      },
      aspectRatio: {
        logo: "313 / 226",
      },
    },
  },
  plugins: [],
};
