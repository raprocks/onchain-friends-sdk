import app from "./app"
import { PORT } from "./src/utils/constants";

const server = app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
})

export default server;
