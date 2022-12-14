import axios from "axios";
const API_URL = "http://localhost:3000/api/user/login/";

const login = (data) => {
    return axios
      .post(API_URL , data)
      .then((response) => {
        if (response.data.name) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  };

const getCurrentUser = () => {
  if(localStorage.getItem("user"))
    return JSON.parse(localStorage.getItem("user"));
  else return 1;
};

const logout = () => {
  localStorage.removeItem("user");
  return console.log("Çıkış Yapıldı");
};

const AuthService = {
  login,
  logout,
  getCurrentUser
}
  export default AuthService;