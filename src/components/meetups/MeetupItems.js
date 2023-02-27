import classes from "./MeetupItems.module.css";
import Card from "../ui/card"

function MeetupItems(props) {
  return (
    <li className={classes.item}>
      <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div>
        <button className={classes.actions}>To Favorites</button>
      </div>
      </Card>
    </li>
  );
}
export default MeetupItems;
