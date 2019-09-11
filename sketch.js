let training=[
{input: [0,1],
target: [1]
},
{input: [1,0],
target: [1]
},
{input: [1,1],
target:[0]
},
{input: [0,0],
target:[0]
}
];



let nn;
function setup()
{
nn = new neuronetwork(2,4,1);
createCanvas(400,400);
slider=createSlider(0.1,1,0.1,0.01);
}




function draw()
{
background(225);
noStroke();

for(let i=0;i<1000;i++)
{
let data=random(training);
nn.train(data.input,data.target);
}

let res=10;
let col=width/res;
let rows=height/res;
for(let i=0;i<col;i++)
{
for(let j=0;j<rows;j++)
{

let input=[];
input[0]=i/col;
input[1]=j/rows;
result=nn.predict(input);

fill(result*255);
rect(i*res,j*res,res,res);

}
}

}