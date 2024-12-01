const members = [{
    name: "Stevan Lukas Siahaan",
    nim: "535220053"
}, {
    name: "Elsie",
    nim: "535220076"
}, {
    name: "Richard Vincentius",
    nim: "535220077"
}, {
    name: "Michael Chan",
    nim: "535220079"
}, {
    name: "Jechenthia Maria Taso",
    nim: "535220081"
}, {
    name: "Chelsia Cindeleria Herwanto",
    nim: "535220083"
}, {
    name: "Kevin Natanael",
    nim: "535220084"
}, {
    name: "Emmanuel Garcia Sumargo",
    nim: "535220103"
}, {
    name: "Gabriella Ignatia",
    nim: "535220104"
}, {
    name: "Widya Khaerunnisyah",
    nim: "535220262"
}];

function clearPageContent(page) {
    while (page.firstChild)
        page.removeChild(page.lastChild);
}

function createHome() {
    let page = document.querySelector('.page');
    clearPageContent(page);

    let home = document.createElement('section');
    home.classList.add('home');

    let img = document.createElement('div');
    img.classList.add('home-image');

    let homeText = document.createElement('div');
    homeText.classList.add("content");
    homeText.innerHTML = "<h2><span>404</span> ENJENIR</h2>"
        + "<p>Universitas Tarumanagara<br>Teknik Informatika<br>"
        + "<i>Front-End Programming </i>(B)</p>";

    home.appendChild(img);
    home.appendChild(homeText);
    page.appendChild(home);
}

function createAbout() {
    let page = document.querySelector('.page');
    clearPageContent(page);

    let aboutBox = document.createElement('section');
    aboutBox.classList.add('aboutBox');

    let about = document.createElement('div');
    about.classList.add('about');

    let title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = "<h2><span>404</span> ENJENIR</h2>"

    let content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = "<p>Angka <b>404</b> pada nama <b>404 Enjenir</b>"
    + ' terinspirasi dari kata <i>"kode"</i> yang muncul '
    + "karena situs tertuju tidak dapat ditemukan atau memang"
    + "alamatnya sudah tidak ada karena telah dihapus. Selain itu, "
    + 'istilah "<b><i>Enjenir</i></b>" merupakan permainan kata atau '
    + 'plesetan dari kata <i>"Engineer"</i>. Kami berharap dengan '
    + "dibuatnya kelompok ini, kata <b>404</b> yang biasanya mengindikasikan "
    + "<i>not found</i> atau <i>not success</i>, menjadi sebaliknya. "
    + "Sehingga <b>404 Enjenir</b> diharapkan menjadi "
    + "<span><b>404 Enjenir</b> yang sukses.</span></p>";

    about.appendChild(title);
    about.appendChild(content);
    aboutBox.appendChild(about);
    page.appendChild(aboutBox);
}

function createMembers() {
    let page = document.querySelector('.page');
    clearPageContent(page);

    let memberBox = document.createElement('section');
    memberBox.classList.add('memberBox');

    let member = document.createElement('div');
    member.classList.add('member');

    let title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = "<h2>Our <span>Members</span></h2>"

    let table = document.createElement('table');
    let content = "";
    members.forEach(member => {
        content += createMemberTableRow(member);
    });
    table.innerHTML = content;

    member.appendChild(title);
    member.appendChild(table);
    memberBox.appendChild(member);
    page.appendChild(memberBox);
}

function createMemberTableRow(obj) {
    return `<tr><td>${obj.name}</td><td><i>${obj.nim}</i></td></tr>`;
}

createHome();

let homeIcon = document.querySelector('.sidebar .icon.home');
homeIcon.addEventListener("click", () => {
    createHome();
});

let aboutIcon = document.querySelector('.sidebar .icon.about');
aboutIcon.addEventListener("click", () => {
    createAbout();
});

let membersIcon = document.querySelector('.sidebar .icon.members');
membersIcon.addEventListener("click", () => {
    createMembers();
});

let returnIcon = document.querySelector('.sidebar .icon.return');
returnIcon.addEventListener("click", () => {
    location.replace('../Original/index.html');
});
