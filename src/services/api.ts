import axios from "axios";

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

// api.interceptors.request.use(async (config) => {
//   if (config?.headers && session?.user?.jwtServer) {
//     config.headers.Authorization = `Bearer ${session?.user?.jwtServer}`;
//   }
//   if (config?.headers && !config.headers['Content-Type']) {
//     config.headers['Content-Type'] = 'application/json;charset=UTF-8';
//   }

//   return config;
// });

export { api };
