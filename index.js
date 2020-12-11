const express = require("express")
const app = express()
const fs = require("fs")

app.get("/",(req,res) {
	return res.json({"hello":"world"})
})

app.listen(process.env.PORT || 3000)
