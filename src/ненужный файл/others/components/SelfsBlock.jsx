import React from "react";

export const SelfsBlock = () => {
  return (
    <div className="container">
      <div className="container__title">
        <p>CASE STUDIES</p>
        <h1>Latest Works</h1>
      </div>

      <div className="container__first-block">
        <div className="text01">
          <h2>01</h2>
        </div>
        <div className="underblock">
          <div className="blueBlock"></div>
        </div>
        <div className="frbtext">
          <h1>Cerasa Redesign</h1>
          <p>Leader in bathroom furniture since 1983.</p>
          <div className="btnBox">
            <button className="secondBtn">
              <span>Case Study</span>
              <svg
                width="15"
                height="15"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
