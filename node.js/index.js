const express = require("express");
const mongoose = require("mongoose"); // Import Mongoose
const app = express();

// Connect to MongoDB (replace <YourMongoDBURI> with your MongoDB URI)
mongoose
.connect(
"mongodb+srv://helios:Kaien2014@cluster0.vgvg1o0.mongodb.net/?retryWrites=true&w=majority",
{
useNewUrlParser: true,
useUnifiedTopology: true,
}
)
.then(() => {
console.log("Connected to MongoDB");
})
.catch((error) => {
console.error("Error connecting to MongoDB:", error);
});

// Create a Mongoose schema
const userInputSchema = new mongoose.Schema({
  input: String,
});

// Create a Mongoose model
const UserInput = mongoose.model("UserInput", userInputSchema);

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint to accept user input and store it in the database
app.post("/user-input", async (req, res) => {
  const userInputText = ""; // get user input

  try {
    // Create a new document and save it to the database
    const newUserInput = new UserInput({ input: userInputText });

    // Respond with a status code of 200 and a friendly message
    res
      .status(200)
      .json({ message: "Input received, logged, and saved to the database." });
  } catch (error) {
    console.error("Error saving user input to the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});