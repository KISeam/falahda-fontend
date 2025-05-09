import React, { useState } from "react";
import Overview from "./Our Team Component/Overview";
import OurManagement from "./Our Team Component/OurManagement/OurManagement";
import SectionHeading from "../../Components/Shared/SectionHeading";
import Mentor from "./Our Team Component/Mentors/Mentor";
import MarketingAndOperation from "./Our Team Component/Marketing and Operation/MarketingAndOperation";
import CommunicationAndSale from "./Our Team Component/Communication and Sales/CommunicationAndSale";

const tabsData = [
  {
    key: "tab1",
    label: "Our Management",
    component: <OurManagement />,
  },
  {
    key: "tab2",
    label: "Mentors",
    component: <Mentor />,
  },
  {
    key: "tab3",
    label: "Marketing and Operation",
    component: <MarketingAndOperation />,
  },
  {
    key: "tab4",
    label: "Communication and Sales",
    component: <CommunicationAndSale />,
  },
];

const OurTeam = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="bg-[#ecfcfb]">
      <div className="lg:w-10/12 w-full mx-auto pt-10">
        <SectionHeading
          title={"Our Team"}
          description={
            "Our expert mentors have been contributing to making IT experts for the past 16 years. With their utmost dedication, we have been able to train more than 90,000 people who are currently working in several job sectors. All the mentors have the academic skills and job experience in the marketplace. They will be your guide in your journey to achieve a bright career."
          }
        />
      </div>

      <div className="w-9/12 mx-auto">
        <Overview />
      </div>

      <div className="mt-8">
        {/* Tab Headers */}
        <div role="tablist" className="tabs flex justify-center gap-5 flex-wrap work">
          {tabsData.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              className={`tab px-4 py-2 ${
                activeTab === tab.key
                  ? "fieldset-label btn rounded-md dark:border-gray-400 dark:shadow-none   bg-[#41bfb8] "
                  : "fieldset-label btn rounded-md dark:border-gray-400 dark:shadow-none bg-[#ecfcfb] border-gray-300"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="lg:w-9/12 w-11/12 mx-auto mt-6 p-6 bg-white rounded-lg  border border-gray-200">
          <div className="fade-in">
            {tabsData.find((tab) => tab.key === activeTab)?.component}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
