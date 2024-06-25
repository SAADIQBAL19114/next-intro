import React from "react";

const Container = (
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>,
  styles = ""
) => {
  return (
    <div className={`max-w-container mx-auto px-5 ${styles}`}>{children}</div>
  );
};

export default Container;
