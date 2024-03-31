import Code from "../@atlasschool/code/Code";

import MultiLineJsx from "@/Example2/MultiLineJsx";
import MultiLineJsxString from "@/Example2/MultiLineJsx?raw";

export function Example2() {
  return (
    <div className="example">
      <h3>Example 2 - Multi Line JSX Component</h3>
      <p>
        Whenever there are multiple lines of html you should wrap the html in parenthesis.
      </p>
      <Code
        title="MultiLineJsx.jsx"
        lineNumbers
        language="jsx"
        component={<MultiLineJsx />}
      >
        {MultiLineJsxString}
      </Code>
    </div>
  );
}
