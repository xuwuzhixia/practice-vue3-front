import $http from "@/utils/service";

export function getAllSysUser(){
    return $http({
        url: "/getAllSysUser",
        method: "get"
    });
};

// import axiosData from "@/utils/service";
//
// export const getAllSysUser=()=>{
//     return axiosData.get('http://localhost:8095/sys_user/getAllSysUser')
// }

// export const login=(data)=>{
//     return axiosData.get('http://localhost:8095/sys_user/getAllSysUser',data)
// }
