import React, { useEffect, useState } from "react";
import "styles/file.css";
import "styles/search.css";
import "styles/extensions.css";
import { Col, Row } from "react-bootstrap";
import { VscRefresh } from "react-icons/vsc";
import { VscClearAll } from "react-icons/vsc";
import useMediaQuery from "utils/useMediaQuery";
import { VscEllipsis } from "react-icons/vsc";
import { VscFilter } from "react-icons/vsc";
import VscodeTheme from "images/vscode-theme.png";
import GithubTheme from "images/github-theme.png";
import AtomTheme from "images/atom-theme.png";
import DraculaTheme from "images/dracula-theme.png";
import { getSavedTheme, setTheme } from "utils/theme";

export default function Extension() {
  const isMobile = useMediaQuery("(max-width: 574px)");

  const themes = [
    {
      id: "github",
      name: "Github Theme",
      icon: <img src={GithubTheme} alt="github" width="60px" height="60px" />,
    },
    {
      id: "vscode",
      name: "Vscode Theme",
      icon: <img src={VscodeTheme} alt="vscode" width="60px" height="60px" />,
    },
    {
      id: "atom",
      name: "Atom Theme",
      icon: <img src={AtomTheme} alt="atom" width="60px" height="60px" />,
    },
    {
      id: "dracula",
      name: "Dracula Theme",
      icon: <img src={DraculaTheme} alt="dracula" width="60px" height="60px" />,
    },
  ];

  const [activeTheme, setActiveTheme] = useState(getSavedTheme());

  useEffect(() => {
    setTheme(activeTheme);
  }, [activeTheme]);

  return (
    <>
      <title>Ajay Nishad | VSCode Portfolio – Extensions Info</title>
      <meta
        name="description"
        content="Learn about Ajay Nishad's custom VSCode extensions and developer tools in this React portfolio with a VSCode theme."
      />
      <meta
        name="keywords"
        content="VSCode portfolio, Ajay Nishad, VSCode extensions, developer tools, React portfolio, customization"
      />
      <link
        rel="canonical"
        href="https://ajay-nishad25-portfolio.vercel.app/extension"
      />

      <meta
        property="og:title"
        content="Ajay Nishad | VSCode Portfolio – Extensions Info"
      />
      <meta
        property="og:description"
        content="Explore custom VSCode extensions and tools created by Ajay Nishad in this React portfolio."
      />
      <meta
        property="og:url"
        content="https://ajay-nishad25-portfolio.vercel.app/extension"
      />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Ajay Nishad | VSCode Portfolio – Extensions Info"
      />
      <meta
        name="twitter:description"
        content="Custom VSCode extensions and developer tools by Ajay Nishad in this React portfolio."
      />

      <div className="h-100 div-flex-column">
        <Row className="h-100 p-0 m-0 gx-0 ">
          {!isMobile && (
            <Col
              xl={2}
              lg={3}
              md={4}
              sm={5}
              xs={2}
              className="explorer-bg grey-border-right"
            >
              <div className="div-flex-column hp-10 ">
                <div className="div-space-between vp-5">
                  <div className="div-flex-column">
                    <span className="text-sm text-grey">EXTENSIONS</span>
                  </div>

                  <div className="div-flex-row cg-5 div-align-center">
                    <VscRefresh className="icon-size-14" color="grey" />
                    <VscEllipsis className="icon-size-14" color="grey" />
                  </div>
                </div>
                <div className="div-flex-column">
                  <div className="div-flex-row w-100 vp-5 div-align-center cg-5">
                    <div className="div-flex-column w-100">
                      <div class="search-input-container">
                        <input
                          type="text"
                          class="search-input"
                          placeholder="Search Extensions in Marketplace"
                        />
                        <div className="div-flex-row cg-5 hp-5">
                          <VscClearAll className="icon-size-14" color="grey" />
                          <VscFilter className="icon-size-14" color="grey" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          )}
          <Col
            xl={10}
            lg={9}
            md={8}
            sm={7}
            xs={12}
            className="github-profile-detail-section px-3"
          >
            <Row className="g-4 px-0 py-3 ">
              {themes.map((theme, index) => (
                <Col key={index} xxl={3} xl={3} lg={6} md={6} sm={6} xs={12}>
                  <div className="h-100 div-flex-column rg-10 theme-card text-center p-3 common-border-white">
                    <div className="theme-icon mb-3">{theme.icon}</div>
                    <div className="div-flex-column rg-10">
                      <span className="text-lg text-semi-bold  text-grey">
                        {theme.name}
                      </span>
                      <button
                        className={`div-flex-row div-flex-center theme-button common-border-white  px-5 ${
                          activeTheme === theme.id ? "active" : ""
                        }`}
                        onClick={() => setActiveTheme(theme.id)}
                      >
                        {activeTheme === theme.id ? (
                          <span className="text-sm text-semi-bold">
                            Applied
                          </span>
                        ) : (
                          <span className="text-sm text-semi-bold">Apply</span>
                        )}
                      </button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}
