require("dotenv").config(); //환경변수 가져오기

const fs = require("fs");
const { MongoClient } = require("mongodb");

const uri = process.env.DB_URL;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("db");
    const collection = database.collection("quick-tips");

    const data = fs.readFileSync("../raw-articles/quick-tips.json", "utf8");
    const quickTips = JSON.parse(data);

    // MongoDB에 데이터 삽입
    const result = await collection.insertMany(quickTips);
    console.log(`${result.insertedCount}개의 문서가 삽입되었습니다.`);
  } catch (error) {
    console.error("오류 발생:", error);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
