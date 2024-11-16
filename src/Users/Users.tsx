import Header, {HeaderProps} from "../Component/Header/Header";
import UsersTable from "./UsersTable";

export default function Users() {
    const headerProps: HeaderProps = {
        actions: [],
        title: 'Users',
        tabs: [
            {
                label: 'Active',
                content: <UsersTable/>,
            },
        ]
    };

    return (
        <Header {...headerProps}/>
    );
}
