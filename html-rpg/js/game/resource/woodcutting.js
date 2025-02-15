import {add_item} from '../inventory/inventory.js';

let wood_list = {
    "Oak": {"rate": 1, "rarity": "Common", "type": "Material"},
    "Pine": {"rate": 3, "rarity": "Common", "type": "Material"},
    "Maple": {"rate": 3, "rarity": "Uncommon", "type": "Material"},
    "Birch": {"rate": 4, "rarity": "Uncommon", "type": "Material"},
    "Teak": {"rate": 4, "rarity": "Rare", "type": "Material"},
    "Mahogany": {"rate": 6, "rarity": "Rare", "type": "Material"},
    "Cedar": {"rate": 5, "rarity": "Rare", "type": "Material"},
    "Redwood": {"rate": 7, "rarity": "Epic", "type": "Material"},
    "Cherry": {"rate": 8, "rarity": "Uncommon", "type": "Material"},
    "Narra": {"rate": 10, "rarity": "Legendary", "type": "Material"}
};

window.onload = function() {    
    let container = document.getElementById("woods");

    for (let i in wood_list) {
        let box_container = document.createElement("div");
        box_container.className = "resource-container";

        let display = document.createElement("div");
        display.className = "display";

        let title = document.createElement("h1");
        title.textContent = `${i} Wood`;
        
        let description = document.createElement("p");
        description.textContent = `every ${wood_list[i]["rate"]} second`;
        
        let button = document.createElement("button");
        button.textContent = "Start Chopping";
        button.onclick = () => chop_wood(i);
        
        display.appendChild(title);
        display.appendChild(description);
        display.appendChild(button);
        box_container.append(display);
        container.appendChild(box_container);
    };
};
let current_wood = null;
let current_interval = null;

function start_chop(wood) {
    current_interval = setInterval(() => {
        add_item(wood,1)
    }, wood_list[wood]["rate"] * 1000);
}

function stop_chop() {
    if (current_interval) {
        clearInterval(current_interval);
        current_interval = null;
    }
}

function chop_wood(wood) {
    if (current_wood === wood) {
        stop_chop();
        current_wood = null;
    } else {
        if (current_wood) {
            stop_chop();
        }
        current_wood = wood;
        start_chop(wood);
    }
}