import Accordion from './components/Accordion';

import './App.css';

const articles = [
  {
    title: "Section 1",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At soluta saepe mollitia sunt veniam rerum repellat quibusdam, impedit molestiae necessitatibus animi obcaecati reiciendis sed nulla optio aspernatur quia minus reprehenderit?",
  },
  {
    title: "Section 2",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At soluta saepe mollitia sunt veniam rerum repellat quibusdam, impedit molestiae necessitatibus animi obcaecati reiciendis sed nulla optio aspernatur quia minus reprehenderit?",
  },
  {
    title: "Section 3",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At soluta saepe mollitia sunt veniam rerum repellat quibusdam, impedit molestiae necessitatibus animi obcaecati reiciendis sed nulla optio aspernatur quia minus reprehenderit?",
    isOpen: true
  }
]

function App() {
  return (
    <div className="App">
      {articles.map(({ title, content, isOpen }) => (
        <Accordion key={title} title={title} isOpen={isOpen}>
          <p>{content}</p>
        </Accordion>
      ))}

    </div>
  );
}

export default App;
