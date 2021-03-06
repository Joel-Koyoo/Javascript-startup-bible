window.addEventListener("orientationchange", function(e){
    let screen=window.screen;
    let angle=screen.orientation.angle;
    let type = screen.orientation.type;

    console.log(`angle: ${angle}, type : ${type}`)
})

//    first one is for screen orientation
// Below is for click activity in html
let btn= document.querySelector("#click-me");   
 btn.addEventListener("click", function(e){
     console.log("the button was clicked ");
    })


    // MORE JAVASCRIPT INFORMATION


    
        //    first one is for screen orientation
        window.addEventListener("orientationchange", function (e) {
            let screen = window.screen;
            let angle = screen.orientation.angle;
            let type = screen.orientation.type;

            console.log(`angle: ${angle}, type : ${type}`)
        })


        // PAGE IS LOADED

        window.addEventListener("DOMContentloaded", function (e) {
            console.lo("page is loaded")
        });



        // Below is for click activity in html OR ADD EVENT LISTENER
        let btn = document.querySelector("#click-me");
        btn.addEventListener("click", function (e) {
            console.log("the button was clicked ");
        })


        //GEOLOCATION API for knowing user location

        // Ensure a hidden class is set in html so as to combine both latitude and longitude as a string


        // <input type="hidden" id="location" name="location">-----this is to combine a group of data


        window.addEventListener("DOMContentLoaded", function (e) {

            let locationBox = document.querySelector("#location");
            let location = {
                longitude: "Unknown",
                latitude: "unknown"
            };

            window.navigator.geolocation.getCurrentPosition(
                function (position) {

                    location = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    };
                    locationBox.value = JSON.stringify(location);
                },
                function (error) {
                    locationBox.value = JSON.stringify(location);
                });
        });


        // padding data into a function example

        function greet(name) {
            if (name === "Joel") {
                console.log("Hi, its Joel");
            } else if (name === "Tracy") {
                console.log("Hi, its Tracy ");

            } else {
                console.log("Who are you?")
            }
        }


        // FOR EACH LOOP SINCE IT IS DISCTINCT

        let days = ["Mon", "Tue", "Wed"];

        days.forEach(function (day, index) {
            console.log(`day : ${day}, index: ${index}`);

            // WILL display day and the index
        });

        // iN JAVASCRIPT REFERENCING OR selecting you can use

        document.getElementById("IDNAME");
        document.querySelector(".CLASSNAME");

        //ADDING AN ATTRIBUTE TO HTML

        let links = document.querySelectorAll(".tag");
        links.forEach(function (link) {
            link.setAttribute("Target", "_blank");

            // will open links in different tabs
        });

        // CLASSLIST PROPERTY

        let card = document.querySelector(".card")

        // assuming we have a class called card

        card.classList.add("dark");

        // adds a dark color to the card class


        // **WINDOW IN JS IS THE PAGE YOUR RUNNING**


        //********COLLECTING USER DATA**********


        // local storage API

        // first teach data-order attribute class in html elements

        window.addEventListener("DOMContentLoaded", function (e) {
            const orderButtons = document.querySelectorAll("button[data-order]");

            // refernces to the things ordered attribute

            orderButtons.forEach(function (button) {

                button.addEventListener("click", function (e) {
                    const button = e.currentTarget;
                    const container = button.parentNode;

                    const order = {
                        id: (id = button.getAttribute("data-order")),
                        title: container.querySelector(".title").innerText,
                        price: container.querySelector(".price").innerText,
                        desc: container.querySelector(".desc").innerText

                        // all these are classes in button
                    };

                    localStorage.setItem("order", JSON.stringify(order));

                    // changes the JSON to strings

                    const url = window.location.href.replace("pies.html", "order.html");

                    // replaces the pies page with thr order page upon selecting
                    window.location.href = url;
                    //displays
                });


            });
        });



        // ALL THE ABOVE IS FOR THE PAGE FOR SELECTING WHAT THE USER REQUIRES
        // IN THE ORDER PAGE IT NEEDS TO ACQUIRE THE INFORMATION STORED IN THE BROWSER

        const order = localStorage.getItem("order");

        // gets the item stored in browser


        // if statement to check the presence of the ordered material 

        if (order) {
            const pieOrder = JSON.parse(order);

            //  Parse is the opposite of stringify turns it back to a real object 


            const pie = document.querySelector(".pie");

              // pie is the class name for the entire container

            //   Below is sorting the tags and identifying them(DECLARING)

            const title = pie.querySelector(".title");
            const price = pie.querySelector(".price");
            const desc = pie.querySelector(".desc");


            //GIVING THE DECLARED ATTRIBUTES VALUES USING INNERTEXT

            title.innerText = pieOrder.title;
            price.innerText = pieOrder.price;
            desc.innerText = pieOrder.desc;


            //for image purposes

            const img = pie.querySelector("img");
            img.setAttribute("src", `images/${pieOrder.id}.png`);
            img.setAttribute("alt", pieOrder.title);

        }

        // ADDITIONAL INFO ON LOCAL STORAGE API

        // <input type="hidden" id="pie-order" name="pie-order"> in a form

        const orderInput = document.querySelector("#pie-order"); 
          
          orderInput.value = order;

          o

        //   this takes all form input and submits as one

        // order is the comprehensive name

                 

