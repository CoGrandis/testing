import express from "express";
const port:number=3000
const app = express();
app.use(express.json());
app.listen(port,()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
})


app.get("/users", (req, res)=>{
    res.json(
    [{
        id:1,
        username:"maria",
        email:"maria@gmail.com.ar",
    },
    {
        id:2,
        username:"maria2",
        email:"maria2@gmail.com.ar",
    }])
})

app.use("/users/:id", (req, res)=>{
    res.json({
        id:1,
        username:"maria",
        email:"maria@gmail.com.ar",
    })
})
app.use("/", (req, res)=>{
    res.status(200).send("Hello World")
})
export {app}