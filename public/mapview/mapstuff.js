var map = L.map("map").setView({ lon: 0, lat: 0 }, 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale({ imperial: true, metric: true }).addTo(map);

const populateMap = async () => {
  let coordCount = 0;
  const res = await fetch("http://192.168.1.198:3838/api/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const rawdata = await res.json();

  for (const protest of rawdata) {
    coords = protest["loc"]["coordinates"];
    if (coords.length == 2) {
      //TODO: Check for proper coordinate format
      //Some of the coordinates have garbage input
      // console.log(protest);
      coordCount = coordCount + 1;
      L.marker({ lat: coords[0], lon: coords[1] })
        .bindPopup("<h1>lol</h1>")
        .addTo(map);
    }
  }
  console.log(coordCount);
};

populateMap();
