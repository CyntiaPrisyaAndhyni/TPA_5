const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {

    register: (req, res) => {
        const data = req.body;

        const saltRounds = 10;
        const hash = bcrypt.hashSync(data.password, saltRounds);
        data.password = hash;

        const user = new User(data);

        user.save();

        res.json({
        message: "Pendaftaran Berhasil!",
    });
    },
  
    login: async (req, res) => {
        const data = req.body;
        const user = await User.findOne({email: data.email});
        const KEY = "asdfjsdaklf234234";
        
        const passcheck = bcrypt.compareSync(data.password, user.password)

        const token = jwt.sign(
            {
            email : data.email,
            password : data.password
            },
            KEY,
            {expiresIn: "2m"}
        );

        if (passcheck) {
            res.json({
            message: "success login",
            token,
            });
        } else {
            res.status(401).json({
            message: "email or password are incorrect",
            });
        }
    }

  
    // addUser: (req, res) => {
    //     const data = req.body
    //     const user = new User(data)
    //     user.save()

    //     res.json({
    //         message : "data has been created!",
    //     })
    // },  
}