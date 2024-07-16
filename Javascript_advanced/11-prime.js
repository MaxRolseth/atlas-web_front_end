function CountPrimex100()
{
function countPrimeNumbers()
{
  var prime = 0;
  for(x = 2; x < 100; x++)
  {
    for(y = 2; y <= x; y++)
    {
      if(x == y)
        {
          prime++;
          break;
        }
        
      if(x % y == 0)
      {
        break
      }
      
  }
  
}
console.log(prime);
}

for(z = 0; z < 100; z++){
  countPrimeNumbers();
}
}

const t0 = performance.now();
setTimeout(CountPrimex100,0);
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);


