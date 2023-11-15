"use client";
import { forwardRef, useEffect, useState } from "react";

export default function Checkbox2(props) {
  const [checked, setChecked] = useState(false);

  function handleChange() {
    props?.onChange(!checked);
    setChecked(!checked);
  }

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  return (
    <div className="flex items-center gap-2">
      <label className="checkbox bounce inline-block">
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <svg viewBox="0 0 21 21">
          <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
        </svg>
      </label>
      <span
        className="font-bold cursor-pointer  inline-block"
        onClick={handleChange}
      >
        {props?.text}
      </span>
    </div>
  );
}

// const Checkbox2 = forwardRef(function Checkbox2(props, ref) {
//   const [checked, setChecked] = useState(false);

//   function handleChange() {
//     setShowCategories()
//   }

//   return (
//     <div className="flex items-center gap-2 mt-5">
//       <label className="checkbox bounce">
//         <input
//           ref={ref}
//           type="checkbox"
//           checked={checked}
//           onChange={() => setChecked(!checked)}
//         />
//         <svg viewBox="0 0 21 21">
//           <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
//         </svg>
//       </label>
//       <span
//         className="font-bold cursor-pointer"
//         onClick={() => setChecked(!checked)}
//       >
//         Show categories?
//       </span>
//     </div>
//   );
// });

// export default Checkbox2;
