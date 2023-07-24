const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

const aLinks = document.querySelectorAll("nav > a");
for (let i = 0; i < aLinks.length; i++) {
  aLinks[i].setAttribute("class", "italic")
}

aLinks[0].textContent = "Servisler"
aLinks[1].textContent = "Ürünler"
aLinks[2].textContent = "Vizyon"
aLinks[3].textContent = "Özellikler"
aLinks[4].textContent = "Hakkımızda"
aLinks[5].textContent = "İletişim"


const firstImg = document.getElementById("logo-img")

firstImg.setAttribute("src", "http://localhost:9000/img/logo.png")


const domMuk = document.querySelector(".cta-text > h1")

domMuk.textContent = "Bu DOM Mükemmel"

const domButton = document.querySelector(".cta-text > button")

domButton.textContent = "Başlayın"

const yuvarlakKodResmi = document.getElementById("cta-img")

yuvarlakKodResmi.setAttribute("src", "http://localhost:9000/img/cta.png")

const ozelliklerKismiH4 = document.querySelectorAll(".main-content > .top-content > .text-content > h4")

const ozelliklerKismiP = document.querySelectorAll(".main-content > .top-content > .text-content > P")

ozelliklerKismiH4[0].textContent = "Özellikler"

ozelliklerKismiP[0].textContent = "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

ozelliklerKismiH4[1].textContent = "Hakkında"

ozelliklerKismiP[1].textContent = "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."


const middleImg = document.getElementById("middle-img" )

middleImg.setAttribute("src","http://localhost:9000/img/accent.png")


const middleKismiH4 = document.querySelectorAll(".main-content > .bottom-content > .text-content > h4")

const middleKismiP = document.querySelectorAll(".main-content > .bottom-content > .text-content > p")


middleKismiH4[0].textContent = "Servisler"

middleKismiP[0].textContent = "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl.Nullam convallis augue justo, at imperdiet metus scelerisque quis."


middleKismiH4[1].textContent = "Ürünler"

middleKismiP[1].textContent = "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

middleKismiH4[2].textContent = "Vizyon"

middleKismiP[2].textContent = "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."



const contactKismiH = document.querySelectorAll(".contact > h4")

const contactKismiP = document.querySelectorAll(".contact > p")

contactKismiH[0].textContent = "İletişim"

contactKismiP[0].textContent = "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye"
contactKismiP[1].textContent = "+90 (123) 456-7899"
contactKismiP[2].textContent = "satis@birsirketsitesi.com.tr"



const footerlink = document.querySelector("footer > a")

footerlink.setAttribute("class","bold")

footerlink.textContent = "Copyright Bir Şirket Sitesi 2022"
