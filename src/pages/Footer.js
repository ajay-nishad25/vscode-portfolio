import React from "react";
import "styles/footer.css";
import { VscRemote } from "react-icons/vsc";
import { IoIosGitBranch } from "react-icons/io";
import { VscSync } from "react-icons/vsc";
import { VscArrowDown, VscArrowUp } from "react-icons/vsc";
import { VscError } from "react-icons/vsc";
import { VscWarning } from "react-icons/vsc";
import { VscJson } from "react-icons/vsc";
import { VscCopilot } from "react-icons/vsc";
import { VscBellDot } from "react-icons/vsc";

export default function Footer() {
  return (
    <div className="footer-background grey-border-top text-white">
      <div className="div-flex-row div-space-between">
        <div className="div-flex-row cg-20 cursor-pointer">
          <div className="bottom-remote-container">
            <div className="div-flex-column ">
              <div className="div-flex-row div-flex-center mt-1">
                <VscRemote className="icon-size-12" />
              </div>
            </div>
          </div>

          <div className="div-flex-row cg-5 div-align-center">
            <IoIosGitBranch className="icon-size-12" />
            <span className="text-xs">master*</span>
          </div>

          <div className="div-flex-row cg-5 div-align-center">
            <VscSync className="icon-size-12" />
            <div className="div-flex-row div-align-center">
              <span className="text-xs">0</span>
              <VscArrowDown className="icon-size-12" />
              <span className="text-xs">0</span>
              <VscArrowUp className="icon-size-12" />
            </div>
          </div>

          <div className="div-flex-row cg-5 div-align-center">
            <div className="div-flex-row cg-5 div-align-center">
              <VscError className="icon-size-12" />
              <span className="text-xs">0</span>
            </div>
            <div className="div-flex-row cg-5 div-align-center">
              <VscWarning className="icon-size-12" />
              <span className="text-xs">0</span>
            </div>
          </div>
        </div>

        <div className="div-flex-row cg-20 hp-10 cursor-pointer">
          <div className="div-flex-row cg-5 div-align-center">
            <span className="text-xs">Ln 53, Col 39</span>
          </div>
          <div className="div-flex-row cg-5 div-align-center">
            <span className="text-xs">Spaces: 2</span>
          </div>
          <div className="div-flex-row cg-5 div-align-center">
            <span className="text-xs">UTF-8</span>
          </div>
          <div className="div-flex-row cg-5 div-align-center">
            <span className="text-xs">CRLF</span>
          </div>
          <div className="div-flex-row cg-5 div-align-center">
            <VscJson className="icon-size-12" />
            <span className="text-xs">JavaScript</span>
          </div>
          <div className="div-flex-row cg-5 div-align-center">
            <VscCopilot className="icon-size-12" />
          </div>
          <div className="div-flex-row cg-5 div-align-center">
            <VscBellDot className="icon-size-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
