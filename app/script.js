/*  java Script */
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')
 navLink = document.querySelectorAll('.nav__link');

// Tampilkan menu saat klik toggle
if (toggleMenu) {
  toggleMenu.addEventListener('click', () => {
    navMenu.classList.add('show');
  });
}

// Sembunyikan menu saat klik close
if (closeMenu) {
  closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
}



function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
function hitungKPR() {
  var jumlah_pinjaman = parseFloat(document.getElementById("jumlah_pinjaman").value);
  var suku_bunga_tahunan = 1.5; // Menggunakan suku bunga tetap (contoh 8%)
  var tenor_bulan = parseFloat(document.getElementById("tenor").value);

  var suku_bunga_bulanan = suku_bunga_tahunan / 100 ;

  var pembayaran_per_bulan = (jumlah_pinjaman / tenor_bulan) + (jumlah_pinjaman * suku_bunga_bulanan);
  var formatter = new Intl.NumberFormat('id-ID',{
    style: 'currency', currency: 'IDR'
  });
  
  var pembayaran_per_bulan_formatted = formatter.format(pembayaran_per_bulan);

  document.getElementById("result").innerHTML = "Angsuran bulanan KPR Anda sebesar:  " + pembayaran_per_bulan_formatted;
}
