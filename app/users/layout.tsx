import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import UserList from "./compoments/UserList";

export default async function UesrsLayout({
     children
}: {
  children: React.ReactNode;  
}) {
    const users = await getUsers();
    return (
        <Sidebar>
        <div className="h-full">
          <UserList items={users}/>
        {children}
        </div>
        </Sidebar>
    )
}
