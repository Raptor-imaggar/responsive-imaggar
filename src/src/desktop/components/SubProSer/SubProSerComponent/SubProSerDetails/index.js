// SubProSerDetails.js

import React from "react";
import SubProSerComponentContent from "../../../../../../data/SubProSer/SubProSerData";
import "./SubProSerDetails.css";

const SubProSerDetails = () => {
  return (
    <div className="SubProSerDetails-main">
      <div className="SubProSerDetailsContentIntro-container">
        <h1 className="SubProSerDetailsContentIntro-heading">
          {SubProSerComponentContent.SubProSerDetailsIntro.heading}
        </h1>
        <p className="SubProSerDetailsContentIntro-paragraph SubProSer-details-text">
          {SubProSerComponentContent.SubProSerDetailsIntro.paragraph}
        </p>
      </div>
      {SubProSerComponentContent.SubProSerDetailsContent.map(
        (content, index) => (
          <div
            className={`SubProSer-details-row-fluid ${
              index % 2 === 0
                ? "SubProSer-details-odd"
                : "SubProSer-details-even"
            }`}
            key={index}
          >
            {index % 2 === 0 ? (
              <>
                <div className="SubProSer-details-col">
                  <div className="SubProSer-details-image-col">
                    <img src={content.imageUrl} alt={content.imageAlt} />
                  </div>
                </div>
                <div className="SubProSer-details-col">
                  <div className="SubProSer-details-text-col">
                    <p className="SubProSer-details-paragraph SubProSer-details-text">
                      {content.title}
                    </p>
                    <h1 className="SubProSer-details-text">
                      {content.heading}
                    </h1>
                    <p className="SubProSer-details-paragraph SubProSer-details-text">
                      {content.paragraph}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="SubProSer-details-col">
                  <div className="SubProSer-details-text-col">
                    <p className="SubProSer-details-paragraph SubProSer-details-text">
                      {content.title}
                    </p>
                    <h1 className="SubProSer-details-text">
                      {content.heading}
                    </h1>
                    <p className="SubProSer-details-paragraph SubProSer-details-text">
                      {content.paragraph}
                    </p>
                  </div>
                </div>
                <div className="SubProSer-details-col  ">
                  <div className="SubProSer-details-image-col">
                    <img src={content.imageUrl} alt={content.imageAlt} />
                  </div>
                </div>
              </>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default SubProSerDetails;
