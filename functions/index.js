const functions = require("firebase-functions");
const express =require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51ICeuhHQT5zDQp4MSYZshCN61DDVogqSO8oPwDabcg4mDio3iEZPKo1onxMRg0RqVkj5eKDibqs8a60WvuKMMHkH00T5TN8yos');

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
// Example endpoint
//http://localhost:5001/design-ecommerce-283d9/us-central1/api