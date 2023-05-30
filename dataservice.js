const jwt = require("jsonwebtoken");

const database = require("./database");


const register = (usid,email,pswd) => {

    return database.Movie.findOne({
      user_id:usid,

    }).then((acc) => {
      console.log(acc);
      if (acc) {
        return {
          status: false,
          message: "account already exist!...please login!",
          statusCode: 404,
        };
      } else {
        let movie = new database.Movie({
          user_id:usid,
          email:email,
          password:pswd
        });
        console.log(movie)
        movie.save();
        return {
          status: true,
          message: "Registration completed",
          statusCode: 201,
        };
      }
    });
  };

  const login = (usid, pswd) => {
    return database.Movie.findOne({
      user_id:usid,
      password: pswd,
    }).then((res) => {
      console.log(res +"from login in ds")
      if (res) {
        console.log(res)
        currentUser = res.email;
        currentUserId = usid;
        token = jwt.sign(
          //acno of current user
          { currentUserId :usid
           },
          "secretsuperkey1234"
        );
        return {
          status: true,
          message: "Login successfull",
          statusCode: 200,
          currentUser,
          currentUserId,
          token,
        };
      } else {
        return {
          status: true,
          message: "invalid password or account number",
          statusCode: 400,
        };
      }
    });
  };


  module.exports = {
    register,
    login,
   
   
  };
  