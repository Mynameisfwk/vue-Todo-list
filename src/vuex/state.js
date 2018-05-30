const state={
    home:localStorage["home"]?JSON.parse(localStorage["home"]): [],
    item:localStorage["item"]?JSON.parse(localStorage["item"]): [],
}

export default state