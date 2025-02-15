let player = JSON.parse(localStorage.getItem("playerStat"));

window.addEventListener('beforeunload', function() {
    this.localStorage.setItem('playerStat', JSON.stringify(player));
});

function add_item(item, amount) {
    if (item in player.inventory) {
        player.inventory[item] += amount;
    }
    else {
        player.inventory[item] = amount;
    };
    console.log(player.inventory);
}
function use_item(item,amount) {
    if (item in player.inventory) {
        if (player.inventory[item] >= amount) {
            player.inventory[item] - amount
        }
        else {
            return `player does not have enough items.`;
        }
    }
    else {
        return `player does nt have any ${item}.`;
    }
}
export{add_item,use_item}