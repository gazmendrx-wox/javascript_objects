document.addEventListener("DOMContentLoaded", function(){

    //3 objects of my choosing; With minimum 4 attributes; 
    // example, id, name, surname, age etc; 

    const heroClass = {
        id: 1,
        name: 'Death Knight', 
        color: 'red',
        primarySpell: 'Obliterate'
    }

    const flyingMount = {
        id: 2,
        name: 'Purple Windsaber',
        color: 'white', 
        primaryFlight: 'super-fast'
    }

    const groundMount = {
        id:3,
        name: 'War Wolf',
        color: 'black',
        primarySpeed: '100%'
    }

    const gameArray = [heroClass, flyingMount, groundMount]

    //return 1 array without item with id 2 (filter)
    console.log(gameArray.filter((item) => item.id !== 2));

    //return a new transformed array where ids are added +10(map)
    console.log(gameArray.map((item) => {
        return item.id + 10
    }))

    //find 1 specific object in array;
    console.log(gameArray.find((item) => item.id = 2));

})