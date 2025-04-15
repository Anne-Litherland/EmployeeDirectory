import express from "express";
import employees from "#db/employees";

const app = express();

export default app;

app.route("/").get((request, response) => {
  response.send("Hello employees!");
});

app.route("/employees").get((request, response) => {
  response.send(employees);
});

app.route("/employees/random").get((request, response) => {
  const randomId = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomId];
  response.send(randomEmployee);
});

app.route("/employees/:id").get((request, response) => {
  const { id } = request.params;

  const employee = employees.find((emp) => emp.id === Number(id));
  if (!employee) {
    return response.status(404).send("There are no employees with this id.");
  }
  response.send(employee);
});
