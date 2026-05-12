const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));

const url = 'mongodb://admin:password@mongo/?authSource=admin';
const client = new MongoClient(url);

async function getDb() {
  await client.connect();
  return client.db('user-account');
}

app.get('/get-profile', async (req, res) => {
  try {
    const db = await getDb();

    const user = await db.collection('users').findOne({ userid: 1 });

    res.json(user || {
      userid: 1,
      name: 'Anna Samson',
      email: 'anna.samson@example.com',
      interests: 'coding'
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});

app.post('/update-profile', async (req, res) => {
  try {
    const db = await getDb();

    const userObj = {
      userid: 1,
      name: req.body.name,
      email: req.body.email,
      interests: req.body.interests,
      updatedAt: new Date()
    };

    await db.collection('users').updateOne(
      { userid: 1 },
      { $set: userObj },
      { upsert: true }
    );

    await db.collection('profile_changes').insertOne({
      userid: 1,
      name: userObj.name,
      email: userObj.email,
      interests: userObj.interests,
      changedAt: new Date()
    });

    res.json(userObj);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});