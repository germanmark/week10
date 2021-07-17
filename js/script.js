
/**
 * This function takes the color that is passed to it and applies it to the element with the specified ID
 * @param {string} columnID the ID of the column to color
 * @param {string} color the color string
 */
function changeBackground(columnID, color){
    document.getElementById(columnID).style.backgroundColor=color;
}

/**
 * This function will fetch the user's input from the input box and return the string value of the input
 * @param {string} columnID the ID of the column whose input we should fetch
 * @returns a string equal to the user's input at the time of invocation
 */
function getUserColor(columnID){
    var inputColor = document.getElementById(columnID).firstElementChild.value;
    return inputColor;
}

/**
 * This function will be used to fetch and apply the user selected color when the button is clicked
 * @param {string} columnID the ID of the column that the user interacts with
 */
function getApplyUserColor(columnID){
    var color = getUserColor(columnID);
    changeBackground(columnID, color);
}