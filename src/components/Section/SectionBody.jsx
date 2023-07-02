import React, { useEffect } from "react";
import UserStatsCard from "./userStatsCard";
import CardContainerWrapper from "./CardContainerWrapper";
import ChapterWiseStatus from "./chapterWiseStatus";
import StatusChart from "./StatusChart";
import MonthlyTraining from "./MonthlyTraining";
import QuizPassingCard from "./QuizPassingCard";
import CompletionStats from "./CompletionStats";

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
        <MonthlyTraining />
        <QuizPassingCard />
        <CompletionStats />
      </CardContainerWrapper>
    </div>
  );
};

export default SectionBody;
