const khodamArrays = {
    A: ["Creeper",
        "Kelapa Botak",
        "Anjing Merah",
        "Nenek Goyang"],
    B: ["Baju Partai",
        "Kaleng Red Bull",
        "Kucing Pemanggil",
        "Warung Madura"],
    C: ["Tante Tobrut",
        "Tuyul Galau",
        "Singa Pendiam",
        "Croissant"],
    D: ["ChatGPT",
        "Jerome Poline",
        "Monyet Sombong",
        "Iblis Mstematika"],
    E: ["Elang Emas",
        "Ekor Kuda",
        "Keris Kristal",
        "Boti Berbunga"],
    F: ["Salmon Langit",
        "Flamingo Kayang",
        "Awam Kinton",
        "Fanta Kaleng"],
    G: ["Gajah Thailand",
        "T-Rex",
        "Godzilla",
        "Kunti Gaul"],
    H: ["Harimau Sumatra",
        "Hiu Jawa",
        "Tidak Ada",
        "Tulang Ayam"],
    I: ["Roger Sumatra",
        "Iguana Bengong",
        "Semphoa",
        "Iblis Sate"],
    J: ["Jerapah Madagaskar",
        "Banteng Ngamuk",
        "Jalak Galau",
        "Singa Santai"],
    K: ["Taehyung",
        "Kucing Pengangguran",
        "Babi Pemalas",
        "Komodo Salto"],
    L: ["Tidak Ada",
        "Lemari Kayu",
        "Harimau Galau",
        "Kepiting Pemalas"],
    M: ["Kancil Jahil",
        "Genderuwo Emas",
        "Kadal Masako",
        "Mouse RGB"],
    N: ["Naga Emas",
        "Siska Khol",
        "Wibu Pyshco",
        "Kalender"],
    O: ["Suster Pargoy",
        "Kipas Rusak",
        "Kabel Roll",
        "Tokopedia"],
    P: ["Harimau Pemarah",
        "Kebaya Merah",
        "Beruang Emas",
        "Patrick"],
    Q: ["Fillano",
        "Brainly",
        "Selendang Sutra",
        "Windah Basudara"],
    R: ["Buaya Darat",
        "Supra Bapak",
        "Rakun RGB",
        "Kelinci Jumpshoot"],
    S: ["Kunti Galau",
        "Susu Bearbrand",
        "Singa Bosan",
        "Bocil epep"],
    T: ["Kura-Kura Ninja",
        "Sendok Nasi",
        "Wahyu A5",
        "Bakso Mercon"],
    U: ["Uang Yen",
        "Chef Anjing",
        "Vampire Oreo",
        "Kabel HDMI"],
    V: ["Intel Celeron",
        "Virus Copid",
        "Kursi Gaming",
        "Botol Vodka"],
    W: ["Keyboard Mekanik",
        "Laptop ASUS",
        "Mawar Gaul",
        "Tidak Ada"],
    X: ["Matcha Susu",
        "Keju Joget",
        "Botol Susu Bayi",
        "Sisir Majapahit"],
    Y: ["Medali Emas",
        "Semut Kalkulus",
        "Peta Dunia",
        "Kamus Ensiklopedia"],
    Z: ["Zebra Salto",
        "Tidak Ada",
        "Gorilla Emas",
        "Es Krim Durian"]
};

const antiLetter = ["Kakek Pargoy", "Babi Terbang", "Semangka Jamet", "Naga Es"];

function getKhodam(name) {
    // Ambil Huruf Pertama
    const firstLetter = name.charAt(0).toUpperCase();

    // Ambil Array & Hitung Panjang Kata
    const khodamArray = khodamArrays[firstLetter];
    const nameLength = name.length;

    // Cari Khodam dari sisa modulus 4
    const index = nameLength % 4;
    const khodamKamu = khodamArray[index];
    return khodamKamu;
}

//Check Input Bukan Huruf
function isAlpha(str) {
    return /^[a-zA-Z]+$/.test(str);
}

// Cari Khodam
function findKhodam() {
    const nameInput = document.getElementById("nameInput").value.trim();
    const outputElement = document.getElementById("khodamOutput");
    const output = document.getElementById("Output");
    const title = document.getElementById("title");

    // Periksa apakah input kosong
    if (nameInput === "") {
        outputElement.textContent = "Kosong ngab !!";
        output.style.display = "block";
        title.style.display = "none";
        setTimeout(() => {
            output.style.display = "none";
        }, 1500);
        return;
    }

    // Bukan Awalan Huruf
    if (!isAlpha(nameInput)) {
        const index = nameInput.length % 4;
        outputElement.textContent = `${antiLetter[index]}`;
        title.style.display = "block";
        output.style.display = "block";
        return;
    }

    title.style.display = "block";
    output.style.display = "block";
    const khodamKamu = getKhodam(nameInput);
    outputElement.textContent = `${khodamKamu}`;
}