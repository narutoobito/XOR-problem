function sigmoid(x)
{
return 1/(1+Math.exp(-x));
}

function dsigmoid(y)
{
return y*(1-y);

}

class neuronetwork{
constructor(inputs,hidden,outputs)
{
this.inputs=inputs;
this.hidden=hidden;
this.outputs=outputs;
//console.log(this.inputs);
//console.log(this.hidden);

this.weights_ih=new matrics(this.hidden,this.inputs);
this.weights_ho=new matrics(this.outputs,this.hidden);

this.weights_ih.randomize();
this.weights_ho.randomize();

this.bias_o=new matrics(this.outputs,1);
this.bias_h=new matrics(this.hidden,1);
this.bias_o.randomize();
this.bias_h.randomize();
this.learning_rate=1;
}
predict(input_array)
{
let inputs=matrics.fromArray(input_array);

let hidden=matrics.multiply(this.weights_ih,inputs);
hidden=matrics.add(hidden,this.bias_h);
hidden.apply(sigmoid);

let outputs=matrics.multiply(this.weights_ho,hidden);
outputs=matrics.add(outputs,this.bias_o);
outputs.apply(sigmoid);
return outputs.toArray();
}

train(input_array,targets_array)
{
let inputs=matrics.fromArray(input_array);

let hidden=matrics.multiply(this.weights_ih,inputs);
hidden=matrics.add(hidden,this.bias_h);
hidden.apply(sigmoid);

let outputs=matrics.multiply(this.weights_ho,hidden);
outputs=matrics.add(outputs,this.bias_o);
outputs.apply(sigmoid);

let targets= matrics.fromArray(targets_array);

let output_error=matrics.subtract(targets,outputs);
let gradient=matrics.apply(outputs,dsigmoid);
gradient.multiply(output_error);
gradient.multiply(this.learning_rate);

let hidden_T=hidden.transpose();
let weights_ho_deltas=matrics.multiply(gradient,hidden_T);


this.weights_ho.add(weights_ho_deltas);
this.bias_o.add(gradient);

let weights_ho_T= this.weights_ho.transpose();
//console.log('wht');
let hidden_error=matrics.multiply(weights_ho_T,output_error);

let hidden_gradient=matrics.apply(hidden,dsigmoid);
hidden_gradient.multiply(hidden_error);
hidden_gradient.multiply(this.learning_rate);

let input_T=inputs.transpose();
let weights_ih_deltas=matrics.multiply(hidden_gradient,input_T);
this.weights_ih.add(weights_ih_deltas);
//this.weights_ih.print();
this.bias_h.add(hidden_gradient);




}
}
