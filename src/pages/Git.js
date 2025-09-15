import React, { useEffect } from "react";
import "styles/file.css";
import "styles/search.css";
import "styles/git.css";
import { Col, Row } from "react-bootstrap";
import { VscEllipsis, VscChevronDown, VscCheck } from "react-icons/vsc";
import useMediaQuery from "utils/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import {
  getGithubProfileBasicData,
  getStarredReposList,
} from "../redux/Actions/githubActions";
import { GoLocation } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { ReactComponent as AndroidIcon } from "images/icons/android.svg";
import { ReactComponent as BootstrapIcon } from "images/icons/bootstrap.svg";
import { ReactComponent as CLanguageIcon } from "images/icons/c.svg";
import { ReactComponent as CSSIcon } from "images/icons/css.svg";
import { ReactComponent as FirebaseIcon } from "images/icons/firebase.svg";
import { ReactComponent as GitIcon } from "images/icons/git.svg";
import { ReactComponent as JavaIcon } from "images/icons/java.svg";
import { ReactComponent as JavaScriptIcon } from "images/icons/js.svg";
import { ReactComponent as LinuxIcon } from "images/icons/linux.svg";
import { ReactComponent as ReactLogoIcon } from "images/icons/react.svg";
import { GoStar } from "react-icons/go";
import { getLanguageColor } from "utils/getLanguageColor";

