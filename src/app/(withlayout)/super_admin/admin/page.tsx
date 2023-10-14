import { Button } from "antd";
import Link from "next/link";

const Admin = () => {
    return (
        <div>
            <h1>Admin page</h1>
            <Link href="/super_admin/admin/create">
                <Button type="primary">Create</Button>
            </Link>
        </div>
    );
};

export default Admin;