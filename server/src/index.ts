import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.use("/api", ApiRouter);



app.get('/', (req, res) => {
  res.sendFile(path.join(__dir, "../", "app/index.html"))
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

