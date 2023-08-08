//Sc by Xyro base Clara MD
//Di Tulis Ulang VynaChan
//Buat lu semua yang jual sc ini gua ga bakal share lagi!

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285936162097', 'haris', true] //Ganti aja
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285936162097' //Ganti
global.packname = 'Sticker by'
global.author = 'Yaemiko'
global.namebot = 'Yaemiko'
global.wm = 'Yaemiko By haris'
global.stickpack = 'Sticker by'
global.stickauth = 'Yaemiko'
// Link Sosmed
global.sig = 'https://instagram.com/_xwby_?igshid=ZDc4ODBmNjlmNQ=='
global.sgh = 'https://github.com/Xyroinee'
global.sgc = 'https://chat.whatsapp.com/CMK56xUxfTgAXGZjsZBmwf'
// Donasi
global.psaweria = 'https://shoplinks.to/vyna-store'
global.ptrakterr = 'https://shoplinks.to/vyna-store'
global.povo = '6281252740171'
// Info Wait
global.wait = '⏳ Proses...'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'ra2I7xJgKW'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "ra2I7xJgKW",
}

/*Apikey*/
global.APIKeys = {
    "ra2I7xJgKW": "ra2I7xJgKW",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})