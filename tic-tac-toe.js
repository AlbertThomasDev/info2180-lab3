document.addEventListener('DOMContentLoaded', function() {
    function game() {
        const box = document.querySelectorAll("#board > div");
        box.forEach(box => {
            box.setAttribute("class", "square");
        });
        // document.getElementById("board").setAttribute("class", "square");
        
    }
    game();
});