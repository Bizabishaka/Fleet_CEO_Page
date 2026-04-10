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

const fleetData = [
  { vehicle: "KDA 234X", driver: "John Mwangi", status: "Online", idle: 15, fuel: 90 },
  { vehicle: "KBC 112A", driver: "Peter Otieno", status: "Offline", idle: 45, fuel: 120 },
  { vehicle: "KDJ 908Y", driver: "Mary Wanjiku", status: "Online", idle: 5, fuel: 60 },
  { vehicle: "KAA 567B", driver: "James Kimani", status: "Online", idle: 30, fuel: 110 },
  { vehicle: "KBB 334C", driver: "David Ochieng", status: "Offline", idle: 60, fuel: 150 },
  { vehicle: "KCC 778D", driver: "Grace Njeri", status: "Online", idle: 10, fuel: 70 },
  { vehicle: "KDD 990E", driver: "Brian Kiptoo", status: "Online", idle: 20, fuel: 95 },
  { vehicle: "KEE 221F", driver: "Samuel Kariuki", status: "Offline", idle: 80, fuel: 140 },
  { vehicle: "KFF 443G", driver: "Esther Achieng", status: "Online", idle: 8, fuel: 65 },
  { vehicle: "KGG 665H", driver: "Daniel Mutua", status: "Online", idle: 12, fuel: 85 }
];

const tableBody = document.getElementById("fleetBody");

fleetData.forEach(v => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${v.vehicle}</td>
    <td>${v.driver}</td>
    <td class="${v.status === 'Online' ? 'status-online' : 'status-offline'}">
      ${v.status}
    </td>
    <td>${v.idle}</td>
  `;

  tableBody.appendChild(row);
});

