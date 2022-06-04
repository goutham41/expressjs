const express = require("express");
const groceriesRouter = require("./routes/groceries.route");
const movieRouter = require("./routes/movie.route")
const next = require("express");
const cors = require("cors")
const helmet = require("helmet")
const app = express();
const compression = require('compression')
const morgan = require("morgan");

app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms[:date[clf]]  HTTP/:http-version ",
  ),
);


// morgan(function (tokens, req, res) {
//   console.log([
//     tokens.method(req, res),
//     tokens.url(req, res),
//     tokens.status(req, res),
//     tokens.res(req, res, "content-length"),
//     tokens["response-time"](req, res),
//     tokens.Data(req,res),
//     tokens.origin(res=q,res)
//   ]);
// }))
// function loggingmiddleware(req, res) {
//   console.log(
//     "ROute Accessed",
//     req.url,
//     "method:",
//     req.method,
//     "At:",
//     new Date(),
//   );
//   next()
// }
//  app.use(loggingmiddleware)
 app.use(compression())
 app.use(express.urlencoded({extended:true}));
 app.use(express.json());
// CORS
      app.use(cors({
          // specfic url comminaction 
         origin:["https://new.csb.app"],
        //  methods:["GET"]
        // allowedHeaders : ["content-type"]
      }))
//using helmet
app.use(helmet())
app.use((req,res,next)=>{
   console.log(
     "ROute Accessed",
     req.url,
     "method:",
     req.method,
     "At:",
     new Date(),
   );
   next();
})
// app.use((req,res,next)=>{
//     //Auth middleware
//     if(!req.headers["apikey"]){
//         return res.status(401).send("User not Authenticated")
//     }
//     next();
// })

//create a middleware that calculates time taken by req
app.use((req,res,next)=>{
    const t1 = performance.now();
    next()
    const t2 = performance.now();

    console.log("time taken",(t2-t1))
})

// Router middleware
app.use("/groceries",groceriesRouter)

app.get("/", (req, res) => {
 
  setTimeout(()=>{
    res.send(
      "<h4>hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello</h4>",
    );
},1000)

}) 

app.use("/groceries", groceriesRouter);
app.use("/movies", movieRouter);
app.listen(8080);
