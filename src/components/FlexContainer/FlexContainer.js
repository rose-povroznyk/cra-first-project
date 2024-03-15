import React from 'react';

const FlexContainer = (props) => {
  const {
    display,
    alignItems,
    flexDirection,
    justifyContent,
    backgroundColor,
    color,
    children,
  } = props;
  console.log(props);
  const containerClass = {
    display,
    alignItems,
    flexDirection,
    justifyContent,
    backgroundColor,
    color,
  };
  return <aritcle style={containerClass}>{children}</aritcle>;
};

export default FlexContainer;
