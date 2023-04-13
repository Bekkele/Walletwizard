import Feature from "./components/Feature";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <Header />

      <section>
        <Hero />
      </section>
      <section>
        <Feature
          imgSource="Pic3.png"
          title="Payments"
          subtitle="In-store payments made easy!"
          text="Tap your phone and we’ll select the best card based on your goals, perks, and bonuses. We’ll even suggest a card based on your location."
        />
        <Feature
          imgSource="Pic1.png"
          title="Recommendations"
          subtitle="Let us make it easy for you! "
          text="Personalized credit card recommendations based on your spending habits or survey responses."
        />
        <Feature
          imgSource="Pic2.png"
          title="Card Ratings"
          subtitle="Know before you apply!"
          text="View card ratings and reviews to identify any potential issues and make an informed decision."
        />
      </section>

      {/* https://codepen.io/alvarotrigo/pen/GRvYNax */}
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
