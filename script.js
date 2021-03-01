const firstName = document.getElementById("firstname"); 
const startingBid = document.getElementById("startingbid"); 
const education = document.getElementById("education"); 
const networth = document.getElementById("networth"); 
const skills = document.getElementsByClassName("skills"); 
const age = document.getElementsByName("age");
const button = document.getElementById("submit");
const love_letter = document.getElementById("love_letter");

const reputation = document.getElementsByClassName("reputation");

const calculate = () => {
    let name = firstName.value; 
    let price = Number(startingBid.value); 
    let loveletter = love_letter.value;
    if (name != "") { 
        price = getNewPrice(price, education);
        price = getNewPrice(price, networth);
        price = getCheckboxValuesForLoop(reputation, price);
        price = getCheckboxValuesForLoop(skills, price);
        price = getRadioValue(age, price);
        
        let person = {
            full_name: name,
            final_price: price,
            loveLetter: loveletter
        }
        document.getElementById("result").innerHTML = `The price for ${person.full_name} is ${person.final_price}. Your love letter is ${person.loveLetter}`;
    }
    else {
        alert("Name and starting bid cannot be empty");
    }
}

const getNewPrice = (price, criteria) => {
    return price * Number(criteria.value);
}


const getCheckboxValuesForLoop = (html_collection, price) => { 
	for (let i=0; i < html_collection.length; i++) {  
		if (html_collection[i].checked && Number.isInteger(Number(html_collection[i].value))) {
			price = price + Number(html_collection[i].value)
		}
		else if (html_collection[i].checked && !Number.isInteger(html_collection[i].value)) {
			price = price * Number(html_collection[i].value)
		}
	}
	return price;
}

const getCheckboxValuesFilterReduce = (html_collection, price) => { 
    let list = Array.from(html_collection).filter(filteration) 
    let result = list.reduce(reducer, price)
    return result;
}

const reducer = (accumulator, item) => {
    return accumulator + Number(item.value);
}
const filteration = (item) => {
    return item.checked;
}

const getRadioValue = (node_list, price) => {  
    node_list.forEach(item => {
        if (item.checked) {
            price = price * Number(item.value)
        }
    })
    return price;
}

button.addEventListener("click", calculate)


