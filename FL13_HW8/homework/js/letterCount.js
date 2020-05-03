function letterCount(str, search) {
    return str.toLowerCase().split(search.toLowerCase()).length - 1
}
letterCount("Maggy", "g");