const path = require('path');
const axios = require('axios');
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const buildPath = path.join(__dirname, '..', 'build');

app.use(express.static(buildPath));
app.use(cors());

app.get('/jobs', async (req, res) => {
  try {
    let { id = '', page = 1 } = req.query;
    id = id ? encodeURIComponent(id) : '';

    if (page) {
      page = parseInt(page);
      page = isNaN(page) ? '' : `&page=${page}`;
    }

    const query = `https://torre.co/api/opportunities?id=${id}${page}`;
    const result = await axios.get(query);
    res.send(result.data);
  } catch (error) {
    res.status(400).send('Error while getting list of jobs.Try again later.');
  }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
