const list=[
    {id:1,name:"liu"},
    {id:2,name:"ke"},
    {id:3,name:"nbo"}
]
const element=(
    <div>
        <h1>列表的渲染</h1>
        <ul>
            {list.map(item=><li>item.name</li>)}
        </ul>
    </div>
)