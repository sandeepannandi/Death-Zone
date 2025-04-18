// Function to apply poison effect to player
function applyPoisonEffect() {
    // Only apply if not already poisoned
    if (!isPoisoned) {
        isPoisoned = true;
        poisonTimeRemaining = 15; // 15 seconds of poison
        poisonDamageTimer = 0; // Start damage timer
        
        // Create visual indicator for poisoned state
        showPoisonEffect();
        
        console.log("Player poisoned! Effect will last for 10 seconds");
    }
}

// Function to show poison visual effect
function showPoisonEffect() {
    // Create green overlay to indicate poisoned state
    const poisonOverlay = document.createElement("div");
    poisonOverlay.id = "poisonOverlay";
    poisonOverlay.style.position = "absolute";
    poisonOverlay.style.top = "0";
    poisonOverlay.style.left = "0";
    poisonOverlay.style.width = "100%";
    poisonOverlay.style.height = "100%";
    poisonOverlay.style.backgroundColor = "rgba(178, 255, 172, 0.1)";
    poisonOverlay.style.pointerEvents = "none";
    poisonOverlay.style.zIndex = "500";
    document.body.appendChild(poisonOverlay);
}

// Function to remove poison visual effect
function removePoisonEffect() {
    const poisonOverlay = document.getElementById("poisonOverlay");
    if (poisonOverlay) {
        document.body.removeChild(poisonOverlay);
    }
}
