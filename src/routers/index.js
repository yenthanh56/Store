const siteRouter = require('./site');
const telephoneRouter = require('./telephone')

function router(app) {
    app.use('/telephone', telephoneRouter)
    app.use('/', siteRouter);
}
module.exports = router;