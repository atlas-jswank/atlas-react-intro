import { theme as defaultTheme } from "@/@atlasschool/code/theme";
import { ThemeInput, getHighlighter } from "shiki";

export const codeToHtml = async ({
  code,
  language,
  theme,
}: {
  code: string;
  language: string;
  theme?: ThemeInput & { name: string };
}) => {
  const highlighter = await getHighlighter({
    themes: [theme ?? defaultTheme],
    langs: [language],
  });

  const html = highlighter.codeToHtml(code, {
    lang: language,
    theme: theme?.name ?? defaultTheme.name,
  });
  return html;
};
