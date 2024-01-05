import { fileURLToPath } from "url";
import path from "path";
import express from "express";
import { LlamaModel, LlamaContext, LlamaChatSession } from "node-llama-cpp";

const app = express();
const port = 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const model = new LlamaModel({
    modelPath: path.join(__dirname, "models", "vicuna-7b-16k-q4_k_s")
});
const context = new LlamaContext({ model, threads: 8 });
const session = new LlamaChatSession({ context });

app.use(express.json());

app.post('/ask', async (req, res) => {
    try {
        const userQuestion = req.body.question;
        console.log("User: " + userQuestion);

        const answer = await session.prompt(userQuestion);
        console.log("AI: " + answer);

        res.json({ question: req.body.question, answer });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
