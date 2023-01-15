import DayList from "./component/DayList";
import Day from "./component/Day";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from "./component/EmptyPage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* Header는 모든 페이지에 다 나와야 하니까 아래다가 */}
        <Routes>
          <Route exact path="/" element={<DayList />}></Route>
          {/* 바뀌는 다이나믹 url 처리는 콜론으로 */}
          <Route path="/day/:day" element={<Day />}></Route>
          {/* 잘못된 url접근시는 맨 아래 적어야함*/}
          <Route path="*" element={<EmptyPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
