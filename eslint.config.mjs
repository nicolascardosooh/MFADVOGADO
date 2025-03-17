import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

eslintConfig.rules = {
  "no-console": ["warn"], // Adiciona uma regra personalizada
  "react/react-in-jsx-scope": "off", // Outra regra personalizada
};


export default eslintConfig;
