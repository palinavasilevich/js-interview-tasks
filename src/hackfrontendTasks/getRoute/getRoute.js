/**
 * 📝 Построение маршрута
 *
 * У нас есть набор билетов вида:
 *   [
 *       { from: 'London', to: 'Moscow' },
 *       { from: 'NY', to: 'London' },
 *       { from: 'Moscow', to: 'SPb' },
 *       ...
 *   ]
 *   Из этих билетов можно построить единственный, неразрывный маршрут. 
 *   Петель и повторов в маршруте нет. Нужно написать программу,
 *   которая возвращает эти же объекты билетов в порядке следования по маршруту.
 *
 * @param {} tickets 
 * @returns {} 
 *
 * @example
    Input 1: 
    [
      { from: "London", to: "Moscow" },
      { from: "NY", to: "London" },
      { from: "Moscow", to: "SPb" }
    ]
    Output 1: 
    [
      { from: "NY", to: "London" },
      { from: "London", to: "Moscow" },
      { from: "Moscow", to: "SPb" }
    ]

    Input 2: 
    [
        { from: "London", to: "Moscow" },
        { from: "Tokio", to: "NY" },
        { from: "NY", to: "London" },
        { from: "SPb", to: "Berlin" },
        { from: "Moscow", to: "SPb" }
    ]
    Output 2: 
    [
      { from: "Tokio", to: "NY" },
      { from: "NY", to: "London" },
      { from: "London", to: "Moscow" },
      { from: "Moscow", to: "SPb" },
      { from: "SPb", to: "Berlin" }
    ]


    Input 3: 
    [
      { from: "C", to: "D" },
      { from: "B", to: "C" },
      { from: "A", to: "B" },
      { from: "D", to: "E" }
    ]
    Output 3: 
    [
      { from: "A", to: "B" },
      { from: "B", to: "C" },
      { from: "C", to: "D" },
      { from: "D", to: "E" }
    ]
 */

// export function getRoute(tickets) {
//   let result = [];

//   for (const ticket of tickets) {
//     let restTickets = tickets.filter((t) => t.from !== ticket.from);
//     let nextTicket = restTickets.find((t) => ticket.to === t.from);

//     result.push(ticket);

//     if (nextTicket) result.push(nextTicket);

//     while (nextTicket && restTickets.length) {
//       restTickets = restTickets.filter((t) => t.from !== nextTicket.from);
//       nextTicket = restTickets.find((t) => nextTicket.to === t.from);

//       if (nextTicket && restTickets.length) {
//         result.push(nextTicket);
//       }
//     }

//     if (result.length === tickets.length) break;

//     result = [];
//   }

//   return result;
// }

export function getRoute(tickets) {
  if (!tickets || tickets.length === 0) return [];

  const fromMap = new Map();

  for (const ticket of tickets) {
    fromMap.set(ticket.from, ticket);
  }

  const destinations = new Set(tickets.map((t) => t.to));
  let startCity = tickets.find((t) => !destinations.has(t.from)).from;

  const route = [];

  while (fromMap.has(startCity)) {
    const currentTicket = fromMap.get(startCity);
    route.push(currentTicket);

    startCity = currentTicket.to;
  }

  return route;
}

const result = getRoute([{ from: "London", to: "Moscow" }]);

console.log(result);
