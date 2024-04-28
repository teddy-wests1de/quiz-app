const state = {
    movies: {},
}
const fetchData = async function() {
    const res = await fetch('https://opentdb.com/api.php?amount=15&category=11')
    const data = await res.json();
    console.log(data)
      const {results} = data;
        console.log(results.correctAnswer);
        
      state.movies = {
        category: data.category,
        correctAnswer: results.correct_answer,
        difficulty: results.difficulty,
        incorrectAnswers: results.incorrectAnswers,
        question: results.question,
      }
    //   console.log(results);
    // return results;
    console.log(state.movies)
}
fetchData();