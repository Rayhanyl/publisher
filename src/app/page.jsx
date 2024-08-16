"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div style={{ maxWidth: "300px", margin: "auto", padding: "20px" }}>
        <h2>Login</h2>
        <form >
          <div>
            <label>Username</label>
            <input
              type='text'
              value='1'
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type='password'
              value='1'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
    </main>
  );
}
