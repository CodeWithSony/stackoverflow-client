// import React from "react";
// import { useState } from "react";
// import "./Count.css";
// const Count = () => {
//   const [count, setCount] = useState(0);
//   // const [decreaseCount, setdecreaseCount] = useState(0);

//   const updateCount = () => {
//     setCount(count + 1);
//     console.log(count, "incrementing...");
//   };

//   const decrease = () => {
//     //  setdecreaseCount( setCount - count)
//     if (count > 0) {
//       setCount(count - 1);
//       console.log(count, "decrementing...");
//     }
//   };
//   return <div id="google_translate_element"></div>;
// };

// export default Count;

// import React from 'react'
// import { useEffect, useState } from 'react';

// const Count = () => {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//       fetch('https://translate.google.com/translate_a/element.js?cb=googleTranslateElementIni')
//         .then((res) => res.json())
//         .then((result) => {
//           setPosts(result);
//         });
//     }, []);

//     function googleTranslateElementInit() {
//         new google.translate.TranslateElement(
//           {
//             defaultLanguage: "en",
//             pageLanguage: "en",
//             includedLanguages:
//               "bn,de,nl,en,es,it,fr,or,hi,no,ta,kn,ja,gu,pa,te,ml,ne,ru,ro,sa,tr,mr,as,zh,ur",
//             layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
//             autoDisplay: false,
//             multilanguagePage: true,
//           },
//           "google_translate_element"
//         );
//       }

//     return (
//       <div id='google_translate_element'></div>
//     );
//   }

// export default Count
