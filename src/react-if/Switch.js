import React from "react";

export function Switch({ children }) {
  const body = React.Children.toArray(children).find((child) => {
    const name = child.type?.name;
    return (name === "Case" && child.props.condition) || name === "Default";
  });

  return <React.Fragment>{body}</React.Fragment>;
}

export function Case(props) {
  return props.children;
}

export function Default(props) {
  return props.children;
}
