"use client";
import { useSearchParams } from "next/navigation";
import { forwardRef, useEffect, useState } from "react";

export default function Checkbox2(props) {
  const searchParams = useSearchParams();
  // if (searchParams.get(props.text.replace(".", ""))) {
  //   console.log(searchParams.get(props.text.replace(".", "")));
  // }

  // const [checked, setChecked] = useState(false);
  const [checked, setChecked] = useState(
    Boolean(searchParams.get(props.text.replace(".", "")))
  );

  function handleChange() {
    props?.onChange({ [props.text]: !checked });
    setChecked(!checked);
  }

  return (
    <div className="flex items-center gap-2">
      <label className="checkbox bounce inline-block ">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="bg-transparent"
        />
        <svg viewBox="0 0 21 21">
          <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
        </svg>
      </label>
      <span
        className="font-bold cursor-pointer  inline-block text-gray-800 dark:text-textSub"
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
