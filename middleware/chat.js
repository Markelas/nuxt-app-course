//Используем функцию, которая будет проверять, если пользователь не авторизован, то будет выходить из чата
export default function ({store, redirect}) {
  if (!Object.keys(store.state.user).length) {
    redirect('/?message=noUser')
  }
}
