// import Component from 'react'
// export default class Demo extends React.Component{
//     render() {
//         return(
//             <div>
//                 <h3>我是Demo组件</h3>
//             </div>
//         )
//     }
// }
export default function DemoFunction(props)
{
    return <div>函数的demo组件
    <div>{props.car}</div>
    <div>{props.money}</div>
    </div>
}
// class App extends Component{
//     render()
//     {
//         return(
//             <div>
//                 <h1>
//                     我是App组件
//                 </h1>
//                 <Demo></Demo>
//             </div>
//         )
//     }
// }