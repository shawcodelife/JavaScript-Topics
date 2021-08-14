const getPromise = ()=>{
    return new Promise( (resolve, rejected)=>{
        const rollno = [];
        setTimeout( ()=>{
            rollno.length>0 ? resolve(rollno) : rejected('Error in communicating');
        },2000 );
    } );
}

/* const getData = getPromise();
getData.then((rollno)=>console.log(rollno)).catch((rejected)=>console.log(rejected)); */

//fetching promise data using async and await, it also avoid then() callback function
const getData = async ()=>{
    try{
        const getrollno = await getPromise();
        console.log(getrollno)
       // getrollno.map((value,index)=>console.log(value))
    }catch(error){
        console.log(`Error: ${error}`)
    }
    
}

getData();

