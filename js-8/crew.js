const id = new URLSearchParams(window.location.search).get("id");

async function getShowData(id) {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await response.json();
  return show;
}

async function getShowCrew(id) {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}/crew`);
  const crew = await response.json();
  return crew;
}

function populateCrew(crew) {
  const crewContainer = document.getElementById("crew");
  const crewTitle = document.getElementById("crew-title");
  crewTitle.innerText = "Crew";

  crew.forEach((membr) => {
    const crewDivElement = document.createElement("div");
    crewDivElement.classList.add("crew-membr");
    crewDivElement.innerHTML = `
      <p><strong>Name:</strong> ${membr.person.name}</p>
      <p><strong>Role:</strong> ${membr.type}</p>
    `;
    crewContainer.appendChild(crewDivElement);
    
  });
  
}
