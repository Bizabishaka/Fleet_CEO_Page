const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["KDA 234X", "KBC 112A", "KDJ 908Y"],
    datasets: [
      {
        label: "Vehicle Mileage",
        data: [3200, 2800, 1950],
        borderWidth: 1,
      },
    ],
  },
});

const fuel = document.getElementById("fuelChart");

new Chart(fuel, {
  type: "bar",
  data: {
    labels: ["KDA 234X", "KBC 112A", "KDJ 908Y"],
    datasets: [
      {
        label: "Fuel Used (Litres)",
        data: [900, 750, 620],
        borderWidth: 1,
      },
    ],
  },
});
