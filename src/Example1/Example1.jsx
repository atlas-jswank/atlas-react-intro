import Code from "../@atlasschool/code/Code";

import BasicJsx from "@/Example1/BasicJsx";
import BasicJsxString from "@/Example1/BasicJsx?raw";

export function Example1() {
  return (
    <div className="example">
      <h3>Example 1 - Basic JSX Component</h3>
      <p>
        The first few lines are how you would create a heading component in plain javascript. 
        The last few lines are how you accomplish the same output with jsx.
      </p>
      <Code
        title="BasicJsx.ts"
        lineNumbers
        language="jsx"
        component={<BasicJsx />}
      >
        {BasicJsxString}
      </Code>
    </div>
  );
}
