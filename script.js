const menuBtn =
            document.getElementById("menuBtn");

        const navMenu =
            document.getElementById("navMenu");


        menuBtn.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            menuBtn.classList.toggle("active");

        });


        // Close menu after clicking navigation link

        const navLinks =
            document.querySelectorAll(".link");


        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");

                menuBtn.classList.remove("active");

            });

        });

        const contactForm =
        document.getElementById("contactForm");


    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const message =
            document.getElementById("message").value;


        const subject =
            encodeURIComponent(
                "Portfolio Contact - " + name
            );


        const body =
            encodeURIComponent(
                "Name: " + name +
                "\nEmail: " + email +
                "\n\nMessage:\n" + message
            );


        const gmailUrl =
            "https://mail.google.com/mail/?view=cm&fs=1&to=rupeshkumarit05@gmail.com&su="
            + subject
            + "&body="
            + body;


        window.open(gmailUrl, "_blank");

    });