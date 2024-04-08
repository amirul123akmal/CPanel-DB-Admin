module.exports = global.config = {
    endpoint: (process.env.NODE_ENV === "development" ? "http://localhost/cpanel-db-admin" : "") + '/api/connection'
};