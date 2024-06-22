import app from "./app.js";
import dbConnection from "./dbConfig/dbConnection.js";

const PORT = process.env.PORT || 8800;

// MONGODB CONNECTION
dbConnection();

const server = app.listen(PORT, () => {
  console.log(`Dev Server running on port: ${PORT}`);
});

export default server;
