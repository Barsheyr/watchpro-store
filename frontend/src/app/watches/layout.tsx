import React from "react";

const WatchLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1> Watch Heading </h1>
      {children}
    </div>
  );
};

export default WatchLayout;
