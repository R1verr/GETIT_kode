let pointsValue = 0;
let powerLevel = 1;

document.getElementById('current-count').innerHTML = pointsValue + " points!";

function humanClicker() {
    pointsValue+=powerLevel;
    document.getElementById('current-count').innerHTML = pointsValue + " points!";
    
        if (pointsValue === 10) {
        powerLevel += 1;
        document.getElementById('power-up').innerHTML = 'Current powerlevel ' + powerLevel + ', so strong!';
    }
   
    if (pointsValue === 100) {
        powerLevel += 3;
        document.getElementById('power-up').innerHTML = 'Current powerlevel ' + powerLevel + ', keep at it!';
    } 
    
    if (pointsValue === 1000) {
        powerLevel += 95;
        document.getElementById('power-up').innerHTML = 'Current powerlevel ' + powerLevel + ', super strength!';
    }    
    
    if (pointsValue === 10000) {
        powerLevel ++;
        document.getElementById('power-up').innerHTML = "Wow, you're still here?";
    }
}
