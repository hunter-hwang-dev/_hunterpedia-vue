require("dotenv").config(); //환경변수 가져오기

const express = require("express");
const app = express(); //express 라이브러리 가져오기

const argon2 = require("argon2"); //해싱 알고리즘 argon2 라이브러리 가져오기
const session = require("express-session");
const passport = require("passport"); //passport 라이브러리 가져오기

app.set("view engine", "ejs"); //뷰 엔진으로 ejs 사용
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //json - req.body 바로 출력

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  })
);
app.use(passport.initialize());
app.use(passport.session()); //passport 사용

passport.serializeUser((user, done) => {
  done(null, user.id); // user.id를 세션에 저장
});

passport.deserializeUser((id, done) => {
  // 세션에 저장된 id를 사용하여 사용자 정보를 가져옴
  db.collection("admin")
    .findOne({ _id: new ObjectId(id) }) // type 주의
    .then((user) => done(null, user))
    .catch((err) => done(err, null));
});

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

app.get("/", (req, res) => {
  const isSessionValid = req.isAuthenticated();
  res.render("index.ejs", {
    isSessionValid: isSessionValid,
  });
});

app.get("/quick-tips", (req, res) => {
  // 나중에 메인 페이지에서 동적으로 관리할 예정
  // let result = await db
  //   .collection("quick-tips")
  //   .aggregate([{ $sample: { size: 1 } }])
  //   .toArray();
  res.render("quickTips.ejs");
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
  const hash = await argon2.hash(req.body.password); //form에 입력한 password를 hashing
  let result = await db.collection("admin").updateOne(
    { username: process.env.ADMIN_USERNAME },
    {
      $set: { password: hash },
    }
  );
  res.redirect("/admin");
});

app.post("/admin/login", async (req, res, next) => {
  const user = await db
    .collection("admin")
    .findOne({ username: req.body.username });

  if (user && (await argon2.verify(user.password, req.body.password))) {
    //db 호출 정상 처리 && 비밀번호 맞으면
    req.login(user, (err) => {
      if (err) {
        return next(err); // 미들웨어 제끼고 에러 반환
      }
      return res.redirect("/"); //로그인 성공
    });
  } else {
    res
      .status(401)
      .send("로그인 실패: 사용자 이름 또는 비밀번호가 올바르지 않습니다.");
  }
});
