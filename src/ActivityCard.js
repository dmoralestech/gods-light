import React from 'react';
import classNames from 'classnames';
import './ActivityCard.css';


const ActivityCard = ({ date, day, type, details, location, time }) => {
  return (
    <div className="activity-card">
      <div className={classNames("activity-card-header",  { "activity-card-type-mwg":  type === "MWG" }, { "activity-card-type-other":  type !== "MWG" })}>
        <div className="activity-card-date">{date} ({day})</div>
        <div className="activity-card-type">{type}</div>
      </div>
      <div className="activity-card-details">{details}</div>
      <div className="activity-card-header-body">
        {location && <div className="activity-card-location">{location}</div>}
        {type && <div className="activity-card-time">{time}</div>}
      </div>
    </div>
  )
};

export default ActivityCard;
