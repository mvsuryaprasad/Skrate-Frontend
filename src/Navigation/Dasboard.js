import { useState, useEffect, createContext } from "react";
import Content from "../Components/Content";
import "../Components/components.css";

export const Appcontext = createContext();

export function Dasboard() {
  const [data, setdata] = useState({
    full_name: "Average Joe",
    dashboard_stats: {
      profile_views: 50,
      mentorship_sessions: 5,
      jobs_applied: 3,
      skills_verified: 5,
    },
    upcoming_sessions: [
      {
        mentor_name: "Himanshu",
        timings: "14.00 - 15.00",
        date: "15/12/21",
        session_type: "Mentorship",
      },
      {
        mentor_name: "Vedant",
        timings: "12.00 - 13.00",
        date: "16/12/21",
        session_type: "Review",
      },
    ],
    job_postings: [
      {
        role: "Flutter Developer",
        organization_name: "Amazon",
        location: "Remote",
        date_posted: "12/12/2021",
      },
      {
        role: "React Developer",
        organization_name: "Facebook",
        location: "USA",
        date_posted: "11/12/2021",
      },
      {
        role: "C++ Developer",
        organization_name: "CodeNation",
        location: "Remote",
        date_posted: "10/12/2021",
      },
      {
        role: "Django Developer",
        organization_name: "Google",
        location: "Remote",
        date_posted: "10/12/2021",
      },
    ],
  });

  useEffect(() => {
    fetch("https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818")
      .then((response) => response.json())
      .then((d) => setdata(d));
  }, []);

  console.log(data);
  return (
    <div className="dasboard">
      <div>
        <center className="name">
          <h1>{data.full_name}</h1>
        </center>
      </div>
      <div className="dasboard-profile">
        <div className="profile">
          <div className="heading">Profile Views</div>
          <div className="heading-content">
            {data.dashboard_stats.profile_views}
          </div>
        </div>

        <div className="profile">
          <div className="heading">Mentorship Sessions</div>
          <div className="heading-content">
            {data.dashboard_stats.mentorship_sessions}
          </div>
        </div>

        <div className="profile">
          <div className="heading">Jobs Applied</div>
          <div className="heading-content">
            {data.dashboard_stats.jobs_applied}
          </div>
        </div>

        <div className="profile">
          <div className="heading">Skills Verified</div>
          <div className="heading-content">
            {data.dashboard_stats.skills_verified}
          </div>
        </div>
      </div>
      <Appcontext.Provider value={{ data, setdata }}>
        <Content></Content>
      </Appcontext.Provider>
    </div>
  );
}
