let express = require('express');
let app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

app.listen(3000, () => {
  console.log(`server is running on port ${port}`);
});
