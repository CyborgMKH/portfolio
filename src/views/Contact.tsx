import React, { useState, ChangeEvent, FormEvent } from "react";
import { toast, Toaster } from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisabled(true);
    const result = await fetch( import.meta.env.VITE_API_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await result.json();
    // console.log("data",data)
    if (data.success) {
      toast.success(data.message);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsDisabled(false);
    } else {
      toast.error(data.message);
      setIsDisabled(false);
    }
  };

  return (
    <div className="font-gothaml">
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className=" [&>input]:w-3/4  [&>input]:text-black [&>input]:px-2 [&>input]:py-1 [&>input]:outline-none [&>input]:text-sm  [&>input]:font-bold [&>p]:mt-4 "
      >
        <p className="text-sm">Name *</p>
        <input
          type="text"
          name="name"
          required
          className="w-3/4 h-10 px-2 py-1 text-sm text-black bg-gray-200 font-bold outline-none"
          onChange={handleChange}
          value={formData.name}
        />

        <p>Email *</p>
        <input
          type="email"
          name="email"
          required
          className="w-3/4 h-10 px-2 py-1 text-sm text-black bg-gray-200 font-bold outline-none"
          onChange={handleChange}
          value={formData.email}
        />

        <p>Message *</p>
        <textarea
          name="message"
          className="w-3/4 h-24 px-2 py-1 text-sm text-black bg-gray-200 font-bold outline-none"
          onChange={handleChange}
          value={formData.message}
        ></textarea>
        <button
          className={`block mt-4 bg-gray-500 text-white font-bold text-sm px-4 py-2 rounded-md ${
            isDisabled
              ? "bg-gradient-to-r from-gray-500 via-black to-gray-500 cursor-not-allowed"
              : "bg-blue hover:bg-green-500 hover:text-white"
          }`}
          disabled={isDisabled}
        >
          {isDisabled ? "Sending.." : "Send"}
        </button>
      </form>
      <p className="text-sm mt-8 -mb-8">
        if email not sent ping me at
        <br />
        hi(at)sumanmukhiya(dot)com(dot)np
      </p>
    </div>
  );
};

export default Contact;
