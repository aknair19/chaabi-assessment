import React, { useEffect } from "react";
import UserStatsCard from "./userStatsCard";
import CardContainerWrapper from "./CardContainerWrapper";
import ChapterWiseStatus from "./chapterWiseStatus";
import StatusChart from "./StatusChart";

const SectionBody = () => {
  return (
    <div className="section-body-container">
      <CardContainerWrapper>
        <UserStatsCard />
      </CardContainerWrapper>
      <CardContainerWrapper>
        <ChapterWiseStatus />
        <StatusChart />
      </CardContainerWrapper>
      <CardContainerWrapper>
        
      </CardContainerWrapper>
    </div>
  );
};

export default SectionBody;
