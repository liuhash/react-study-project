no-state components function components (before hooks)\
state components class components\
state is data\
类组件可以提供数据。给组件提供属性，\
函数组件不会发生变化。静态的。比较快。渲染性能好。\
类组件要考虑更新的问题。状态改变会更新UI。\
hooks允许函数组件使用数据。\
this.state添加状态。\
constructor里面的state\
事件注册使用驼峰命名。\
事件对象\
函数的this指向是undefined\
render的this指向组件实例\
1.使用箭头函数调用包裹与箭头函数中。\
2.使用bind绑定\
3.使用箭头函数进行定义\
object.defineproperty 无法监听数组的长度的变化。\
也无法监听对象的新增项。\
vue3使用proxy\
setstate会更新UI\
不能直接修改state中的数据。\
必须使用setstate来修改数据。\
react状态不可变。\
不能修改状态中的值。要直接赋新值\
直接修改state中的值。UI不会更新.\
表单处理 v-model\
受控组件 将state与表单元素value绑定在一起。\
给表单元素添加Onchange属性。value属性。\
常见的受控组件\
文本框\
下拉框 checked\
file标签就是一种非受控组件。\
this.$ref\
current.value\
使用ref控制\
createRef\
ref=this.textref关联给某个组件\
通过this.txtRef.current.value进行查值\
和vue一样。通过ref来操作元素。\
组件通讯，使用props实现\
父传子， 子传父，兄弟组件互传。\
props接受外界参数。\
类组件直接用this.props\
可以传递任意类型的数据。\
props是只读的。不能修改(单项数据流)\
父组件数据变化\
子组件会自动更新\
constructor里面提供状态\
类组件提供状态。要传入constructor。\
需要传入super。否则构造函数无法获得props\
\
在vue中使用$emit来进行父传子。\
1.父组件提供回调函数\
2.将函数作为属性的值，传递给子组件。\
3.子组件通过props调用回调函数.\
兄弟组件通讯。使用状态提升的思想。\
将共享状态提升到最近的公共父组件之中。\
由父组件管理状态。\
使用context来实现跨级组件通讯。\
1.创建组件。\
2.context包含Provider和consumer。\
3.provider包裹根元素。\
render-props HOC(高阶组件) Consumer里面是函数。\
props children属性。代表组件子节点。只要组件有子节点。就有这个属性\
props校验 校验格式。\
导入proptypes包。\
钩子函数。规定在生命周期内干什么。\
路由的钩子函数的执行顺序。\
创建时，更新时，销毁时。\
Mounting Updating UnMounting\
construct
1.提供数据
2.提供ref
3.绑定this指向
render
用于渲染结构。
不能使用setState
componentDidMount
1.发送网络请求
2.操作DOM
挂载阶段的3个钩子函数

更新阶段
只有类组件有生命周期。
render
componentDidUpdate
都不能使用setState
new props setState forceUpdate(用的很少)
DOM操作，获取更新后的DOM
componentDidUpdate会在子组件render完之后运行。

卸载阶段
componentWillUnmount 执行清理工作。清理定时器 clearInterval

内存泄露。有资源未被销毁。
.focus() 自动获取焦点
在函数里面返回新的对象。(setState里面用函数作为参数)。
第二个参数可以写成箭头函数。可以进行性能优化。
组件更新机制
修改state，渲染UI。
父组件重新渲染。所有子组件也要更新。
渲染无关的数据不放state
避免不必要的重新渲染。
shouldComponentUpdate(nextProps,nextState)
即将要更新的props。
返回true和false。返回false不更新。
PureComponent自动实现了shouldComponentUpdate
引用类型只比地址变化。shallow compare
做性能优化。
SPA 整个应用中只有一个页面。加快页面响应速度。 
缺点 不利于SEO。页面静态化 SSR 不利于SEO 电商系统。
单个页面管理更多的页面
MPA 整个应用有多个页面。\
前端处理路由。\
#锚点值。对应组件。

props-render在render函数里面编辑函数\
之后通过props传递。\
children代替props.\


fiber 虚拟DOM diff算法。\
setState()是异步的。\
会把setState合并。维护一个队列.\
调用多少次setState只会触发一次渲染。\
setState的参数可以是函数。\
hashchange事件。hash改变就会触发。\
HashRouter,Route,Link\


整个路由组件都要在hashrouter内部。\
hash模式\
history模式(BrowserRouter) 监听window popstate.\
修改url。\
监听url变化\
遍历所有router组件。\
路由规则能匹配，就去匹配。\
NavLink 被选中后会获得className={active}\
可以指定当前导航高亮。\
exact to精确匹配。\
path指定为/匹配到任意组件。\
Redirect\
编程式导航。通过代码来实现页面跳转。\
go push跳转页面。\
动态路由参数和参数获取。\
:id this.props


hooks\
组件状态逻辑服用\
class组件本身的问题。\
render-props形成jsx嵌套地狱的问题。\
需要理解this是怎么工作的。\
难以维护。所有功能加在一个类组件中。\
class不利于代码压缩，也不利于Ts。\
tree shaking 去掉无用的代码。\



