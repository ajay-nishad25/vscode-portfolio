import React, { useEffect, useState } from "react";
import "styles/file.css";
import { Col, Row } from "react-bootstrap";
import { VscEllipsis, VscChevronDown } from "react-icons/vsc";
import { PiFolderSimpleFill } from "react-icons/pi";
import { DiJsBadge } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { BiSolidInfoCircle } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { VscNewFile } from "react-icons/vsc";
import { VscNewFolder } from "react-icons/vsc";
import { VscRefresh } from "react-icons/vsc";
import { VscCollapseAll } from "react-icons/vsc";

import Index from "components/EditorTabs/Index";
import TechStack from "components/EditorTabs/TechStack";
import Github from "components/EditorTabs/Github";
import Contact from "components/EditorTabs/Contact";
import useMediaQuery from "utils/useMediaQuery";

const defaultTabs = ["index.js", "techStack.css", "github.md", "contact.html"];

export default function File() {
  const isMobile = useMediaQuery("(max-width: 574px)");
  const [hideFolder, setHideFolder] = useState(true);

  // Initialize openTabs from sessionStorage or fallback to ["index.js"]
  const [openTabs, setOpenTabs] = useState(() => {
    try {
      const storedTabs = sessionStorage.getItem("openTabs");
      return storedTabs ? JSON.parse(storedTabs) : ["index.js"];
    } catch {
      return ["index.js"];
    }
  });

  // Initialize activeTab similarly, fallback to "index.js"
  const [activeTab, setActiveTab] = useState(() => {
    try {
      const storedActive = sessionStorage.getItem("activeTab");
      return storedActive || "index.js";
    } catch {
      return "index.js";
    }
  });

  // Sync sessionStorage whenever openTabs changes
  useEffect(() => {
    sessionStorage.setItem("openTabs", JSON.stringify(openTabs));
  }, [openTabs]);

  // Sync sessionStorage whenever activeTab changes
  useEffect(() => {
    sessionStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  useEffect(() => {
    if (isMobile) {
      setOpenTabs(defaultTabs);
      setActiveTab((cur) => (defaultTabs.includes(cur) ? cur : "index.js"));
    }
  }, [isMobile]);

  const editorTabView = [
    {
      title: "index.js",
      icon: <DiJsBadge className="icon-size-12" color="yellow" />,
      detailSection: <Index />,
    },
    {
      title: "techStack.css",
      icon: <IoLogoCss3 className="icon-size-14" color="#663399" />,
      detailSection: <TechStack />,
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
    "techStack.css": <TechStack />,
    "github.md": <Github />,
    "contact.html": <Contact />,
  };

  const fileIcons = {
    "index.js": <DiJsBadge className="icon-size-12" color="yellow" />,
    "techStack.css": <IoLogoCss3 className="icon-size-14" color="#663399" />,
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
    <>
      <title>
        Ajay Nishad | VSCode Portfolio – Projects, Tech Stack & Contact
      </title>
      <meta
        name="description"
        content="Explore Ajay Nishad's VSCode-themed portfolio featuring personal bio, technology stack, GitHub projects with live demos, and contact information. Built with React.js."
      />
      <meta
        name="keywords"
        content="VSCode portfolio, Ajay Nishad, React developer, tech stack, GitHub projects, live demo, contact, open source, web development"
      />
      <link
        rel="canonical"
        href="https://ajay-nishad25-portfolio.vercel.app/file"
      />

      <meta property="og:title" content="Ajay Nishad | VSCode Portfolio" />
      <meta
        property="og:description"
        content="Bio, tech stack, open-source GitHub projects, and contact options. VSCode-inspired React portfolio."
      />
      <meta
        property="og:url"
        content="https://ajay-nishad25-portfolio.vercel.app/file"
      />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Ajay Nishad | VSCode Portfolio" />
      <meta
        name="twitter:description"
        content="A React portfolio: About me, tech stack, projects and contact info."
      />

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
              <div className="div-flex-column hp-10">
                <div className="div-space-between vp-5">
                  <span className="text-sm text-grey">EXPLORER</span>
                  <VscEllipsis className="icon-size-14" color="grey" />
                </div>
                <div className="div-flex-column vp-5 ">
                  <div className="div-flex-row  div-space-between div-align-center cursor-pointer">
                    <div className="div-flex-row div-align-center">
                      <span>
                        <VscChevronDown className="icon-size-18" />
                      </span>
                      <span className="text-sm text-grey text-semi-bold">
                        portfolio
                      </span>
                    </div>
                    <div className="div-flex-row cg-5">
                      <VscNewFile className="icon-size-14" color="white" />
                      <VscNewFolder className="icon-size-14" color="white" />
                      <VscRefresh className="icon-size-14" color="white" />
                      <VscCollapseAll className="icon-size-14" color="white" />
                    </div>
                  </div>
                  <div className="div-flex-column">
                    <button
                      className="button-css-none div-flex-row div-align-center cg-5 cursor-pointer hp-15 file-item"
                      onClick={() => setHideFolder(!hideFolder)}
                    >
                      <span>
                        <VscChevronDown
                          className={`icon-size-18 ${
                            hideFolder
                              ? "open-arrow-downward"
                              : "open-arrow-upward"
                          }`}
                        />
                      </span>
                      <span>
                        <PiFolderSimpleFill className="icon-size-16" />
                      </span>
                      <span className="text-sm text-grey text-weight-light">
                        portfolio
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
                            <span className="text-sm text-grey text-weight-light">
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
          )}

          <Col xl={10} lg={9} md={8} sm={7} xs={12}>
            <div className="div-flex-column">
              <div className="div-flex-row file-tab-section-header file-tab-section-scroll div-align-center ">
                {openTabs.map((file) => (
                  <div
                    key={file}
                    className={`tab-item ${
                      file === activeTab ? "active-tab" : " "
                    }`}
                    onClick={() => setActiveTab(file)}
                  >
                    {fileIcons[file]}
                    <span className="text-sm text-grey">{file}</span>
                    {!isMobile && (
                      <button
                        className="close-btn text-grey"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCloseTab(file);
                        }}
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="tab-content-area tab-main-content-bg">
                {fileComponents[activeTab] || (
                  <div className="h-100 div-flex-center div-align-center">
                    <div className="">
                      <span className="text-white text-sm">
                        No file selected
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
