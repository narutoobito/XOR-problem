class matrics{
constructor(rows,col)
{
this.rows=rows;
this.col=col;
this.data=[];

for(let i=0;i<rows;i++)
{
this.data[i]=[];
for(let j=0;j<col;j++)
{
this.data[i][j]=0;

}
}
}

static fromArray(a)
{
let m = new matrics(a.length,1);
for(let i=0;i<a.length;i++)
m.data[i][0]=a[i];
return m;
}

toArray()
{
let arr=[];
for(let i=0;i<this.rows;i++)
{
for(let j=0;j<this.col;j++)
{
arr.push(this.data[i][j]);
}
}
return arr;
}
randomize()
{
for(let i=0;i<this.rows;i++)
{
for(let j=0;j<this.col;j++)
 {
  this.data[i][j]=(Math.random()*2-1)

 }
 }

//console.table(this.data);


}


static add(a,b)
{
let result=new matrics(a.rows,a.col);
for(let i=0;i<a.rows;i++)
{
for(let j=0;j<a.col;j++)
 {
  result.data[i][j]=a.data[i][j]+b.data[i][j];
}
}
//console.table(result.data);
return result;
}

add(n)
{
if(n instanceof matrics)
{
for(let i=0;i<this.rows;i++)
{for(let j=0;j<this.col;j++)
  this.data[i][j]+=n.data[i][j];
}
}
else{
for(let i=0;i<this.rows;i++)
{for(let j=0;j<this.col;j++)
  this.data[i][j]+=n;
}
}
}
print()
{
console.table(this.data);
}

static subtract(a,b)
{
let result=new matrics(a.rows,a.col);
for(let i=0;i<a.rows;i++)
{for(let j=0;j<a.col;j++)
  result.data[i][j]=a.data[i][j]-b.data[i][j];
}
return result;
}



static multiply(a,b)
{
let sum=0;
let result=new matrics(a.rows,b.col);
for(let i=0;i<a.rows;i++)
{
for(let j=0;j<b.col;j++)
{
for(let k=0;k<a.col;k++)
{
sum+= a.data[i][k] * b.data[k][j];
}
result.data[i][j]=sum;
sum=0;
}

}
//console.table(result.data);

return result;

}
multiply(a)
{
if(a instanceof matrics)
{for(let i=0;i<this.rows;i++)
{for(let j=0;j<this.col;j++)
{
this.data[i][j]*=a.data[i][j];
}
}
}
else{
for(let i=0;i<this.rows;i++)
{for(let j=0;j<this.col;j++)
{
this.data[i][j]*=a;
}
}
}
//console.table(this.data);

}

transpose()
{
let result=new matrics(this.col,this.rows)
for(let i=0;i<this.rows;i++)
{for(let j=0;j<this.col;j++)
{
result.data[j][i]=this.data[i][j];
}
}
return result;
}

apply(fn)
{
for(let i=0;i<this.rows;i++)
{for(let j=0;j<this.col;j++)
{
let val=this.data[i][j];
this.data[i][j]=fn(val);
}
}
}
static apply(m,fn)
{
let result=new matrics(m.rows,m.col);
for(let i=0;i<m.rows;i++)
{for(let j=0;j<m.col;j++)
{
let val=m.data[i][j];
result.data[i][j]=fn(val);
}
}
return result;
}
}

