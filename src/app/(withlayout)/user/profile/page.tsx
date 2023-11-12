
"use client"
import { useGetUserQuery } from "@/redux/api/userApi";
import Image from "next/image";
import { useState } from "react";

const UserProfile = () => {
    const query: Record<string, any> = {};
    // const [page, setPage] = useState<number>(1);
    // const [size, setSize] = useState<number>(10);
    // const [sortBy, setSortBy] = useState<string>("");
    // const [sortOrder, setSortOrder] = useState<string>("");
    // const [searchTerm, setSearchTerm] = useState<string>("");
    
    // query["limit"] = size;
    // query["page"] = page;
    // query["sortBy"] = sortBy;
    // query["sortOrder"] = sortOrder;

    const { data, isLoading, isError, isSuccess } = useGetUserQuery(query);
    if(isLoading){
       return  <p>Loading....</p>
    }
    console.log(data?.data[1], 'userdata...per');
    return (
        <div>
            <h1>This is user profile</h1>
            <div>
                <Image className="w-20 h-20 rounded-full" src={data?.data[1]?.userImage} width={200} height={200} alt="profile image" />
            </div>
        </div>
    );
};

export default UserProfile;