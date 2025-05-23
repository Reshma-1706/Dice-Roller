function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value; // Fix 1
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1; // Fix 2
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`); // Fix 3
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`; // Fix 4
    diceImages.innerHTML = images.join('');
}
