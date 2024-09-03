import React from "react";
import Header from "../Header/Index";
import Footer from "../Footer/Index";

export default function BaseLayout({ children, theme = "light" }) {
  return (
    <div>
      <Header theme={theme} />
      <div
        className={`main-content min-h-screen ${
          theme === "light" ? "pt-[120px] md:pt-[160px]" : ""
        }`}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}
