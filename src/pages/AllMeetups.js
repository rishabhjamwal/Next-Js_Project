import { useState } from "react";
import MeetupsLists from "../components/meetups/MeetupLists";
const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetupsPage() {

  const[isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  fetch(
    'https://nextcourse-d592c-default-rtdb.firebaseio.com/meetups.json'
    )
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      setIsLoading(false);
      setLoadedMeetups(data);

    });

  return (
    <section>
      <h1>All meetups</h1>
      <MeetupsLists meetups = {DUMMY_DATA}/>
    </section>
  );
}

export default AllMeetupsPage;
