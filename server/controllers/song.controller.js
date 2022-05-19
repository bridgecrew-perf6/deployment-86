// import model
const {Song} = require("./../models/song.model")

module.exports.testAPI = (req, res)=>{
    // res.status(400).json("Wrong message")
    res.json("Backend message")
}


// get all
module.exports.allSongs = (req, res)=>{
    Song.find()
        .then(songs => res.json(songs))
        .catch(err=> res.status(400).json(err))
}

// create
module.exports.createSong = (req, res) =>{
    Song.create(req.body) // inside () --> info to create the Song
        .then(newSong => res.json(newSong))
        .catch(err=> res.status(400).json(err))
}

// get one
module.exports.oneSong = (req, res) =>{
    Song.findOne({ _id: req.params.id })
        .then(song=> res.json(song))
        .catch(err=> res.status(400).json(err))
}

// update
module.exports.updateSong = (req, res) =>{
    Song.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {new:true, runValidators:true}
    )
        .then(updatedSong=>res.json(updatedSong))
        .catch(err=>res.status(400).json(err))

}
// delete
module.exports.deleteSong = (req, res) =>{
    Song.deleteOne({_id : req.params.id})
        .then(result => res.json(result))
        .catch(err=>res.status(400).json(err))
}