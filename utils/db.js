const {connect } = require('mongoose');

connect('mongodb+srv://root:root@cluster0.4bp1s.mongodb.net/bootcamp?retryWrites=true&w=majority', {}).then(() => {
    console.log('Datebase is connect successfully')
}).catch(err => {
    console.log(err)
})

