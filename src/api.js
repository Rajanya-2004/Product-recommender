import axios from "axios";

export async function getRecommendations(prompt) {
  try {
    const res = await axios.post("http://localhost:5000/recommend", { prompt });
    return res.data.recommendation;
  } catch (err) {
    console.error("API error:", err.message);
    return "Failed to fetch recommendations.";
  }
}
