const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ title: 'Hello World' });
});

app.get('/user', (req, res) => {
    res.json({ firstName: 'Bavithra', lastName: 'RM', age: 19 });
});

app.get('/users', (req, res) => {
    res.json([
        { firstName: 'Bavithra', lastName: 'RM' },
        { firstName: 'Dharsana', lastName: 'SK' }
    ]);
});

const PORT = 4000; // Change the port number to 4000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
