export default class renderPages {
    static async homePage(req,res) {
        res.render('index')
    }
    static async add_user(req,res) {
        res.render('add-user')
    }
    static async searchItem(req,res) {
        res.render('search')
    }
}
/*
exports.homePage = (req, res) => {
    res.render('index')
}

exports.add_user = (req, res) => {
    res.render('add-user')
}
*/