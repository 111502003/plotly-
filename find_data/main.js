//get csv file
d3.csv('data/harry_potter.csv').then(
    res => {
        console.log('Local CSV:', res)
    }
);
//get json file
d3.json('data/harry_potter.json').then(
    res => {
        console.log('Local json:', res)
    }
);