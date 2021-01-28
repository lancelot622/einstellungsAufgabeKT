import bb from "../images/blueberry.png";
import cherry from "../images/cherry.png";
import mango from "../images/mango.png";
import pf from "../images/passionfruit.png";
import pear from "../images/pear.png";
import pa from "../images/pineapple.png";



const data = [
    {title: "Pear", weight: {value: 1, unit: "fruit"}, image: pear, backgroundColor: "#cc9900", price: 256},
    {title: "Pineapple", weight: {value: 1, unit: "fruit"}, image: pa, backgroundColor: "#ffff00", price: 488},
    {title: "Blue Berries", weight: {value: 1, unit: "basket"}, image: bb, backgroundColor: "#003399", price: 299},
    {title: "Cherries", weight: {value: 200, unit: "grams"}, image: cherry, backgroundColor: "#990000", price: 290},
    {title: "Mango", weight: {value: 1, unit: "fruit"}, image: mango, backgroundColor: "#ffcc00", price: 190},
    {title: "Passion fruit", weight: {value: 3, unit: "fruits"}, image: pf, backgroundColor: "#ff9900", price: 499},
]

export default data;