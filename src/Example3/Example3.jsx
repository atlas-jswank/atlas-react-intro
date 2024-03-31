import Code from "../@atlasschool/code/Code";

import ReactFragment from "@/Example3/ReactFragment";
import ReactFragmentBrokenString from "@/Example3/ReactFragmentBroken?raw";
import ReactFragmentString from "@/Example3/ReactFragment?raw";
import Error from "@/Error";

export function Example3() {
  return (
    <div className="example">
      <h3>Example 3 - React Fragment</h3>
      <p>
        The return statement from a React component must only have one root element. If there are
        multiple elements at the root, react will throw an error. You can use the empty tag known 
        as a fragment to wrap elements to avoid this error.
      </p>
      <Code
        title="ReactFragmentBroken.jsx"
        lineNumbers
        language="jsx"
        component={<Error>Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?</Error>}
      >
        {ReactFragmentBrokenString}
      </Code>
      <Code
        title="ReactFragment.jsx"
        lineNumbers
        language="jsx"
        component={<ReactFragment />}
      >
        {ReactFragmentString}
      </Code>
    </div>
  );
}
