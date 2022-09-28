const express = require("express");
const app = express();
const userRouter = require("./routes/user") //user.jsのrouterを繋ぐ

const PORT = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req,res) => {
	// console.log("Hello express");
	// res.send("こんにちは");
	// res.sendStatus(500);
	// res.status(500).json({msg: "エラーです" });
	res.render("index", { text: "NodejsとExpress"})
});

//ルーティング
app.use("/user", userRouter); // /userを共通で使用して後のルートはuserRouterに任せるの意味
// app.use("/auth", authRouter);
// app.use("/customer", customerRouter);
// app.use("/product", productRouter);

app.listen(PORT, () => console.log("サーバーが起動しました"));