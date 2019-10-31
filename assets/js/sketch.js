
var canvasHeight;
var canvasWidth;
var elementCount;
var values = [];
var minimum;
var maximum;
var sortSpeed;
var barSpred;
var x;

var sortMethod;


function setup() {
	x = 0;
	noStroke();
	barSpred = 3;
	sortSpeed = 2;
	minimum = 50;
	maximum = 300;
	elementCount = 50;
	barSpred = (1/elementCount);
	canvasWidth = windowWidth;
	canvasHeight = windowHeight/2;
	for (let i = 0; i < elementCount; i++)
	{
		values.push(new int);
		values[i] = random(maximum-minimum) + minimum;
	}
	createCanvas(canvasWidth, canvasHeight);
}

//Because a < 500 and b < 500 and a > 0 and b > 0 this is safe
function swap(array, a, b)
{
		array[a] += array[b]; //Overflow can happen if values get big
		array[b] = array[a] - array[b]; // b becomes a
		array[a] -= array[b]; // a becomes b;
}

function bubbleSort(i)
{

}
function insertionSortStep(index, sorted)
{
		
}

function isSorted()
{
	

}
function draw() {

	background(0);
	barSpred = 0;
	stroke(255);
	for (let i = 0; i < values.length; i++)
	{
		rect(x, 100, 100, canvasHeight - values[i]);
		x+=barSpred;	
	}
	for (let i = 0; i < values.length; i++)
	{
		for (let n = 0; n < values.length-i-1; n++)
		{
			if(values[n] > values[n+1])
			{
				swap(values, values[n], values[n+1]);
			}
		}	
	}

}