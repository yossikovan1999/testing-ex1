import express from "express";


const app = express();

app.use(express.json());

app.post("/check-weather", (req, res) => {
  try {

    const { temperature, windSpeed } = req.body;
    
    if (!temperature || !windSpeed) {
      return res.status(200).json({ error: "must include all fields." });
    }

    if ((temperature < 0 || temperature > 35) || windSpeed > 50) {
      return res
        .status(200)
        .json({ safe: false, message: "Too windy to hike!" });
    }

    return res.status(200).json({
      safe: true,
      message: "All conditions are good for hiking!",
    });

  } catch (error) {
    return res.status(400).json({ error: "error occured." });
  }
});


export default app;
