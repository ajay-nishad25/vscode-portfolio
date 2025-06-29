import React from "react";
import "styles/navbar.css";
import { Col, Row } from "react-bootstrap";
import { VscVscode } from "react-icons/vsc";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdMinimize } from "react-icons/md";
import { PiCopyLight } from "react-icons/pi";
import { VscSearch } from "react-icons/vsc";
import { MdOutlineClose } from "react-icons/md";
import useMediaQuery from "utils/useMediaQuery";

function Navbar() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="div-flex-column navbar-theme-black grey-border-bottom">
      <div className="navbar-container-padding">
        <Row className="g-0 m-0 p-0">
          <Col xl={4} lg={4} md={4} sm={6} xs={6}>
            <div className="div-flex-row  div-align-center cg-20 text-white ">
              <div className="div-flex-row div-align-center cg-25">
                <VscVscode className="vscode-icon icon-size-20 " />
              </div>
              {!isMobile && (
                <div className="div-flex-row cg-15">
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
                <IoIosArrowRoundBack className="icon-size-24" />
                <IoIosArrowRoundForward className="icon-size-24" />
                <div className="div-flex-row div-align-center vscode-search">
                  <div className="div-flex-center div-align-center cg-5 ">
                    <VscSearch className="icon-size-16" />
                    <span className="text-sm text-grey"> vscode-portfolio</span>
                  </div>
                </div>
              </div>
            </Col>
          )}

          <Col xl={4} lg={4} md={4} sm={6} xs={6} className="div-align-center">
            <div className="div-flex-row div-align-center div-flex-end text-white">
              <div className="div-flex-row cg-25">
                <MdMinimize />
                <div className="div-flex-row div-align-center py-1 cg-25">
                  <PiCopyLight />
                  <MdOutlineClose />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Navbar;
