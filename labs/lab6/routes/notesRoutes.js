// set up all of the routes for the server
const express = require("express");
const router = express.Router();
const NotesModel = require("../models/NotesModel.js");

// fill in the routes and methods from lab instructions
// https://learn.georgebrown.ca/d2l/lms/dropbox/user/folder_submit_files.d2l?db=384530&grpid=0&isprv=0&bp=0&ou=515474

// POST /api/notes
router.post("/api/notes", async (req, res) => {
  // validation of post body
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content in the post body cannot be left empty."
    })
  };

  // if content of the body exists
  try {
    const note = new NotesModel({
      noteTitle: req.body.content.noteTitle,
      noteDescription: req.body.content.noteDescription,
      priority: req.body.content.priority,
      dateAdded: req.body.content.dateAdded,
      dateUpdated: req.body.content.dateUpdated
    });

    const savedNote = await note.save();
    res.status(201).send(savedNote);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error while creating note."
    });
  };
});

// TODO: complete the remaining GET PUT and DELETE method routes

module.exports = router;
