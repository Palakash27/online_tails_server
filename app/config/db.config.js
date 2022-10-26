const username = "root";
const password = "root";
const cluster = "cluster0.wt4mwja";
const dbname = "onlineTalesdb";

module.exports = {
    url: `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
};
