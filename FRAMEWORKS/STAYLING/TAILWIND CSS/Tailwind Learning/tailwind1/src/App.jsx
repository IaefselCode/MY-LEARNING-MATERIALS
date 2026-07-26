import "./App.css";

function App() {
  return (
    <>
      {/* <div className="box-content overflow-auto h-40 w-100 bg-opacity-50 bg-amber-950 rounded-4xl p-5 text-center">
        <div className="bg-amber-600">IAEFSEL CODE</div>
        <div className="bg-amber-600">IAEFSEL CODE</div>
        <div className="bg-amber-600">IAEFSEL CODE</div>
        <div className="bg-amber-600">IAEFSEL CODE</div>
        <div className="bg-amber-600">IAEFSEL CODE</div>
        <div className="bg-amber-600">IAEFSEL CODE</div>
        <div className="bg-amber-600">IAEFSEL CODE</div>
        <div className="bg-amber-600">IAEFSEL CODE</div>
        <div className="bg-amber-600">IAEFSEL CODE</div>
        <div className="bg-amber-600">IAEFSEL CODE</div>
        <div className="bg-amber-600">IAEFSEL CODE</div>
        <div className="bg-amber-600">IAEFSEL CODE</div>
        <div className="bg-amber-600">IAEFSEL CODE</div>
        <div className="bg-amber-600">IAEFSEL CODE</div>
        <div className="bg-amber-600">IAEFSEL CODE</div>
        <div className="bg-amber-600">IAEFSEL CODE</div>
      </div> */}
      <div className="flex flex-wrap">
        <div className="block w-[500px] h-[500px] rounded-4xl m-10">
          <div className="w-[500px] h-[70%] bg-gradient-to-r from-white via-yellow-500 to-pink-600 rounded-t-4xl">
            <h1>FIRST</h1>
          </div>
          <div
            className="w-[500px] h-[30%] bg-cover bg-center bg-repeat-x rounded-b-4xl center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1699891730676-037bed3c1bed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000')",
            }}
          ></div>
        </div>

        <div className="block w-[500px] h-[500px] rounded-4xl m-10">
          <div className="w-[500px] h-[70%] bg-gradient-to-r from-white via-yellow-500 to-pink-600 rounded-t-4xl"></div>
          <div
            className="w-[500px] h-[30%] bg-cover bg-center bg-repeat-x rounded-b-4xl center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1699891730676-037bed3c1bed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000')",
            }}
          ></div>
        </div>

        <div className="block w-[500px] h-[500px] rounded-4xl m-10">
          <div className="w-[500px] h-[70%] bg-gradient-to-r from-white via-yellow-500 to-pink-600 rounded-t-4xl"></div>
          <div
            className="w-[500px] h-[30%] bg-cover bg-center bg-repeat-x rounded-b-4xl center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1699891730676-037bed3c1bed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000')",
            }}
          ></div>
        </div>

        <div className="block w-[500px] h-[500px] rounded-4xl m-10">
          <div className="w-[500px] h-[70%] bg-gradient-to-r from-white via-yellow-500 to-pink-600 rounded-t-4xl">
            LAST
          </div>
          <div
            className="w-[500px] h-[30%] bg-cover bg-center bg-repeat-x rounded-b-4xl center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1699891730676-037bed3c1bed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000')",
            }}
          ></div>
        </div>
      </div>

      {/* Scroll Animation */}
      {/* To Add A Scrolling animation you just need to set your background-attachment to fixed */}
      <div
        className="h-screen w-full bg-no-repeat bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/eb/49/e5/eb49e5a5ab67740df2b5bed8ddb153de.jpg')",
        }}
      >

        <br /><br /><br />
      <div className="h-[300px] w-[300px]  m-8 rounded-3xl   shadow-lg filter backdrop-blur-37xl"></div>

      </div>

      {/* Border Collapse */}
      <div>
        <table className="border-separate table-auto">
          <thead>
            <tr>
              <th className="border-4 border-red-500 p-2">Header 1</th>
              <th className="border-4 border-red-500 p-2">Header 2</th>
              <th className="border-4 border-red-500 p-2">Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-4 border-red-500 p-2">Data 1</td>
              <td className="border-4 border-red-500 p-2">Data 2</td>
              <td className="border-4 border-red-500 p-2">Data 3</td>
            </tr>
            <tr>
              <td className="border-4 border-red-500 p-2">Data 4</td>
              <td className="border-4 border-red-500 p-2">Data 5</td>
              <td className="border-4 border-red-500 p-2">Data 6</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-50 h-50 bg-blue-950 m-10 rotate-45 translate-x-5 skew-6 mix-blend-lighten"></div>
      <br />
      <br />
      <div className="h-[300px] w-[300px] border-solid border-amber-700 border-2 m-8 rounded-3xl shadow-amber-700  shadow-lg bg-amber-700"></div>

      <div className="flex flex-wrap flex-1 divide-y-2 divide-black divide-dashed p-3 gap-3.5 justify-center max-w-7xl border-blue-900 border-dashed  border-2 rounded-4xl">
        <div className="h-[300px] w-[48%] border-solid border-amber-700 border-2 rounded-3xl shadow-amber-700  shadow-lg bg-amber-700">
          <input
            type="text"
            name=""
            id=""
            placeholder="Outline here"
            className="bg-blue-600 rounded-lg m-2 p-2 outline-none  placeholder-red-500"
          />
        </div>
        <div className="h-[300px] w-[48%] border-solid border-amber-700 border-2 rounded-3xl shadow-amber-700  shadow-lg bg-amber-700 overflow-auto">
          <p className="bg-blue-600 rounded-lg m-2 p-2 outline-none select-none">
            <h1 className="bg-amber-700 rounded-sm p-2">SelectNone HERE</h1>
            <span className="font-mono font-extrabold ordinal italicik8aq">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              corporis! Rem vitae dolore, natus dolorum amet perferendis
              assumenda consectetur quasi et ut nobis repellat.
            </span>
          </p>
        </div>
        <div className="h-[300px] w-[48%] border-solid border-amber-700 border-2 rounded-3xl shadow-amber-700  shadow-lg bg-amber-700"></div>
        <div className="h-[300px] w-[48%] border-solid border-amber-700 border-2 rounded-3xl shadow-amber-700  shadow-lg bg-amber-700"></div>
      </div>
    </>
  );
}

export default App;
