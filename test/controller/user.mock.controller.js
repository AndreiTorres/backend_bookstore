export async function getAllUsers(req, res) {
  const users = [
    {
      id: 1,
      fullName: "Manuel Ku Lozano",
      email: "manuel@hotmail.com",
      password: "123test",
    },
    {
      id: 2,
      fullName: "Marisol Pillar",
      email: "marysol@hotmail.com",
      password: "123test",
    },
  ];
  return res.status(200).json({ data: users });
}

export async function signUp(req, res) {
  const message = "Sign up successfully";
  
  const user = {
    id: 1,
    fullName: "Jose Ruiz",
    email: "jose@example.com",
    password: "passwordtest1",
  };
  return res.status(201).json({ message: message, data: user });
}


export async function login(req, res) {
  const message = "Login successfully";

  const user = "Jesus";

  const token = "token123";

  return res.status(201).json({message, userName: user, token});
}
