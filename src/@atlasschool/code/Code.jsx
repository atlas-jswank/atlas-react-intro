import { useEffect, useState } from "react";
import { codeToHtml } from "./shiki.ts";
import "@/@atlasschool/code/Code.css";
import { theme } from "@/@atlasschool/code/theme";
import LoadingCode from "@/@atlasschool/code/LoadingCode.jsx"

export default function Code({
  children,
  language,
  lineNumbers,
  title,
  component,
}) {
  const [html, setHtml] = useState();
  useEffect(() => {
    async function load() {
      const _html = await codeToHtml({
        code: children,
        language,
      });
      setHtml(_html);
    }
    load();
  }, [children, language]);

  if (!html) {
    return <LoadingCode />
  }

  return (
    <>
      <div
        className="code-box"
        style={{
          background: theme.colors["editor.background"],
        }}
      >
        <div className={lineNumbers ? "lineNumbers" : ""}>
          {title && <h6>{title}</h6>}
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
        {!!component && <div>{component}</div>}
      </div>
    </>
  );
}
