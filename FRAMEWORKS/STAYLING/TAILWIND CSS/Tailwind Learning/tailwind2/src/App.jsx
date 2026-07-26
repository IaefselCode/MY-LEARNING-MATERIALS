import "./App.css";
import Style from "./components/style";

function App() {
  return (
    <>
      <h2>With Color</h2>
      <p className="text-4xl text-center  font-mono bg-amber-700 md:bg-blue-700 transition-all duration-1000">
        Tailwind-2
      </p>
      <br />

      <h2>With Flexbox</h2>
      <div className="flex flex-col md:flex-row">
        <Style text={"Hellow Its Iaefsel Here !!!"}></Style>
        <Style text={"Hellow Its Iaefsel Here !!!"}></Style>
        <Style text={"Hellow Its Iaefsel Here !!!"}></Style>
        <Style text={"Hellow Its Iaefsel Here !!!"}></Style>
      </div>
      <br />

      <h2>With Grid</h2>
      <div className="grid lg:grid-cols-8 md:grid-cols-6 grid-cols-4 gap-4 w-fit place-items-center">
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
        <div className="bg-blue-900 p-2 m-2">
          <Style text={"Iaefsel"}></Style>
        </div>
      </div>
      <br />

      <h2>How Colspan works</h2>
      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-2 bg-blue-200">Spans 2 columns</div>
        <div class="col-span-1 bg-green-200">Spans 1 column</div>
        <div class="col-span-1 bg-red-200">Spans 1 column</div>
      </div>

      <h2>Row Span</h2>
      <div class="grid grid-rows-3 gap-4">
        <div class="row-span-2 bg-blue-300">Spans 2 rows</div>
        <div class="row-span-1 bg-green-300 lg:hidden">Spans 1 row</div> 
      </div>
    </>
  );
}

export default App;
