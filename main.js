
// dark mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

    document.querySelector("body").classList.add("light")
}



document.getElementById("checkbox").addEventListener("change", function () {

    document.querySelector("body").classList.toggle("dark");

})


// // to fix header
// let header = document.getElementById('header');
let btnUp = document.getElementById('btnUp');

window.onscroll = function () {
    if (window.scrollY > 200) {
        // header.classList.add('header-fix');
        btnUp.classList.add('show-btn');
    }
    else {
        // header.classList.remove('header-fix');
        btnUp.classList.remove('show-btn');
    }
};
btnUp.addEventListener('click', function (e) {
    window.scroll({
        top: 0,
        bahaviour: "smooth"
    });
});
// add class active

document.querySelectorAll('.list').forEach((list) => {



    list.addEventListener("click", function () {
        document.querySelectorAll('.list').forEach((list2) => {
            list2.classList.remove("active")
        })
        list.classList.add("active")
        console.log("done");

    })
})