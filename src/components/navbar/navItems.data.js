
function MenuItem(id, itemLabel, itemLink) {
    this.id = id;
    this.itemLabel = itemLabel;
    this.itemLink = itemLink;
}

export const navbarItems = [
    new MenuItem(1, "Home", "/"),
    new MenuItem(2, "News", "/news"),
    new MenuItem(3, "Community", "/community"),
    new MenuItem(4, "About", "/about")
]