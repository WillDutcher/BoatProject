const TolmanSkiff = require('../models/skiffs.model');

const getAll = (req, res) => {
    TolmanSkiff.find()
        .then((allSkiffs) => {
            console.log(allSkiffs);
            res.json(allSkiffs);
        })
        .catch((err) => {
            console.log(`Error in getAll: ${err}`);
            res.json(err);
        })
}

const create = (req, res) => {
    // create a skiff in the db
    console.log(req.body)
    TolmanSkiff.create(req.body)
        .then((newSkiff) => {
            console.log(newSkiff);
            res.json(newSkiff);
        })
        .catch((err) => {
            console.log(`Error in create ${err}`);
            res.json(err);
        })
}

const getOne = (req, res) => {
    // get a single skiff by ID
    console.log(req.params.id);
    TolmanSkiff.findById(req.params.id)
        .then(oneSkiff => {
            console.log(oneSkiff);
            res.json(oneSkiff);
        })
        .catch((err) => {
            console.log(`Error in findOne ${err}`);
            res.json(err);
        })
}

const update = (req, res) => {
    // update a single skiff by ID
    console.log(req.params.id);
    console.log(req.body);
    TolmanSkiff.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
        .then(updatedSkiff => {
            console.log(updatedSkiff);
            res.json(updatedSkiff);
        })
        .catch((err) => {
            console.log(`Error in update ${err}`);
            res.json(err);
        })
}

const removeOne = (req, res) => {
    // delete a single skiff by ID
    console.log(req.params.id);
    TolmanSkiff.findByIdAndRemove(req.params.id)
        .then((removedSkiff) => {
            console.log(removedSkiff);
            res.json(removedSkiff);
        })
        .catch((err) => {
            console.log(`Error in remove ${err}`);
            res.json(err);
        })
}

// const removeOne = (req, res) => {
//     // delete a single skiff by ID
//     console.log(req.params.id);
//     console.log(req.body);
    // TolmanSkiff.findByIdAndRemove(req.params.id)
    //     .then((removedSkiff) => {
    //         console.log(removedSkiff);
    //         res.json(removedSkiff);
    //     })
    //     .catch((err) => {
    //         console.log(`Error in remove ${err}`);
    //         res.json(err);
    //     })
// }

module.exports = {
    getAll,
    create,
    getOne,
    update,
    removeOne
}

// module.exports = {
//     getAll: (req, res) => {
//         TolmanSkiff.find()
//             .then((allSkiffs) => {
//                 console.log(allSkiffs);
//                 res.json(allSkiffs);
//             })
//             .catch((err) => {
//                 console.log(`Error in getAll: ${err}`);
//                 res.json(err);
//             })
//     },

//     create: (req, res) => {
//         // create a skiff in the db
//     },

//     getOne: (req, res) => {
//         // get a single skiff by ID
//     },

//     update: (req, res) => {
//         // update a single skiff by ID
//     },

//     delete: (req, res) => {
//         // delete a single skiff by ID
//     }
// }