exports.homePage = (req, res) => {
    res.sendFile('/home/sebastian/Dev/inventory/index.html')
}

exports.add_user = (req, res) => {
    res.sendFile('/home/sebastian/Dev/inventory/add-user.html')
}