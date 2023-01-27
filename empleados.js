    const inicioDeSeccion = document.querySelector(".inicio-de-section");
    const crearCuenta = document.querySelector(".Registrarse");
    const botonRegistrarse = document.querySelector(".singup-button")
    const botonCrearcuenta = document.querySelector(".crear-cuenta");
    const flechita = document.querySelector(".flechita");



    botonRegistrarse.addEventListener("click",registrarse);

    function registrarse(params)
    {
        inicioDeSeccion.style.display = "none"
        crearCuenta.style.display = "grid"
        console.log("esta funcionando")

        
    }

    flechita.addEventListener("click",inicio);

    function inicio(params)
    {
        inicioDeSeccion.style.display = "grid"
        crearCuenta.style.display = "none"
        
    }