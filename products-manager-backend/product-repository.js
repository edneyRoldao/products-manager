
// mock
let products = [{
    id: 1,
    name: 'Notebook MSI',
    category: 'eletronic',
    price: 10000.00,
    link: 'https://mdbootstrap.com/img/Photos/Others/placeholder7.webp'
}]


function get(id) {
    return products.find(item => item.id == id)
}

function add(product) {
    const lastProduct = products[products.length -1]
    const nextId = !!lastProduct ? lastProduct.id + 1 : 1
    product.id = nextId
    products.push(product)
    return product
}

function update(product) {
    remove(product.id)
    products.push(product)
    products.sort((o1, o2) => o1.id - o2.id)
}

function remove(id) {
    products = products.filter(item => item.id != id)
}

function filter(filterObj = {}) {
    let filtered = products

    if (!Object.keys(filterObj).length)
        return filtered

    for (key in filterObj) {
        const filterValue = filterObj[key].toUpperCase()
        filtered = filtered.filter(item => item[key].toUpperCase().includes(filterValue))
    }

    return filtered
}


module.exports = {
    get,
    add,
    update,
    remove,
    filter
}
