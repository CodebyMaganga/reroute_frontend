// sampleRoutes.js
export const sampleRoutes = [
  {
    id: "route-1",
    name: "Morning Commute",
    from: "Westlands, Nairobi",
    to: "Upper Hill, Nairobi",
    distance: "8.5 km",
    duration: "20 min",
    trafficLevel: "medium",
    isActive: true,
    coordinates: [
      [36.811, -1.268], // start (lng, lat)
      [36.820, -1.292], // waypoint
      [36.826, -1.300], // destination
    ],
  },
  {
    id: "route-2",
    name: "Evening Route",
    from: "Upper Hill, Nairobi",
    to: "Kilimani, Nairobi",
    distance: "5.2 km",
    duration: "15 min",
    trafficLevel: "high",
    isActive: false,
    coordinates: [
      [36.826, -1.300],
      [36.810, -1.290],
      [36.786, -1.292],
    ],
  },
  {
    id: "route-3",
    name: "Weekend Drive",
    from: "Nairobi CBD",
    to: "Karen, Nairobi",
    distance: "18.3 km",
    duration: "35 min",
    trafficLevel: "low",
    isActive: false,
    coordinates: [
      [36.8219, -1.2921],
      [36.7723, -1.3124],
      [36.7172, -1.3171],
    ],
  },
];
