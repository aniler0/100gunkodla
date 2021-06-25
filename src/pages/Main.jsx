import React, { useEffect, useState } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import AddTask from "../components/AddTask/AddTask";
import { getTasks } from "../utils/FetchData";
import Tabs from "../components/Tabs/Tabs";
import Completed from "../pages/Completed";
import TaskList from "../components/TaskList/TaskList";
import TopBar from "../components/TopBar/TopBar";
import "../styles/main.css";

const Main = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getTasks(setTasks);
  }, []);

  return (
    <div className="main">
      <div className="top">
        <TopBar /> {/* Kodlandı */}
      </div>
      <div>
        <AddTask tasks={tasks} setTasks={setTasks} />
        {/* Kodlandı veriler veritabanına gitti */}
      </div>
      <div className="todo">
        <Tabs />
        <Route path="/main" exact>
          <TaskList setTasks={setTasks} tasks={tasks} />
        </Route>
        <Route path="/main/completed" component={Completed} />
      </div>
    </div>
  );
};

export default Main;
