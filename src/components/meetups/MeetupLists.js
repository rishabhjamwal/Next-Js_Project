import MeetupItems from "./MeetupItems";
import classes from "./MeetupLists.module.css";

function MeetupsLists(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItems
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}
export default MeetupsLists;
