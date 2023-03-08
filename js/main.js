import { eventsList } from "./Events.js";

const today = new Date();
const eventContainer = document.getElementById("eventsContainer");
let count = 3;

const cardHtmlTemplate = (event) => {
  return `
    <li class="card">
    <h3 class="card-header">
    ${event.title}
    </h3>     
    <p>${event.date}</p>
    <p>${event.place}</p>
    </li>
    `;
};

const createUpcomingEvents = (count) => {
  const upcomingEvents = Object.values(eventsList)
    .filter((event) => new Date(event.date) >= today)
    .sort((event1, event2) => new Date(event1.date) - new Date(event2.date))
    .slice(0, count);

  eventContainer.innerHTML = "";

  upcomingEvents.forEach((event) => {
    const cardHtml = cardHtmlTemplate(event);
    eventContainer.innerHTML += cardHtml;
  });
};

createUpcomingEvents(3);

button.addEventListener("click", () => {
  count += 3;
  createUpcomingEvents(count);
});
