
function MenuItem(id, itemLabel, itemLink) {
    this.id = id;
    this.itemLabel = itemLabel;
    this.itemLink = itemLink;
}

export const navbarItems = [
    new MenuItem(1, "Home", "/"),
    new MenuItem(2, "About", "/about")
]