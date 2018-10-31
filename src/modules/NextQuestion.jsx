import React from 'react';



const nextQuestion = function(event){
    event.preventDefault();

    current++;
    printQuestion(questions[current].question);
};

printFirstPage(questions.length);
})();

exprot default nextQuestion;
