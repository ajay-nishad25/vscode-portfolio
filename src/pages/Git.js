import React from "react";
import "styles/file.css";
import "styles/search.css";
import "styles/git.css";
import { Col, Row } from "react-bootstrap";
import { VscRefresh } from "react-icons/vsc";
import { VscClearAll } from "react-icons/vsc";
import { VscNewFile } from "react-icons/vsc";
import { VscListFlat } from "react-icons/vsc";
import { VscCollapseAll } from "react-icons/vsc";
// import { VscWholeWord } from "react-icons/vsc";
// import { VscCaseSensitive } from "react-icons/vsc";
// import { VscRegex } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";
import useMediaQuery from "utils/useMediaQuery";

export default function Git() {
  const isMobile = useMediaQuery("(max-width: 574px)");
  return (
    <div className="div-flex-column">
      <Row className="explore-section-height p-0 m-0 gx-0 ">
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
                  <span className="text-sm">SOURCE CONTROL</span>
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
                <div className="div-flex-row w-100 vp-5 cg-5">
                  <VscChevronDown
                    className={`icon-size-14 open-arrow-downward `}
                  />
                  <div className="div-flex-column w-100 rg-5">
                    <span className="text-sm ">Changes</span>
                    <div className="div-flex-column w-100 rg-5">
                      <div class="search-input-container">
                        <input
                          type="text"
                          class="search-input grey-placeholder"
                          placeholder='Message (Ctrl+Enter to commit on "git-page")'
                        />
                      </div>
                      <div class="commit-button-container">
                        <input
                          type="text"
                          class="search-input grey-placeholder"
                          placeholder='Message (Ctrl+Enter to commit on "git-page")'
                        />
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
            <div className="tab-content-area tab-main-content-bg"></div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
