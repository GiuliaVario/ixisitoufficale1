import next from "eslint-config-next";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  ...next(),
  {
    rules: {
      // Regole personalizzate
      "@next/next/no-img-element": "off", // permetti <img>
      "react/jsx-curly-brace-presence": ["warn", "never"], // evita { "testo" }
      "react/self-closing-comp": "warn", // forza tag auto-chiusi <div />
      "no-console": ["warn", { allow: ["warn", "error"] }], // solo console.warn/error
    },
  },
  {
    ignores: [
      "node_modules",
      ".next",
      "dist",
      "coverage"
    ],
  },
];
