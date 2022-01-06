import React from "react";
import { Else, If, Then } from "./If";
import { Case, Default, Switch } from "./Switch";

export default function ReactIfExample() {
  return (
    <div>
      <IfExample />
      <hr />
      <SwitchExample />
    </div>
  );
}

function IfExample() {
  const [on, setOn] = React.useState(true);
  const toggleOn = () => setOn((prev) => !prev);

  return (
    <div>
      <h3>If Example</h3>
      <p>
        <button onClick={toggleOn}>Toggle {on ? "Off" : "On"}</button>
      </p>

      <If condition={on}>
        <Then>
          <b>Hello I'm an active element</b>
        </Then>
        <Else>
          <i>Turn me on</i>
        </Else>
      </If>
    </div>
  );
}

function SwitchExample() {
  const [value, setValue] = React.useState(0);
  const increment = () => setValue((prev) => prev + 1);

  return (
    <div>
      <h3>Switch Example</h3>
      <p>
        <button onClick={increment}>Increment</button>
      </p>
      <Switch>
        <Case condition={value % 2 === 0}>{value} % 2 = 0</Case>
        <Case condition={value % 3 === 0}>{value} % 3 = 0</Case>
        <Default>{value} is not divisible by two and three!</Default>
      </Switch>
    </div>
  );
}
