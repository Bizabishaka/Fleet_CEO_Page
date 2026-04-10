function toggle(id){
  const el = document.getElementById(id);
  el.style.display = el.style.display === "block" ? "none" : "block";
}

const fleetData = [
  { vehicle: "KDA 234X", driver: "John Mwangi", type: "Movable", status: "Online", idle: 15, mileage: 3200, fuel: 900, avgSpeed: 50 },
  { vehicle: "KBC 112A", driver: "Peter Otieno", type: "Movable", status: "Offline", idle: 45, mileage: 2800, fuel: 750, avgSpeed: 45 },
  { vehicle: "KDJ 908Y", driver: "Mary Wanjiku", type: "Movable", status: "Online", idle: 5, mileage: 1950, fuel: 620, avgSpeed: 55 },
  { vehicle: "KAA 567B", driver: "James Kimani", type: "Movable", status: "Online", idle: 30, mileage: 3100, fuel: 880, avgSpeed: 50 },
  { vehicle: "KBB 334C", driver: "David Ochieng", type: "Movable", status: "Offline", idle: 60, mileage: 2700, fuel: 820, avgSpeed: 40 },
  { vehicle: "Depot Nairobi", driver: "-", type: "Immovable", status: "-", idle: 0, mileage: 0, fuel: 0, avgSpeed: 0 }
];

fleetData.forEach(v => {
  if(v.type === "Movable"){
    v.efficiency = (v.mileage / v.fuel).toFixed(2);
    v.fuelLoss = ((v.idle / 60) * 2.5).toFixed(2);
  }
});

const movable = fleetData.filter(v=>v.type==="Movable");
const immovable = fleetData.filter(v=>v.type==="Immovable");
const online = fleetData.filter(v=>v.status==="Online");
const offline = fleetData.filter(v=>v.status==="Offline");

document.getElementById("assetStats").innerHTML = `
  <strong>${fleetData.length}</strong><br>Total Assets
`;

document.getElementById("onlineStats").innerHTML = `
  <strong>${online.length}</strong><br>Online
`;

document.getElementById("offlineStats").innerHTML = `
  <strong>${offline.length}</strong><br>Offline
`;

document.getElementById("movableStats").innerHTML = `
  <strong>${movable.length}</strong><br>Movable
`;

document.getElementById("immovableStats").innerHTML = `
  <strong>${immovable.length}</strong><br>Immovable
`;

function renderTable(data){
  const body = document.getElementById("fleetBody");
  body.innerHTML = "";

  data.filter(v=>v.type==="Movable").forEach(v=>{
    body.innerHTML += `
      <tr>
        <td>${v.vehicle}</td>
        <td>${v.driver}</td>
        <td class="${v.status==="Online"?"status-online":"status-offline"}">${v.status}</td>
        <td>${v.idle}</td>
      </tr>
    `;
  });
}

renderTable(fleetData);


document.getElementById("driverFilter").addEventListener("input", e=>{
  const val = e.target.value.toLowerCase();
  const filtered = fleetData.filter(v =>
    v.driver.toLowerCase().includes(val)
  );
  renderTable(filtered);
});


const movableData = fleetData.filter(v=>v.type==="Movable");

new Chart(document.getElementById("myChart"), {
  type: "bar",
  data: {
    labels: movableData.map(v=>v.vehicle),
    datasets: [{
      label: "Mileage (km)",
      data: movableData.map(v=>v.mileage)
    }]
  }
});

new Chart(document.getElementById("fuelChart"), {
  type: "bar",
  data: {
    labels: movableData.map(v=>v.vehicle),
    datasets: [{
      label: "Fuel (L)",
      data: movableData.map(v=>v.fuel)
    }]
  }
});


const worst = [...movableData]
  .sort((a,b)=>b.fuelLoss - a.fuelLoss)
  .slice(0,5);

const insightBody = document.getElementById("insightBody");

worst.forEach(v => {
  insightBody.innerHTML += `
    <tr>
      <td>${v.vehicle}</td>
      <td>${v.fuelLoss}</td>
      <td>${v.efficiency}</td>
      <td class="${v.status === "Online" ? "status-online" : "status-offline"}">
        ${v.status}
      </td>
    </tr>
  `;
});