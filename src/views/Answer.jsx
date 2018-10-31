


const Answer = (event) => {
            let questions = this.questions;
            let current = this.state.current;
            let score = this.state.score;

            // Get the current answer from the app element
            let userAnswer = event.currentTarget.querySelector('#answer').value.trim();

            if (current >= questions.length - 1){
                this.view.printScore(score);
            } else if(userAnswer.toLowerCase() === questions[current].answer.toLowerCase()){
                this.state.score++;
                this.view.printResult('Correct! You might not be as dumb as I thought you were.');
            } else {
                this.view.printResult('Wrong human, try again!');
            }
        }
// const Question = () => {
//               this.state.current++;
//               this.view.printQuestion(this.questions[this.state.current].question);
//           }

export default Answer;
