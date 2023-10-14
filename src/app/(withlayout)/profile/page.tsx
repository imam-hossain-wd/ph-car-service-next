"use client"
import { getUserInfo} from "@/services/auth.service";

const ProfilePage = () => {
    const {role} = getUserInfo() as any;
    console.log(role, 'user role');
    return (
        <div>
        <h1 className=" font-bold">{role} Profile page</h1>
        </div>
    );
};

export default ProfilePage;