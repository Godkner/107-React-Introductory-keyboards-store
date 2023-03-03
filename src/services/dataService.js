import axios from "axios";

var catalog=[
    {
        "title": "Ducky one 3 mini black 60%",
        "category": "Keyboard",
        "price": 119.00,
        "image": "Ducky3black.png",
        "_id": "00001"
    },
    {
        "title": "Ducky one 3 mini white 60%",
        "category": "Keyboard",
        "price": 119.00,
        "image": "Ducky3white.jpg",
        "_id": "00002"
    },
    {
        "title": "Ducky one 3 matcha TKL Hotswap",
        "category": "Keyboard",
        "price": 109.00,
        "image": "Ducky3matcha.jpg",
        "_id": "00003"
    },
    {
        "title": "Vortex Race 3 RGB LED TKL ",
        "category": "Keyboard",
        "price": 159.00,
        "image": "vortex3.jpg",
        "_id": "00004"
    },
    {
        "title": "108 Key PBT Seamless Double Shot Keycap Set- Joker (Ducky)",
        "category": "Keycaps",
        "price": 54.00,
        "image": "joker.jpg",
        "_id": "00005"
    },
    {
        "title": "22 Key TPR Backlit Double Shot Keycap Set-MK Purple(Tai-Hao)",
        "category": "Keycaps",
        "price": 26.00,
        "image": "taihao.jpg",
        "_id": "00006"
    },
    {
        "title": "4 key TPR Rubber Backlit Keycap Set Row 1 -ZXCV Neon Blue (Tai-Hao)",
        "category": "Keycaps",
        "price": 10.00,
        "image": "4key.png",
        "_id": "00007"
    },
    {
        "title": "Cherry MX Red Switches PCB Mount- Linear- 10 Pack (Cherry)",
        "category": "Switches",
        "price": 3.99,
        "image": "redmx.png",
        "_id": "00008"
    },
    {
        "title": "Cherry MX Blue Switches PCB Mount- Tactile, Click- 10 Pack (Cherry)",
        "category": "Switches",
        "price": 3.99,
        "image": "bluemx.png",
        "_id": "00009"
    },
    {
        "title": "Cherry MX Brown Switches PCB Mount- Tactile - 10 Pack (Cherry)",
        "category": "Switches",
        "price": 3.99,
        "image": "brownmx.png",
        "_id": "00010"
    }
];



class DataService {

    async getProducts() {
        let response = await axios.get("http://127.0.0.1:5000/api/catalog");
        console.log(response.data);
        // TODO: connect to server and retrive to products to display

        // use th line below to test w/o a server

        // return catalog;
        return response.data;
    }

    async saveProduct(product){
        let response = await axios.post("http://127.0.0.1:5000/api/catalog",product);
         
        return response.data;

    }


}


export default DataService;