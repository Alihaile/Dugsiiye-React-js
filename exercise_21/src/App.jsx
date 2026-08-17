import Content from "./Content";
import Header from "./Header";
import TopCards from "./TopCards";

function App() {

  document.title = 'Exercise 21';


  return (
    <div className="container mx-auto max-w-[1140px] my-4">
      <Header />
      {/* top cards */}
      <TopCards />
      {/* main */}
      <Content />
    </div>
  )
}

export default App
