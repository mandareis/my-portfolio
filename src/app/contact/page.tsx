"use client";
import {
  User,
  At,
  ChatText,
  PaperPlaneTilt,
} from "@phosphor-icons/react/dist/ssr";

import { InputHTMLAttributes, useState } from "react";

type InputLabels = {
  id: number;
  name: string;
  placeholder: string;
  moreInputProps?: InputHTMLAttributes<HTMLInputElement>;
  icon: React.ReactNode;
};

const contactFormOptions: InputLabels[] = [
  {
    id: 1,
    name: "name",
    placeholder: "Jane Doe",
    icon: <User size={24} />,
  },
  {
    id: 2,
    name: "email",
    placeholder: "helloworld@example.com",
    icon: <At size={24} />,
    moreInputProps: {
      type: "email",
    },
  },
  {
    id: 3,
    name: "message",
    placeholder: "e.g. Hello!",
    icon: <ChatText size={24} />,
  },
];

// TODO: Add a thank you message
export default function ContactPage() {
  const [message, setMessage] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await fetch(`${process.env.FORM_ID_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });
  };

  return (
    <div className="mt-4 py-8 mx-auto ">
      <form onSubmit={onSubmit}>
        {contactFormOptions.map((input: InputLabels) => {
          return (
            <div key={input.id} className="flex py-3 space-x-3 pl-4">
              {input.icon}
              {input.id === 3 ? (
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  name={input.name}
                  className="rounded-md placeholder-grey-300 bg-transparent  dark:outline-cherryBlossomPink outline-brunswickGreen overflow-scroll min-h-40 w-full max-h-80"
                  placeholder={input.placeholder}
                  required
                />
              ) : (
                <input
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-md dark:outline-cherryBlossomPink outline-brunswickGreen w-full bg-transparent placeholder-grey-300"
                  name={input.name}
                  placeholder={input.placeholder}
                  required
                  {...input.moreInputProps}
                />
              )}
            </div>
          );
        })}
        <button className="flex justify-center h-10 py-2 hover:outline-double dark:outline-cherryBlossomPink outline-cherryBlossomPink rounded-md mx-auto w-20 bg-brunswickGreen dark:bg-cherryBlossomPink text-brunswickGreen dark:text-cherryBlossomPink hover:bg-brunswickGreen50 dark:hover:bg-cherryBlossomPink50">
          <PaperPlaneTilt
            cursor={"pointer"}
            size={24}
            className="text-cherryBlossomPink dark:text-brunswickGreen"
            type="submit"
            alt="Submit"
          />
        </button>
      </form>
    </div>
  );
}
