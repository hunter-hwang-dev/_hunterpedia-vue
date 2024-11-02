require("dotenv").config(); //환경변수 가져오기

const express = require("express");
const app = express(); //express 라이브러리 가져오기

const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local"); //passport 라이브러리 가져오기

app.set("view engine", "ejs"); //뷰 엔진으로 ejs 사용
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //json - req.body 바로 출력

app.use(passport.initialize());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.session()); //passport 사용

const { MongoClient, ServerApiVersion } = require("mongodb"); //mongodb 사용

let db;
const uri = process.env.DB_URI;
new MongoClient(uri)
  .connect()
  .then((client) => {
    console.log("MongoDB is connected.");
    db = client.db("db");

    app.listen(process.env.PORT, () => {
      console.log("server on http://localhost:" + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  }); //mongodb 연결

app.get("/", async (req, res) => {
  let result = await db
    .collection("quick-tips")
    .aggregate([{ $sample: { size: 1 } }])
    .toArray();
  res.send(result);
});

//post 관련 코드: 추후 post.js로 분리 예정 ----------------------------------------
app.get("/post", (req, res) => {
  //추후 엔드포인트 "/admin/write/quick-tips"로 변경
  res.render("post.ejs");
});

app.post("/post", async (req, res) => {
  let today = new Date();
  console.log(today);

  let result = await db.collection("quick-tips").insertOne({
    question: req.body.question,
    answer: req.body.answer,
    hashtags: req.body.hashtags,
    createdAt: today,
    revisedAt: today,
    relatedTips: "",
  });
});

// 비동기 처리가 잘 되어 있는 MongoDB 샘플 코드. -------------------------------------
// 기능 구현 후 refactor할 때 참고 할 것! -------------------------------------------
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });
//
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

//admin 관련 코드: 추후 admin.js로 분리 예정 ----------------------------------------
app.get("/admin", (req, res) => {
  //추후 엔드포인트 "/admin/write/quick-tips"로 변경
  res.render("admin.ejs");
});

app.post("/admin/password", async (req, res) => {
  console.log(req.body.password);
  console.log(await db.collection("admin").findOne());
});
