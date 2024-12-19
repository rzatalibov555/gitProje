
var top_side = 0
var left_side = 0


onkeydown = (e) => {

    var person = document.getElementById("person")

    console.log(e.key.toLowerCase())
    let button = e.key.toLowerCase()
    if(button == "s"){
        top_side += 40
        person.style.top = top_side+"px"
        
        // top_side = top_side+20
    }

    if(button == "w"){
        top_side -= 40
        person.style.top = top_side+"px"  
    }


    if(button == "d"){
        person.style.transform = "rotateY(0deg)";
        left_side += 40
        person.style.left = left_side+"px"  
    }

    if(button == "a"){
        left_side -= 40
        person.style.transform = "rotateY(180deg)";
        person.style.left = left_side+"px"  
    }

















    // console.log(e.key + "=>" + e.code)
    // console.log(`${e.key} -> ${e.keyCode}`)

    // if(e.keyCode > 57 || e.keyCode < 48 || e.keyCode > 105 || e.keyCode < 96){
    //     document.body.style.background = "red"
    //     console.log(`${e.key} - Xeta! Herf daxil etmek olmaz!`)
    // }else{
    //     document.body.style.background = "green"
    //     console.log(`${e.key} -> ${e.keyCode}`)
    // }


    // switch (e.keyCode) {
    //     case 48:
    //     case 49:
    //     case 50:
    //     case 51:
    //     case 52:
    //     case 53:
    //     case 54:
    //     case 55:
    //     case 56:
    //     case 57:
    //         document.body.style.background = "green"
    //         console.log(`${e.key} -> ${e.keyCode}`)
    //         break;
    //     case 96:
    //     case 97:
    //     case 98:
    //     case 99:
    //     case 100:
    //     case 101:
    //     case 102:
    //     case 103:
    //     case 104:
    //     case 105:
    //     case 106:
    //     case 107:
    //         document.body.style.background = "purple"
    //         console.log(`${e.key} -> ${e.keyCode}`)
    //         break;
    //     default:
    //         document.body.style.background = "red"
    //         console.log(`${e.key} - Xeta! Herf daxil etmek olmaz!`)
    // }

    //  if(e.keyCode > 105 || e.keyCode < 96){
    //     document.body.style.background = "purple"
    //     console.log(`${e.key} - Xeta! Herf daxil etmek olmaz!`)
    // }else{
    //     document.body.style.background = "green"
    //     console.log(`${e.key} -> ${e.keyCode}`)
    // }


    // if( e.keyCode < 48 || e.keyCode > 57){
    //     document.body.style.background = "green"
    //     console.log(`${e.key} -> ${e.keyCode}`)
    // }else{
    //     document.body.style.background = "red"
    //     console.log(`${e.key} - Xeta! Herf daxil etmek olmaz!`)
    // }


    // onkeydown = function(a,b){

    // }
    
    // function demo(a,b){
    
    // }
    
    // const demo = (a,b) => {
    
    // }

}



