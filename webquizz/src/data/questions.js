import axios from 'axios'

export let questions = []

export const fetchQuestions = async (theme) => {
  try {
    const response = await axios.get(`http://localhost:8087/quiz/categoria/${theme}`)
    questions = response.data;
    console.log(questions)
  } catch (error) {
    console.error('Erro ao buscar as perguntas:', error)
  }
};

fetchQuestions(); 

export default questions;