import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Mosa3ada - Call For Contribution</span>,
  project: {
    link: "https://github.com/BizTech-Morocco/mosa3ada.biztech.ma",
  },
  chat: {
    link: "https://discord.gg/pkv9QbHJe",
  },
  docsRepositoryBase: "https://github.com/aimdexter/mosa3ada-docs/tree/main",
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Mosa3ada" />
      <meta property="og:description" content="Mosa3ada Docs" />
    </>
  ),
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">© {new Date().getFullYear()} BizTech.ma.</p>
      </div>
    ),
  },
  toc: {
    backToTop: true,
  },
};

export default config;
