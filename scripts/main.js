IMask(
    document.getElementById("phone_input"),
    {
        mask: "(000) 000-00-00"
    }
)

// Adaptive car icon
const hero__content = document.querySelector(".hero__content")
const hero__content_lead = document.querySelector(".hero__content_lead")

const car_icon = document.querySelector(".hero__content_car_icon")

// TODO: match media instead
window.addEventListener(
    "resize",
    () =>
    {
        if (window.innerWidth < 1024)
        {
            hero__content_lead.children[0].after(car_icon)
        }
        else
        {
            hero__content.append(car_icon)
        }
    }
)