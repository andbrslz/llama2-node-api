import { fileURLToPath } from "url";
import path from "path";
import express from "express";
import { LlamaModel, LlamaContext, LlamaChatSession } from "node-llama-cpp";

const app = express();
const port = 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const model = new LlamaModel({
    // modelPath: path.join(__dirname, "models", "llama-2-7b.Q4_K_M.gguf")
    modelPath: path.join(__dirname, "models", "llama-2-13b-ensemble-v6.Q3_K_L.gguf")
});
const context = new LlamaContext({ model, threads: 4 });
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
