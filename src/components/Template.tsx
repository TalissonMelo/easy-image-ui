import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Loading } from "./Loading";

interface TemplateProps {
  children: React.ReactNode;
  loading?: boolean;
}

export const Template: React.FC<TemplateProps> = ({
  children,
  loading,
}: TemplateProps) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Header />
          <div
            className={`${
              loading ? "animate-pulse" : ""
            } container mx-auto mt-8 px-4`}
          >
            <RenderIf condition={loading}>
              <div className="text-center">
                <Loading />
              </div>
            </RenderIf>
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

interface RenderIfProps {
  condition?: boolean;
  children: React.ReactNode;
}

export const RenderIf: React.FC<RenderIfProps> = ({
  condition = true,
  children,
}) => {
  if (condition) {
    return children;
  }

  return false;
};
