const app = require('./src/app')
const port = 5000

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running at port ${port}.`)
})