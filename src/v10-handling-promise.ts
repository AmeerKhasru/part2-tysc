// 1. API theke je data ashbe, tar structure-er jonno ekta Interface toiri kori
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

// 2. Async function ja ekta Promise<User | null> return korbe
async function fetchUserData(userId: number): Promise<User | null> {
  try {
    console.log("Data fetch hochhe...");

    // fetch API use kore server theke data ana
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    // Jodi response successful (status 200-299) na hoy, tobe error throw kora
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // JSON data parse kora ebong User interface-er sathe cast kora
    const data: User = await response.json();
    
    return data;

  } catch (error) {
    // Network ba kono error ghotle ekhane catch hobe
    console.error("API call korte giye error esheche:", error);
    return null;
  }
}

// 3. Function-ti call korar process (IIFE ba normal async function er bhetore)
async function run() {
  const user = await fetchUserData(1);

  if (user) {
    console.log("--- User Details Found ---");
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`Phone: ${user.phone}`);
  } else {
    console.log("Kono user data pawa jayni.");
  }
}

run();