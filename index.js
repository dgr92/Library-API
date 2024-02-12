const server = require('./src/app');

const { PORT } = require('./src/config');

server.listen(PORT, () => {
  console.log(`Server listening at --> http:localhost:${PORT}`);
});
