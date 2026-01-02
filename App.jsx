import QuestionPage from './components/QuestionPage'

function App() {
  const questionId = '45aef305-4578-4621-99bc-447e7a8496aa'
  
  return (
    <div className="app">
      <QuestionPage questionId={questionId} />
    </div>
  )
}

export default App
