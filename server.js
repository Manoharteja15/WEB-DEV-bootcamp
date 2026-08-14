const express = require("express");

const app = express();

const port = process.env.PORT || 8080;

// Serve frontend files
app.use(express.static("front end"));

// Users
const users = [
    {
        id: 1,
        name: "john",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/18.jpg"
    },
    {
        id: 2,
        name: "amber",
        gender: "female",
        image: "https://randomuser.me/api/portraits/women/43.jpg"
    },
    {
        id: 3,
        name: "lily",
        gender: "female",
        image: "https://randomuser.me/api/portraits/women/26.jpg"
    },
    {
        id: 4,
        name: "juan",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/88.jpg"
    },
    {
        id: 5,
        name: "valtteri rantala",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        id: 6,
        name: "sophia",
        gender: "female",
        image: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
        id: 7,
        name: "liam",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/34.jpg"
    },
    {
        id: 8,
        name: "chloe",
        gender: "female",
        image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        id: 9,
        name: "mateo",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        id: 10,
        name: "zara",
        gender: "female",
        image: "https://randomuser.me/api/portraits/women/81.jpg"
    }
];

// Find user index by ID
function findIndex(id) {
    for (let i = 0; i < users.length; i++) {
        if (id === users[i].id) {
            return i;
        }
    }

    return -1;
}

// Get all users
app.get("/api/users", function (req, res) {
    return res.json(users);
});

// Get one user
app.get("/api/users/:id", function (req, res) {
    const id = Number(req.params.id);
    const index = findIndex(id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found with id: " + id
        });
    }

    return res.json(users[index]);
});

// Get random user
app.get("/api/random-user", function (req, res) {
    const randomIndex = Math.floor(Math.random() * users.length);

    return res.json(users[randomIndex]);
});

// Start server
app.listen(port, function () {
    console.log(`Server is running at http://localhost:${port}`);
});