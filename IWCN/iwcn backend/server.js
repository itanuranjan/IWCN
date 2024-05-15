const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors()); 

app.post('/api/post', async (req, res) => {
    const { phonenumber } = req.body;

    try {
        const response = await axios.post('https://chimpu.xyz/api/post.php', { phonenumber });

        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
