import { buildApp } from "./app";

const app = buildApp()
const port:number=3000
app.listen(port,()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);

})