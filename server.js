const express = require("express")
const cors = require("cors");
const app = express()
const PORT = process.env.PORT || 5000

// Lista de origens permitidas (inclui variável de ambiente FRONTEND_URL para deploy no Render)
const allowedOrigins = [
  "https://projeto-simples-front2026-tau.vercel.app",
  "https://glorious-fortnight-977w7rgx56rp3pvrw-8080.app.github.dev",
  process.env.FRONTEND_URL,
].filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    // Permite requisições sem origin (como mobile, curl, Postman),
    // origens da lista, localhost, Codespaces e qualquer domínio do Vercel (*.vercel.app)
    if (
      !origin ||
      allowedOrigins.includes(origin) ||
      origin.endsWith(".vercel.app") ||
      origin.includes("localhost") ||
      origin.includes("127.0.0.1") ||
      origin.includes(".app.github.dev")
    ) {
      return callback(null, true);
    }
    return callback(new Error(`Origem não permitida pelo CORS: ${origin}`));
  },
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({ message: "API funcionando via GitHub Codespace..." })
})

// rota v1
app.get("/v1", (req, res) => {
  // cria uma data com o momento atual da chamada da rota
  // o timezone america/sao_paulo ajusta a data e hora para o horário de brasília
  const datahora = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo"
  })

  // retorna uma resposta em formato json
  res.json({
    message: "Api v1 respondendo no container docker...",
    chamada_em: datahora
  })
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})