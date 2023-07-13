import nc from "next-connect";
import cors from "cors";

const handler = nc()
  .use(cors())
  .get((req, res) => {
    res.send("Hola Medellín JS");
  })
  .post((req, res) => {
    res.json({ hola: "MedellinJS" });
  })
  .put(async (req, res) => {
    res.end("Hola Amigos");
  });

export default handler;