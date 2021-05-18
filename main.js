canvas = new fabric.Canvas('myCanvas')
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
player_object = ""

function player_update(){
    fabric.Image.fromURL("player.png", function (Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top: player_y,
        left: player_x  
        })
        canvas.add(player_object)
    })
}

function newImage(get_image){
    fabric.Image.fromURL(get_image, function (Img){
        blockImage_object = Img;
        blockImage_object.scaleToWidth(block_image_width);
        blockImage_object.scaleToHeight(block_image_height);
        blockImage_object.set({
        top: player_y,
        left: player_x
        })
        canvas.add(blockImage_object)
    })
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e){
    keypress = e.keyCode
    console.log(keypress)

    if(e.shiftKey == true && keypress == '80'){
        block_image_width += 10
        block_image_height += 10
        console.log("p and shift is pressed together")

        document.getElementById("current_width").innerHTML = block_image_width
        document.getElementById("current_height").innerHTML = block_image_height
    }

    if(e.shiftKey == true && keypress == '77'){
        block_image_width -= 10
        block_image_height -= 10
        console.log("m and shift is pressed together")

        document.getElementById("current_width").innerHTML = block_image_width
        document.getElementById("current_height").innerHTML = block_image_height
    }

    if(keypress == '37'){
        left();
        console.log("left key has been pressed")
    }

    if(keypress == '38'){
        up();
        console.log("up key has been pressed")
    }

    if(keypress == '39'){
        right();
        console.log("right key has been pressed")
    }

    if(keypress == '40'){
        down();
        console.log("down key has been pressed")
    }

    if(keypress == '37'){
        left();
        console.log("left key has been pressed")
    }

    if(keypress == '84'){
        newImage('trunk.jpg');
        console.log("t key has been pressed")
    }

    if(keypress == '68'){
        newImage('dark_green.png');
        console.log("d key has been pressed")
    }

    if(keypress == '76'){
        newImage('light_green.png');
        console.log("l key has been pressed")
    }

    if(keypress == '71'){
        newImage('ground.png');
        console.log("g key has been pressed")
    }

    if(keypress == '87'){
        newImage('wall.jpg');
        console.log("w key has been pressed")
    }

    if(keypress == '89'){
        newImage('yellow_wall.png');
        console.log("y key has been pressed")
    }

    if(keypress == '82'){
        newImage('roof.jpg');
        console.log("r key has been pressed")
    }

    if(keypress == '67'){
        newImage('cloud.jpg');
        console.log("c key has been pressed")
    }

    if(keypress == '85'){
        newImage('unique.png');
        console.log("u key has been pressed")
    }
}

function up(){
    if(player_y >= 0){
        player_y = player_y - block_image_height
        console.log("block_image_height = " + block_image_height)
        console.log("X = "+ player_x + "Y = " + player_y)
        canvas.remove(player_object)
        player_update();
    }
}

function down(){
    if(player_y <= 450){
        player_y = player_y + block_image_height
        console.log("block_image_height = " + block_image_height)
        console.log("X = "+ player_x + "Y = " + player_y)
        canvas.remove(player_object)
        player_update();
    }
}

function left(){
    if(player_x >= 0){
        player_x = player_x - block_image_width
        console.log("block_image_width = " + block_image_width)
        console.log("X = "+ player_x + "Y = " + player_y)
        canvas.remove(player_object)
        player_update();
    }
}

function right(){
    if(player_x <= 850){
        player_x = player_x + block_image_width
        console.log("block_image_width = " + block_image_width)
        console.log("X = "+ player_x + "Y = " + player_y)
        canvas.remove(player_object)
        player_update();
    }
}