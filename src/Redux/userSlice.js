import { createSlice } from "@reduxjs/toolkit";


const initialInfo = {
  userFirstName: "Student",
  userLastName: "",
  userMail: "",
  // loggedIn: false,
  password: "",
  profileImage: "https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg",
};
  
export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialInfo },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(state.value));
    },
    logout: (state) => {
      // state.value = initialInfo;
      localStorage.removeItem('userInfo');
      localStorage.removeItem('localclasses');
    }, 
  }
});
  
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
 