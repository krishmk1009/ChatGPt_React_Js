

const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const { json } = require("body-parser");
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config();

const configuration = new Configuration({
    organization: "org-Cr6g5MZt2k7KDPJYUTLSewTy",
    apiKey: process.env.API_TOKEN,
});
const openai = new OpenAIApi(configuration);
const app = express();

const port = 3080;

app.use(bodyParser.json())
app.use(cors())



app.post('/', async (req, res) => {
    const { message } = req.body;
    // console.log(message)

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
    });


    res.json({

        message: response.data.choices[0].text,
    })
    console.log(response.data.choices[0].text)
})

app.listen(port, () => {
    console.log(`app is listening on ${port}`)
})

