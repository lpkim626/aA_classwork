catBuilder("whiskers", "black", "yarn")

function catBuilder(name, color, toys) {
    let cat = { 
        name : name, 
        color : color, 
        toys : toys,
    }
    return cat.name
}
console.log(catBuilder("whiskers", "black", "yarn"))


  //  cat["name"] = name;
  //  cat["color"] = color;
  //  cat["toys"] = toys;