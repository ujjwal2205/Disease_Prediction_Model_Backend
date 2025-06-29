import axios from "axios";
const prediction=async(req,res)=>{
    try{
    const {symptoms}=req.body;
    const response= await axios.post('https://disease-prediction-model-hekw.onrender.com/predict',{
        symptoms
    })
    res.json(response.data);
}catch (err) {
    if (err.response) {
      res.status(err.response.status).json(err.response.data);
    } else {
      res.status(500).json({ error: 'Server error while contacting model' });
    }
  }
}
export default prediction;