import React, { useEffect } from "react";
import "./index.css";
import { Glossary } from "../data/glossary";
import { Card } from "../component/card";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "../component/header";
import { Canvas } from "../component/canvas";

export const Page: React.FC = () => {
  useEffect(() => {
    window.onscroll = () => {
      const navigationAreaHeader = document.getElementById(
        "navigation-area-header"
      );
      const footerButton = document.getElementById("footer-button");

      if (window.scrollY > 10) {
        if (
          !navigationAreaHeader?.classList.contains("navigation-area-hidden")
        ) {
          navigationAreaHeader?.classList.add("navigation-area-hidden");
        }

        if (footerButton?.classList.contains("footer-button-hidden")) {
          footerButton?.classList.remove("footer-button-hidden");
        }
      } else {
        if (
          navigationAreaHeader?.classList.contains("navigation-area-hidden")
        ) {
          navigationAreaHeader?.classList.remove("navigation-area-hidden");
        }

        if (!footerButton?.classList.contains("footer-button-hidden")) {
          footerButton?.classList.add("footer-button-hidden");
        }
      }
    };
  }, []);

  return (
    <div className="portfolio-area">
      <Header />

      <Routes>
        <Route
          path="/glossary"
          element={
            <div className="content-area">
              {Glossary.map((notion) => (
                <Card
                  id={notion.id}
                  term={notion.term}
                  definition={notion.definition}
                />
              ))}
            </div>
          }
        />

        <Route
          path="/semantic-graph"
          element={
            <div className="content-area">
              <Canvas />
            </div>
          }
        />

        <Route path="/*" element={<Navigate to="/glossary" />} />
      </Routes>
    </div>
  );
};
