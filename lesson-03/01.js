const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors.filter((v) =>{
        if (v ==='черный' || v ==='красный'|| v ==='желтый'){
            return v
        }
    }).join('-')
}

console.log(createColorString());