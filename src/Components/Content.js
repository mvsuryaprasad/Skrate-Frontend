import { useContext, useState } from "react";
import { Appcontext } from "../Navigation/Dasboard";
import "./components.css";

export default function Content() {
  const { data, setdata } = useContext(Appcontext);
  const [sess, setsess] = useState(data.upcoming_sessions);
  const [pos, setpos] = useState(data.job_postings);
  const [count, setcount] = useState(1);

  const shufflesess = () => {
    const arr = [];
    const a = sess[0];
    const b = sess[1];
    setsess([b, a]);
  };

  const shufflepos = () => {
    let arr = pos;
    setpos([...arr.slice(count, arr.length), ...arr.slice(0, count)]);
    setcount(count + 1);
    if (count == arr.length - 1) setcount(1);
  };

  const reseteverything = () => {
    setsess(data.upcoming_sessions);
    setpos(data.job_postings);
    setcount(1);
  };

  console.log(pos);
  return (
    <div className="content">
      <div className="profbutton">
        <button onClick={reseteverything}>Profile</button>
      </div>
      <div className="sessions">
        <div className="sessions-name">
          <center>Sessions</center>
        </div>

        <div className="shuffle-button">
          <button onClick={shufflesess}>Shuffle</button>
        </div>
        <div className="session-block-main">
          {sess.map((x) => {
            return (
              <div className="session-block">
                <div className="session-content">
                  <div className="session-content-head">Date</div>
                  <div>{x.date}</div>
                </div>

                <div className="session-content">
                  <div className="session-content-head">Mentor Name</div>
                  <div>{x.mentor_name}</div>
                </div>

                <div className="session-content">
                  <div className="session-content-head">Session Type</div>
                  <div>{x.session_type}</div>
                </div>

                <div className="session-content">
                  <div className="session-content-head">Session timings</div>
                  <div>{x.timings}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="sessions-name">
          <center>Job postings</center>
        </div>
        <div className="shuffle-button">
        <button onClick={shufflepos}>Shuffle</button>
        </div>
     {/*               <div>{x.date_posted}</div>
              <div>{x.location}</div>
              <div>{x.organization_name}</div>
              <div>{x.role} */}
        {pos.map((x) => {
          return (
            <div className="session-block">
            <div className="session-content">
              <div className="session-content-head">Date Posted</div>
              <div>{x.date_posted}</div>
            </div>

            <div className="session-content">
              <div className="session-content-head">Location</div>
              <div>{x.location}</div>
            </div>

            <div className="session-content">
              <div className="session-content-head">Organization Name</div>
              <div>{x.organization_name}</div>
            </div>

            <div className="session-content">
              <div className="session-content-head">Timings</div>
              <div>{x.role}</div>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}
