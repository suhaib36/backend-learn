const app = require("./src/app")
const dbconnect = require("./src/database/db") 

dbconnect();

app.listen(3000, () => {
    console.log("server running on port 3000")
})