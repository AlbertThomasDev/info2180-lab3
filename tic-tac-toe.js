document.addEventListener('DOMContentLoaded', function() {
    const state = ["", "", "", "", "", "", "", "", ""];
    current_val = "X";
    winnerfound = false;

    const win_com = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    
    function game() {
        box = document.querySelectorAll("#board > div");
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
                    if(state[index] == ""){
                        state[index] = current_val;
                    }
                        
                    
                    if(current_val == "X"){
                        box.classList.add("square", "X");
                    }else{
                        box.classList.add("square", "O");
                    }
                            
                    console.log("State:", state);

                    if (current_val == "X"){
                        current_val = "O";
                    }else{
                        current_val = "X";
                    }

                    for (let i = 0; i < win_com.length; i++) {
                        
                        // console.log(state[win_com[i][0]])
                        // console.log(state[win_com[i][1]])
                        // console.log(state[win_com[i][2]])
                        if(winnerfound != true){
                            if(state[win_com[i][0]] != "" && state[win_com[i][1]] != "" && state[win_com[i][2]] != ""){
                                if(state[win_com[i][0]] == state[win_com[i][1]] && state[win_com[i][0]] == state[win_com[i][2]] && state[win_com[i][1]] == state[win_com[i][2]]){
                                    // console.log("Winner detected");
                                    // console.log("Congratulations! " + state[win_com[i][0]] + " is the Winner!");
                                    winner_msg = document.getElementById('status');
                                    winner_msg.innerHTML = "Congratulations! " + state[win_com[i][0]] + " is the Winner!";
                                    winner_msg.classList.add("#status","you-won");
                                    winnerfound = true;
                                    break;
                                }
                            }
                        }
                        
                     
                    }
                    
                    

                        
                }
            
            });
        });
        // document.getElementById("board").setAttribute("class", "square");
        
        newgame = document.querySelector("button");
        newgame.addEventListener('click', function() {
            location.reload();
            // console.log("newgame button pressed");
                                
        });
        
    }
    game();
});