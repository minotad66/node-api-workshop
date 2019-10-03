const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json()); // before our routes definition

let albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url:
      "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0"
  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url:
      "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0"
  }
];

app.get("/albums", function(req, res) {
  res.send(albumsData);
});

app.get("/sons", (req, res) => {
  let sons = albumsData.map(son => son.collectionName);
  res.send(sons);
});

app.get("/albums/:albumId", function(req, res) {
  // req.params.albumId will match the value in the url after /albums/
  console.log(req.params.albumId);
  // now we can use the value for req.params.albumId to find the album requested
  // how do we "find" something in an array
  let album = albumsData.find(id => id.albumId == req.params.albumId);
  // finish the code yourself - it should end with res.send(album) where album is the single album you found  based on the id
  res.send(album);
});

app.post("/albums", function(req, res) {
  console.log("POST /albums route");
  albumsData.push(req.body);
  console.log(req.body);
  res.send(albumsData);
});

app.get("/albums/:albumId", function(req, res) {
    // req.params.albumId will match the value in the url after /albums/
    console.log(req.params.albumId);
    // now we can use the value for req.params.albumId to find the album requested
    // how do we "find" something in an array
    let album = albumsData.find(id => id.albumId == req.params.albumId);
    // finish the code yourself - it should end with res.send(album) where album is the single album you found  based on the id
    res.send(album);
  });

  app.delete("/albums/:albumId", function(req, res) {
    console.log(req.params.albumId);
    let album = albumsData.filter(id => id.albumId != req.params.albumId);
    albumsData = album;
    res.send(albumsData);
  });

  app.put("/albums/:albumId", function(req, res) {
    console.log(req.params.albumId);
    let album = albumsData.map(id => {
      if (id.albumId == req.params.albumId){
        id = req.body;
        return id;
      }
      return id;
    });
    albumsData = album;
    res.send(albumsData);
  });

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
