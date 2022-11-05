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
新功能推荐用hooks实现。\
读取状态，修改状态。\
修改状态直接传新值。\
只能出现在函数中，不能在循环中。\
hooks的调用顺序来识别每一个hook。\
除了渲染UI，别的都是side effect。\
useEffect=componentDidMount+componentDidUpdate\
操作DOM也是副作用.\
参数2，数组,useEffect的依赖项，只有依赖项改变时会触发useEffect。\
类似vue的watch。\
如果依赖指定为空数组。只会在组件第一次渲染时执行。\
组件更新时不会触发。相当于componentDidMount。\
注册事件，发请求都用空依赖\
一些副作用需要清楚。如订阅外部数据源，开启定时器，注册事件。\
可能引起内存泄漏。\
函数里面可以return 在函数销毁时会自动执行。\
返回的函数称为清理函数，在组件销毁时执行。\
自定义hook。\
把组件逻辑提取到函数中。\

以后会在redux发请求。useEffect不能async。
要在函数里面用一个函数,使用async，
因为要清除副作用，所以只能是async.
不能在useEffect调用数组，只要deps里面的发生改变。
就会触发useEffect。而数组是引用类型，不停的改变。
取消组件 取消请求。设置一个变量。在销毁时设置为True.
然后如果是true。就不会设置set
只要父组件更新，子组件就会更新。
useContext
context 跨组件共享数据。
createContext Consumer,Provider。
提供的Provider用包裹。消费的用Consumer包裹。
在提供组件处包裹。在使用处用useContext(context)
如果在不同文件中，要把context导出去。

useMemo
memo(组件)包裹函数组件变成纯组件。像v-pre
只会进行浅层对比，只会比地址发没发生改变，和pureComponent一样。
记住任何数据。可以完全替代useCallback。类似vue computed
useMemo比memo进行了更细度的优化。

useCallback
做性能优化的。记住函数的引用，配合usememo。需要传依赖数组。
依赖数组变化才变化。
useCallback(fn,deps)=useMemo(()=>fn,deps)

render-props和HOC会导致组件嵌套。
hooks实现代码复用。
class的缺点
1.this指向问题。
2.class组件不利于代码的压缩与优化
3.class提供了生命周期函数，一个功能拆开到多个钩子函数。
减轻开发者心智负担。
一个功能写到一起。

redux可以在任何库内使用。存多个组件共享的数据。
redux-thunk 发送异步请求
react-redux 与react有关的。
Flux最早的react状态管理工具，由react在2014年推出。
reducer+flux。
mapstore,store.state.xxx
mapGetters 提交mutation。准备action。
action处理异步,提交mutation。
MapMutations store.commit(mutation)

redux核心概念
store,action,reducer。
dispatch action
Action creators
reducer 处理action
接收状态，处理action，返回新状态，不会改变旧状态。


