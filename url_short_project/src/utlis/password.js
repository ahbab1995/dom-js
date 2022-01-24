const crypto = require('crypto');

function getRendomSalt(){
    return crypto.randomBytes(8).toString('hex').slice(0,16)
}

function mix(password,salt) {
    return crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512').toString('hex')
}

function generate (password){
    let salt = getRendomSalt();
    let hash = mix(password,salt);
    return {salt,hash}
}

function valideta(password,hash,salt){
    let newHash = mix(password,salt);
    return newHash === hash;
}

module.exports = {generate,valideta}