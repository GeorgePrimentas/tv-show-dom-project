//You can edit ALL of the code here
// function setup() {
//   const allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);
// }

// function makePageForEpisodes(episodeList) {
//   const rootElem = document.getElementById("root");
//   rootElem.textContent = `Got ${episodeList.length} episode(s)`;
// }

// window.onload = setup;




function setup() {
  const allEpisodes = getAllEpisodes();
      // console.log(allEpisodes) // New line
      console.log(allEpisodes[0])// New line
  makePageForEpisodes(allEpisodes);
  let footer = document.createElement("footer");
  let body = document.querySelector("body");
  body.appendChild(footer);
  let footerText = document.createElement("span");
  footer.appendChild(footerText);
  footerText.innerText = "Data has (originally) come from "
  let footerLink = document.createElement("a");
  footer.appendChild(footerLink);
  footerLink.setAttribute("href", "http://www.tvmaze.com")
  footerLink.innerText = "TV.maze"
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`; // This was a means
  // of test so it should be deleted

  // create div and append to root
  let newDiv = document.createElement("div") // Creates a <div>
  rootElem.appendChild(newDiv); // Appends it to the div with "root" id
  newDiv.setAttribute("id", "1"); // Adds "id" attribute to newDiv - gives it value of "1"
  newDiv = document.getElementById(1); // Makes newDiv more precise: from div to div with specific id
  let newHeading = document.createElement("h1"); // Creates an <h1> element
  newDiv.appendChild(newHeading); // Appends it to the div
  newHeading.innerText = episodeList[0].id // Changes the <h1> content from nothing to the "id" of episodeList[1]
  // Just for the shake of it I will add a new line with the runtime of it
  let runTime = document.createElement("span"); // Creates a <span> element
  newDiv.appendChild(runTime); // Appends it to the div
  runTime.innerText = episodeList[0].runtime; // Changes the <span> content from nothing to the "runtime" of episodeList[1]
  // So far so good
  // Now, let me check if I can do this in iteration
  for (i=0; i < 3; i++){
     let newDiv = document.createElement("div") // Creates a <div>
  rootElem.appendChild(newDiv); // Appends it to the div with "root" id
  newDiv.setAttribute("id", i); // Adds "id" attribute to newDiv - gives it value of "1"
  newDiv = document.getElementById(i); // Makes newDiv more precise: from div to div with specific id
  let newHeading = document.createElement("h1"); // Creates an <h1> element
  newDiv.appendChild(newHeading); // Appends it to the div
  newHeading.innerText = episodeList[i].id // Changes the <h1> content from nothing to the "id" of episodeList[1]
  console.log(episodeList[i].id)
  // Just for the shake of it I will add a new line with the runtime of it
  let runTime = document.createElement("span"); // Creates a <span> element
  newDiv.appendChild(runTime); // Appends it to the div
  runTime.innerText = episodeList[i].runtime; // Changes the <span> content from nothing to the "runtime" of episodeList[1]
  // It worked! NOT REALLY Something really funny goes on! On the actual page first we see 4953
  // And then 4952!!!
  }
  // // Now changing the for loop with forEach method
  //   episodeList.forEach(episode =>{
  //    let newDiv = document.createElement("div") // Creates a <div>
  // rootElem.appendChild(newDiv); // Appends it to the div with "root" id
  // newDiv.setAttribute("id", episode.id); // Adds "id" attribute to newDiv - gives it value of "1"
  // newDiv = document.getElementById(episode.id); // Makes newDiv more precise: from div to div with specific id
  // let newHeading = document.createElement("h1"); // Creates an <h1> element
  // newDiv.appendChild(newHeading); // Appends it to the div
  // newHeading.innerText = episode.id // Changes the <h1> content from nothing to the "id" of episodeList[1]
  // // Just for the shake of it I will add a new line with the runtime of it
  // let runTime = document.createElement("span"); // Creates a <span> element
  // newDiv.appendChild(runTime); // Appends it to the div
  // runTime.innerText = episode.runtime; // Changes the <span> content from nothing to the "runtime" of episodeList[1]
  //   })

  // And now the real thing!
    episodeList.forEach(episode =>{
     let newDiv = document.createElement("div") // Creates a <div>
  rootElem.appendChild(newDiv); // Appends it to the div with "root" id
  newDiv.setAttribute("id", episode.id); // Adds "id" attribute to newDiv - gives it value of "1"
  newDiv = document.getElementById(episode.id); // Makes newDiv more precise: from div to div with specific id
  let newHeading = document.createElement("h1"); // Creates an <h1> element
  newDiv.appendChild(newHeading); // Appends it to the div
  newHeading.innerText = episode.name // Changes the <h1> content from nothing to the "id" of episodeList[1]
  // Just for the shake of it I will add a new line with the runtime of it
  // let seasonNumber = document.createElement("span"); // Creates a <span> element
  // newDiv.appendChild(seasonNumber); // Appends it to the div
  // seasonNumber.innerText = episode.season; // Changes the <span> content from nothing to the "season" of the episode
  // Season and Episode in one line
  let seasonEpisodeNum = document.createElement("span");
  newDiv.appendChild(seasonEpisodeNum);
  seasonEpisodeNum.innerText = `Season: ${episode.season} | Episode: ${episode.number}`

    })


}

function test1() {
  console.log(allEpisodes)
}

window.onload = setup;
