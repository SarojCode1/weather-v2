
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


const app = express();
const port = 5000;

app.use(express.json());


app.get("/message", (req, res) => {
    res.json({ message: "Hello from server!" });
});


const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(11);
    const encrypted_password = await bcrypt.hash(password, salt);
    return encrypted_password;
};


app.post('/api/register', async (req, res) => {
    console.log(req.body);
    try {
        let { email, password, name } = req.body;
        password = await encryptPassword(password)
        const user = await User.create({ email, password, name });
        const token = jwt.sign({ userId: user._id }, 'mysecretkey');
        res.status(201).json({
            user: {
                email: user.email,
                name: user.name,
                password: user.password
            },
            token

        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);
        const user = await User.findOne({ email });
        if (!user) throw new Error('User not found');
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) throw new Error('Incorrect password');
        const token = jwt.sign({ userId: user._id }, 'mysecretkey');
        res.status(200).json({ user, token });
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
});

mongoose.connect('mongodb+srv://sarojcode1:iEhp838nXZpiKCI3@products.lgc7fhd.mongodb.net/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

app.listen(port, () => console.log(`Server listening on port ${port}`));
