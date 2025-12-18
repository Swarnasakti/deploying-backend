const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
   name: { type: String, required: true },
   frequency: { type: Number, required: true },
   streak: { type: Number, default: 0 },
   history: [{ date: Date }]
});

module.exports = mongoose.model("Habit", habitSchema);