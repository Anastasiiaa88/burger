document.addEventListener("DOMContentLoaded", () =>{
    const btnOpenModal = document.querySelector("#btnOpenModal");
    const modalblock = document.querySelector("#modalBlock");
    const closeModal = document.querySelector("#closeModal");
    const animateModal = document.querySelector("#");
    const questionTitle = document.querySelector("#question");
    const formAnswers = document.querySelector("#formAnswers");
    const burgerBtn = document.getElementById("burger");
    const nextButton = document.querySelector("#next");
    const prevButton = document.querySelector("#prev");

    const questions = [
        {
            question: "Какого цвета бургер вы хотите?",
            answers: [
                {
                    title: 'Стандарт',
                    url: './image/burger.png'
                },
                {
                    title: 'Черный',
                    url: './image/burgerBlack.png'
                }
            ],
            type: 'radio'
        },
        {
            question: "Из какого мяса котлета?",
            answers: [
                {
                    title: 'Курица',
                    url: './image/chickenMeat.png'
                },
                {
                    title: 'Говядина',
                    url: './image/beefMeat.png'
                },
                {
                    title: 'Свинина',
                    url: './image/porkMeat.png'
                }
            ],
            type: 'radio'
        },
        {
            question: "Дополнительные ингредиенты?",
            answers: [
                {
                    title: 'Помидор',
                    url: './image/tomato.png'
                },
                {
                    title: 'Огурец',
                    url: './image/cucumber.png'
                },
                {
                    title: 'Салат',
                    url: './image/salad.png'
                },
                {
                    title: 'Лук',
                    url: './image/onion.png'
                }
            ],
            type: 'checkbox'
        },
        {
            question: "Добавить соус?",
            answers: [
                {
                    title: 'Чесночный',
                    url: './image/sauce1.png'
                },
                {
                    title: 'Томатный',
                    url: './image/sauce2.png'
                },
                {
                    title: 'Горчичный',
                    url: './image/sauce3.png'
                }
            ],
            type: 'radio'
        }
    ];

    let = 

    const animateModal = () => {

    }

    let clientWidth = document.documentElement.clientWidth; 

    if (clientWidth < 768) {
        burgerBtn.style.display = "flex";
    } else {
        burgerBtn.style.display = "none";
    };

    window.addEventListener("resize", function () {
        clientWidth = document.documentElement.clientWidth;

        if (clientWidth < 768) {
            burgerBtn.style.display = "flex";
        } else {
            burgerBtn.style.display = "none";
        }
    });
    
    burgerBtn.addEventListener("click", () => {
        burgerBtn.classList.add("active");
        modalblock.classList.add("d-block");
        playTest();
    }); 

    btnOpenModal.addEventListener("click", () => {
        modalblock.classList.add("d-block");
        playTest();
    });

    closeModal.addEventListener("click", () => {
        modalblock.classList.remove("d-block");
       burgerBtn.classList.remove("active");
    });

    document.addEventListener("click", function (event) {
        if(
            !event.target.closest(".modal-dialog") &&
            !event.target.id(".openModalButton") &&
            !event.target.id(".burger")
        ) {
            modalblock.classList.remove("d-block");
        }
    }); 

    const playTest = () => {
        let numberQuestion = 0;

       const renderAnswers = (index) => {
        questions[index].answers.forEach((answer) => {
          const answerItem = document.createElement('div');

           answerItem.classList.add("answers - item", "d-flex", "flex-column");
           answerItem.innerHTML = `
            <input type="${question[index].type}" id="${answer.title}" name="answer" class="d-none">
            <label for="answerItem1" class="d-flex flex-column justify-content-between">
            <img class="answerImg" src="${answer.url}" alt="burger">
            <span>${answer.title}</span>
            </label>
           `;
           formAnswers.appendChild(answerItem);
          });
      };
        const renderQuestions = (indexQuestion) => {
           formAnswers.innerHTML = '';
           questionTitle.textContent = `${questions[indexQuestion].question}`;
            renderAnswers(indexQuestion);
        }
        renderQuestions(numberQuestion);

        nextButton.onclick = () => {
            numberQuestion++;
            renderQuestions(numberQuestion);
        }

        prevButton.onclick = () => {
            numberQuestion--;
            renderQuestions(numberQuestion);
        };
    };

});