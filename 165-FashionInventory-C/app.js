var currentInventory = [
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
            { name: 'p red leather laced sneakers', price: 800 },
            { name: 'p black leather laced sneakers', price: 900 }
        ]
    }
];

function renderInventory(inventory) {
    let render = [];

    for (index in inventory) {
        let designer = inventory[index].name;
        let shoes = inventory[index].shoes;

        for (key in shoes) {
            let name = shoes[key].name;
            let price = shoes[key].price;

            let color = name.split(" ")[1];
            if (color == "black") {
                render.push([designer, name, price]);
            }
        }
    }

    return render;
}

console.log(renderInventory(currentInventory));