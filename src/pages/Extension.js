import React from "react";
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

export default function Extension() {
  const isMobile = useMediaQuery("(max-width: 574px)");

  const themes = [
    {
      name: "Vscode Theme",
      icon: <img src={VscodeTheme} alt="vsocde" width="75px" height="75px" />,
    },
    {
      name: "Github Theme",
      icon: <img src={GithubTheme} alt="github" width="75px" height="75px" />,
    },
    {
      name: "Atom Theme",
      icon: <img src={AtomTheme} alt="atom" width="75px" height="75px" />,
    },
    {
      name: "Dracula Theme",
      icon: <img src={DraculaTheme} alt="dracula" width="75px" height="75px" />,
    },
  ];

  return (
    <div className="div-flex-column">
      <Row className="explore-section-height  p-0 m-0 gx-0 ">
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
        <Col xl={10} lg={9} md={8} sm={7} xs={12}>
          <div className="div-flex-column">
            <div className="tab-content-area div-flex-center tab-main-content-bg">
              <div className="div-flex-column div-flex-center div-align-center">
                <Row className="g-3 px-4">
                  {themes.map((theme, index) => (
                    <Col
                      key={index}
                      xxl={3}
                      xl={3}
                      lg={6}
                      md={6}
                      sm={6}
                      xs={12}
                    >
                      <div className="div-flex-column rg-10 theme-card text-center p-3 common-border-white">
                        <div className="theme-icon mb-3">{theme.icon}</div>
                        <div className="div-flex-column rg-10">
                          <span className="text-lg text-semi-bold text-white">
                            {theme.name}
                          </span>
                          <button
                            variant="secondary"
                            className="button-css-none common-border-white px-5"
                          >
                            <span className="text-sm text-semi-bold">
                              Apply Theme
                            </span>
                          </button>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
