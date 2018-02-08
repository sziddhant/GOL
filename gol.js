var stop=0;
var x=400;
var row=x;
var grid = create_ar(x);
var tgrid= create_ar(x);
fillRandom();


function create_ar(row) {
    var ar=[];

    for(var i=0;i<=row;i++)
    {
        ar[i]=[];
    }
    return ar;

}
function draw_grid() {
    var canvas=document.getElementById("canvas1");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,x,x);

    for (var j=1;j<x;j++){
        for(var k=1;k<x;k++){

            if (grid[j][k]===1)
            {
                ctx.fillStyle="#8aff7c";
                ctx.fillRect(j,k,1,1);
            }

        }

    }
}

function update_grid() {
tgrid=grid;
    for(var j=1;j<x;j++){
        for(var k=1;k<x;k++){
        var n=0;
        //top
        n+=grid[j-1][k-1];//1
        n+=grid[j-1][k];
        n+=grid[j-1][k+1];
        // same level
        n+=grid[j][k-1];//left
        n+=grid[j][k+1];//right
        //under
        n+=grid[j+1][k-1];
        n+=grid[j+1][k];
        n+=grid[j+1][k+1];


        if((grid[j][k]===0)&&n>=3){
            tgrid[j][k]=1;
        }
        else if(grid[j][k]===1)
        {
            switch (n)
            {
                case 0:
                case 1:
                    tgrid[j][k]=0;//lonely =>death
                    break;
                case 2:
                case 3:
                    tgrid[j][k]=1;//live another round
                    break;
                default:
                    tgrid[j][k]=0;//die overpopulation

            }




        }


    }}
grid=tgrid;
}


function run_main() {
   //stop=0;

        draw_grid();
        update_grid();
        if(stop===0)
        requestAnimationFrame(run_main);


}
function run() {
    stop=0;
    draw_grid();
    update_grid();
    requestAnimationFrame(run_main)

}
function stopp() {
    stop=1;
}
function fillRandom() {
    for (var j = 0; j < x; j++) {
        for (var k = 0; k < x; k++) {
            var rawRandom = Math.random();
            var improvedNum = (rawRandom * 2);
            var randomBinary = Math.floor(improvedNum);
            if (randomBinary === 1) {
                grid[j][k] = 1;
            } else {
                grid[j][k] = 0;
            }
        }
    }
}





function run2() {

    draw_grid();
    update_grid();
    framea();
}

function framea() {
    requestAnimationFrame(run3);
}
function run3() {

    draw_grid();
    update_grid();}


