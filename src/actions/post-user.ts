import api from "~/utils/api"

export const postAddUser = async ({user}: any) => {
    api.post('/user', JSON.stringify({ user: user}))
  }
