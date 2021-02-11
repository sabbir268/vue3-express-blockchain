import axios from "axios";

// production mode
const baseURL = "http://localhost:3331";

// auth token
const authToken = localStorage.getItem("token");

export default axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
        Authorization: `${authToken ? "Token " + authToken : ""}`,
    },
    // You can add your headers here
});