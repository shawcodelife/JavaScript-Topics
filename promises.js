const getPromise = ()=>{
    return new Promise( (resolve, rejected)=>{
        const rollno = [1,2,3,4,5,6,7];
        setTimeout( ()=>{
            rollno.length>0 ? resolve(rollno) : rejected('Error in communicating');
        },2000 );
    } );
}

/* const getData = getPromise();
getData.then((rollno)=>console.log(rollno)).catch((rejected)=>console.log(rejected)); */

//fetching promise data using async and await, it also avoid then() callback function
const getData = async ()=>{
    const getrollno = await getPromise();
    console.log(getrollno)
}

getData();

