import env from "./config/env.js";
import connecDB from "./config/database.js";
import app from "./app.js";
const startServer = async () => {
  try {
    await connectDB();

    app.listen(env.PORT, () => {
      console.log(
        ` Server running in ${env.NODE_ENV} mode on port ${env.PORT}`
      );
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();