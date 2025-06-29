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

function Navbar() {
  return (
    <div className="div-flex-column navbar-theme-black">
      <div className="navbar-container-padding">
        <Row>
          <Col xl={4} lg={4} md={4} sm={4}>
            <div className="div-flex-row  div-align-center cg-20 text-white">
              <VscVscode className="vscode-icon icon-size-20" />
              <div className="div-flex-row  div-align-center cg-15">
                <span className="text-md">File</span>
                <span className="text-md">Edit</span>
                <span className="text-md">Selection</span>
                <span className="text-md">View</span>
                <span className="text-md">Go</span>
                <span className="text-md">Run</span>
                <span className="text-md">Terminal</span>
                <span className="text-md">Help</span>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={4} md={4} sm={4}>
            <div className="div-flex-row cg-10 div-flex-center text-white">
              <IoIosArrowRoundBack className="icon-size-24" />
              <IoIosArrowRoundForward className="icon-size-24" />
              <div className="div-flex-row div-align-center vscode-search">
                <div className="div-flex-center div-align-center cg-5 ">
                  <VscSearch className="icon-size-16" />
                  <span className="text-sm"> vscode-portfolio</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={4} md={4} sm={4} className="div-align-center">
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
