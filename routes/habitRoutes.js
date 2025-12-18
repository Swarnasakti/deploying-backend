const express = require("express");
const Habit = require("../models/habit");
const router = express.Router();

// Create habit
router.post("/", async (req, res) => {
   const habit = await Habit.create(req.body);
   res.json(habit);
});

// Get all habits
router.get("/", async (req, res) => {
   const habits = await Habit.find();
   res.json(habits);
});

// Daily check in
router.put("/checkin/:id", async (req, res) => {
   const habit = await Habit.findById(req.params.id);
   habit.streak += 1;
   habit.history.push({ date: new Date() });
   await habit.save();
   res.json(habit);
});

module.exports = router;