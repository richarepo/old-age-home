import HaderImage from './assets/images/footer-logo.png'

// COVID
import Covid1 from './assets/images/covid/covid1.jpg'
import Covid2 from './assets/images/covid/covid2.jpg'
import Covid3 from './assets/images/covid/covid3.jpg'
import Covid4 from './assets/images/covid/covid4.jpeg'
import Covid5 from './assets/images/covid/vovid5.jpeg'

// VOLUNTEER TEAM
import Volunteer1 from './assets/images/volunteers/volunteer1.jpg'
import Volunteer2 from './assets/images/volunteers/volunteer2.jpg'
import Volunteer3 from './assets/images/volunteers/volunteer3.jpg'
import Volunteer4 from './assets/images/volunteers/volunteer4.jpg'
import Volunteer5 from './assets/images/volunteers/volunteer5.png'
import Volunteer6 from './assets/images/volunteers/volunteer6.png'
// import Volunteer7 from './assets/images/volunteers/volunteer7.jpeg'
// import Volunteer8 from './assets/images/volunteers/volunteer8.jpg'
// import Volunteer9 from './assets/images/volunteers/volunteer9.jpeg'
// import Volunteer10 from './assets/images/volunteers/volunteer10.jpeg'

// MOKSHA SECTION
import Moksha1 from './assets/images/moksha/moksha1.jpg'
import Moksha2 from './assets/images/moksha/moksha2.jpg'
import Moksha3 from './assets/images/moksha/moksha3.jpg'
import Moksha4 from './assets/images/moksha/moksha4.jpeg'
import Moksha5 from './assets/images/moksha/moksha5.jpg'

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
        id: 9,
        name: 'Why Moksha',
        path: '/why-moksha'
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
    }, {
        id: 5,
        img: Covid5
    },
]


//  Volunteer  Highlights
export const volenteerHighlights = [
    {
        id: 1,
        text: 'Direct volunteer with Non-Profit Organization, Sankalp Volunteer Society and get end to end service.'
    }, {
        id: 2,
        text: 'Over 2500 students, couples and individuals have volunteered from USA, Canada, Europe and Australia.'
    }, {
        id: 3,
        text: 'Our programs are popular with groups students, volunteer solo or as a family.'
    }, {
        id: 4,
        text: 'The opportunities are available all year-round and can be scheduled during summer, winter, and spring breaks.'
    }, {
        id: 5,
        text: 'Group volunteering for universities, schools, corporate and youth groups can be customized.'
    }, {
        id: 6,
        text: 'Safety is our highest priority, we take great care to keep our volunteers safe as a responsible volunteer organization.'
    }, {
        id: 7,
        text: 'Our programs are very affordable, start at $310 for 1 week with the application fee.'
    }, {
        id: 8,
        text: 'Join exciting Summer Volunteer Program 2020 and get life-changing experience by working with NGO in Jaipur.'
    },
]


export const volenteerTeams = [
    {
        id: 1,
        img: Volunteer1,
        name: 'Specialty Services',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make. '
    }, {
        id: 2,
        img: Volunteer2,
        name: 'Specialty Services',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make. '
    }, {
        id: 3,
        img: Volunteer3,
        name: 'Specialty Services',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make. '
    }, {
        id: 4,
        img: Volunteer4,
        name: 'Specialty Services',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make. '
    }, {
        id: 5,
        img: Volunteer5,
        name: 'Specialty Services',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make. '
    }, {
        id: 6,
        img: Volunteer6,
        name: 'Specialty Services',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make. '
    },
    // {
    //     id: 7,
    //     img: Volunteer7,
    //     name: 'Specialty Services',
    //     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make. '
    // }, {
    //     id: 8,
    //     img: Volunteer8,
    //     name: 'Specialty Services',
    //     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make. '
    // },
    //  {
    //     id: 9,
    //     img: Volunteer9,
    //     name: 'Specialty Services',
    //     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make. '
    // },
    //  {
    //     id: 10,
    //     img: Volunteer10,
    //     name: 'Specialty Services',
    //     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make. '
    // },
]


