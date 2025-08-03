import React, { useEffect, useState } from "react";
import "styles/navbar.css";
import { Col, Row } from "react-bootstrap";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdMinimize } from "react-icons/md";
import { PiCopyLight } from "react-icons/pi";
import { VscSearch } from "react-icons/vsc";
import { MdOutlineClose } from "react-icons/md";
import useMediaQuery from "utils/useMediaQuery";
import { ReactComponent as SearchIcon } from "images/icons/vscode.svg";
import { ReactComponent as MacRed } from "images/icons/mac-red.svg";
import { ReactComponent as MacYellow } from "images/icons/mac-yellow.svg";
import { ReactComponent as MacGreen } from "images/icons/mac-green.svg";

function Navbar() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    function detectDevice() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (
        /Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent) ||
        /iPhone|iPad|iPod/.test(userAgent)
      ) {
        setIsMac(true);
      } else {
        setIsMac(false);
      }
    }

    detectDevice();

    window.addEventListener("resize", detectDevice);
    window.addEventListener("orientationchange", detectDevice);

    return () => {
      window.removeEventListener("resize", detectDevice);
      window.removeEventListener("orientationchange", detectDevice);
    };
  }, []);

  return (
    <div className="div-flex-column navbar-theme-black grey-border-bottom">
      <div className="navbar-container-padding">
        <Row className="g-0 m-0 p-0">
          <Col xl={4} lg={4} md={4} sm={6} xs={6}>
            <div className="div-flex-row  div-align-center cg-20 text-white ">
              <div className="div-flex-row div-align-center cg-25">
                <SearchIcon />
              </div>
              {!isMobile && (
                <div className="div-flex-row cg-15 cursor-pointer">
                  <span className="text-md text-grey">File</span>
                  <span className="text-md text-grey">Edit</span>
                  <span className="text-md text-grey">Selection</span>
                  <span className="text-md text-grey">View</span>
                  <span className="text-md text-grey">Go</span>
                  <span className="text-md text-grey">Run</span>
                  <span className="text-md text-grey">Terminal</span>
                  <span className="text-md text-grey">Help</span>
                </div>
              )}
            </div>
          </Col>
          {!isMobile && (
            <Col xl={4} lg={4} md={4} sm={4}>
              <div className="div-flex-row cg-10 div-flex-center text-white">
                <IoIosArrowRoundBack className="icon-size-24 cursor-pointer" />
                <IoIosArrowRoundForward className="icon-size-24 cursor-pointer" />
                <div className="div-flex-row div-align-center vscode-search cursor-pointer">
                  <div className="div-flex-center div-align-center cg-5 ">
                    <VscSearch className="icon-size-16" color="grey" />
                    <span className="text-sm text-grey"> portfolio</span>
                  </div>
                </div>
              </div>
            </Col>
          )}

          {isMac ? (
            // for macbook and iphone
            <Col
              xl={4}
              lg={4}
              md={4}
              sm={6}
              xs={6}
              className="div-align-center"
            >
              <div className="div-flex-row div-align-center div-flex-end text-white">
                <div className="div-flex-row cg-5">
                  <MacRed className="icon-size-20 cursor-pointer" />
                  <MacYellow className="icon-size-20 cursor-pointer" />
                  <MacGreen className="icon-size-20 cursor-pointer" />
                </div>
              </div>
            </Col>
          ) : (
            // Windows and android
            <Col
              xl={4}
              lg={4}
              md={4}
              sm={6}
              xs={6}
              className="div-align-center"
            >
              <div className="div-flex-row div-align-center div-flex-end text-white">
                <div className="div-flex-row cg-25">
                  <MdMinimize className=" cursor-pointer" />
                  <div className="div-flex-row div-align-center py-1 cg-25">
                    <PiCopyLight className=" cursor-pointer" />
                    <MdOutlineClose className=" cursor-pointer" />
                  </div>
                </div>
              </div>
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
}

export default Navbar;
