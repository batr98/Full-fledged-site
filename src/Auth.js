const USERS_KEY = "demoUsers"
const CURRENT_USER_KEY = "currentUser"

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback
  } catch {
    return fallback
  }
}

function emitAuthChange() {
  window.dispatchEvent(new Event("auth-change"))
}

export function getUsers() {
  return readJson(USERS_KEY, []) 
}

export function getCurrentUser() {
  return readJson(CURRENT_USER_KEY, null)
}

export function registerUser({ name, email, password }) {
  const normalizedEmail = email.trim().toLowerCase()
  const users = getUsers()

  if (users.some((user) => user.email === normalizedEmail)) {
    throw new Error("Пользователь с такой почтой уже есть")
  }

  const user = {
    id: crypto.randomUUID(),
    name: name.trim(),
    email: normalizedEmail,
    password
  }

  localStorage.setItem(USERS_KEY, JSON.stringify([...users, user]))
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({
    id: user.id,
    name: user.name,
    email: user.email
  }))
  emitAuthChange()

  return user
}

export function loginUser({ email, password }) {
  const normalizedEmail = email.trim().toLowerCase()
  const user = getUsers().find((item) => item.email === normalizedEmail && item.password === password)

  if (!user) {
    throw new Error("Неверная почта или пароль")
  }

  const currentUser = {
    id: user.id,
    name: user.name,
    email: user.email
  }

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser))
  emitAuthChange()

  return currentUser
}

export function logoutUser() {
  localStorage.removeItem(CURRENT_USER_KEY)
  emitAuthChange()
}