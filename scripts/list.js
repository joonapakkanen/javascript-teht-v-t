function showGrid() {
    console.log("show grid button");
    document.getElementById('grid').classList.remove('list_view');
    document.getElementById('grid').classList.add('grid_view');
}

function showList() {
    document.getElementById('grid').classList.remove('grid_view');
    document.getElementById('grid').classList.add('list_view');
}
