
export interface User {
  id: number;
  username: string;
  password: string;
  role: 'admin' | 'employee' | 'manager';
}

export const users: User[] = [
  {
    id: 1,
    username: 'admin',
    password: 'admin123',
    role: 'admin',
  },
];

export function validateUser(username: string, password: string): User | null {
  console.log('Login attempt:', { username, password });

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    console.log('✅ Valid credentials for:', username);
    return user;
  } else {
    console.log('❌ Invalid credentials for:', username);
    return null;
  }
}