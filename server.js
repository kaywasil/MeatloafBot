import Replicate from 'replicate';
import express from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

app.post('/api/text', async (request, response) => {
  const version =
    '8e6975e5ed6174911a6ff3d60540dfd4844201974602551e10e9e87ab143d81e';
  const model = 'meta/llama-2-7b-chat';
  const input = {
    prompt: request.body.prompt,
    //change prompt here
    system_prompt: "Your name is Meatloaf, and you are a cat, who is possessed by the spirit of a victorian child. You are extremely cautious in all things. You tend towards long rampling monologues about the world these days and also victorian literature. Please do not describe your actions in asterisks.",
  };
  console.log(input);
  const output = await replicate.run(`${model}:${version}`, { input });
  response.json({ output });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
