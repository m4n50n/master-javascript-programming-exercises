let inventory = [
    {
        name: 'Brunello Cucinelli',
        shoes: [
            { name: 'tasselled black low-top lace-up', price: 1000 },
            { name: 'tasselled green low-top lace-up', price: 1100 },
            { name: 'plain beige suede moccasin', price: 950 },
            { name: 'plain olive suede moccasin', price: 1050 }
        ]
    },
    {
        name: 'Gucci',
        shoes: [
            { name: 'red leather laced sneakers', price: 800 },
            { name: 'black leather laced sneakers', price: 900 }
        ]
    }
];

function renderAverageCostPerDesigner(inventory) {
    let render = { "designers":[] };

    inventory.forEach(value => {
        let designer = value.name;
        let shoes = value.shoes;

        let sum = 0;
        shoes.map(value => {
            sum += value.price;
        })

        let average = sum / shoes.length;
        console.log(average);
        
        render["designers"].push({"name": designer, "averagePrice": average});
    });

    return render;
}

console.log(renderAverageCostPerDesigner(inventory));