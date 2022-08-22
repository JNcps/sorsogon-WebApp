import  express from "express";
import cors from "cors";
import { sample_users } from "./data";
import jwt from "jsonwebtoken";


const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/foods", (req, res) => {
    res.send('hello world');
})

app.post("/api/users/login", (req, res) => {
  const {name, number} = req.body;
  const user = sample_users.find(user => user.name === name
    && user.number === number);

   if(user) {
    res.send(generateTokenReponse(user));
   }
   else{
     const BAD_REQUEST = 400;
     res.status(BAD_REQUEST).send("Username or password is invalid!");
   }

})

const generateTokenReponse = (user : any) => {
  const token = jwt.sign({
    name:user.name, isAdmin: user.isAdmin
  },"SomeRandomText",{
    expiresIn:"100d"
  });

  user.token = token;
  return user;
}

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})
