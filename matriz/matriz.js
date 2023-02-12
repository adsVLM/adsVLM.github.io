const periodo1 = document.querySelector("#p1")
const periodo2 = document.querySelector("#p2")
const periodo3 = document.querySelector("#p3")
const periodo4 = document.querySelector("#p4")
const periodo5 = document.querySelector("#p5")
const periodo6 = document.querySelector("#p6")
const periodoS = document.querySelectorAll(".periodo")


function togglePeriodo(event) {
    if (event.type === "touchstart") event.preventDefault();
    // const periodo = document.querySelector(".periodo");
    const periodo = event.currentTarget
    periodo.classList.toggle("active");
    const active = periodo.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
      event.currentTarget.setAttribute("aria-label", "fechar disciplinas");
    } else {
      event.currentTarget.setAttribute("aria-label", "abrir disciplinas");
    }
  }

  periodo1.addEventListener("click", togglePeriodo)
  periodo2.addEventListener("click", togglePeriodo)
  periodo3.addEventListener("click", togglePeriodo)
  periodo4.addEventListener("click", togglePeriodo)
  periodo5.addEventListener("click", togglePeriodo)
  periodo6.addEventListener("click", togglePeriodo)

  periodo1.addEventListener("touchstart", togglePeriodo)
  periodo2.addEventListener("touchstart", togglePeriodo)
  periodo3.addEventListener("touchstart", togglePeriodo)
  periodo4.addEventListener("touchstart", togglePeriodo)
  periodo5.addEventListener("touchstart", togglePeriodo)
  periodo6.addEventListener("touchstart", togglePeriodo)