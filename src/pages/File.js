import React, { useState } from "react";
import "styles/file.css";
import { Col, Row } from "react-bootstrap";
import { VscEllipsis, VscChevronDown } from "react-icons/vsc";
import { PiFolderSimpleFill } from "react-icons/pi";
import { DiJsBadge } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { BiSolidInfoCircle } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";

import Index from "components/EditorTabs/Index";
import About from "components/EditorTabs/About";
import Github from "components/EditorTabs/Github";
import Contact from "components/EditorTabs/Contact";

export default function File() {
  const [hideFolder, setHideFolder] = useState(true);
  const [openTabs, setOpenTabs] = useState(["index.js"]);
  const [activeTab, setActiveTab] = useState("index.js");

  const editorTabView = [
    {
      title: "index.js",
      icon: <DiJsBadge className="icon-size-12" color="yellow" />,
      detailSection: <Index />,
    },
    {
      title: "about.css",
      icon: <IoLogoCss3 className="icon-size-14" color="#663399" />,
      detailSection: <About />,
    },
    {
      title: "github.md",
      icon: <BiSolidInfoCircle className="icon-size-14" color="#0096FF" />,
      detailSection: <Github />,
    },
    {
      title: "contact.html",
      icon: <FaHtml5 className="icon-size-14" color="#E44D26" />,
      detailSection: <Contact />,
    },
  ];

  const fileComponents = {
    "index.js": <Index />,
    "about.css": <About />,
    "github.md": <Github />,
    "contact.html": <Contact />,
  };

  const fileIcons = {
    "index.js": <DiJsBadge className="icon-size-12" color="yellow" />,
    "about.css": <IoLogoCss3 className="icon-size-14" color="#663399" />,
    "github.md": <BiSolidInfoCircle className="icon-size-14" color="#0096FF" />,
    "contact.html": <FaHtml5 className="icon-size-14" color="#E44D26" />,
  };

  const handleFileClick = (fileName) => {
    if (!openTabs.includes(fileName)) {
      setOpenTabs((prev) => [...prev, fileName]);
    }
    setActiveTab(fileName);
  };

  const handleCloseTab = (fileName) => {
    const updatedTabs = openTabs.filter((f) => f !== fileName);
    setOpenTabs(updatedTabs);
    if (fileName === activeTab) {
      const newActive = updatedTabs[updatedTabs.length - 1] || "";
      setActiveTab(newActive);
    }
  };

  return (
    <div className="div-flex-column">
      <Row className="explore-section-height g-0 p-0">
        <Col
          xl={2}
          lg={2}
          md={2}
          sm={2}
          xs={2}
          className="explorer-bg grey-border-right"
        >
          <div className="div-flex-column hp-10">
            <div className="div-space-between vp-5">
              <span className="text-sm">EXPLORER</span>
              <VscEllipsis className="icon-size-20" />
            </div>
            <div className="div-flex-column vp-5 ">
              <div className="div-flex-row div-align-center cursor-pointer">
                <span>
                  <VscChevronDown className="icon-size-18" />
                </span>
                <span className="text-sm text-semi-bold">
                  ajay-nishad25-portfolio
                </span>
              </div>
              <div className="div-flex-column">
                <button
                  className="button-css-none div-flex-row div-align-center cg-5 cursor-pointer hp-15 file-item"
                  onClick={() => setHideFolder(!hideFolder)}
                >
                  <span>
                    <VscChevronDown
                      className={`icon-size-18 ${
                        hideFolder ? "open-arrow-downward" : "open-arrow-upward"
                      }`}
                    />
                  </span>
                  <span>
                    <PiFolderSimpleFill className="icon-size-18" />
                  </span>
                  <span className="text-sm text-weight-light">
                    ajay-nishad25-portfolio
                  </span>
                </button>
                {hideFolder && (
                  <div className="div-flex-column">
                    {editorTabView.map((file) => (
                      <div
                        key={file.title}
                        className="div-flex-row div-align-center cg-5 cursor-pointer hp-60 file-item"
                        onClick={() => handleFileClick(file.title)}
                      >
                        <span>{file.icon}</span>
                        <span className="text-sm text-weight-light">
                          {file.title}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Col>

        <Col xl={10} lg={10} md={10} sm={10} xs={10}>
          <div className="div-flex-column">
            <div className="div-flex-row file-tab-section-header div-align-center grey-border-bottom">
              {openTabs.map((file) => (
                <div
                  key={file}
                  className={`tab-item ${
                    file === activeTab ? "active-tab" : " "
                  }`}
                  onClick={() => setActiveTab(file)}
                >
                  {fileIcons[file]}
                  <span className="text-sm">{file}</span>
                  <button
                    className="close-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCloseTab(file);
                    }}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="tab-content-area tab-main-content-bg">
              {fileComponents[activeTab] || (
                <div className="h-100 div-flex-center div-align-center">
                  <div className="">
                    <span className="text-white text-sm">No file selected</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
