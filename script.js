function setup() {
  const allEpisodes = getAllEpisodes();
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
  // The next four lines simply add an input field in the top of the div with id "root"
  let searchField = document.createElement("input");
  searchField.setAttribute("placeholder", "your search term...")
  searchField.setAttribute("type", "text");
  rootElem.appendChild(searchField);
  // On the next few lines I will try to add an Event Listener to the <input> element
  // 05 Feb 2023 - 21.21pm
  // function keystroke() {
  //   document.querySelector("input").addEventListener("oninput", () => {
  //     alert("Hello");
  //   });
  // }

  // The next line listens (?) to the input field
  // Perhaps a keystroke eventListener?
  let inputValue = document.querySelector("input").value;
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`; // This was a means
  // of test so it should be deleted

  // // create div and append to root
  // let newDiv = document.createElement("div") // Creates a <div>
  // rootElem.appendChild(newDiv); // Appends it to the div with "root" id
  // newDiv.setAttribute("id", "1"); // Adds "id" attribute to newDiv - gives it value of "1"
  // newDiv = document.getElementById(1); // Makes newDiv more precise: from div to div with specific id
  // let newHeading = document.createElement("h1"); // Creates an <h1> element
  // newDiv.appendChild(newHeading); // Appends it to the div
  // newHeading.innerText = episodeList[0].id // Changes the <h1> content from nothing to the "id" of episodeList[1]
  // // Just for the shake of it I will add a new line with the runtime of it
  // let runTime = document.createElement("span"); // Creates a <span> element
  // newDiv.appendChild(runTime); // Appends it to the div
  // runTime.innerText = episodeList[0].runtime; // Changes the <span> content from nothing to the "runtime" of episodeList[1]
  // // So far so good
  // // Now, let me check if I can do this in iteration
  // for (i=0; i < 3; i++){
  //    let newDiv = document.createElement("div") // Creates a <div>
  // rootElem.appendChild(newDiv); // Appends it to the div with "root" id
  // newDiv.setAttribute("id", i); // Adds "id" attribute to newDiv - gives it value of "1"
  // newDiv = document.getElementById(i); // Makes newDiv more precise: from div to div with specific id
  // let newHeading = document.createElement("h1"); // Creates an <h1> element
  // newDiv.appendChild(newHeading); // Appends it to the div
  // newHeading.innerText = episodeList[i].id // Changes the <h1> content from nothing to the "id" of episodeList[1]
  // console.log(episodeList[i].id)
  // // Just for the shake of it I will add a new line with the runtime of it
  // let runTime = document.createElement("span"); // Creates a <span> element
  // newDiv.appendChild(runTime); // Appends it to the div
  // runTime.innerText = episodeList[i].runtime; // Changes the <span> content from nothing to the "runtime" of episodeList[1]
  // }
  // // It worked! NOT REALLY Something really funny goes on! On the actual page first we see 4953
  // // And then 4952!!!
 
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
  let seasonEpisodeNum = document.createElement("span");
  newDiv.appendChild(seasonEpisodeNum);
  seasonEpisodeNum.innerText = `S${episode.season.toString().padStart(2,"0")}E${episode.number.toString().padStart(2,"0")}`
  let brakeLine = document.createElement("br"); // This line and the next just add a <br>
  newDiv.appendChild(brakeLine); // so that the image is below the Season/Episode line
  let imageEpisode = document.createElement("img");
  imageEpisode.setAttribute("src", episode.image.medium) // Instead of the next two lines according to Alun...
  newDiv.appendChild(imageEpisode); // I could simply code imageEpisode.src = episode.image.medium
  imageEpisode.innerText = episode.summary
  // let summaryEpisode = document.createElement("p"); // See comments below
  // newDiv.appendChild(summaryEpisode); // See comments below
  // summaryEpisode.innerText = episode.summary.replace("<p>", "").replace("</p>","") 
  // Amazing! Two sequential replace methods worked, and the content of the summary
  // appears without the <p>, </p> tags
  // Alun's video: 25':15'' Instead of doing all those replaceMENTS (which didn't work
  // in the end for some of the summaries of the episodes (due to excessive/different
  // <p>s and <br>s)) I should use .innerHTML instead
  // summaryEpisode.innerHTML = episode.summary; // Alternatively Alun presents the following as a solution:
  // for not having a <p> (created two lines above - Line No 112) having another <p>
  // (from the data) in the HMTL code...
  rootElem.innerHTML += episode.summary;
  // Of course issues with S05E07 and S05E08 are still not solved
    })
}

window.onload = setup;
