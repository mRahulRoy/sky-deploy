const express = require("express")
const cors = require("cors")
const app = express();
const dotenv = require("dotenv").config();

const PORT =  process.env.PORT ||  4000;
const formRoute = require("./Routes/formController")
const body_parser = require("body-parser");
app.use(express.json());
app.use(body_parser.urlencoded({extended:true}));
app.use(formRoute);
app.use(cors());

app.use(express.static(path.join(__dirname, "/Frontend/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/Frontend/build', 'index.html'));
});

app.listen(PORT,(err)=>{
    if(err){
        console.log("Error Ocurred: ",err.message);
    }
    console.log("Server is Running");
})