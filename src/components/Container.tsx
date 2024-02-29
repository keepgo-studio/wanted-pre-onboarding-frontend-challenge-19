import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="border rounded-lg p-8 border-black shadow-md">
      {children}
    </section>
  )
};

export default Container;