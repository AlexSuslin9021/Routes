
export type Propstype= {item: string, price: string}

export type pagesType={
    pages:  Propstype[]
}

const dataState :pagesType = {
    pages:[
        {item: 'Orange', price: '20'},
        {item: 'Lemon', price: '120'},
        {item: 'Apple', price: '100'},
        {item: 'Banana', price: '130'},
    ]

};

export default dataState