export const convertPrice = (price: number) => {
    return price.toLocaleString("ru-RU", {
        style: "currency",
        currency: "RUB"
    });
};

// export const convertPrice = (price: number)=>{
//     return price.toLocaleString("en-US", {
//         style: "currency", 
//         currency: "USD"
//     })
// }