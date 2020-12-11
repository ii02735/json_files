const express = require("express")
const app = express()
const fs = require("fs")

app.get("/",(req,res) => {
	return res.json({"hello":"world"})
})

app.get("/books",(req,res) => {
	fs.readFile("json_files/file.json",(err,data) => {
            if(err)
		res.json({"message":"no books !"})
	    else
		res.json(JSON.parse(data))
	})
})

app.listen(process.env.PORT || 3000)
