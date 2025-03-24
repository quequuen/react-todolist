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
      </div>
    </div>
  );
};

export default Main;
