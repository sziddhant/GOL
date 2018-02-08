


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

for (var j=1;j<row;j++){
    for(var k=1;k<row;k++){

        if (grid[j][k]===1)
        {
            ctx.fillStyle="#000";
            ctx.fillRect(j,k,1,1);
        }

    }

}
}

function update_grid() {
tgrid=grid;
    for(var j=1;j<row;j++){
        for(var k=1;k<row;k++){}
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
                    tgrid[j][k]=0//die overpopulation

            }


            //merge grids

        }


        grid=tgrid;
    }

}


function run() {
    draw_grid();
    update_grid();
    requestAnimationFrame(run);

}

function fillRandom() {
    for (var j = 100; j < x - 100; j++) {
        for (var k = 100; k < x - 100; k++) {
            grid[j][k] = Math.round(Math.random());

        }
    }
    tgrid=grid;
}

var x=400;
var row=x;
var grid = create_ar(x);
var tgrid= create_ar(x);
fillRandom();


function run2() {

    draw_grid();
    update_grid();
 framea();
}

function framea() {
    requestAnimationFrame(run);
}
