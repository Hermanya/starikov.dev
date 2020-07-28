// @ts-ignore
const AWS = require("aws-sdk");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
var bodyParser = require("body-parser");
var express = require("express");
const crypto = require("crypto");

AWS.config.update({ region: process.env.TABLE_REGION });

const dynamodb = new AWS.DynamoDB.DocumentClient();

let tableName = "starikovDevUserData";
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + "-" + process.env.ENV;
}

const path = "/userData";
// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/*****************************************
 * HTTP Get method for get single object *
 *****************************************/

app.get(path + "/object/:id", function (req, res) {
  const { ProjectionExpression } = req.query;
  dynamodb.get(
    {
      TableName: tableName,
      Key: {
        id: req.params.id,
      },
      ProjectionExpression:
        typeof ProjectionExpression === "string"
          ? ProjectionExpression
          : undefined,
    },
    (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.json({ error: "Could not load items: " + err.message });
      } else {
        if (data.Item) {
          res.json(data.Item);
        } else {
          res.json(data);
        }
      }
    }
  );
});

/************************************
 * HTTP put method for insert object *
 *************************************/

app.put(path, function (req, res) {
  dynamodb.get(
    {
      TableName: tableName,
      Key: {
        id: req.body.id,
      },
      ProjectionExpression: req.params.ProjectionExpression,
    },
    (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.json({ error: "Could not load items: " + err.message });
      } else {
        dynamodb.put(
          {
            TableName: tableName,
            Item: {
              ...data.Item,
              ...req.body,
            },
          },
          (err, data) => {
            if (err) {
              res.statusCode = 500;
              res.json({ error: err, url: req.url, body: req.body });
            } else {
              res.json({
                success: "put call succeed!",
                url: req.url,
                data: data,
              });
            }
          }
        );
      }
    }
  );
});

app.put(path + "/login", function (req, res) {
  const { username, password } = req.body;
  dynamodb.get(
    {
      TableName: tableName,
      Key: {
        id: username,
      },
    },
    (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.json({ error: "Could not load items: " + err.message });
      } else {
        const { PasswordHash } = data.Item ?? {};
        crypto.scrypt(password, process.env.SALT, 64, (err, derivedKey) => {
          if (err) throw err;
          const hash = derivedKey.toString("hex");

          if (PasswordHash) {
            if (PasswordHash === hash) {
              res.cookie("Auth", hash, { maxAge: 900000, httpOnly: true });
              res.statusCode = 200;
              res.json({ error: "Logged in" });
            } else {
              res.statusCode = 401;
              res.json({ error: "Invalid login or password" });
            }
          } else {
            dynamodb.put(
              {
                TableName: tableName,
                Item: {
                  id: username,
                  PasswordHash: hash,
                  ...data.Item,
                },
              },
              (err, data) => {
                if (err) {
                  res.statusCode = 500;
                  res.json({
                    error: err,
                    url: req.url,
                    body: req.body,
                  });
                } else {
                  res.cookie("Auth", hash, { maxAge: 900000, httpOnly: true });
                  res.statusCode = 200;
                  res.json({
                    success: "Registered and logged in",
                    url: req.url,
                    data: data,
                  });
                }
              }
            );
          }
        });
      }
    }
  );
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
