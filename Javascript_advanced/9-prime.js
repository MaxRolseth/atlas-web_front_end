function countPrimeNumbers()
{
  var prime = 0;
  for(x = 2; x < 100; x++)
  {
    for(y = 2; y <= x; y++)
    {
      if(x == y)
        {
          console.log("asdfasdf");
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



const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);


