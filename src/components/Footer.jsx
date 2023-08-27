import React from "react";
import useColor from "./../hooks/useColor";
import Tooltip from "@mui/material/Tooltip";
function Footer() {
  const { BRAND_COLOR } = useColor();
  return (
    <footer
      className={`text-center text-lg-start text-white bg-${BRAND_COLOR}`}
    >
      <section className="d-flex justify-content-between align-items-center pt-4 px-4">
        <span>Get connected with me on social networks:</span>

        <div>
          <Tooltip placement="top" title="Github" arrow>
            <a href="https://github.com/world-of-delcy">
              <i className="fa-brands fa-github p-2 fs-4 text-white" />
            </a>
          </Tooltip>
          <Tooltip placement="top" title="Gmail" arrow>
            <a href="mailto:delcy03122001@gmail.com">
              <i className="fa-solid fa-envelope  p-2 fs-4 text-white" />
            </a>
          </Tooltip>
        </div>
      </section>

      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
              <h6 className="text-uppercase fw-bolder">Pick Some Pic...</h6>
              <hr
                className="mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#fff",
                  height: "2px",
                }}
              />
              <p>
                This is an open source project. You can find the Source Code
                on&nbsp;
                <a
                  href="https://github.com/world-of-delcy/pick-some-pic"
                  style={{ textDecoration: "underline", color: "#fff" }}
                >
                  Github
                </a>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto pb-4">
              <h6 className="text-uppercase fw-bolder">Projects</h6>
              <hr
                className="mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#fff",
                  height: "2px",
                }}
              />
              <p>
                <a
                  href="https://github.com/world-of-delcy/base-calculator"
                  className="link text-white"
                >
                  Base Calculator
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0">
              <h6 className="text-uppercase fw-bolder">Contacts</h6>
              <hr
                className="mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#fff",
                  height: "2px",
                }}
              />
              <p>
                <i className="fa-solid fa-home"></i>&nbsp;Chennai, TamilNadu
              </p>
              <p>
                <i className="fa-solid fa-envelope"></i>&nbsp;
                delcy03122001@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr
        className="m-0 mb-1"
        style={{
          width: "100vw",
          backgroundColor: "#fff",
          height: "1px",
        }}
      />
      <div className="text-center pb-2">@No Copyrights Reserved</div>
    </footer>
  );
}

export default Footer;
