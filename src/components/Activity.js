import React from 'react';
import moment from 'moment';
import styles from '../styles/activity.module.css';

const Activity = (props) => {
  const { events } = props;
  let last_year = "";

  const github_activities = events.reduce((events, value, index) => {
    value.created_at = moment(value.created_at).format('MMM DD, YYYY');

    switch(value.type) {
      case "WatchEvent":
        value.action = value.payload.action.charAt(0).toUpperCase() + value.payload.action.slice(1) + " watching";
        break;
      case "PushEvent":
        value.action = "Made a push event on";
        break;
      case "IssueCommentEvent":
        value.action = value.payload.action.charAt(0).toUpperCase() + value.payload.action.slice(1) + " a comment on";
        break;
      case "ForkEvent":
        value.action = "Made a clone of";
        break;
      case "PullRequestEvent":
        value.action = value.payload.action.charAt(0).toUpperCase() + value.payload.action.slice(1) + " a pull request on";
        break;
      case "IssuesEvent":
        value.action = value.payload.action.charAt(0).toUpperCase() + value.payload.action.slice(1) + " an issue on";
        break;
      case "CreateEvent":
        value.action = "Created a " + value.payload.ref_type + " at";
        break;
      case "PullRequestReviewCommentEvent":
        value.action = "Reviewed a pull request on";
        break;
      case "DeleteEvent":
        value.action = "Deleted a " + value.payload.ref_type + " on";
        break;
      case "CommitCommentEvent":
        value.action = "Made a comment on a commit in";
        break;
    }
    if(value.created_at != last_year) {
      var tempArr = [];
      tempArr.push(value);
      events.push({'year': value.created_at, 'data': tempArr});
    } else {
      events[events.length-1].data.push(value);
    }
    last_year = value.created_at;

    return events;
  }, [])

  return(
    <div>
      {github_activities.map((event, i) => 
       <div className="event" key={i}>
         <h4 className={styles.date}>{event.year}</h4>
         {event.data.map((action, i) => 
           <p key={i}><a href={`https://github.com/${action.repo.name}`} target="_blank">{action.action} {action.repo.name}</a></p>
         )}
       </div>
       )}
    </div>
  )
}

export default Activity;
