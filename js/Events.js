export class Event {
  constructor(date, place, title) {
    this.date = date;
    this.place = place;
    this.title = title;
  }
}
//insérez les dates au format YYYY-MM-DD
export const eventsList = {
  event12: new Event("2022-04-01", "asdf", "sdff sur JavaScript"),
  event1: new Event("2023-04-01", "Paris", "Conférence sur JavaScript"),
  event2: new Event("2023-04-05", "Lyon", "Atelier sur React"),
  event3: new Event("2023-04-10", "Nantes", "Meetup sur Vue.js"),
  event4: new Event("2023-04-15", "Marseille", "Hackathon sur Node.js"),
  event5: new Event("2023-04-20", "Toulouse", "Séminaire sur Angular"),
  event14: new Event("2023-03-11", "Paris", "Conférence sur les choux"),
  event6: new Event("2023-04-25", "Bordeaux", "Conférence sur TypeScript"),
  event7: new Event("2023-05-01", "Lille", "Atelier sur React Native"),
  event8: new Event("2023-05-05", "Strasbourg", "Hackathon sur Django"),
  event9: new Event("2023-05-10", "Rennes", "Meetup sur GraphQL"),
  event10: new Event("2023-05-15", "Nice", "Conférence sur AngularJS"),
};
