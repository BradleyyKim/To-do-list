// import { useState, useEffect } from "react";

// function Hello() {
//   useEffect(() => {
//     console.log("Created :)");
//     return () => console.log("Destroyed :( ");
//   }, []);
//   return <h1>Hello!</h1>;
// }
// // useEffect부분을 길게 늘리면 이와 같다.
// // function Hello() {
// //   function byeFn() {
// //     console.log("Bye!");
// //   }
// //   function hiFn() {
// //     console.log("Hi!");
// //     return byeFn();
// //   }
// //   useEffect(hiFn, []);
// //   return <h1>hello</h1>;
// // }

// function App() {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing((prev) => !prev);
//   return (
//     <div>
//       {showing ? <Hello /> : null}
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//     </div>
//   );
// }

// export default App;
