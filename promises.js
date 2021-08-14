const obj1 = new Promise( (resolve, rejected)=>{
    const rollno = [1,2,3,4,5,6,7];
    setTimeout( ()=>{
        
        rollno.length>0 ? resolve(rollno) : rejected('Error in communicating');
    },2000 );
} );


obj1.then((rollno)=>{
    rollno.map( (value, index)=>{
        console.log(value)
    } );
}).catch((rejected)=>console.log(rejected));

