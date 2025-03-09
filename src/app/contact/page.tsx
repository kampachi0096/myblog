'use client'

import { useState } from "react";

export default function Contact() {
  /*フォーム入力の管理*/
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); //ページリロードの防止
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      //APIへリクエストを送信
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      //APIのレスポンス処理
      const result = await response.json();
      if (response.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError(result.error || "Failed to send email.");
      }
    } catch (err) {
      setError("Something went wrong."); //エラー処理
    } finally {
      setLoading(false);
    }
  };


  return (
    <main>      
      <div className="text-center  items-center">
        <h1 className="text-2xl font-semibold capitalize lg:text-5xl text-left pb-10">
          Contact
        </h1>
        
        <p className="flex -mx-2 justify-center items-center pb-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>

          <span className="mx-2 text-gray-700 truncate w-72">
            Cecilia Chapman 711-2880 Nulla
            St. Mankato Mississippi 96522
          </span>
        </p>

        <p className="flex -mx-2 justify-center items-center pb-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>

          <span className="mx-2 text-gray-700 truncate w-72">(012) 345-6789</span>
        </p>

        <p className="flex -mx-2 justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>

          <span className="mx-2 text-gray-700 truncate w-72">acbde@example.com</span>
        </p>

        {/*form*/}
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full px-8 py-10 mx-auto bg-white rounded-lg shadow-2xl lg:max-w-xl shadow-gray-300/50">
            <h1 className="text-lg font-medium text-gray-700">What do you want to ask</h1>
            <form onSubmit={handleSubmit} className="mt-6">
              {/*名前*/}
              <div className="flex-1">
                <label className="text-left block mb-2 text-sm text-gray-600">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="block w-full px-5 py-3 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/*メールアドレス*/}
              <div className="flex-1 mt-6">
                <label className="text-left block mb-2 text-sm text-gray-600">Email address</label>
                <input
                  type="email"
                  placeholder="your-email@example.com"
                  className="block w-full px-5 py-3 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/*メッセージ*/}
              <div className="w-full mt-6">
                <label className="text-left block mb-2 text-sm text-gray-600">Message</label>
                <textarea
                  className="block w-full h-32 px-5 py-3 text-gray-700 bg-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              {/*送信ボタン*/}
              <button
                type="submit"
                className="w-full px-6 py-3 mt-6 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                disabled={loading}
                >
                {loading ? "Sending..." : "Get in Touch"}
              </button>

              {success && <p className="mt-4 text-green-600">Email sent successfully!</p>}
              {error && <p className="mt-4 text-red-600">{error}</p>}
            </form>
          </div>
        </div>






        {/*古いバージョン*/}
        {/*
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl lg:max-w-xl shadow-gray-300/50">

            <h1 className="text-lg font-medium text-gray-700">What do you want to ask</h1>

            <form className="mt-6">
              
              <div className="flex-1">
                <label className="block mb-2 text-sm text-gray-600">Full Name</label>
                <input type="text" placeholder="Kanchann" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>
              

              <div className="flex-1 mt-6">
                <label className="block mb-2 text-sm text-gray-600">Email address</label>
                <input type="email" placeholder="kanchann@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>

              <div className="w-full mt-6">
                <label className="block mb-2 text-sm text-gray-600">Message</label>
                <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
              </div>

              <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                get in touch
              </button>
            </form>
          </div>
        </div>
        */}
      </div> 
    </main>
  );
}
