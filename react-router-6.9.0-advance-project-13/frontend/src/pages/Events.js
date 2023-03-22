import { defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Await } from "react-router-dom";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
      <Await resolve={events}>
        {(loadedEvents) => 
          <EventsList events={loadedEvents} />
        }
      </Await>
    </Suspense>
  );
}

export const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // return {isError: true, message: 'Could not fetch details!'}
    // throw new Response(
    //   JSON.stringify({ message: "Could not fetch event details!" }),
    //   { status: 500 }
    // );
    throw json({ message: "Could not fetch event details!" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export const loader = () => {
  return defer({ events: loadEvents() });
};

export default EventsPage;
