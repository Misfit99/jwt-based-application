const usersDataBase = require('./users.mongo');

async function findUser(userEmail) {
    const userData = usersDataBase.findOne({
        email: userEmail,
    });

    if (!userData) {
        throw new Error('User Not Found');
    }
    return userData;
}

async function registerUser(userData) {
    await findUser(userData.email);
    await usersDataBase.create({
        email: userData.email,
        password: userData.password,
    });
}

module.exports = {
    findUser,
    registerUser,
}