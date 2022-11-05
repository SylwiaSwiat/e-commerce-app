const products = [
    {
        title: 'green sweather',
        id: 1,
        price: '50',
        image: './images/green-sweather.jpg',
        quantity: 0,
        type: 'sweather',
        status: 'female',
        color: 'green'
    },
    {
        title: 'yellow sweather',
        id: 2,
        price: '50',
        image: './images/yellow-sweather.jpg',
        quantity: 0,
        type: 'sweather',
        status: 'female',
        color: 'yellow'
    },
    {
        title: 'red pleated dress',
        id: 3,
        price: '70',
        image: './images/red-pleated-dress.jpg',
        quantity: 0,
        type: 'dress',
        status: 'female',
        color: 'red'
    },
    {
        title: 'red skirt',
        id: 4,
        price: '45',
        image: './images/red-skirt.jpg',
        quantity: 0,
        type: 'skirt',
        status: 'female',
        color: 'red'
    },
    {
        title: 'black sweatshirt',
        id: 5,
        price: '60',
        image: './images/black-sweatshirt.jpg',
        quantity: 0,
        type: 'shirt',
        status: 'male',
        color: 'black'
    },
    {
        title: 'blue shirt',
        id: 6,
        price: '38',
        image: './images/blue-shirt.jpg',
        quantity: 0,
        type: 'shirt',
        status: 'male',
        color: 'blue'
    },
    {
        title: 'blue sweather',
        id: 7,
        price: '50',
        image: './images/blue-sweather.jpg',
        quantity: 0,
        type: 'sweather',
        status: 'female',
        color: 'blue'
    },
    {
        title: 'navy blue sweather',
        id: 8,
        price: '55',
        image: './images/knitted-sweather.jpg',
        quantity: 0,
        type: 'sweather',
        status: 'male',
        color: 'blue'
    },
    {
        title: 'blue sweather golf',
        id: 9,
        price: '60',
        image: './images/blue-sweather2.jpg',
        quantity: 0,
        type: 'sweather',
        status: 'female',
        color: 'blue'
    },
    {
        title: 'grey striped sweather ',
        id: 10,
        price: '35',
        image: './images/grey-sweather.jpg',
        quantity: 0,
        type: 'sweather',
        status: 'male',
        color: 'grey'
    },
    {
        title: 'red sweather',
        id: 11,
        price: '50',
        image: './images/red-sweather.jpg',
        quantity: 0,
        type: 'sweather',
        status: 'female',
        color: 'red'
    },
    {
        title: 'red sweather',
        id: 12,
        price: '55',
        image: './images/red-sweather2.jpg',
        quantity: 0,
        type: 'sweather',
        status: 'male',
        color: 'red'
    },
    {
        title: 'red sweather with patterns',
        id: 13,
        price: '75',
        image: './images/red-sweather3.jpg',
        quantity: 0,
        type: 'sweather',
        status: 'male',
        color: 'red'
    },
    {
        title: 'red sweather with patterns',
        id: 14,
        price: '65',
        image: './images/red-sweather4.jpg',
        quantity: 0,
        type: 'sweather',
        status: 'male',
        color: 'red'
    },
    {
        title: 'violet sweather',
        id: 15,
        price: '50',
        image: './images/violet-sweather.jpg',
        quantity: 0,
        type: 'sweather',
        status: 'female',
        color: 'violet'
    },
    {
        title: 'pink sweather',
        id: 16,
        price: '30',
        image: './images/pink-sweather.jpg',
        quantity: 0,
        type: 'sweather',
        status: 'female',
        color: 'pink'
    },
    {
        title: 'pale pink sweather',
        id: 17,
        price: '65',
        image: './images/pink-sweather2.jpg',
        quantity: 0,
        type: 'sweather',
        status: 'female',
        color: 'pink'
    },
    {
        title: 'pink sweather',
        id: 18,
        price: '35',
        image: './images/pink-sweather3.jpg',
        quantity: 0,
        type: 'sweather',
        status: 'female',
        color: 'pink'
    },
    {
        title: 'grey sweather',
        id: 19,
        price: '25',
        image: './images/grey-sweather2.jpg',
        quantity: 0,
        type: 'sweather',
        status: 'male',
        color: 'grey'
    },
    {
        title: 'grey sweather',
        id: 20,
        price: '15',
        image: './images/grey-sweather3.jpg',
        quantity: 0,
        type: 'sweather',
        status: 'female',
        color: 'grey'
    },
    {
        title: 'green sweather',
        id: 21,
        price: '50',
        image: './images/green-sweather2.jpg',
        quantity: 0,
        type: 'sweather',
        status: 'male',
        color: 'green'
    },
    {
        title: 'yellow sweather',
        id: 22,
        price: '30',
        image: './images/yellow-sweather2.jpg',
        quantity: 0,
        type: 'sweather',
        status: 'female',
        color: 'yellow'
    },
    {
        title: 'orange sweather',
        id: 23,
        price: '40',
        image: './images/orange-sweather.jpg',
        quantity: 0,
        type: 'sweather',
        status: 'female',
        color: 'orange'
    },
    {
        title: 'blue dress',
        id: 24,
        price: '55',
        image: './images/blue-dress.jpg',
        quantity: 0,
        type: 'dress',
        status: 'female',
        color: 'blue'
    },
    {
        title: 'orange blue dotted dress',
        id: 25,
        price: '45',
        image: './images/orange-dress.jpg',
        quantity: 0,
        type: 'dress',
        status: 'female',
        color: 'orange'
    },
    {
        title: 'violet dress',
        id: 26,
        price: '55',
        image: './images/violet-dress.jpg',
        quantity: 0,
        type: 'dress',
        status: 'female',
        color: 'violet'
    },
    {
        title: 'navy blue dress',
        id: 27,
        price: '65',
        image: './images/blue-dress2.jpg',
        quantity: 0,
        type: 'dress',
        status: 'female',
        color: 'blue'
    },
    {
        title: 'red dress',
        id: 28,
        price: '45',
        image: './images/red-dress.jpg',
        quantity: 0,
        type: 'dress',
        status: 'female',
        color: 'red'
    },
    {
        title: 'blue striped dress',
        id: 29,
        price: '45',
        image: './images/blue-dress3.jpg',
        quantity: 0,
        type: 'dress',
        status: 'female',
        color: 'blue'
    },
    {
        title: 'orange dress',
        id: 30,
        price: '35',
        image: './images/orange-dress2.jpg',
        quantity: 0,
        type: 'dress',
        status: 'female',
        color: 'orange'
    },
    {
        title: 'blackdress',
        id: 31,
        price: '50',
        image: './images/black-dress.jpg',
        quantity: 0,
        type: 'dress',
        status: 'female',
        color: 'black'
    },
    {
        title: 'green long dress',
        id: 32,
        price: '65',
        image: './images/green-dress.jpg',
        quantity: 0,
        type: 'dress',
        status: 'female',
        color: 'green'
    },
    {
        title: 'pale pink dress',
        id: 33,
        price: '75',
        image: './images/pink-dress.jpg',
        quantity: 0,
        type: 'dress',
        status: 'female',
        color: 'pink'
    },
    {
        title: 'yellow sweather',
        id: 34,
        price: '38',
        image: './images/yellow-sweather3.jpg',
        quantity: 0,
        type: 'sweather',
        status: 'female',
        color: 'yellow'
    },
    {
        title: 'navy blue pants',
        id: 35,
        price: '55',
        image: './images/blue trousers.jpg',
        quantity: 0,
        type: 'pants',
        status: 'male',
        color: 'blue'
    },
    {
        title: 'yellow dress',
        id: 36,
        price: '25',
        image: './images/yellow-dress.jpg',
        quantity: 0,
        type: 'dress',
        status: 'female',
        color: 'yellow'
    },
    {
        title: 'yellow dress',
        id: 37,
        price: '55',
        image: './images/yellow-dress2.jpg',
        quantity: 0,
        type: 'dress',
        status: 'female',
        color: 'yellow'
    },
    {
        title: 'black dress',
        id: 38,
        price: '55',
        image: './images/black dress2.jpg',
        quantity: 0,
        type: 'dress',
        status: 'female',
        color: 'black'
    },
    {
        title: 'orange long dress',
        id: 39,
        price: '75',
        image: './images/orange-dress3.jpg',
        quantity: 0,
        type: 'dress',
        status: 'female',
        color: 'orange'
    },
    {
        title: 'green dress',
        id: 40,
        price: '45',
        image: './images/green-dress.jpg',
        quantity: 0,
        type: 'dress',
        status: 'female',
        color: 'green'
    },
    {
        title: 'grey dress',
        id: 41,
        price: '30',
        image: './images/grey-dress.jpg',
        quantity: 0,
        type: 'dress',
        status: 'female',
        color: 'grey'
    },
    {
        title: 'black dress',
        id: 42,
        price: '65',
        image: './images/black-dress3.jpg',
        quantity: 0,
        type: 'dress',
        status: 'female',
        color: 'black'
    },
    {
        title: 'red pants',
        id: 43,
        price: '45',
        image: './images/red-pants.jpg',
        quantity: 0,
        type: 'pants',
        status: 'male',
        color: 'red'
    },
    {
        title: 'blue jeans skinny',
        id: 44,
        price: '50',
        image: './images/jeans.jpg',
        quantity: 0,
        type: 'pants',
        status: 'female',
        color: 'blue'
    },
    {
        title: 'blue jeans',
        id: 45,
        price: '45',
        image: './images/jeans2.jpg',
        quantity: 0,
        type: 'pants',
        status: 'female',
        color: 'blue'
    },
    {
        title: 'navy blue pants',
        id: 46,
        price: '35',
        image: './images/blue-pants.jpg',
        quantity: 0,
        type: 'pants',
        status: 'male',
        color: 'blue'
    },
    {
        title: 'yellow pants',
        id: 47,
        price: '45',
        image: './images/yellow-pants.jpg',
        quantity: 0,
        type: 'pants',
        status: 'male',
        color: 'yellow'
    },
    {
        title: 'gray pants',
        id: 48,
        price: '45',
        image: './images/grey-pants.jpg',
        quantity: 0,
        type: 'pants',
        status: 'female',
        color: 'grey'
    },
    {
        title: 'violet pants',
        id: 49,
        price: '55',
        image: './images/violet-pants.jpg',
        quantity: 0,
        type: 'pants',
        status: 'female',
        color: 'violet'
    },
    {
        title: 'grey black pants',
        id: 50,
        price: '35',
        image: './images/grey-pants2.jpg',
        quantity: 0,
        type: 'pants',
        status: 'male',
        color: 'grey'
    },
    {
        title: 'black pants',
        id: 51,
        price: '50',
        image: './images/black-pants.jpg',
        quantity: 0,
        type: 'pants',
        status: 'male',
        color: 'black'
    },
    {
        title: 'grey pants',
        id: 52,
        price: '40',
        image: './images/grey-pants3.jpg',
        quantity: 0,
        type: 'pants',
        status: 'male',
        color: 'grey'
    },
    {
        title: 'green pants',
        id: 53,
        price: '45',
        image: './images/green-pants.jpg',
        quantity: 0,
        type: 'pants',
        status: 'male',
        color: 'green'
    },
    {
        title: 'wide jeans',
        id: 54,
        price: '55',
        image: './images/jeans3.jpg',
        quantity: 0,
        type: 'pants',
        status: 'female',
        color: 'blue'
    },
    {
        title: 'black pants',
        id: 55,
        price: '55',
        image: './images/black-pants2.jpg',
        quantity: 0,
        type: 'pants',
        status: 'female',
        color: 'black'
    },
    {
        title: 'short blue pants',
        id: 56,
        price: '35',
        image: './images/blue-pants2.jpg',
        quantity: 0,
        type: 'pants',
        status: 'male',
        color: 'blue'
    },
    {
        title: 'grey pants',
        id: 57,
        price: '50',
        image: './images/grey-pants4.jpg',
        quantity: 0,
        type: 'pants',
        status: 'male',
        color: 'grey'
    },
    {
        title: 'jeans',
        id: 58,
        price: '65',
        image: './images/jeans4.jpg',
        quantity: 0,
        type: 'pants',
        status: 'male',
        color: 'blue'
    },
    {
        title: 'black long skirt',
        id: 59,
        price: '61',
        image: './images/black long skirt.jpg',
        quantity: 0,
        type: 'skirt',
        status: 'female',
        color: 'black'
    },
    {
        title: 'red orange skirt',
        id: 60,
        price: '43',
        image: './images/red-orange-skirt.jpg',
        quantity: 0,
        type: 'skirt',
        status: 'female',
        color: 'red'
    },
    {
        title: 'navy blue skirt',
        id: 61,
        price: '55',
        image: './images/navy-skirt.jpg',
        quantity: 0,
        type: 'skirt',
        status: 'female',
        color: 'blue'
    },
    {
        title: 'blue skirt',
        id: 62,
        price: '65',
        image: './images/blue-skirt.jpg',
        quantity: 0,
        type: 'skirt',
        status: 'female',
        color: 'blue'
    },
    {
        title: 'blue skirt',
        id: 63,
        price: '50',
        image: './images/blue-skirt2.jpg',
        quantity: 0,
        type: 'skirt',
        status: 'female',
        color: 'blue'
    },
    {
        title: 'white skirt in flowers',
        id: 64,
        price: '55',
        image: './images/white-flower-skirt.jpg',
        quantity: 0,
        type: 'skirt',
        status: 'female',
        color: 'white'
    },
    {
        title: 'white skirt',
        id: 65,
        price: '40',
        image: './images/white-skirt.jpg',
        quantity: 0,
        type: 'skirt',
        status: 'female',
        color: 'white'
    },
    {
        title: 'jeans skirt',
        id: 66,
        price: '35',
        image: './images/jeans-skirt.jpg',
        quantity: 0,
        type: 'skirt',
        status: 'female',
        color: 'blue'
    },
]

export default products