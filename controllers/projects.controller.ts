module.exports = (req, res) => {
    res.send([
        {
            id: 1,
            title: "Project 1"
        },
        {
            id: 2,
            title: "Project 2"
        }
    ]);
};