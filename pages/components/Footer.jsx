import { config } from "@/theme.config";
import React from "react";

const Footer = () => {
  const footerItems = config.filter((item) => item.type === "footer");
  const currentYear = new Date().getFullYear();

  return (
    <>
      <small style={{ display: "block", marginTop: "8rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {footerItems.map((item, index) => (
            <div key={index}>
              <span>
                <time>{item.year}</time> {item.name}
              </span>
              <span>
                <a href={item.url}>{item.social}</a>&nbsp;
              </span>
            </div>
          ))}
        </div>
      </small>
    </>
  );
};

export default Footer;
