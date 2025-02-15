function createCharacter() {
    if (document.getElementById("name").value.trim() === ""){
        document.getElementById("createCharacter").innerText = "Missing Requirements";
        document.getElementById("name").style.backgroundColor = "rgb(255, 147, 147)";
        document.getElementById("name").placeholder = "Required..."
        setTimeout(() => {
            document.getElementById("createCharacter").innerText = "Create Character";
            document.getElementById("name").style.backgroundColor = "rgb(81, 89, 104)";
            document.getElementById("name").placeholder = "Enter Your Name..."
        }, 2500);
    }
    else {
        let player = Object();
        player.name = document.getElementById("name").value;
        player.userClass = document.getElementById("class").value;
        player.gold = 0;
        player.health = 100;
        player.maxHealth = 100;
        player.strenght = 10;
        player.speed = 50;
        player.defense = 0;
        player.level = 1;
        player.inventory = {};
        localStorage.setItem('playerStat', JSON.stringify(player));
        window.location.assign("../../html/game/user-info.html");
    }
}