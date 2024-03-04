const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const items = [];

function showMenu() {
  console.log('1. Tambah item');
  console.log('2. Hapus item');
  console.log('3. Tampilkan semua item');
  console.log('4. Keluar');

  rl.question('Pilih menu: ', async (choice) => {
    switch (choice) {
      case '1':
        await addItem();
        break;
      case '2':
        await removeItem();
        break;
      case '3':
        await displayItems();
        break;
      case '4':
        console.log('Keluar dari program.');
        rl.close();
        break;
      default:
        console.log('Menu tidak valid. Silakan pilih lagi.');
        showMenu();
        break;
    }
  });
}

function addItem() {
  rl.question('Masukkan item baru: ', (item) => {
    items.push(item);
    console.log('Item berhasil ditambahkan.');
    showMenu();
  });
}

function removeItem() {
  rl.question('Masukkan nomor item yang ingin dihapus: ', (index) => {
    if (index >= 0 && index < items.length) {
      const removedItem = items.splice(index, 1);
      console.log(`Item '${removedItem}' berhasil dihapus.`);
    } else {
      console.log('Nomor item tidak valid.');
    }
    showMenu();
  });
}

function displayItems() {
  console.log('Daftar Item:');
  items.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
  showMenu();
}

async function main() {
  console.log('Welcome!');

  showMenu();
}

main();
