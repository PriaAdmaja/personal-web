import "./App.css";
import Header from "./component/header/header";
import Banner from "./component/banner/banner";
import { useState } from "react";
import Profile from "./component/profile";

export type TabProps =
  | "home"
  | "profile"
  | "experience"
  | "project"
  | "contact";

function App() {
  const [tab, setTab] = useState<TabProps>("home");
  return (
    <main className="container">
      <Header setTab={setTab} tab={tab} />
      <section className="content">
        {tab === "home" && <Banner />}
        {tab === "profile" && <Profile />}
      </section>
    </main>
  );
}

export default App;
