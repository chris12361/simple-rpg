let player = JSON.parse(localStorage.getItem("playerStat"));
window.onload = function() {
    document.getElementById("playerName").innerText = "Name: "+player.name;
    document.getElementById("playerClass").innerText = "Class: "+player.userClass;
    document.getElementById("playerLevel").innerText = "Level: "+player.level;
    document.getElementById("playerGold").innerText = "Gold: "+player.gold;
    document.getElementById("playerHealth").innerText = "Health: "+player.health;
    document.getElementById("playerStrenght").innerText = "Streght: "+player.strenght;
    document.getElementById("playerSpeed").innerText = "Speed: "+player.speed;
    document.getElementById("playerDefense").innerText = "Defense: "+player.defense;
}