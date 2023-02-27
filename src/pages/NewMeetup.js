import { useHistory} from "react-router-dom";
import NewMeetupsForm from "../components/meetups/NewMeetupForm";
function NewMeetupsPage() {
    const history = useHistory()

  function onAddMeetupHandler(meetupData) {
    fetch('https://nextcourse-d592c-default-rtdb.firebaseio.com/meetups.json', {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json" },
    }).then(()=>{
        history.replace('/');
    });
    
  }

  return (
    <section>
      <h1>Add New Meetups</h1>
      <NewMeetupsForm onAddMeetup = {onAddMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
