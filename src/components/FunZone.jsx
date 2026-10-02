import { useState } from "react";
import "../styles/FunZone.css";

function FunZone() {
  const [message, setMessage] = useState(
    "Click a button and have some fun!"
  );

  const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs! 😂",
    "Why did the programmer quit his job? He didn't get arrays! 😄",
    "There are 10 types of people: those who understand binary and those who don't. 🤓",
    "Why was the JavaScript developer sad? Because he didn't know how to null his feelings! 😂",
    "Why do programmers hate nature? It has too many bugs! 🐛",
    "A programmer walks into a coffee shop and says: 'I'll have a Java.' ☕",
    "Why did the computer get cold? It left its Windows open! 🪟",
    "What do programmers wear? Cache shirts! 😎",
    "Why was the computer tired? It had too many bytes! 😂",
    "Why did the developer go broke? Because he used all his cache! 💸",
    "How do programmers solve problems? They use a lot of stack overflow! 🤣",
    "Why did the CSS developer break up with HTML? There was no class between them! 😆",
    "Why did the function go to therapy? It had too many arguments! 😂",
    "Programmers don't get lost. They just take unexpected routes! 🗺️",
    "Why did the developer bring a ladder? To reach the next level! 🚀"
  ];

  const motivations = [
    "You are doing great! Keep going! 🌟",
    "Every expert was once a beginner. 💪",
    "Your next project could be your best project! 🚀",
    "Don't stop learning. You are getting better every day! 📚",
    "Small progress is still progress. ✨",
    "Believe in your ideas and keep building! 💻",
    "Mistakes are part of learning. Keep trying! 🌱",
    "Your hard work will pay off. Keep pushing! 🔥",
    "You don't need to be perfect. Just keep improving! 💜",
    "One line of code at a time! 👩‍💻",
    "Learn. Build. Break. Fix. Repeat. 🔄",
    "Your future self will thank you for not giving up today! 🌈",
    "Keep coding, keep learning, keep growing! 🚀",
    "Difficult today, easier tomorrow. Keep practicing! 💪",
    "You are capable of building amazing things! ✨"
  ];

  const codingMessages = [
    "💻 Coding Mode: ON! Let's build something awesome!",
    "🚀 Time to turn ideas into code!",
    "☕ Coffee + Code = Productivity!",
    "🐛 Found a bug? Don't panic. Debug it!",
    "🔥 Keep coding until your code works!",
    "🧠 Think. Code. Test. Repeat.",
    "⚡ One problem at a time!",
    "💡 Great developers are great problem solvers!",
    "🚀 Write code today that your future self will understand!",
    "🎯 Focus on the problem, then find the solution!",
    "💻 Your keyboard is ready. Are you?",
    "🐛 Every bug is another chance to learn!",
    "🌟 Build something you are proud of!",
    "🔧 Code, test, fix, improve!",
    "👩‍💻 Developer mode activated!"
  ];

  const showRandom = (items) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    setMessage(items[randomIndex]);
  };

  return (
    <section className="fun-zone" id="fun-zone">
      <div className="section-title">
        <p>TAKE A LITTLE BREAK</p>
        <h2>Fun Zone</h2>
      </div>

      <div className="fun-card">
        <div className="fun-emoji">🎮</div>

        <h3>Let's Have Some Fun!</h3>

        <p className="fun-message">{message}</p>

        <div className="fun-buttons">
          <button onClick={() => showRandom(jokes)}>
            😂 Tell Me a Joke
          </button>

          <button onClick={() => showRandom(motivations)}>
            🌟 Give Me Motivation
          </button>

          <button onClick={() => showRandom(codingMessages)}>
            💻 Coding Mode
          </button>
        </div>
      </div>
    </section>
  );
}

export default FunZone;