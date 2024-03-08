const express = require("express")
const router = express.Router()
const Item = require("../models/item")  //new Item variable for new item route from model
const axios = require("axios")

// read items
router.get("/", async (req, res) => {
    if(req.query.search != null && req.query.search !== ""){
        let searchOptions = {}
        let searchReg = new RegExp(req.query.search, "i")
        searchOptions = {$or: [{idlm: {$regex: searchReg}}, {title: {$regex: searchReg}}]}
        try {
            const items = await Item.find(searchOptions)
            res.send(items)
        } catch (error){
            console.log(error)
            res.redirect("/")
        }
    } else {
        res.render("items/index")
    }
})
// // all items
// router.get("/", async (req, res) => {
//     let searchOptions = {}
//     if(req.query.search != null && req.query.search !== ""){
//         let searchReg = new RegExp(req.query.search, "i")
//         searchOptions = {$or: [{idlm: {$regex: searchReg}}, {title: {$regex: searchReg}}]}
//     }
//     try {
//         const items = await Item.find(searchOptions) //{$or: [{"idlm": searchOptions.search }, {"title": searchOptions.search}]})
//         // console.log(items + "   " + req.query)
//         res.render("items/index", {
//             items: items,
//             searchOptions: req.query
//         })
//     } catch (error){
//         console.log(error)
//         res.redirect("/")
//     }
// })

// router.get("/:id", (req, res) => {
//     let clickedItem = "m"
//     if(req.params.id != null && req.params.id !== "") {
//         clickedItem = req.params.id
//     }
//     res.send("items/item_table", {
//         clickedItem: clickedItem
//     })
// })

// new item
router.get("/new", (req, res) => {
    res.render("items/new", {item: new Item()})
})

// create item
router.post("/", async (req, res) => {
    const item = new Item({
        name: req.body.name
    })
    try {
        const newItem = await item.save()
        res.redirect(`items/${newItem.id}`)
    } catch {
        res.render("items/new", {
            item: item,
            errorMessage: "Error creating item"
        })
    }
})
// show created item

// delete item
router.delete("/:id", async (req, res) => {
    let item
    try {
      author = await Item.findById(req.params.id)
      await item.remove()
      res.redirect("/items")
    } catch {
      if (item == null) {
        res.redirect("/")
      } else {
        res.redirect(`/items/${item.id}`)
      }
    }
  })


module.exports = router