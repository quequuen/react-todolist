import "../css/Main.css";
const Main = () => {
  return (
    <div className="main_container">
      <div className="content1">
        <input type="text" className="input" placeholder="새로운 Todo..." />
        <button className="input_btn">추가</button>
      </div>
      <div className="content2">
        <div className="p_div">
          <p>Todo List🌱</p>
        </div>
        <div className="main_contents">
          <input
            type="text"
            className="search_input"
            placeholder="검색어를 입력해주세요"
          />
          <div className="lists">
            <div>
              <div className="first_p">
                <input type="checkbox" />
                <p>React 공부하기</p>
              </div>
              <div>
                <p>2025.3.22.</p>
                <button className="delete">삭제</button>
              </div>
            </div>
            <div>
              <div className="first_p">
                <input type="checkbox" />
                <p>TypeScript 공부하기</p>
              </div>
              <div>
                <p>2025.3.22.</p>
                <button className="delete">삭제</button>
              </div>
            </div>
            <div>
              <div className="first_p">
                <input type="checkbox" />
                <p>Next.js 공부하기</p>
              </div>
              <div>
                <p>2025.3.22.</p>
                <button className="delete">삭제</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
