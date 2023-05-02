import { useRef } from "react";
import "./ref.css";

export const SecondProblem = () => {
  let MainIndex = useRef(0);

  let img = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRS95oql0SlxPRjvCQdJSHCWNLKJGia0ISlQ&usqp=CAU",
    "https:variety.com/wp-content/uploads/2022/03/Dragon-Ball-Z.jpg?w=681&h=383&crop=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5fFw1hyXyFN0E-CoDgFoKGv3FHt_h0Vh8Rw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gcUHqDyKm6VTmH51jiwgcJxkzb18C58wrw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMHK-tpPpSXNaZeIe5QYM5bDrnD7iu-G7haQ&usqp=CAU",
    " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0zXtEG85Y1wQg9yUSRBK9ocLTKyT1i8-cA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaTRX30hJVffv5_VYFSBuOPFaawjW42aFkHw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC5S-4e6Gy18kAe8tOGq3sPdhLqBvXShVwtw&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK23ZHOC28WtPrVqqWlkD5Xoh_ymq1LhppSQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2fRz1zzWc3_Odd0d_lm4RPNrAKiwCgFGivw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0172uVsO0PtS7RKY00HITN6rDNnvEwcM5EQ&usqp=CAU",
  ];

  const myRef = useRef(null);

  function changeImg() {
    
    if (MainIndex.current < img.length - 1) {
      MainIndex.current = MainIndex.current + 1;
      myRef.current.src = img[MainIndex.current];
    }
  }

  return (
    <div className="main-content">
      <img ref={myRef} src={img[MainIndex.current]} alt="I am an img" />
      <button onClick={changeImg}>Image-Changer</button>
    </div>
  );
};
