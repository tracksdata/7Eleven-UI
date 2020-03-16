// services
const store = {

    getProducts() {
        return {
            products: [
                { id: 10, name: 'pen', price: 87 },
                { id: 11, name: 'book', price: 43 },
                { id: 12, name: 'laptop', price: 33434 },
                { id: 13, name: 'pendrive', price: 764 },
                { id: 14, name: 'hdd', price: 5784 }
            ]
        }
    },
    subscribe(listener) {
        // ...
        console.log('====>> new data is addded...');
        return {
            topics: [
                'java',
                'javascript',
                'python',
                'reactjs'
            ]
        }

    },

    getStore() {
        return {
            topics: [
                'java',
                'javascript',
                'python',
                'reactjs'
            ],
            comments: {
                'java': [
                    'make java as your mother tounge',
                    'bla bla'
                ],
                'reactjs': [
                    'react is very powerfull',
                    'now a days reactive programing is very popular'
                ],
                'javascript':[
                    'js is a language',
                    'js is basics for all ui technologies',
                    'js supports opps with es6 version'
                ]
            }
        }
    }
}
export default store;