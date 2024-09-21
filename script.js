function calculateXP() {
    const xpPerLevel = 50;
    const maxXP = 2000;

    // Get input values
    const currentLevel = parseInt(document.getElementById('currentLevel').value, 10);
    const targetLevel = parseInt(document.getElementById('targetLevel').value, 10);

    // Validate input levels
    if (targetLevel <= currentLevel) {
        document.getElementById('result').innerText = 'Target level must be greater than current level.';
        return;
    }

    // Calculate total XP needed to reach the target level
    let xpRequired = 0;

    for (let level = currentLevel + 1; level <= targetLevel; level++) {
        let xpForLevel = xpPerLevel * level;
        if (xpForLevel > maxXP) {
            xpForLevel = maxXP;
        }
        xpRequired += xpForLevel;
    }

    document.getElementById('result').innerText = `XP needed to reach level ${targetLevel} from level ${currentLevel} is: ${xpRequired}`;
}
