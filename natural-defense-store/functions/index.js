const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require('stripe')('sk_test_51KthS7EHpfadNorKmNKi93Mx8vbJpMb1aepiWmPan9VmrGRXOV3fG0eEQ24IsiXuYaqDaswHWwAZcwVPKcDFJcey00cixmWEbI');

const app = express();

app.use(cors({
    origin:'http://localhost:3000', 
    optionSuccessStatus:200
}));

app.use(express.json());

// app.post('/payments/create', async (req, res) => {
//     try{
//         const {amount} = req.body;
//         const paymentIntent = await stripe.paymentIntent.create()
//     }catch(err){
//         res.status(500).json({
//             statusCode: 500,
//             message: err.message
//         });
//     }
// });

app.post('/payments', async (req, res) => {
    const { lineItems } = req.body
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:3000/NaturalDefenseStore',
      cancel_url: 'https://facebook.com',
    });
  
    res.send({'urlRedirect': session.url});
  });

app.get("*", (req, res) => {
  res
      .status(404)
      .send("404, Not Found.");
});



exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


