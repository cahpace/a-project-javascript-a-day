const btnGenerate = document.querySelector("#btnGenerate");
        const btnBack = document.querySelector("#btnBack");
        const colorbtn = document.querySelector("#colorbtn");

        function generateRandomColor(number){
            return Math.floor(Math.random()*(number + 1));
        }

        function changeBackgroundColor(){
            document.body.style.backgroundColor = `rgb(${generateRandomColor(255)}, ${generateRandomColor(255)}, ${generateRandomColor(255)})`;
        }

        // function changeBack(){
        //     document.body.style.backgroundColor = 'white';
        // }

        btnGenerate.addEventListener("click", changeBackgroundColor);

        btnBack.addEventListener("click", () => {
            document.body.style.backgroundColor = "rgb(85, 129, 217)";
        });

        function changeButtonColor(e){
            let randomColor =  `rgb(${generateRandomColor(255)}, ${generateRandomColor(255)}, ${generateRandomColor(255)})`;
            e.target.style.backgroundColor = randomColor;
        }

        colorbtn.addEventListener("click", changeButtonColor);
        //document.body.addEventListener("click", changeButtonColor);