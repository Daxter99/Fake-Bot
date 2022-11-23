const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
    return [
        "Hallo, perkenalkan nama saya Ade. Siapa nama kamu?",
        `Hallo ${data?.nama}, Berapa usia kamu?`,
        `Ohhh ${data?.usia}, hobi kamu apa yaa?`,
        `Wawww sama dong aku juga hobi ${data?.hobi}, Btw punya pacar gak?`,
        `Ohhh ${data?.pacar}, Yaa udah kalo gitu. Udahan yaa?`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    if (jawaban.value.length < 1) return alert("Silahkan Isi Jawaban Dulu")
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value })
    } else if (init === 2) {
        botDelay({ usia: jawaban.value })
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value })
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value })
    } else if (init === 5) {
        finishing()
    }
    else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loaders.style.display = "none"
        container[0].style.filter = "none"
    }, [1000])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Thank U Yaa ${usersData[0]} udah main ke adebot 😉, kali-kali kita main ${usersData[2]} bareng yaa!`
    jawaban.value = "Siap Thank juga! 👌"
}

function botEnd() {
    alert(`Terimaksih ${usersData[0]} sudah berkunjung, Anda akan diarahkan ke halaman utama.`)
    window.location.reload()
}