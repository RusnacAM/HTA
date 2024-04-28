
function MenuItem(id, itemLabel, itemLink) {
    this.id = id;
    this.itemLabel = itemLabel;
    this.itemLink = itemLink;
}

export const navbarItems = [
    new MenuItem(1, "Home", "/"),
    new MenuItem(2, "Info", "/info"),
    new MenuItem(3, "News", "/news"),
    new MenuItem(4, "Community", "/community"),
    new MenuItem(5, "About", "/about")
]