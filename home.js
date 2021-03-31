function books(bname, grene, id, image) {
    this.name = bname;
    this.grene = grene;
    this.id = id;
    this.img = image;
}
let text = "Natus nobis non architecto nisi Lorem ipsum dolor, sit amet consectetur adipisicing elit.Esse eaque repellendus doloremblanditiis.Inventore animi asperiores atque."
let text1 = "hjfkss ofuhnsnd ncyddnd kfdksljc jfifofl  hsfsvv lglogoglg gsfsfdsds lgohohln amet consectetur adipisicing elit.Esse eaque repellendus doloremblanditiis.Inventore animi asperiores atque."
let text2 = "Natus nobis non architecto nisi Lorem ipsum do jfjff loddd fss ,bo,c.x lor, sit amet consectetur adipisicing elit.Esse eaque repellendus doloremblanditiis.Inventore animi asperiores atque."
let text3 = "Natus hcyuil;iuytresdcvbnm utuidld 6yfhkc,.;xlkn  hddyysssskk hjjgjfhhh iorl,,cn  rtyuio yrue bsnsu kdurk sy nobis non architecto nisi Lorem ipsum dolor, sit amet consectetur adipisicing elit.Esse eaque repellendus doloremblanditiis.Inventore animi asperiores atque."
let text4 = "Natus Inventore animi asperiores atque. Iure vitae soluta dolores harum autem?Odio, reiciendis?nobis non architecto nisi Lorem ipsum dolor, sit amet consectetur adipisicing elit.Esse eaque repellendus doloremblanditiis.Inventore animi asperiores atque."
                        

let book = [
    { name: '', id: 0, src: 'images/creat.jpg', grene: 'Horror', write: text },
    { name: '', id: 1, src: 'images/feets.jpg', grene: 'Romance',  write: text1 },
    { name: '', id: 2, src: 'images/war.jpg', grene: 'History',  write: text2 },
    { name: '', id: 3, src: 'images/amara.webp', grene: 'Action', write: text3 },
    { name: '', id: 4, src: 'images/creat.jpg', grene: 'Manga',  write: text4 },
]

setInterval(() => {
    let num = Math.floor(Math.random() * book.length)
    $("#change").attr('src', book[num].src)
    $("#grene").text(book[num].grene)
    $("#about").text(book[num].write)
}, 3000);

