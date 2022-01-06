import React from "react";

const ConditionStates = {
  Then: true,
  Else: false
};

const ConditionTags = ["Then", "Else"];

export function If({ children, condition }) {
  return (
    <React.Fragment>
      {React.Children.toArray(children).find((child) => {
        const name = child.type?.name;
        const validTagNames = ConditionTags.includes(name);

        if (validTagNames) {
          return ConditionStates[name] === condition;
        }

        return false;
      })}
    </React.Fragment>
  );
}

export function Then(props) {
  return props.children;
}

export function Else(props) {
  return props.children;
}
