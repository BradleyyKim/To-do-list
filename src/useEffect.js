// import { useState, useEffect } from "react";
// import Button from "./Button";
// import styles from "./App.module.css";

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);
//   console.log("I will run all the times..");

//   useEffect(() => {
//     console.log("Call the API..when browser is started");
//   }, []);
//   useEffect(() => {
//     if (keyword !== "" &&keyword.length > 5) {
//     console.log("SEARCH FOR", keyword);}
//   }, [keyword])
//   useEffect(() => {
//     console.log("I run when 'keyword' changes.");
//   }, [keyword]);
//   useEffect(() => {
//     console.log("I run when 'counter' changes.");
//   }, [counter]);
//   useEffect(() => {
//     console.log("I run when 'counter' & 'keyword' changes.");
//   }, [keyword, counter]);
//   return (
//     <div>
//       <input value={keyword} onChange={onChange} type="text" placeholder="Search Here!" />
//       <h1 className={styles.title}>Welcome back to React!</h1>
//       <Button text={"continue"} />
//       <h2>{counter}</h2>
//       <button onClick={onClick}>Click me</button>
//     </div>
//   );
// }

// export default App;
