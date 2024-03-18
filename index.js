// const express = require('express');
// const app = express();

// app.use(express.json);

// app.post("/bfhl",(req,res)=>{
//     const{arr}= req.body;
//     let odd = [];
//     let even = [];
//     let alph = [];
//     arr.map
// });



// app.listen(3000,(req,res)=>{
//     console.log("Port is Running");
// })


const express = require('express');
const bodyParser = require('body-parser');


// Create Express app
const app = express();
app
    .use(express.json({ limit: '20MB' }))
    .use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
    .post('/bfhl', (req, res) => {
        try{
        const {data=[]} = req.body; // let data=[“a”,”1”,”334”,”4”,”R”]
        if (!data.length) {
            res.status(400).json({
                is_success: false,
                message: "Invalid data"
            });
            return;
        }
        let odd_numbers = [];
        let even_numbers = [];
        let alphabets = [];
        data.forEach((item) => {
            if (isNaN(item)) {
                alphabets.push(item.toUpperCase());
            } else {
                if (item % 2 === 0) {
                    even_numbers.push(item);
                } else {
                    odd_numbers.push(item);
                }
            }
        });
        res.json({
            is_success: true,
            user_id: "Nutika",
            email: "nutika0975.be21@chitkara.edu.in",
            roll_number: "2110990975",
            odd_numbers,
            even_numbers,
            alphabets

        });
    }catch(err){
        res.status(500).json({
            is_success: false,
            message: "Internal server error"
        });
    }
    });

const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});