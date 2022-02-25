let ul = document.querySelectorAll("ul li");
let contentChilds = document.querySelectorAll(".content > div");

ul.forEach(el => {
    contentChilds.forEach(item => {
        el.addEventListener("click", function (e) {
            ul.forEach(el => {
                el.classList.remove("active");
            })
            el.classList.add("active");
            if (el.dataset.fltr == item.getAttribute("class")) {
                item.style.display = "block"
            } else {
                item.style.display = "None"
            }

        })
    })
})

