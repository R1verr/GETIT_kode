let pointsValue = 0;
let powerLevel = 1;

document.getElementById('current-count').innerHTML = pointsValue + " points!";

function humanClicker() {
    pointsValue+=powerLevel;
    document.getElementById('current-count').innerHTML = pointsValue + " points!";

}