export default function Git() {
  const isMobile = useMediaQuery("(max-width: 574px)");
  const dispatch = useDispatch();

  const githubReducer = useSelector((state) => state.githubReducer);
  const { githubProfileBasicData, githubStarredReposList } = githubReducer;

  useEffect(() => {
    dispatch(getGithubProfileBasicData("ajay-nishad25"));
    dispatch(getStarredReposList("ajay-nishad25"));
  }, [dispatch]);

  const filteredStarredRepoList = githubStarredReposList?.filter(
    (item) => item?.owner?.login === "ajay-nishad25",
  );

  function handleRepoLink(url) {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <>
      <title>Ajay Nishad | VSCode Portfolio – GitHub Projects</title>
      <meta
        name="description"
        content="Showcasing Ajay Nishad’s GitHub repositories, open-source projects, and live demos in this VSCode-inspired React portfolio."
      />
      <meta
        name="keywords"
        content="VSCode portfolio, Ajay Nishad, React developer, GitHub projects, open source, live demos, portfolio"
      />
      <link
        rel="canonical"
        href="https://ajay-nishad25-portfolio.vercel.app/git"
      />

      <meta
        property="og:title"
        content="Ajay Nishad | VSCode Portfolio – GitHub Projects"
      />
      <meta
        property="og:description"
        content="View open-source projects and live demos by Ajay Nishad on GitHub, showcased in a VSCode-themed React portfolio."
      />
      <meta
        property="og:url"
        content="https://ajay-nishad25-portfolio.vercel.app/git"
      />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Ajay Nishad | VSCode Portfolio – GitHub Projects"
      />
      <meta
        name="twitter:description"
        content="Open-source projects and live demos by Ajay Nishad in this React portfolio."
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
                    <span className="text-sm text-grey">SOURCE CONTROL</span>
                  </div>
                  <div className="div-flex-row cg-5 div-align-center">
                    <VscEllipsis className="icon-size-14" color="grey" />
                  </div>
                </div>
                <div className="div-flex-column">
                  <div className="div-flex-row w-100 vp-5 cg-5">
                    <VscChevronDown
                      className={`icon-size-14 open-arrow-downward `}
                    />
                    <div className="div-flex-column w-100 rg-5">
                      <span className="text-sm  text-grey">CHANGES</span>
                      <div className="div-flex-column w-100 rg-5">
                        <div className="search-input-container">
                          <input
                            type="text"
                            className="search-input grey-placeholder"
                            placeholder='Message (Ctrl+Enter to commit on "git-page")'
                          />
                        </div>
                        <div className="commit-button-container">
                          <Row>
                            <Col
                              xxl={10}
                              lg={10}
                              md={10}
                              sm={10}
                              xs={10}
                              className=" div-flex-column div-flex-center white-border-right"
                            >
                              <div className="div-flex-row div-flex-center div-align-center cg-5">
                                <VscCheck className={`icon-size-14`} />
                                <span className="text-sm text-white">
                                  Commit
                                </span>
                              </div>
                            </Col>
                            <Col
                              xxl={2}
                              lg={2}
                              md={2}
                              sm={2}
                              xs={2}
                              className=" div-flex-column div-flex-center"
                            >
                              <VscChevronDown
                                className={`icon-size-14 open-arrow-downward `}
                              />
                            </Col>
                          </Row>
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
            className="github-profile-detail-section"
          >
            <Row className="py-3 px-3 ">
              <Col xxl={3} xl={3} lg={3} md={5} sm={12}>
                <div className="profile-img-wrapper">
                  <img
                    src={githubProfileBasicData?.avatar_url}
                    alt={
                      githubProfileBasicData?.name ||
                      githubProfileBasicData?.login
                    }
                    className="profile-image rounded-circle"
                  />
                </div>
                <div className="div-flex-column rg-20 vp-15">
                  <div className="div-flex-column">
                    <span className="text-xxl text-grey text-semi-bold">
                      {githubProfileBasicData?.name}
                    </span>
                    <span className="text-md text-grey">
                      {githubProfileBasicData?.login} · he/him
                    </span>
                  </div>
                  <span className="text-md text-grey">
                    {githubProfileBasicData?.bio}
                  </span>
                  <div className="div-flex-column rg-5">
                    <div className="div-flex-row div-align-center cg-5">
                      <GoPeople color="grey" />
                      <span className="text-md text-grey">
                        <strong>{githubProfileBasicData?.followers}</strong>{" "}
                        followers ·{" "}
                        <strong>{githubProfileBasicData?.following}</strong>{" "}
                        following
                      </span>
                    </div>
                    <div className="div-flex-row div-align-center cg-5">
                      <GoLocation color="grey" />
                      <span className="text-md text-grey">
                        {githubProfileBasicData?.location}
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                xxl={9}
                xl={9}
                lg={9}
                md={7}
                sm={12}
                className="profile-main"
              >
                <Col
                  xxl={12}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  className="profile-main"
                >
                  <div className="common-border-white hp-20 ">
                    <div className="div-flex-row div-flex-center vp-20 grey-border-bottom">
                      <span className="text-xxl text-grey text-semi-bold">
                        Hi{" "}
                        <span role="img" aria-label="wave">
                          👋
                        </span>
                        , I'm {githubProfileBasicData?.name}
                      </span>
                    </div>

                    <div className="div-flex-row ">
                      <span className="text-lg text-semi-bold text-grey vp-10">
                        {githubProfileBasicData?.bio}
                      </span>
                    </div>

                    <div className="div-flex-column  ">
                      <div className="div-flex-row">
                        <span className="text-md text-semi-bold text-grey vp-10">
                          Languages and Tools:
                        </span>
                      </div>
                      <div className="div-flex-row cg-10 vp-20">
                        <AndroidIcon className="icon-size-35" />
                        <BootstrapIcon className="icon-size-35" />
                        <CLanguageIcon className="icon-size-35" />
                        <CSSIcon className="icon-size-35" />
                        <FirebaseIcon className="icon-size-35" />
                        <GitIcon className="icon-size-35" />
                        <JavaIcon className="icon-size-35" />
                        <JavaScriptIcon className="icon-size-35" />
                        <LinuxIcon className="icon-size-35" />
                        <ReactLogoIcon className="icon-size-35" />
                      </div>
                    </div>
                  </div>
                </Col>
                <div className="div-flex-row vp-10">
                  <span className="text-md text-semi-bold text-grey">
                    Popular repositories
                  </span>
                </div>
                <Row className="g-3">
                  {filteredStarredRepoList?.map((repoObj) => {
                    return (
                      <Col
                        xxl={6}
                        xl={6}
                        lg={6}
                        md={12}
                        sm={12}
                        xs={12}
                        key={repoObj?.id}
                      >
                        <div className="div-flex-column div-flex-center common-border-white hp-10">
                          <div className="div-flex-column vp-10">
                            <div className="div-flex-row div-space-between">
                              <span
                                className="text-md text-semi-bold text-blue cursor-pointer"
                                onClick={() =>
                                  handleRepoLink(repoObj?.html_url)
                                }
                              >
                                {repoObj.name}
                              </span>
                              <span className="text-sm text-semi-bold blank-pill text-grey">
                                {repoObj.private ? "Private" : "Public"}
                              </span>
                            </div>
                            <div className="div-flex-column vp-10">
                              <span className="text-sm text-grey">
                                {repoObj.description ||
                                  "No description available"}
                              </span>
                            </div>
                            <div className="div-flex-row cg-20">
                              <div className="div-flex-row div-align-center cg-5">
                                <span
                                  className="circle-span"
                                  style={{
                                    backgroundColor: getLanguageColor(
                                      repoObj?.language,
                                    ),
                                  }}
                                />
                                <span className="text-sm text-semi-bold text-grey">
                                  {repoObj?.language || "N/A"}
                                </span>
                              </div>
                              <span className="text-sm text-semi-bold text-grey div-flex-row div-align-center cg-5 ">
                                <GoStar className="icon-size-14" />
                                {repoObj?.stargazers_count ?? 0}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}
