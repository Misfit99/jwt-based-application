const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {
    findUser,
    registerUser
} = require('../models/users.model');


async function httpUserRegister(req, res) {
    const user = req.body;
    console.log(req.body);
    if (!user.email || !user.password) {
        return res.status(400).json({
            error: 'Missing Some Properties',
        });
    }
    user.password = bcrypt.hashSync(req.body.password, 10);

    registerUser(user);

    const token = jwt.sign({
            user_id: user._id,
        },
        process.env.TOKEN_KEY, {
            expiresIn: "2h",
        }
    );
    // save user token
    user.token = token;

    // return new user
    res.status(200).send({ user: user, auth: true, token: token });
}

async function httpUserLogin(req, res) {
    const {email, password} = req.body;

    if(!email || !password) {
        res.status(400).send('All input is required');
    }

    const regUser = await findUser(email);

    if(await bcrypt.compare(password, regUser.password)) {
        const token = jwt.sign(
            { email: regUser.email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          );
    
          // save user token
          req.body.token = token;
          //console.log(token);
    
          // user
          res.status(200).send({ user: regUser, auth: true, token: token });
    }else{
        res.status(400).send("Invalid Credentials");
    }

}

module.exports = {
    httpUserRegister,
    httpUserLogin
}