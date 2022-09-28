const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
	res.send(" ユーザーです ");
});

router.get("/info", (req,res) => {
	res.send(" ユーザー情報です ");
});

//ランダムなid作成
router.delete("/:id", (req,res) => {
	res.send(`${res.params.id}のユーザー情報を取得しました`);
});

module.exports = router ; //routerをどこでも使えるようにする。