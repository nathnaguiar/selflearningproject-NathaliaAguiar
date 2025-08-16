import './App.css';
import FactCard from './FactCard';
import catIcon from './assets/catfact.svg';
import jokeIcon from './assets/dad.svg';
import brainIcon from './assets/brain.svg';

function App() {
  return (
    <div className="page-wrapper">
      <div className="funny-day">
        <main>
          <h1>Funny day</h1>
          <div className="card-container">
            <FactCard
              title="RANDOM CAT FACT"
              icon={catIcon}
              api="https://catfact.ninja/fact"
              color="#E8D5F7"
              buttonText="New Fact"
            />
            <FactCard
              title="DAD JOKES"
              icon={jokeIcon}
              api="https://icanhazdadjoke.com/"
              headers={{ Accept: 'application/json' }}
              color="#D5E8F7"
              buttonText="New Joke"
            />
            <FactCard
              title="USELESS FACTS"
              icon={brainIcon}
              api="https://uselessfacts.jsph.pl/random.json?language=en"
              color="#D5F7E0"
              buttonText="New Fact"
            />
          </div>
        </main>
      </div>

      <footer>© 2025. All rights reserved.</footer>
    </div>
  );
}

export default App;
