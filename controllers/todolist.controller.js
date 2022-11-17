
    // addToDoList, 
    // deleteAllToDoList   

const ToDoList = require("../models/todolist");


module.exports = {


    addToDoList: (req, res) => {
        const data = req.body
        const todolist = new ToDoList(data)
        todolist.save()

        res.json({
            message : "Berhasil Menambahkan ToDoList!",
        })
    },
  
  
    deleteAllToDoList: async (req, res) => {
        try {
            await ToDoList.deleteMany({});
      
            res.json({
              message: "Semua To Do List berhasil dihapus !",
              data: "terhapus",
            });
          } catch (error) {
            console.log(error);
          }
        },
    }
