document.addEventListener('DOMContentLoaded', function() {
    const state = ["", "", "", "", "", "", "", "", ""];
    current_val = "X"

    function game() {
        const box = document.querySelectorAll("#board > div");
        box.forEach((box,index) => {
            box.setAttribute("class", "square");

            box.addEventListener('mouseover', function () {
                box.classList.add('hover');
                
            });

            box.addEventListener('mouseout', function () {
                box.classList.remove('hover');
                
            });

            box.addEventListener('click', function () {
            
                if (!state[index]) {
                    box.innerHTML = current_val;
                    state[index] = current_val;
                    
                    if(current_val == "X"){
                        box.classList.add("square", "X");
                    }else{
                        box.classList.add("square", "O");
                    }
                            
                    console.log("State:", state);

                    if (current_val == "X"){
                        current_val = "O"
                    }else{
                        current_val = "X"
                    }
                        
                }
            });
        });
        // document.getElementById("board").setAttribute("class", "square");
        
    
        
    }
    game();
});