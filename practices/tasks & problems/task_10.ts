// Task 10: Utility Type (Omit) (MEDIUM)

// Concepts: Built-in Utility Types (Omit)

// Scenario: You need to strip sensitive data (like a password) from a user object
// before sending it to the UI.

// interface UserAccount {
// id: number;
// username: string;
// password: string;
// }

// Instructions:---------------------------------
// 01. Create a type PublicUser using the Omit utility.
// 02. Exclude the password field from UserAccount.

// Hint: Omit<UserAccount, "password">.

// Solution :

interface UserAccount {
  id: number;
  username: string;
  password: string;
}

type PublicUserBatDeoa = Omit<UserAccount, "password">;

// optional
type PublicUserRakha = Pick<UserAccount, "id" | "username">;
