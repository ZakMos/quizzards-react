import questions from '../quistions.json'

class QuestionsClient {
  getQuestions(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(questions);
      }, 50)
    });
  }

  getQuestions(id){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(questions[id]);
      }, 50)
    });
  }
}




export default QuestionsClient;
