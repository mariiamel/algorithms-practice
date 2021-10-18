
function freshPromotion(codeList, shoppingCart) {
    const list = [...codeList[0], ...codeList[1]];
    const cart = [];
    let cartLength = shoppingCart.length;
    let listLength = list.length;

    if(cartLength < list.length || cartLength === 0 || cartLength == null) return 0;
    if(listLength === 0 || listLength == null) return 1; 

    if(cartLength >= listLength) {
        for(let j = 0; j < codeList.length; j++) {
            for(let i = 0; i < codeList[j].length; i++) {

                let match = shoppingCart.findIndex(x => x === codeList[j][0]);
                let index = match + i;

                if(shoppingCart[index] === codeList[j][i]) {
                    cart.push([shoppingCart[index], index])
                } else if(codeList[j][i] === 'anything') {
                    cart.push([shoppingCart[Math.floor(Math.random() * cartLength)], index])
                }

            }
        }  
    }	

    cart.sort((a,b) => a[1] - b[1])

    let sum = 0, any = 0;

    cart.forEach((item, index) => {
        if(item[0] === list[index]) sum += 1; 
        else if(list[index] === 'anything') any += 1;
    })

    let count = sum + any;

    return count === listLength ? 1 : 0
}

freshPromotion()

//OR
//Linear complexity O(N)

function freshPromotion(codeList, shoppingCart) {
    
    let listIndex = 0;
    let result = 0;
    let itemInListIndex = 0;
    const numberOfCodeLists = codeList.length;

    shoppingCart.forEach(shoppingCartItem => {
        const currList = codeList[listIndex].split(' ');
        const secretListCurrItem = currList[itemInListIndex];

        if (secretListCurrItem === shoppingCartItem || secretListCurrItem === 'anything'){
            itemInListIndex++;
            if (itemInListIndex === currList.length) {
                itemInListIndex = 0;
                listIndex++;
                if (listIndex === numberOfCodeLists) {
                    result = 1;
                    return;
                }
            }
        }
        else {
            itemInListIndex = 0;
        }
    })

    return result;
}