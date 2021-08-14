//const nums = [2,40,40,25,6,8,100,45,2];
/* nums.sort( (a, b)=>{
    if( a>b ) return 1;
    if( a<b ) return -1;
     return 0;
} ); */

//Simplest logic to sort an array if elements are numbers
/* nums.sort( (a,b)=> (a-b) );
console.log(nums); */

//if array elements are string
let animals = [ 'dog', 'cat', 'tiger', 'elephant', 'lion' ];

//arrange string in alphbetical order
//animals.sort();

//arrange string in reverse alphbetical order
animals.sort( (a,b)=>{
    if(a>b) return -1;
    if(a<b) return 1;
    return 0;
} );
console.log(animals);

//arrange mixed case string in alphbetical order
/* let mixedCaseAnimal = ['Cat', 'lion', 'Tiger', 'elephant', 'dog'];
mixedCaseAnimal.sort( (a,b)=>{
    let x = a.toUpperCase();
        y = b.toUpperCase();
       return x==y ? 0: x>y ? 1 : -1
} );
console.log(mixedCaseAnimal) */





//Sorting an array of objects by a specified property

let employees = [
    {name:'John', salary:90000, hireDate:'July 1 2010'},
    {name:'David', salary:75000, hireDate:'August 15 2009'},
    {name:'Ana', salary:80000, hireDate:'December 12 2011'}
];
/*     //Sorting objects by salary property
employees.sort( (a,b)=>{
    //sorting in increasing order
    //return a.salary - b.salary;

    //sorting in decrasing order
    return b.salary - a.salary;
} );
console.table(employees)
 */


/* //Sorting objects by string means name property
employees.sort( (a,b)=>{
    let x = a.name.toLocaleUpperCase();
        y = b.name.toLocaleUpperCase();
    return x==y ?  0 : x>y ? 1 : -1;
} );
console.table(employees)
 */



//Sorting the object by date property
employees.sort( (a,b)=>{
    let x = new Date(a.hireDate);
        y = new Date(b.hireDate);
        return x -y;
} );
console.table(employees)
