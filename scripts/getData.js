

function getTasks() {
    const currentSpaceName = localStorage.getItem("openSpace");
    const currentSpaceObj = JSON.parse(localStorage.getItem(currentSpaceName));
    return currentSpaceObj.tasks;
}


export { getTasks }