const axios = require('axios');

exports.getRecommendations = async (req, res) => {
    try {
        const userData = req.body;

        // Example call to an AI API
        const response = await axios.post('https://api.example.com/get-recommendations', userData, {
            headers: {
                'Authorization': `Bearer YOUR_API_KEY`
            }
        });

        res.status(200).send(response.data);
    } catch (error) {
        res.status(500).send({ message: 'Error getting recommendations', error });
    }
};