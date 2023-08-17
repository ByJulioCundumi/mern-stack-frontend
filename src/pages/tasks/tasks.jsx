import { useContext, useEffect } from "react";
import { TasksContext } from "../../context/tasksContext";

const Tasks = () => {
  const { tasks, allTasksMessage, getTasksRequest } = useContext(TasksContext);

  useEffect(() => {
    getTasksRequest();
  }, []);

  

  return (
    <>
      <div className="page">
        <div className="container mt-5">
          <div className="row">
            <div className="col mt-5">

              <div className="d-flex gap-2 flex-wrap justify-content-center">
              {tasks && tasks.length > 0 ? (
                tasks.map((item) => (
                  <div className="shadow border p-3 rounded col-10 col-sm-8 col-md-5" key={item._id}>
                    <h2 >{item.title}</h2>
                    <hr />
                    <b className="lead">{item.description}</b>
                    <div className="d-flex justify-content-end gap-1 mt-3">
                        <button className="btn btn-outline-danger col-4">Delete</button>
                        <button className="btn btn-outline-primary col-4">Edit</button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center lead">Cargando tareas...</p>
              )}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