// MOKSHA SECTION
export const mokshaData = [
    {
        id: 1,
        srNo: "01",
        img: Moksha1,
        title: "Active Life",
        heading: 'Age is just a number and leading an active lifestyle with healthy habits can make you feel and look young in your golden years.',
        text1: "Age is just a number and leading an active lifestyle with healthy habits can make you feel and look young in your golden years. Golden years are also akin to childhood where you are free from responsibilities and have enough time for yourself which if used productively will give a fresh lease to your life. Being mentally and physically agile will allow you to enjoy a well rounded life. Hence, at Ashiana Senior Living, we design activities and amenities to facilitate an easy but active lifestyle. Go for a swim or spar with buddies over table tennis. Opt for regular Yoga classes and other fitness options at the gym and activity centres.",
        text2: "Mental agility can be attained by befriending books in our library, having lively conversations with friends or by attending our regular classes on cooking, dancing or art therapy. For the spiritually-inclined, we have regular meditation classes, satsang sessions and pujas. Our maintenance team plans numerous entertainment and learning activities for you: over 2000 events in just one year across all Ashiana projects."
    }, {
        id: 2,
        srNo: "02",
        img: Moksha2,
        title: "Similar age group people around",
        heading: "At Ashiana, you build a community of like-minded neighbours and friends, who soon become family.",
        text1: "At Ashiana, you build a community of like-minded neighbours and friends, who soon become family. This provides an emotional support system, which along with a calendar full of mental and physical activities, makes for a long, healthy life. Having a support system of reliable friends reassures your family members and also fulfils your need to socialise."
    }, {
        id: 3,
        srNo: "03",
        img: Moksha3,
        title: "Safe And Secured",
        heading: "With over 16 years of experience in Senior Living projects, we know what you need and we work tirelessly towards improving our facilities.",
        text1: "With over 16 years of experience in Senior Living projects, we know what you need and we work tirelessly towards improving our facilities. Senior living homes are guarded 24x7 by trained and equipped security staff. CCTV cameras are installed at vantage points for round-the-clock surveillance. We ensure that each staff member is trained regularly on first aid, and we hold regular fire drills.",
        text2: "Emergency response systems (ERS) are enabled in the individual apartments. We also provide 24/7 emergency care, with and on-call doctors and ambulances. As a preventive healthcare best practice, we organise regular medical camps for our residents."
    }, {
        id: 4,
        srNo: "04",
        img: Moksha4,
        title: "Hassle-Free living",
        heading: "Let us take care of all the hassles, so you can lead a life of comfort and ease. We have a jam-packed roster of maintenance services offered by our in-house maintenance staff.",
        text1: "Electricians, plumbers and repairmen are available on call. All essential services such as garbage disposal, cleanliness of common areas, and regular maintenance of infrastructure are handled by our team. We have well-stocked convenience stores. Our cafes and dining spaces serve nutritious homemade meals made keeping seniors in mind.",
        text2: "Our staff is there to help ease your concerns, and will go the extra mile to do so. You can rest assured that whatever you need and require, will be taken care of unequivocally."
    }, {
        id: 5,
        srNo: "05",
        img: Moksha5,
        title: "Age friendly design",
        heading: "An Ashiana Senior Living home is designed to have all the comforts of a regular home with additional functionality and detailing to suit your needs",
        text1: "An Ashiana Senior Living home is designed to have all the comforts of a regular home with additional functionality and detailing to suit your needs, we understand with age the requirements vary and we have taken care of that in most detailed way possible.",
        text2: "Emergency response system at three locations in the unit, upon activation, will alert the security immediately to come to your aid.",
        text3: "The bathrooms have arthritis-friendly fittings and grab rails for your comfort. An Ashiana home is intended to be comfortable and friendly, and yet thoughtful and alert to all possibilities of what you might need here"
    },
]