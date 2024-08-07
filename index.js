// EXERCISE VARIABEL
//variabel menggunakan let (string)
let name = "Siti Amalia";
let age = 21;
let university = "UIN Raden Intan Lampung";
let citizen = "Indonesia";

// Cetak hasil ke console
console.log(`Nama saya ${name}, saya berusia ${age} tahun, saya dari universitas ${university} dan berasal dari ${citizen}.`);




// exercise function
function animal(name, type) {
    
    return `${name} merupakan binatang dengan jenis ${type}`;
  }
  
  // Memanggil fungsi animal dan mencetak hasilnya ke console
  let myName = "Amelia"; // nama animal
  let myAnimal = "kucing"; // jenis animal
  console.log(animal(myName, myAnimal));



  //exercise class
  class Mahasiswa {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    introduction() {
        console.log(`Halo, nama saya ${this.name} dan saya dari jurusan ${this.department}.`);
      }
}

  const mahasiswa1 = new Mahasiswa("Amelia", "Sistem Informasi");
  
  // Memanggil method introduction()
  mahasiswa1.introduction();

  //EXERCISE LOOPING
  const friends = ["LIAA", "HUSNIL", "NURUL", "MANDA", "DIANA"];
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}

console.log("Perulangan Berhasil");