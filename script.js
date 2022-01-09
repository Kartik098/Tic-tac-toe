const heading = document.querySelector(".heading")
const reset = document.querySelector(".reset-btn")
const cells = document.querySelectorAll(".cell")
    
var isXturn = true;
var count = 0;
function checkgamestatus(){
    var index0Classlist =cells[0].classList;
    var index1Classlist =cells[1].classList;
    var index2Classlist =cells[2].classList;
    var index3Classlist =cells[3].classList;
    var index4Classlist =cells[4].classList;
    var index5Classlist =cells[5].classList;
    var index6Classlist =cells[6].classList;
    var index7Classlist =cells[7].classList;
    var index8Classlist =cells[8].classList;
    if(index0Classlist.contains("O")){
        if(index1Classlist.contains("O") && index2Classlist.contains("O")){
            alert("O won");
        }
    } else if(index1Classlist.contains("O")){
        if(index4Classlist.contains("O") && index7Classlist.contains("O")){
            alert("O won");
        }
    }   else if(index2Classlist.contains("O")){
        if(index5Classlist.contains("O") && index8Classlist.contains("O")){
            alert("O won");
        }
        else if(index0Classlist.contains("O")){
            if(index3Classlist.contains("O") && index6Classlist.contains("O")){
                alert("O won");
            }
    }   else if(index3Classlist.contains("O")){
        if(index4Classlist.contains("O") && index5Classlist.contains("O")){
            alert("O won");
        }
}      
else if(index6Classlist.contains("O")){
    if(index7Classlist.contains("O") && index8Classlist.contains("O")){
        alert("O won");
    }
} 
  else if(index0Classlist.contains("O")){
    if(index4Classlist.contains("O") && index8Classlist.contains("O")){
        alert("O won");
    }
}

  else if(index3Classlist.contains("O")){
    if(index4Classlist.contains("O") && index6Classlist.contains("O")){
        alert("O won");
    }
}  
       
    //For X
  else if(index0Classlist.contains("X")){
    if(index1Classlist.contains("X") && index2Classlist.contains("X")){
        alert("X won");
    }
} else if(index1Classlist.contains("X")){
    if(index4Classlist.contains("X") && index7Classlist.contains("X")){
        alert("X won");
    }
}   else if(index2Classlist.contains("X")){
    if(index5Classlist.contains("X") && index8Classlist.contains("X")){
        alert("X won");
    } 
}else if(index0Classlist.contains("X")){
        if(index3Classlist.contains("X") && index6Classlist.contains("X")){
            alert("X won");
        }
    }   else if(index3Classlist.contains("X")){
    if(index4Classlist.contains("X") && index5Classlist.contains("X")){
        alert("X won");
         }
    }      else if(index6Classlist.contains("X")){
    if(index7Classlist.contains("X") && index8Classlist.contains("X")){
    alert("X won");
        }
    }   else if(index0Classlist.contains("X")){
    if(index4Classlist.contains("X") && index8Classlist.contains("X")){
    alert("X won");
        }
    }  else if(index3Classlist.contains("X")){
if(index4Classlist.contains("X") && index6Classlist.contains("X")){
    alert("X won");
    }
}
    }
}
function cellhandler(event){
   const classList = event.target.classList;
   if(classList.length>1){
       return;
   }
   if(isXturn){
   classList.add("X");
   isXturn = !isXturn;
   heading.textContent ="O's turn"
   } else{
    classList.add("O");
    isXturn = !isXturn;
    heading.textContent ="X's turn"
   }
   count++;
   if(count>4){
   checkgamestatus()
   }
}
function resethandler(){
    window.location.reload(false)
}

    for(cell of cells){
        cell.addEventListener("click",cellhandler)
    }
  
   reset.addEventListener("click",resethandler)