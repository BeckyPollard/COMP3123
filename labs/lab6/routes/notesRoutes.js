const NotesModel = require('../models/NotesModel.js');
const express = require('express');
const noteRoutes = express.Router();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save

// POST /api/notes

noteRoutes.post("/notes", async (req, res) => {
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

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find

// GET /api/notes/

noteRoutes.get("/notes", async (req, res) => {
  try {
    const notes = await NotesModel.find();
    res.status(200).send(notes);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error while retrieving notes."
    });
  }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById

// GET /api/notes/:noteID

noteRoutes.get("/notes/:noteId", async (req, res) => {
  try {
    const note = await NotesModel.findById(req.params.noteId);
    
    // Validate request
  if(!note) {
      return res.status(404).send({
          message: `Note with id ${req.params.noteId} not found.`
      });
  }
    
    res.status(200).send(note);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error retrieving note with id " + req.params.noteId
    });
  }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate

// PUT /api/notes/:noteId
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/PUT
// https://stackoverflow.com/questions/107390/whats-the-difference-between-a-post-and-a-put-http-request
// PUT puts a file or resource at a specific URI, and exactly at that URI. If there's already a file or 
// resource at that URI, PUT replaces that file or resource.
// If there is no file or resource there, PUT creates one.

noteRoutes.put("/notes/:noteId", async (req, res) => {

  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content in body cannot be empty."
    });
  }

  try {
    const updatedNote = await NotesModel.findByIdAndUpdate(
      req.params.noteId,
      {
        noteTitle: req.body.content.noteTitle,
        noteDescription: req.body.content.noteDescription,
        priority: req.body.content.priority,
        dateUpdated: Date.now()
      },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).send({
        message: "Note not found."
      });
    }

    res.status(200).send(updatedNote);
  } catch (error) {
    res.status(500).send({
      message: error.message || `Error updating note with id ${req.params.noteId}!`
    });
  }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
noteRoutes.delete("/notes/:noteId", async (req, res) => {
  try {
    const deletedNote = await NotesModel.findByIdAndDelete(req.params.noteId);

    if (!deletedNote) {
      return res.status(404).send({
        message: `Note with id ${req.params.noteId} not found.`
      });
    }

    res.status(200).send({ message: "Note deleted successfully!" });

  } catch (error) {
    res.status(500).send({
      message: error.message || `Could not delete note with id ${req.params.noteId}`
    });
  }
});

module.exports = noteRoutes;
