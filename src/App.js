import "./styles.css";
import UserForm from "./UserForm";
import { Provider } from "react-redux";
import store from "./utils/store";
import UserList from "./UserList";
export default function App() {
  return (
    <Provider store={store}>
      <h3 className="text-xl italic underline mb-10">
        User details form(Formik) & Search/Sort in Users list
      </h3>

      <UserForm />
      <hr />
      <UserList />
    </Provider>
  );
}
