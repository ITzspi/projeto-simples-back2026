const express = require("express")
const cors = require("cors");
const app = express()
const PORT = process.env.PORT || 5000

const corsOptions = {
  origin: [
    "https://projeto-simples-front2026-rho.vercel.app",
    "https://projeto-simples-front2026-tau.vercel.app",
    "https://glorious-fortnight-977w7rgx56rp3pvrw-8080.app.github.dev"
  ],
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