export function sum (a,b){
    return{
        type: 'SUM',
        payload: [a,b]
    }
}

export function subtract (a,b){
    return{
        type: 'SUB',
        payload: [a,b]
    }
}