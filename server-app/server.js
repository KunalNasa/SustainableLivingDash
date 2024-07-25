const express = require('express');
const cors = require('cors');
const connectionDB = require('./config/dbConfig')

const port = process.env.PORT || 5001;
const app = express();
const dotenv = require('dotenv');

dotenv.config();
connectionDB();
app.use(express.json());

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true,
}))

app.use("/tips", require('./routes/TipsRoutes'));
app.use("/resources", require('./routes/ResourceRoutes'))
app.use("/users", require('./routes/UserRoutes'));
app.use("/carbonFootprint", require('./routes/carbonFootprintRoutes'))

app.listen(port, () =>{
    console.log(`App is listening on port ${port}`)
})


