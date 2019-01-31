const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/quotes");
quoteSchema = new mongoose.Schema({
    author: { type: String, required: true, minlength: 3 },
    quotes: [{ quotes: { type: String, minlength: [3, "Quote must be 3 letters"] } }],
    votes: { type: Number, default: 0 }
})
quote = mongoose.model("quotes", quoteSchema);
module.exports = quote;
