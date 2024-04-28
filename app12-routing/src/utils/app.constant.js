export const MENU_LIST = [
    {
        id: 1,
        title: 'Home',
        path: '/',
    },
    {
        id: 2,
        title: 'About',
        path: '/about'
    },
    {
        id: 3,
        title: 'Contact',
        path: '/contact'
    },
    {
        id: 4,
        title: 'Services',
        path: '/services'
    },
    {
        id: 5,
        title: 'Product',
        path: '/product/2'
    },
    {
        id: 6,
        title: 'List',
        path: '/list'
    }
];

export const FORM_OBJ = {
    name: '',
    email: '',
    mobile: '',
    password: ''
}
export const FORM_FIELDS_ARR = ['name', 'email', 'mobile', 'password'];

export const REGX_PATTERN = {
    email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    mobile: /^[7-9][0-9]{9}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
}
export const ERRORS = {
    email: 'Email should be in proper format!',
    mobile: 'Mobile should be in proper format, start with 7,8,9 only!',
    password: 'Password should be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!'
}

export const TABLE_LIST = [
    {
        name: 'Ankit Sharma',
        email: 'ankit@gmail.com',
        mobile: '9876543210',
        password: '',
    }
]