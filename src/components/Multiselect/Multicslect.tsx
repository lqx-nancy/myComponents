// import "./Multicslect.scss"
// import { useMemo, useState } from "react"

// export interface OptionItems {
//   label: string,
//   value: string
// }

// export interface MultiselectProps {
//   options: OptionItems[],
//   value?: string[],
//   onChange?: (value: string[]) => void
//   placeholder?: string
// }

// export default function Multiselect({
//   options,
//   value = [],
//   onChange,
//   placeholder = "Select options"
// }: MultiselectProps) {
//   const [keyWord, setKeyword] = useState("")
//   const filteredItems = useMemo(() => {
//     return options.filter((item) => item.label.toLowerCase().includes(keyWord.toLowerCase()))
//   }, [keyWord, options])
//   //toLowerCase把选项文字变成小写,搜索不区分大小写
//   const toggleOption = (optionValue: string) => {
//     const exists = value.includes(optionValue)

//     const nextValue = exists
//       ? value.filter((item) => item !== optionValue)
//       : [...value, optionValue]

//     onChange?.(nextValue)
//   }

//   return (
//     <div className="multiselect">
//       <input
//         className="input"
//         placeholder={placeholder}
//         value={keyWord}
//         onChange={(e) => setKeyword(e.target.value)}
//       />

//       <div className="tags">
//         {value.map((item) => {
//           const current = options.find((opt) => opt.value === item)
//           return (
//             <span key={item} className="tag">
//               {current?.label ?? item}
//             </span>
//           )
//         })}
//       </div>
//       <ul className="list">
//         {filteredItems.map((item) => {
//           const checked = value.includes(item.value)

//           return (
//             <li
//               key={item.value}
//               className={`item ${checked ? 'is-checked' : ''}`}
//               onClick={() => toggleOption(item.value)}
//             >
//               <input type="checkbox" checked={checked} readOnly />
//               <span>{item.label}</span>
//             </li>
//           )
//         })}
//       </ul>
//     </div>

//   )
// }