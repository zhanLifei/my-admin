
const user = {
    state: {
      token: localStorage.getItem("zhanlifeiAdmin"),
      roles: null,
      isMasterAccount:true,
    },
  
    mutations: {
      SET_TOKEN: (state, token) => {
        state.token = token 
      },
    },
    actions: {
      // 登录
      Login({
        commit
      }, loginForm) {
        return new Promise((resolve, reject) => {
            if (loginForm.username =='zhanlifei123' && loginForm.password =='fei180123'){
                let token = 'avsavavvasdsbbiuvbsvbaiubuibqivbbaoblvizhblid'
                localStorage.setItem('zhanlifeiAdmin', token)
                commit('SET_TOKEN', token)
                resolve()
            } else {
                reject()
            }
        })
      },
    }
  }
  
  export default {
      user
  }