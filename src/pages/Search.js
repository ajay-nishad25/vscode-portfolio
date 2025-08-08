import React from "react";
import "styles/file.css";
import "styles/search.css";
import { Col, Row } from "react-bootstrap";
import { VscRefresh } from "react-icons/vsc";
import { VscClearAll } from "react-icons/vsc";
import { VscNewFile } from "react-icons/vsc";
import { VscListFlat } from "react-icons/vsc";
import { VscCollapseAll } from "react-icons/vsc";
import { VscWholeWord } from "react-icons/vsc";
import { VscCaseSensitive } from "react-icons/vsc";
import { VscRegex } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";
import useMediaQuery from "utils/useMediaQuery";
import GithubImage from "images/github.png";
import GmailImage from "images/gmail.png";
import InstagramImage from "images/instagram.png";
import LinkedinImage from "images/linkedin.png";
import { VscLinkExternal } from "react-icons/vsc";

export default function Search() {
  const isMobile = useMediaQuery("(max-width: 574px)");

  function handleUserNavigate(page) {
    let url = "";
    switch (page) {
      case "1":
        url = "https://github.com/ajay-nishad25";
        break;
      case "2":
        url =
          "https://mail.google.com/mail/?view=cm&to=ajaynishad4123@gmail.com";
        break;
      case "3":
        url = "https://www.linkedin.com/in/ajay-nishad25/";
        break;
      case "4":
        url = "https://www.instagram.com/ajay_nishad_2504/";
        break;
      default:
        return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  }

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
                  <span className="text-sm text-grey">SEARCH</span>
                </div>

                <div className="div-flex-row cg-5 div-align-center">
                  <VscRefresh className="icon-size-14" color="grey" />
                  <VscClearAll className="icon-size-14" color="grey" />
                  <VscNewFile className="icon-size-14" color="grey" />
                  <VscListFlat className="icon-size-14" color="grey" />
                  <VscCollapseAll className="icon-size-14" color="grey" />
                </div>
              </div>
              <div className="div-flex-column">
                <div className="div-flex-row w-100 vp-5 div-align-center cg-5">
                  <VscChevronDown
                    className={`icon-size-14 open-arrow-upward`}
                  />
                  <div className="div-flex-column w-100">
                    <div class="search-input-container">
                      <input
                        type="text"
                        class="search-input"
                        placeholder="Search"
                      />
                      <div className="div-flex-row cg-5 hp-5">
                        <VscWholeWord className="icon-size-14" />
                        <VscCaseSensitive className="icon-size-14" />
                        <VscRegex className="icon-size-14" />
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
            <div className="tab-content-area tab-main-content-bg">
              <div className="div-flex-column">
                <div className="div-flex-row vp-20 div-flex-center">
                  <span className="text-big text-white">Let's connect</span>
                </div>
                <div className="div-flex-column vp-10 text-center w-100">
                  <span className="text-white ">
                    You can reach out to me through these channels, and together
                    we can build something amazing.
                  </span>
                </div>
                <div className="div-flex-row vp-10 cg-20 div-flex-center">
                  <button
                    className="site-icon-background"
                    onClick={() => {
                      handleUserNavigate("1");
                    }}
                  >
                    <picture>
                      <source
                        srcSet={require("images/github.png")}
                        type="image/png"
                      />
                      <img
                        src={GithubImage}
                        alt="github"
                        width="30"
                        height="30"
                      />
                    </picture>
                  </button>
                  <button
                    className="site-icon-background"
                    onClick={() => {
                      handleUserNavigate("2");
                    }}
                  >
                    <picture>
                      <source
                        srcSet={require("images/gmail.png")}
                        type="image/png"
                      />
                      <img
                        src={GmailImage}
                        alt="gmail"
                        width="30"
                        height="30"
                      />
                    </picture>
                  </button>
                  <button
                    className="site-icon-background"
                    onClick={() => {
                      handleUserNavigate("3");
                    }}
                  >
                    <picture>
                      <source
                        srcSet={require("images/linkedin.png")}
                        type="image/png"
                      />
                      <img
                        src={LinkedinImage}
                        alt="linkedin"
                        width="28"
                        height="28"
                      />
                    </picture>
                  </button>
                  <button
                    className="site-icon-background"
                    onClick={() => {
                      handleUserNavigate("4");
                    }}
                  >
                    <picture>
                      <source
                        srcSet={require("images/instagram.png")}
                        type="image/png"
                      />
                      <img
                        src={InstagramImage}
                        alt="instagram"
                        width="30"
                        height="30"
                      />
                    </picture>
                  </button>
                </div>
                <div className="div-flex-column vp-10 text-center w-100">
                  <span className="text-white">
                    Feel free to contact me anytime
                  </span>
                </div>
                <div className="div-flex-column vp-10 text-center w-100">
                  <span className="text-white">
                    I'm excited to collaborate and create great things with you.
                  </span>
                </div>
              </div>
              <div className="div-flex-row div-flex-center vp-20">
                <button className="view-resume-btn ">
                  <VscLinkExternal
                    className="icon-size-18 icon-bold-border"
                    color="black"
                  />
                  <span>View Resume</span>
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
