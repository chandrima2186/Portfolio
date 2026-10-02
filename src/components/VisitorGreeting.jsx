import { useEffect, useState } from "react";

function VisitorGreeting() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setGreeting("Good Morning! ☀️");
    } else if (hour < 18) {
      setGreeting("Good Afternoon! 🌤️");
    } else {
      setGreeting("Good Evening! 🌙");
    }
  }, []);

  return (
    <p className="visitor-greeting">
      {greeting}
    </p>
  );
}

export default VisitorGreeting;