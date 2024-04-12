import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <main className="w-full flex flex-col">
        <Header
          title={
            <p>
              Taste the World with <br />
              FlavorVerse!
            </p>
          }
          type="home"
        />
      </main>
    </>
  );
};

export default Home;
