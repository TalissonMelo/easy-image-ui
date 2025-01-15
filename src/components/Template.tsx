import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface TemplateProps {
  children: React.ReactNode;
}

export const Template: React.FC<TemplateProps> = (props: TemplateProps) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Header />
          <div className="container mx-auto mt-8 px-4">{props.children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};
