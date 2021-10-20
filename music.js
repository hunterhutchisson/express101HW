const express = require('express');

const app = express();
const port = 3000;

//5. Music site
// Create a Dynamic Website in Node

// Create a new node/express project
// Create an array with artists/places/music cds in app.js
let albumList = [{  
    id: 0,
    name:"This Is a Long Drive for Someone with Nothing to Think About",
    publishDate:"1996",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/5/5b/MMLongDrive5075.jpg",

    songTitles:["Dramamine","Breakthrough", "Custom Concern", "Might", "Lounge", "Beach Side Property", "She Ionizes & Atomizes", "Head South", "Dog Paddle", "Novocain Stain", "Tundra/Desert", "Ohio", "Exit Does Not Exist", "Talking Shit About a Pretty Sunset", "Make Everyone Happy/Mechanical Birds", "Space Travel Is Boring"]
    },
    {  
    id: 1,
    name:"The Lonesome Crowded West",
    description:"1997",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/f/f5/MMLonesomeCrowdedWest.jpg",

    songTitles:["Teeth Like God's ShoeShine","Heart Cooks Brain", "Convenient Parking", "Lounge (Closing Time)", "Jesus Christ Was an Only Child", "Doin' the Cockroach", "Cowboy Dan", "Trailer Trash", "Out of Gas", "Long Distance Drunk", "Shit Luck", "Truckers Atlas", "Polar Opposites", "Bankrupt on Selling", "Styrofoam Boots"]
    },
    {
    id: 2,
    name:"The Moon & Antartica",
    description:"2000",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/0/00/TheMoonAntarctica.jpg",

    songTitles:["3rd Planet","Gravity Rides Everything", "Dark Center of the Universe", "Perfect Disguise"]
    },
    {  
    id: 3,
    name:"Good News for People Who Love Bad News",
    description:"2004",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/a/aa/MMGoodNews5075.jpg",

    songTitles:["Horn Intro","The World at Large", "Float On", "Ocean Breathes Salty"]
    }
]
//Create a front page ('/') that tells about your music artist. Include a couple of pictures

app.get('/', (req, res) => {
    res.send(`
    <h1>Modest Mouse</h1>
    <p>Modest Mouse is an American rock band formed in 1992 in Issaquah, Washington, and currently based in Portland, Oregon. The founding members are lead singer/guitarist Isaac Brock, drummer Jeremiah Green, and bassist Eric Judy. Strongly influenced by Pavement, Pixies, XTC, and Talking Heads, the band rehearsed, rearranged, and recorded demos for almost two years before finally signing with small-town indie label K Records and releasing numerous singles.</p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Modest_Mouse_Pittsburgh_2021.jpg/1920px-Modest_Mouse_Pittsburgh_2021.jpg" height="200px">
    <img src="https://guitar.com/wp-content/uploads/2021/05/modest-mouse@1400x1050.jpg" height="200px">
    `)
})

//Create a page that lists all of the cds for the artist. Each CD should be a hyperlink that navigates to a page that corresponds to the index in the json file: For example,
let navHTML = '<ul>'
albumList.forEach((album) => {
    let albumHTMl = `<li><a href="/albums/${album.id}">${album.name}</a></li>`
    navHTML += albumHTMl
})
navHTML += '</ul>'

app.get('/albums', (req, res) => {
    res.send(navHTML)
})

//Create a route that takes in arguments on the url that will display one artist/place/music at a time.
app.get('/albums/:id', (req, res) => {
    let id = req.params.id;
    let songHTML = ''
    albumList[id].songTitles.forEach((song) => {
        songHTML += `<li>${song}</li>`
    })
    res.send(`
    ${navHTML}
    <h1>${albumList[id].name}</h1>

    <img src="${albumList[id].imgURL}" height="200px">
    <ul>${songHTML}</ul>
    `)
})












app.listen(port, () => {
    console.log(`listening on port ${port}`);
});