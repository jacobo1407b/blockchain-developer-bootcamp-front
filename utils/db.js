const {connect } = require('mongoose');

connect(process.env.urldb, {}).then(() => {
    console.log('Datebase is connect successfully')
}).catch(err => {
    console.log(err)
})

