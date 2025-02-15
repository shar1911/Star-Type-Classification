let t = document.getElementById("t")
let l = document.getElementById("l")
let r = document.getElementById("r")
let a = document.getElementById("a")
let c = document.getElementById("c")
let s = document.getElementById("s")

let defImg = "assets/milky.jpg"
let defText = "Welcome to Starry, a sophisticated platform designed to predict star types based on essential attributes. Simply input your star’s characteristics, and let our advanced algorithms reveal its classification—whether it’s a radiant blue giant or a tranquil red dwarf. Discover the mysteries of the cosmos with precision."
let brownImg = "assets/brownDwarf.jpg"
let brownText = 'A brown dwarf is a substellar object that falls between the largest gas giant planets and the smallest stars. With a mass typically between 13 and 80 times that of Jupiter, brown dwarfs are not massive enough to sustain hydrogen fusion in their cores like true stars. Instead, they emit faint heat and light, primarily from the gravitational contraction and residual heat from their formation. Often referred to as "failed stars," brown dwarfs play a crucial role in our understanding of stellar formation and the diversity of celestial objects.'
let redImg = "assets/redDwarf.jpg"
let redText = "A red dwarf is a small, cool star that is the most common type in the universe. With a mass ranging from about 0.08 to 0.6 times that of the Sun, red dwarfs burn their hydrogen fuel slowly, allowing them to shine for billions of years. Their low brightness and temperature give them a reddish hue, making them less visible to the naked eye. Despite their size, red dwarfs are significant in the search for exoplanets and potential life, as many orbit within the habitable zones of their host stars."
let whiteImg = "assets/whiteDwarf.jpg"
let whiteText = "A white dwarf is the remnant core of a star that has exhausted its nuclear fuel and shed its outer layers. Typically about the size of Earth but with a mass comparable to that of the Sun, white dwarfs are incredibly dense, with strong gravitational forces. They emit a faint, white glow due to residual heat, gradually cooling over billions of years. As they evolve, they will eventually fade into black dwarfs."
let mainImg = "assets/main.jpg"
let mainText = "Main sequence stars are the most common type of stars, including our Sun, and they represent a stable phase in stellar evolution. During this stage, they fuse hydrogen into helium in their cores, generating energy that balances the inward pull of gravity. Main sequence stars vary widely in size, temperature, and brightness, classified on the Hertzsprung-Russell diagram from O-type (hot and massive) to M-type (cool and small). This phase can last billions of years, and the characteristics of a main sequence star determine its life cycle, eventual evolution, and ultimate fate in the cosmos."
let superImg = "assets/supergiant.jpg"
let superText = "Supergiant stars are among the largest and most luminous stars in the universe, often exceeding 100 times the mass of the Sun. They have a short lifespan, typically ranging from a few million to a few tens of millions of years, and undergo rapid evolution. These stars can be classified into red supergiants, which are cooler and larger, and blue supergiants, which are hotter and more massive. Eventually, they end their lives in spectacular supernova explosions, contributing to the formation of new elements and possibly even neutron stars or black holes."
let hyperImg = "assets/hypergiant.jpg"
let hyperText = "Hypergiant stars are the most massive and luminous stars known, often exceeding 200 times the mass of the Sun. They have extraordinarily high luminosities and can be several thousand times brighter than the Sun. These stars are characterized by their instability, exhibiting significant mass loss through powerful stellar winds. Hypergiants have short lifespans, typically only a few million years, and undergo rapid evolutionary changes. They often end their lives in dramatic supernovae or may directly collapse into black holes."

let img = document.getElementById("img")
let text = document.getElementById("text")

let res = undefined

if (res === undefined) {
    img.src = defImg
    text.innerHTML = defText
}

async function predict() {
    if (t.value != '' && l.value != '' && r.value != '' && a.value != '' && c.value != "Select star color" && s.value != "Select spectral class") {
        let response = await fetch("http://127.0.0.1:5000/getOutput", {
            method: "POST",
            body: JSON.stringify({
                "Temperature (K)": [t.value],
                "Luminosity(L/Lo)": [l.value],
                "Radius(R/Ro)": [r.value],
                "Absolute magnitude(Mv)": [a.value],
                "Star color": [c.value],
                "Spectral Class": [s.value]
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        });
        let json = await response.json()
        res = json.predict
        if (res == "Brown Dwarf") {
            img.src = brownImg
            text.innerHTML = brownText
        }
        if (res == "Red Dwarf") {
            img.src = redImg
            text.innerHTML = redText
        }
        if (res == "White Dwarf") {
            img.src = whiteImg
            text.innerHTML = whiteText
        }
        if (res == "Main Sequence") {
            img.src = mainImg
            text.innerHTML = mainText
        }
        if (res == "Supergiant") {
            img.src = superImg
            text.innerHTML = superText
        }
        if (res == "Hypergiant") {
            img.src = hyperImg
            text.innerHTML = hyperText
        }
    } else {
        img.src = defImg
        text.innerHTML = defText
    }
}