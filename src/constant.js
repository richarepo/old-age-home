import HaderImage from './assets/images/footer-logo.png'
import Covid1 from './assets/images/covid/covid1.jpg'
import Covid2 from './assets/images/covid/covid2.jpg'
import Covid3 from './assets/images/covid/covid3.jpg'
import Covid4 from './assets/images/covid/covid4.jpeg'
import Covid5 from './assets/images/covid/vovid5.jpeg'

export const headerList = [
    {
        id: 1,
        name: 'Home',
        path: '/'
    }, {
        id: 2,
        name: 'About Us',
        path: '/about-us'
    }, {
        id: 3,
        name: 'Services',
        path: '/services'
    }, {
        id: 4,
        name: 'Price List',
        path: '/price-list'
    }, {
        id: 5,
        name: 'Donation',
        path: '/donation'
    }, {
        id: 6,
        name: 'Contact Us',
        path: '/contact-us'
    }, {
        id: 7,
        name: 'Covid',
        path: '/covid-19'
    }, {
        id: 8,
        name: 'Volunteers',
        path: '/volunteers'
    },
]

// FOOTER DATA 
export const footerList = [
    {
        name: 'About Us',
        img: HaderImage,
        itemList: [
            'MKS Old Age Home is run by yuva vikas sansthan N.G.O. which was established in the Year 2013 and registered with the Govt. of N.C.T. of Delhi bearing the registration.'
        ]
    }, {
        name: 'Our Services',
        path: '/services',
        itemList: [
            'Security Facilities',
            'Recreational Activities',
            'Optional Facilities',
            'Medical Facilities',
            'Living Unit Choices',
            'House Keeping Facilities',
            'Dining and Dietary Planning'
        ]
    }, {
        name: 'Price List',
        path: '/price-list',
        itemList: [
            'Payment Chart Model-1 Monthly Basis',
            'Model-2: Lifetime Validity with One Time Deposit Payment'
        ]
    }, {
        name: 'Contact Us',
        itemList: [
            'Mobile No.: +91 – 9811278178',
            'Email ID: info@mksoldagehome.com',
            'Address: Plot No.-110 Ristal Road',
            'Ghaziabad, 201102, India'
        ]
    },
]


// PAYMENT MODEL
export const paymentModel = [
    {
        type: 'Six Bad  Sharing  in a Hall',
        donation: '7000/-',
        singleTime: ' 11000/-',
        nil: 'Nil',
        facility: 'Food, laundry, attendant help with  attach washroom'
    }, {
        type: 'Three sharing   bad in a  room',
        donation: '10000/-',
        singleTime: '11000/-',
        nil: 'nil',
        facility: 'Food, laundry, attendant help with  attach washroom '
    }, {
        type: 'Single room',
        donation: '20000 /-',
        singleTime: '11000/-',
        nil: 'Nil',
        facility: 'Food, laundry, attendant help with  attach washroom with led television in room'
    },
]


// Lifetime MODEL
export const lifetimeModel = [
    {
        type: 'Six Bad  Sharing  in a Hall',
        timeDonation: '2 lac',
        refundable: 'Nil',
        validity: 'Lifetime',
        facility: 'Food, laundry, attendant help with  attach washroom'
    }, {
        type: 'Three bed in a room',
        timeDonation: '3 lac',
        refundable: 'Nil',
        validity: 'Lifetime',
        facility: 'Food, laundry, attendant help with  attach washroom'
    }, {
        type: 'Six Bad  Sharing  in a Hall',
        timeDonation: '4 lac',
        refundable: 'Nil',
        validity: 'Lifetime',
        facility: 'Food, laundry, attendant help with  attach washroom with led television in room'
    }, {
        type: 'Six Bad  Sharing  in a Hall',
        timeDonation: '5 lac',
        refundable: 'Nil',
        validity: 'Lifetime',
        facility: 'Food, laundry, attendant help with  attach washroom with led television in room'
    },
]



// COVID SECTION
export const covidCases = [
    {
        id: 1,
        icon: '',
        totalCase: 'of 73',
        text: 'Countries with confirmed cases'
    }, {
        id: 2,
        heading: 'Confirmed Cases',
        totalCase: '38,170,158',
        activeCases: '112,600',
        text: 'new cases'
    }, {
        id: 3,
        heading: 'Confirmed Deaths',
        totalCase: '555,045',
        activeCases: '4,014',
        text: 'new deaths'
    }
]


// Card Carousel
export const cardCarousel = [
    {
        id: 1,
        img: Covid1
    }, {
        id: 2,
        img: Covid3
    }, {
        id: 3,
        img: Covid2
    }, {
        id: 4,
        img: Covid4
    },{
        id: 5,
        img: Covid5
    },
]