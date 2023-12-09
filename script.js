//your JS code here. If required.
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accio Jobs</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #f0f0f0;
            padding: 10px;
            text-align: center;
        }

        marquee {
            white-space: nowrap;
            overflow: hidden;
        }

        article {
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
        }

        img {
            width: 100%;
            height: auto;
        }

        a {
            text-decoration: none;
            color: #0066cc;
        }

        h1, h2 {
            color: #333;
        }
    </style>
    <script>
        // Simple script to log a message when clicking on the "Read More" links
        document.addEventListener("DOMContentLoaded", function () {
            var readMoreLinks = document.querySelectorAll("article a");
            readMoreLinks.forEach(function (link) {
                link.addEventListener("click", function (event) {
                    event.preventDefault();
                    console.log("Clicked on: " + link.getAttribute("href"));
                });
            });
        });
    </script>
</head>

<body>

    <!-- Marquee Header -->
    <header>
        <marquee>
            <h1>Welcome to Accio Jobs!</h1>
        </marquee>
    </header>

    <!-- Blog Link -->
    <section>
        <h1><a href="link-to-accio-jobs-blog">Accio Jobs Blog</a></h1>
    </section>

    <!-- Articles -->
    <article>
        <h2>Brute Force vs. Optimization</h2>
        <img src="image-url-1" alt="Brute Force vs. Optimization" height="200px">
        <p>We can say that optimization is...</p>
        <a href="link-to-brute-force-vs-optimization">Read More</a>
    </article>

    <article>
        <h2>DSA vs. Competitive Programming</h2>
        <img src="image-url-2" alt="DSA vs. Competitive Programming" height="200px">
        <p>DSA or Competitive programming?...</p>
        <a href="link-to-dsa-vs-competitive-programming">Read More</a>
    </article>

    <article>
        <h2>Complete Guide on FlexBox</h2>
        <img src="image-url-3" alt="Complete Guide on FlexBox" height="200px">
        <p>As a job seeker, you may wonder...</p>
        <a href="link-to-complete-guide-on-flexbox">Read More</a>
    </article>

</body>

</html>
