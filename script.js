// The next five lines simply add an input field in the top of the div with id "root"
bodyElem = document.querySelector('body')
const searchField = document.createElement("input");
searchField.type = "text";
searchField.placeholder = "your search term...";
bodyElem.prepend(searchField);

searchField.addEventListener("input", () => {
  console.log(searchField.value);
  document.getElementById("root").remove() // To delete div with id = "root"
  document.getElementById("footerId").remove(); // To delete the footer
  document.getElementById("Episodes").remove(); // To delete the text of the number of Episodes
  let newNode = document.createElement("div") // recreate div with id = "root"
  newNode.id = "root"
  document.body.append(newNode);
  setup();
  // Here I have to write a function that is similar to the makePageForEpisodes
  // I will call it makePageForEpisodesSearched
});

function setup() {
  const allEpisodes = getAllEpisodes();
  rootElem = document.getElementById("root");
  makePageForEpisodes(allEpisodes);

  // Footer
  let footer = document.createElement("footer"); // creates <footer>
  footer.id = "footerId";
  let body = document.querySelector("body"); // selects <body>
  body.appendChild(footer); // 'attaches' <footer> to <body>
  let footerText = document.createElement("span");
  footer.appendChild(footerText);
  footerText.innerText = "Data has (originally) come from "
  let footerLink = document.createElement("a");
  footer.appendChild(footerLink);
  // footerLink.setAttribute("href", "http://www.tvmaze.com") // This is an alternative way to do exactly the same with the line below (13)
  footerLink.href = "http://www.tvmaze.com"
  footerLink.innerText = "TV.maze"
}

function makePageForEpisodes(episodeList) {
  // const rootElem = document.getElementById("root");
  let totalEpisodes = 0; // ++ Added on 14 Feb 2023, 17.10pm
  let totalEpisodesDisplayed = 0; // ++ Added on 14 Feb 2023, 17.10pm
  episodeList.forEach(episode =>{ // ++ Added on 14 Feb 2023, 17.10pm
    totalEpisodes++; // ++ Added on 14 Feb 2023, 17.10pm
    // if (episode.name.includes(searchField.value) || episode.summary.includes(searchField.value)) { // ++ Added on 14 Feb 2023, 17.10pm
    //   totalEpisodesDisplayed++; // ++ Added on 14 Feb 2023, 17.10pm
    if (episode.name.toLowerCase().includes(searchField.value.toLowerCase()) || episode.summary.toLowerCase().includes(searchField.value.toLowerCase())) { // +++ Updated on 16 Feb 2023, 11.35am to inlcude case insensitivity
      totalEpisodesDisplayed++; // +++ Updated on 16 Feb 2023, 11.35am to inlcude case insensitivity
  let newDiv = document.createElement("div") // Creates a <div>
  rootElem.appendChild(newDiv); // Appends it to the div with "root" id
  newDiv.setAttribute("id", episode.id); // Adds "id" attribute to newDiv - gives it value of the id of the episode in the episodes.js file
  newDiv = document.getElementById(episode.id); // Makes newDiv more precise: from div to div with specific id
  let newHeading = document.createElement("h1"); // Creates an <h1> element
  newDiv.appendChild(newHeading); // Appends it to the div
  newHeading.innerText = episode.name // Changes the <h1> content from nothing to the "id" of episodeList[1]
  let seasonEpisodeNum = document.createElement("span");
  newDiv.appendChild(seasonEpisodeNum);
  seasonEpisodeNum.innerText = `S${episode.season.toString().padStart(2,"0")}E${episode.number.toString().padStart(2,"0")}`
  let brakeLine = document.createElement("br"); // This line and the next just add a <br>
  newDiv.appendChild(brakeLine); // so that the image is below the Season/Episode line
  let imageEpisode = document.createElement("img");
  imageEpisode.setAttribute("src", episode.image.medium) // Instead of the next two lines according to Alun...
  newDiv.appendChild(imageEpisode); // I could simply code imageEpisode.src = episode.image.medium
  imageEpisode.innerText = episode.summary
  rootElem.innerHTML += episode.summary;
  // Of course issues with S05E07 and S05E08 are still not solved
    }
  })
  console.log(totalEpisodes, totalEpisodesDisplayed)  // ++ Added on 14 Feb 2023, 17.10pm
  // How many episodes are displayed TEXT
  let numberOfEpisodesText = document.createElement("p");
  numberOfEpisodesText.id = "Episodes"
  // The next three lines are most likely optional
  if (totalEpisodesDisplayed === totalEpisodes) {
    numberOfEpisodesText.innerText = "Displaying All Episodes";
  } else {
  numberOfEpisodesText.innerText = `Displaying ${totalEpisodesDisplayed} out of ${totalEpisodes} episodes`;
  }
  searchField.after(numberOfEpisodesText); // Attaches numberOfEpisodesText (<p>) to <body>
  
}

window.onload = setup;