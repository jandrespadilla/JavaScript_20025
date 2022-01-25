function loadPeliculas(peliculas) {
    let div_pelis = document.getElementById("galeria");
    
    
    for (let pelis of peliculas) {
        let columna = document.createElement("div");
        columna.className = "col-4 py-3";
        let encabezado = document.createElement("h2");
        encabezado.className = "text-center text-white bg-dark p-1";
        encabezado.innerHTML = pelis.title;
        let card = document.createElement("div");
        card.className = "card";
        let poster = document.createElement("img");
        poster.className = "card-img-top";
        poster.src = "https://image.tmdb.org/t/p/w500/" + pelis.poster_path;
        poster.onclick = () => {
            alert(pelis.title);
        }
        let card_body = document.createElement("div");
        card_body.className = "card-body";
        let parrafo = document.createElement("p");
        parrafo.className = "card-text text-dark";
      

        parrafo.innerHTML = pelis.overview;
        card_body.appendChild(encabezado);
        card_body.appendChild(parrafo);
        card.appendChild(poster);
        card.appendChild(card_body);
        
        columna.appendChild(card);
        
        div_pelis.appendChild(columna);
       
    }
}
async function buscarPelis(seriespar) {

    // Traigo pelis
    let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=5e5fc3b9e60f1572acb749241e477ec9&language=es")
            .then( response => response.json() )
            .then( json => {
                
                return json;
            });
      grilla = await response;
      loadPeliculas(grilla.results);
      return grilla;
  }

  grillatv = buscarPelis();

/*
const peliculas = [
{title:"Spider-Man: No Way Home",poster_path:"/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",overview:"Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."},
{title:"Hotel Transylvania: Transformania",poster_path:"/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg",overview:"When Van Helsing's mysterious invention, the \"Monsterfication Ray,\" goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it's too late, and before they drive each other crazy."},
{title:"Encanto",poster_path:"/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",overview:"The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope."},
{title:"The Matrix Resurrections",poster_path:"/8c4a8kE7PizaGQQnditMmI1xbRp.jpg",overview:"Plagued by strange memories, Neo's life takes an unexpected turn when he finds himself back inside the Matrix."},
{title:"No Time to Die",poster_path:"/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",overview:"Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology."},
{title:"The King's Daughter",poster_path:"/nCRfr3eOlwH7wfxaz6cU1bhMR1W.jpg",overview:"King Louis XIV's quest for immortality leads him to capture and steal a mermaid's life force, a move that is further complicated by his illegitimate daughter's discovery of the creature."},
{title:"Shang-Chi and the Legend of the Ten Rings",poster_path:"/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",overview:"Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization."},
{title:"Dune",poster_path:"d5NXSklXo0qyIYkgV94XAgMIckC.jpg",overview:"Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive."},
{title:"Harry Potter 20th Anniversary: Return to Hogwarts",poster_path:"/jntLBq0MLR3hrwKaTQswxACRPMs.jpg",overview:"An enchanting making-of story told through all-new in-depth interviews and cast conversations, inviting fans on a magical first-person journey through one of the most beloved film franchises of all time."},
{title:"Munich: The Edge of War",poster_path:"/nj5a7SnvBdWGBNVZxcfM46t1CBt.jpg",overview:"At the tense 1938 Munich Conference, former friends who now work for opposing governments become reluctant spies racing to expose a Nazi secret."},
{title:"Resident Evil: Welcome to Raccoon City",poster_path:"/7uRbWOXxpWDMtnsd2PF3clu65jc.jpg",overview:"Once the booming home of pharmaceutical giant Umbrella Corporation, Raccoon City is now a dying Midwestern town. The company's exodus left the city a wasteland…with great evil brewing below the surface. When that evil is unleashed, the townspeople are forever…changed…and a small group of survivors must work together to uncover the truth behind Umbrella and make it through the night."},
{title:"Venom: Let There Be Carnage",poster_path:"/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",overview:"After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady."}
];
   */