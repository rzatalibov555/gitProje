


    // const randomNumber1 = Math.floor(Math.random() * 255) + 1;
    // const randomNumber2 = Math.floor(Math.random() * 255) + 1;
    // const randomNumber3 = Math.floor(Math.random() * 255) + 1;
    // console.log(randomNumber1);
    // console.log(randomNumber2);
    // console.log(randomNumber3);



    // document.getElementById("demo").innerHTML = "test"
    // document.getElementById("demo2").innerHTML = "test2"


    // document.getElementsByClassName("kv")[0].innerHTML = "Demo1"
    // document.getElementsByClassName("kv")[1].innerHTML = "Demo2"
    // document.getElementsByClassName("kv")[2].innerHTML = "Demo3"


    // document.getElementsByTagName("DIV")[0].style.background = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`
    // document.getElementsByTagName("DIV")[1].style.background = `rgb(${randomNumber2}, ${randomNumber1}, ${randomNumber3})`
    // document.getElementsByTagName("DIV")[2].style.background = `rgb(${randomNumber3}, ${randomNumber2}, ${randomNumber1})`
    // document.getElementsByTagName("DIV")[1].innerHTML = "Demooooo"
    // document.getElementsByTagName("DIV")[2].innerHTML = "Demooooo"


    // for(let i = 0; i < 3; i++){
    //      document.getElementsByTagName("DIV")[i].innerHTML = "Demo"+(i+1)
    // }




    // function demo(){
    //     const imageLinks = [
    //         "https://www.hollywoodreporter.com/wp-content/uploads/2024/06/GettyImages-1456051466.jpg?w=1296&h=730&crop=1",
    //         "https://xdn.tf.rs/2024/06/11/shutterstock2454742201-670x447.jpg?ver=421120",
    //         "https://play-lh.googleusercontent.com/proxy/chZ5uEbqWDvlFwTQCrdI-9wQGVQXhkMTEE-eXM0GNownmPLeo5nZQyM-956ywnrKNh4a5GGVMwTdH128CvRcZ02MOY0XBjVu1Uo6v6ZDjjTQlS-TpB4_CQ=s3840-w3840-h2160",
    //         "https://playcontestofchampions.com/wp-content/uploads/2023/04/champion-iron-man.webp",
    //         "https://images.saymedia-content.com/.image/t_share/MTc0NDI1OTUzNjY4MTc5MzA0/the-different-marvel-movie-hulk-2003-movie-review.jpg",
    //         "https://pics.craiyon.com/2023-07-06/aab11c7edbd04765ac668cc9d4a6045b.webp",
    //         "https://assets-prd.ignimgs.com/2024/10/18/spidermanmovies-blogroll-1729276404576.jpg",
    //         "https://cdn.mos.cms.futurecdn.net/3JCaEkiSwWKAwgLMjpChF3-1200-80.jpg",
    //         "https://www.techzilla.it/wp-content/uploads/2022/08/spiderman-remastered-1.jpg",
    //         "https://m.media-amazon.com/images/S/pv-target-images/1e7b37794043373eecb719761d9fc12ac75a2b59b5adfec318b002d6e0b03bf0._SX1080_FMjpg_.jpg",
    //       ];
         
    
    //     const divs = document.querySelectorAll(".image-container div");
    
    //     divs.forEach(div => {
    //         const randomIndex = Math.floor(Math.random() * imageLinks.length);
    //         const img = document.createElement("img");
    //         img.src = imageLinks[randomIndex];
    //         div.appendChild(img);
    //       });
    // }
    


    function demo() {
        const imageLinks = [
          "https://www.hollywoodreporter.com/wp-content/uploads/2024/06/GettyImages-1456051466.jpg?w=1296&h=730&crop=1",
          "https://xdn.tf.rs/2024/06/11/shutterstock2454742201-670x447.jpg?ver=421120",
          "https://play-lh.googleusercontent.com/proxy/chZ5uEbqWDvlFwTQCrdI-9wQGVQXhkMTEE-eXM0GNownmPLeo5nZQyM-956ywnrKNh4a5GGVMwTdH128CvRcZ02MOY0XBjVu1Uo6v6ZDjjTQlS-TpB4_CQ=s3840-w3840-h2160",
          "https://playcontestofchampions.com/wp-content/uploads/2023/04/champion-iron-man.webp",
          "https://images.saymedia-content.com/.image/t_share/MTc0NDI1OTUzNjY4MTc5MzA0/the-different-marvel-movie-hulk-2003-movie-review.jpg",
          "https://pics.craiyon.com/2023-07-06/aab11c7edbd04765ac668cc9d4a6045b.webp",
          "https://assets-prd.ignimgs.com/2024/10/18/spidermanmovies-blogroll-1729276404576.jpg",
          "https://cdn.mos.cms.futurecdn.net/3JCaEkiSwWKAwgLMjpChF3-1200-80.jpg",
          "https://www.techzilla.it/wp-content/uploads/2022/08/spiderman-remastered-1.jpg",
          "https://m.media-amazon.com/images/S/pv-target-images/1e7b37794043373eecb719761d9fc12ac75a2b59b5adfec318b002d6e0b03bf0._SX1080_FMjpg_.jpg",
        ];
      
        const divs = document.querySelectorAll(".image-container div");
      
        divs.forEach(div => {
          div.innerHTML = ""; // Mövcud şəkilləri təmizləyirik
          const randomIndex = Math.floor(Math.random() * imageLinks.length);
          const img = document.createElement("img");
          img.src = imageLinks[randomIndex];
          div.appendChild(img);
        });
      }


   
      function elave_et(){
        const div = document.querySelector("#myDiv");
        div.classList.add("elmeddin"); // Mövcud sinfi əlavə edir
      }

      function sil(){
        const div = document.querySelector("#myDiv");
        div.classList.remove("elmeddin"); // Mövcud sinfi əlavə edir
      }
     
      function elave_et_sil(){
        const div = document.querySelector("#myDiv");
        div.classList.toggle("elmeddin"); // Mövcud sinfi əlavə edir
      }


      function test(){
        const div = document.querySelector("#myDiv");
        div.setAttribute("style", "background-color: green; color: white; padding: 10px;");
        div.setAttribute("onmouseover", "hello()");
      }


        const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
        fruits.copyWithin(2, 0, 2);

        console.log(fruits)  
      