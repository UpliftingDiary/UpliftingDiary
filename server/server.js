const postgres = require('postgres');
const express = require('express');

const app = express();
const PORT = 3000;

const sql = postgres({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    require: true,
  },
});

// app.use(express.json());

function getUsers() {
  console.log('inside get users function');
  const users = sql`
    select * from entry`;
  return users;
}

app.get('/entries', async (req, res) => {
  console.log('inside app get');
  const users = await getUsers;
  return res.status(200).json(users);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

// will use psql environment variables

// async function getUsers() {
//   const users = await sql`
//   select * from entry`;
//   return users;
// }
