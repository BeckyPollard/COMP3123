const {response} = require('express');

express = require("express");
const app = express();

const SERVER_PORT = process.env.PORT || 3000;

// ------------------------------------------------
// SET UP MIDDLEWARE FOR EXPRESS
// ------------------------------------------------

// STATIC FILES
app.use("/static", express.static("public")) //localhost:3000/static
app.use(express.json()) // serve json
app.use(express.urlencoded({extended: true})) //read url params/queries

// ------------------------------------------------
// SERVER
// ------------------------------------------------

app.get("/", (req, res) => {
  res.send("<h1>WELCOME TO THE ROOT OF THE SERVER - GET GET GET</h1>")
});

app.get("/hello", (req, res) => {
  res.status(200).send("<h1>200</h1>")
})

app.get("/college", (req, res) => {
  const college = {
    name: "gbc",
    where: "toronto"
  }
  res.json(college)
})

// http://localhost:3000/students?name=becky&age=33
app.get("/students", (req, res) => {
  // validate get url is correct
  if(!req.query.name || !req.query.age) {
    return res.status(400).json({
      error: "MISSING QUERY PARAMS"
    })
  }
  console.log(req.query);
  const name = req.query.name
  const age = req.query.age
  res.json({
    stu_name: name,
    stu_age: age
  })
})

app.get("/students/:name/:age", (req, res) => {
  console.log(req.params);
  if(!req.params.name || !req.params.age) {
    return res.status(400).json({error: "PASS NAME AND AGE NEEDED"})
  }
  const name = req.params.name
  const age = req.params.age
  res.json({
    stu_name: name,
    stu_age: age
  })
})

// try using POST PUT DELETE methods

app.post("/students", (req, res) => {
  const student = req.body
  console.log(student);
  const { name, age } = student
  if(!student.name || !student.age) {
    return res.status(400).json({
      error: "MISSING NAME AND/OR AGE"
    })
  }

  res.json({
    student_name: name,
    student_age: age
  })
})

app.listen(SERVER_PORT, () => {
  console.log("SERVER RUNNING, BETTER CATCH IT - running on port" + SERVER_PORT);
})

// JSON SERVE


// READ URL PARAMS/QUERIES
