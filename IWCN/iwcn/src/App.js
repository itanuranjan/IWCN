import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/post', { phonenumber: phoneNumber }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            setResponseData(response.data);
            setError('');
            console.log('Response Headers:', response.headers);
        } catch (error) {
            console.error('Error:', error);
            setError('Error occurred while fetching data from the API.');
        }
    };

    return (
        <div>
            <h1>Post Phone Number to API</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Phone Number:
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
            {responseData && (
                <div>
                    <h2>Response from API:</h2>
                    <pre>{JSON.stringify(responseData, null, 2)}</pre>
                    {responseData.Phoneorigen && (
                        <div>
                            <h3>Phoneorigen:</h3>
                            <p>{responseData.Phoneorigen}</p>
                        </div>
                    )}
                    
                    
                </div>
            )}
            {error && (
                <div>
                    <h2>Error:</h2>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
}

export default App;
