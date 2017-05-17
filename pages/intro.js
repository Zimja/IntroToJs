var helloWorld = function()
{
    console.log("Introduction To Javascript");
};

helloWorld();

var fizzBuzz = function()
{
    for(var i = 1; i <= 100; i = i + 1)
    {
        if( ((i%3) === 0) && ((i%5) === 0) )
        {
            console.log("Fizz Buzz");
        }
        else if((i%3) === 0)
        {
            console.log("Fizz");
        }
        else if((i%5) === 0)
        {
            console.log("Buzz");
        }  
    }
};

fizzBuzz();