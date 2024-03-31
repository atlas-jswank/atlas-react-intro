import Code from "../@atlasschool/code/Code";

import EventHandling from "@/Example6/EventHandling";
import EventHandlingString from "@/Example6/EventHandling?raw";

export function Example6() {
  return (
    <div className="example">
      <h3>Example 6 - Event Handling</h3>
      <p>
        Function can be bound to html elements to execute javascript on certain behaviors.
      </p>

      <Code
        title="ReactFragment.jsx"
        lineNumbers
        language="jsx"
        component={<EventHandling />}
      >
        {EventHandlingString}
      </Code>
    </div>
  );
}
