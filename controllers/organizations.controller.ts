module.exports = (req, res) => {
    res.send([
        {
            id: 1,
            title: "Organization 1"
        },
        {
            id: 2,
            title: "Organization 2"
        }
    ]);
};