import axios from "axios";

export const TaskAPIs = {
  getAllTasks: async (params) => {
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}tasks`, {
      params: params,
    });
    return response;
  },
  getTaskById: async (taskId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}tasks/${taskId}`
    );
    return response.data;
  },
  createTask: async (task) => {
    console.log("Creating task:", task);

    return await axios.post(`${process.env.REACT_APP_BE_URL}tasks`, task);
  },
  updateTaskById: async (id, taskUpdate) => {
    return await axios.patch(
      `${process.env.REACT_APP_BE_URL}tasks/${id}`,
      taskUpdate
    );
  },
  deleteTaskById: async (id) => {
    return await axios.delete(`${process.env.REACT_APP_BE_URL}tasks/${id}`);
  },
  searchTasks: async (searchKey, params) => {
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}tasks`, {
      params: {
        ...params,
        q: searchKey,
      },
    });
    return response;
  },
};
