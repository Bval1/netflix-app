const router = require("express").Router();
const List = require("../models/List");
const verify = require("../verifyToken");
const { route } = require("./users");

// CREATE
router.post("/", verify, async (req, res) => {
    if(req.user.isAdmin) {
       const newList = new List(req.body);

       try {
            const savedList = await newList.save();
            res.status(201).json(savedList);
       } catch (error) {
            res.status(500).json(error);
       }
    } else {
        res.status(403).json("You are you not allowed to add movies!")
    }
});

// DELETE
router.delete("/:id", verify, async (req, res) => {
    if(req.user.isAdmin) {
        await List.findByIdAndDelete(req.params.id);
        res.status(201).json("List has been deleted");
       try {
            const savedList = await newList.save();
            res.status(201).json(savedList);
       } catch (error) {
            res.status(500).json(error);
       }
    } else {
        res.status(403).json("You are you not allowed to add movies!")
    }
});

// GET
router.get("/", verify, async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];

    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery, genre: genreQuery } },
                ]);
            } else {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery } },
                ]);
            }

        } else {
            list = await List.aggregate([
                { $sample: { size: 10 } }
            ]);
        }

        res.status(200).json(list);
    } catch (error) {
       res.status(500).json(error); 
    }
})

module.exports = router;