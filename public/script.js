
const showNextQuestion = () => {
  fetch("/questions", {
    method: "GET",
    //  "Content-Type": application / json,
  }).then((data) => console.log(data));
};

const doValidate = () => {
    console.log(111111111111111)
    a.setAttribute('href', 'http://onet.pl')
}
const a = document.querySelector('a')
//a.addEventListener('click', doValidate )


