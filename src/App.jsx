// import { useState } from "react";
// import React from "react";

// export default function App() {
//   const [isVisible, setIsVisible] = useState(false);

// return (
//   <div>
//     <button onClick={() => setIsVisible(!isVisible)}>
//       Toggle Visibility
//     </button>
//     {isVisible && <p>"This Text can toggle visibility"</p>}
//   </div>
// );  --==--==--==--==--==--==--==--==--==--==--==--==--==--==--==
//   return (
//     <div>
//       <button onClick={() => setIsVisible(!isVisible)}>
//         Toggle Visibility
//       </button>
//       {isVisible ? <p>"This Text can toggle visibility"</p> : null}
//     </div>
//   );
// }

import React from "react";
import { useState } from "react";
export default function App() {
  const [items, setItems] = useState(["Hello", "world!", "What's", "up?"]);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.length ? (
          items.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No items</li>
        )}
      </ul>
    </div>
  );
}
