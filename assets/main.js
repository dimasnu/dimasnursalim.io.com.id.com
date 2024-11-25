
// 1. Define the function 'cekkhodam' before using it
function cekkhodam(event) {
    event.preventDefault();  // Prevent form submission and page reload

    let nama = $('#search').val();  // Get the value from the input

    if (nama === '') {
        alert('Nama tidak boleh kosong!');
    } else {
        let status = ['isi', 'kosong'];  // Define possible status values
        const ramdomStatus = Math.floor(Math.random() * status.length);  // Generate a random status

        if (ramdomStatus === 0) {
            let Khodam = [
                'Khodam Penjaga',
                'Macan pemarah',
                'Buaya sunda',
                'Beruang sunda',
                'Tutup odol',
                'Tutup panci ',
                'Kanebo kering ',
                'Kapal karam ',
                'Gergaji mesin ',
                'Nyi blorong ',
                'Jin rawa rontek ',
                'Kucing Israel ',
                'Capung gila ',
                'Tumis kangkung ',
                'Jam Dinding Rusak ',
                'Gunting Tumpul ',
                'Kasur Empuk ',
                'Payung Robek ',
                'Kulkas Kosong ',
                'Piring Pecah ',
                'Meja Berdecit ',
                'Koper Berat ',
                'Topi Melorot ',
                'Lem Super Lengket ',
                'Keripik Garing ',
                'Senter Mati ',
                'Kue Kering',
                'Bantal Empuk ',
                'Kendi Air ',
                'Penggaris Melengkung ',
                'Tali Jemuran ',
                'Kancut badak ',
                'Rayap gendut ',
                'Pagar besi ',
                'Kunci gembok ',
                'LC karaoke ',
                'Cicak kawin ',
                'Cupang Betina ',
                'Sundel Bolong ',
                'Tuyul Kesandung ',
                'Genderuwo TikTok ',
                'Jin Susu Kental Manis ',
                'Si Lontong Lumer',
                'Setan Payung Bocor',
                'Jin Es Krim Leleh',
                'Pocong Bersepeda',
                'Kuntilanak Selfie',
                'Tuyul Main PS5',
                'Batu Bata',
                'Remote TV',
                'Kompor Meledak',
                'Helm Nyasar',
                'Gitar Putus Senar',
                'Si Sate Klathak',
                'Jin Penjual Cilok',
                'Setan Jualan Online',
                'Kuntilanak Kecanduan Kopi',
                'Pocong Nyanyi Dangdut',
                'Jin Martabak Telor',
                'Tuyul Kerja Part-Time',
                'Handuk Basah',
                'Kipas Rusak',
                'Jemuran Penuh',
                'Tisu Gulung',
                'Gelas Plastik',
                'Si Bakso Urat',
                'Setan Suka Drama Korea',
                'Genderuwo Nonton Netfix',
                'Jin Donat Ketang',
                'Kuntilanak Pake Kacamata',
                'Pocong Mainan Kucing',
                'Jin Peminum Boba',
                'Tuyul Bersepatu Roda',
                'Si Keripik Pedas',
                'Setan Kolektor Komik',
                'Genderuwo Pemain Basket',
                'Jin Sate Madura',
                'Kuntilanak Nge-Gym',
                'Pocong Ngantor',
                'Tuyul Jago Coding',
                'Si Pizza Keju',
                'Setan Pemilik Cafe',
                'Genderuwo Seniman',
                'Jin Coklat Batangan',
                'Kuntilanak Hobi Makeup',
                'Pocong Main TikTok',
                'Tuyul Kuliah Online',
                'Si Rambutan Manis',
                'Sendal Jepit',
                'Panci Gosong',
                'Guling Gembung',
                'Sarung Bantal',
                'Kaos Oblong',
                'Jin Kipas Angin',
                'Setan Pembeli Pulsa',
                'Kuntilanak Karaoke',
                'Pocong Joget',
                'Ember Bocor',
                'Celana Sobek',
                'Sepeda Tua',
                'Telepon Jadul',
                'Tas Plastik',
                'Kalender Bekas',
                'Pensil Inul',
                'Buku Kusut',
                'Korek Kusut',
                'Mangkok Retak',
                'Lemari Penuh',
            ];
            const random = Math.floor(Math.random() * Khodam.length);  // Generate a random Khodam

            // Update the result with the random Khodam
            $('#result').html(`${nama.toUpperCase()} - khodam kamu (${Khodam[random]})`);
        } else {
            // If the status is 'kosong'
            $('#result').html(`${nama.toUpperCase()} - Kosong`);
        }

        $('#search').val('');  // Clear the input field after the check
    }
}

// 2. Bind the function to the button's click event
$(document).ready(function() {
    $('#btn-search').click(cekkhodam);  // Attach 'cekkhodam' function to button click
});
