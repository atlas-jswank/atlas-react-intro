import Code from "../@atlasschool/code/Code";

import EvaluatingJS from "@/Example5/EvaluatingJS";
import EvaluatingJSString from "@/Example5/EvaluatingJS?raw";

export function Example5() {
  return (
    <div className="example">
      <h3>Example 5 - Evaluating JS in JSX</h3>
      <p>
        To evaluate javascript or pass a variable in the html you must surround it in curly brackets.
      </p>

      <Code
        title="ReactFragment.jsx"
        lineNumbers
        language="jsx"
        component={<EvaluatingJS />}
      >
        {EvaluatingJSString}
      </Code>
    </div>
  );
}
