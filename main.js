let form = document.querySelector("form")
let input = document.querySelector("input")
let img = document.querySelector("img")
let select = document.querySelector("#size")


const getQR = async (e) => {
    e.preventDefault();

    const response = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?size=${size.value}&data=${input.value}`
    );
    img.setAttribute("src", response.url);
    form.reset();
};
form.addEventListener("submit", getQR)
