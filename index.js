const express = require('express')
const app = new express()

app.listen(4000, () => {
    console.log('Server running on PORT 4000...');
})